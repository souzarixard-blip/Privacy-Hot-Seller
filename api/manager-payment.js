// api/manager-payment.js
export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const API_TOKEN = 'bsC2taVT0mD49xdgVCJuXrGGu9OnSOXfIdi68bVtJMI1RN2TqUYyNaOkgUm8';
  const OFFER_HASH = 'rv6o1obb5s';
  const PRODUCT_HASH = 'iymwwuffk4';
  const PRODUCT_TITLE = 'Finalize sua Compra';
  const PIX_EXPIRATION_MINUTES = 5;

  // 1. GET Request: Check Status
  if (req.method === 'GET') {
    const { action, hash } = req.query;
    if (action === 'check_status' || hash) {
      if (!hash) {
        return res.status(400).json({ error: 'Hash não informado' });
      }
      
      try {
        const statusUrl = `https://api.paradisepagbr.com/api/public/v1/transactions/${encodeURIComponent(hash)}?api_token=${API_TOKEN}`;
        const response = await fetch(statusUrl, {
          headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        
        if (response.ok && data.payment_status) {
          return res.status(200).json({ payment_status: data.payment_status });
        } else {
          return res.status(response.status || 500).json(data || { error: 'Resposta da API inválida' });
        }
      } catch (err) {
        return res.status(500).json({ error: 'Erro ao consultar status: ' + err.message });
      }
    }
    return res.status(400).json({ error: 'Ação inválida' });
  }

  // 2. POST Request: Create transaction
  if (req.method === 'POST') {
    try {
      const data = req.body || {};
      let customer_data = {};
      let utms = {};

      if (data.customer) {
        // Call from root index.html
        customer_data = data.customer;
        utms = data.utms || {};
      } else {
        // Call from back/index.html
        customer_data = {
          name: data.name,
          email: data.email,
          phone_number: data.phone,
          document: data.cpf,
          amount: data.amount
        };
        utms = data.utm || {};
      }

      // Direct PIX (simulate PHP behavior)
      const is_direct_pix = true;
      let final_customer_data = {};

      if (is_direct_pix) {
        final_customer_data = {}; // Start fresh for direct PIX as in PHP
      } else {
        final_customer_data = { ...customer_data };
      }

      const cpfs = ['42879052882', '07435993492', '93509642791', '73269352468', '35583648805', '59535423720', '77949412453', '13478710634', '09669560950', '03270618638'];
      const firstNames = ['João', 'Marcos', 'Pedro', 'Lucas', 'Mateus', 'Gabriel', 'Daniel', 'Bruno', 'Maria', 'Ana', 'Juliana', 'Camila', 'Beatriz', 'Larissa', 'Sofia', 'Laura'];
      const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho'];
      const ddds = ['11', '21', '31', '41', '51', '61', '71', '81', '85', '92', '27', '48'];
      const emailProviders = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com.br', 'uol.com.br', 'terra.com.br'];

      let generatedName = null;

      if (!final_customer_data.name) {
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        generatedName = `${randomFirstName} ${randomLastName}`;
        final_customer_data.name = generatedName;
      }

      if (!final_customer_data.email) {
        const nameForEmail = generatedName || final_customer_data.name || `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
        const nameParts = nameForEmail.split(' ');
        
        const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, '');
        
        const emailUserParts = [];
        if (nameParts[0]) {
          const part1 = normalize(nameParts[0]);
          if (part1.length > 0) emailUserParts.push(part1);
        }
        if (nameParts[1]) {
          const part2 = normalize(nameParts[1]);
          if (part2.length > 0) emailUserParts.push(part2);
        }
        if (emailUserParts.length === 0) {
          emailUserParts.push('cliente');
        }
        const emailUser = emailUserParts.join('.') + Math.floor(Math.random() * 900 + 100);
        final_customer_data.email = `${emailUser}@${emailProviders[Math.floor(Math.random() * emailProviders.length)]}`;
      }

      if (!final_customer_data.phone_number) {
        final_customer_data.phone_number = ddds[Math.floor(Math.random() * ddds.length)] + '9' + Math.floor(Math.random() * 90000000 + 10000000);
      }

      if (!final_customer_data.document) {
        final_customer_data.document = cpfs[Math.floor(Math.random() * cpfs.length)];
      }

      // Address details for digital products
      final_customer_data.street_name = final_customer_data.street_name || 'Rua do Produto Digital';
      final_customer_data.number = final_customer_data.number || '0';
      final_customer_data.complement = final_customer_data.complement || 'N/A';
      final_customer_data.neighborhood = final_customer_data.neighborhood || 'Internet';
      final_customer_data.city = final_customer_data.city || 'Brasil';
      final_customer_data.state = final_customer_data.state || 'BR';
      if (!final_customer_data.zip_code) {
        final_customer_data.zip_code = '00000000';
      }

      // Set amount (use submitted value, default to 1490 if empty)
      const amountVal = customer_data.amount || data.amount || 1490;
      final_customer_data.amount = amountVal;

      const cart_items = [{
        product_hash: PRODUCT_HASH,
        title: PRODUCT_TITLE,
        price: final_customer_data.amount,
        quantity: 1,
        operation_type: 1,
        tangible: false
      }];

      const payload = {
        amount: Math.round(final_customer_data.amount),
        offer_hash: OFFER_HASH,
        payment_method: "pix",
        customer: final_customer_data,
        cart: cart_items,
        installments: 1,
        tracking: utms
      };

      if (PIX_EXPIRATION_MINUTES > 0) {
        payload.pix_expires_in = PIX_EXPIRATION_MINUTES * 60;
      }

      const apiUrl = `https://api.paradisepagbr.com/api/public/v1/transactions?api_token=${API_TOKEN}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();
      return res.status(response.status).json(resData);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao gerar transação: ' + err.message });
    }
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
