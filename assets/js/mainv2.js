
"use strict";

/*! main.js | Friendkit | © Css Ninja. 2019-2020 */

/* ==========================================================================
Main js file
========================================================================== */
var isSharing = false;
$(document).ready(function () {
    "use strict"; //Code highlight init

    initNavbar(); //Mobile menu toggle

    initNavDropdowns(); //Navbar Cart

    initDropdowns(); //Sidebars

    initModals(); //Subnavbar search

    initMask();

    registerEvents();

    RegisterSearch();

    initObserverFancybox();

    initObserverNoScroll();
});


const initObserverFancybox = function () {
    let showingFancybox = false;

    return () => {
        const targetNode = document.getElementsByTagName("body")[0];
        const documentBodyObserver = new MutationObserver(() => {
            const isOpen = targetNode.classList.contains('fancybox-active');

            if (isOpen) {
                showingFancybox = true;
                $('html').addClass('showing-modal')
                const videoElement = document.getElementsByClassName('fancybox-video')[0];

                if (videoElement) {
                    videoElement.play();
                }

            } else if (showingFancybox) {
                showingFancybox = false;
                window.clickedPostDate = null;
                $("html").removeClass('showing-modal')
            }

            const fancyboxInstance = $.fancybox?.getInstance().$refs;
            if (fancyboxInstance) fancyboxInstance.container[0].querySelector(".fancybox-custom-infobar").textContent = window.clickedPostDate;
        });
        documentBodyObserver.observe(targetNode, { attributes: true });
    };
}()

function initMask() {
    $(".cpf").mask("999.999.999-99");
    $(".celular").mask("(99) 99999-9999");
    $('.money').mask("#.##0,00", { reverse: true });
    $(".cep").mask("99999-999");
    $(".tel").mask("(99) 9999-99999");
    $(".soletrasenumeros").mask('Z', { translation: { 'Z': { pattern: /[0-9a-zA-Z]/, recursive: true } } });
    $(".sonumeros").mask('Z', { translation: { 'Z': { pattern: /[0-9]/, recursive: true } } });
    $('.email').mask("A", { translation: { "A": { pattern: /[\w@\-.+]/, recursive: true } } });
    $(".cartaoCredito").mask("9999 9999 9999 9999");
    $(".validadeCartao").mask("99/99");
    $(".porcentagem").mask("##%", { reverse: true });
}


async function ShareClick(self, event) {
    try {
        event.stopPropagation();

        if (isSharing) return;

        isSharing = true;
        
        if (navigator.share) {
            await navigator.share({
                title: $(self).data("titulo"),
                url: $(self).data("url"),
                text: $(self).data("descricao")
            })
        }
        
    } finally {
        isSharing = false;
    }
}

function AlertaErro(titulo, mensagem, elemento, reseta = true, elementoMensagem = $("#mensagem")) {
    swal({
        title: titulo,
        text: mensagem,
        icon: "warning"
    }).then(function () {
        if (elemento == "undefined")
            return;

        $(elemento).focus();
        $(elemento).parent(".control").parent(".field-group").addClass("is-danger");

        if (reseta)
            $(elemento).val('');
    });

    $(elementoMensagem).val(titulo);
}

function ConsultaCep(cep, retMethod, elemento) {
    var cepValido = true;
    ConsultaCepSimples(cep, function (data) {
        if (data != null) {
            if (data.logradouro != "") {
                $("#Endereco").val(data.logradouro);
                $("#Bairro").val(data.bairro);
                $("#Cidade").val(data.localidade);
                $("#IdEstado").val($("#IdEstado option:contains('(" + data.uf + ")')").val());
                $(elemento).parent(".control").parent(".field-group").removeClass("is-danger");
            }
            retMethod();
        }
        else {
            AlertaErro("CEP Inválido", "Por favor, digite um CEP válido", elemento);
            cepValido = false;
        }
    });

    return cepValido;
}

function ConsultaCepSimples(cep, retMethod) {
    var cepValido = true;

    $.ajax({
        url: "https://viacep.com.br/ws/" + cep.replace("-", "") + "/json/",
        async: true,
        type: "GET",
        success: function (data) {
            if (!data.erro) {
                retMethod(data);
            }
            else {
                retMethod(null);
            }
        },
        error: function (data) {
            retMethod(null);
        }
    });

    return cepValido;
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function TestaCPF(strCPF) {
    if (strCPF === "")
        return false;

    strCPF = strCPF.replace(/[^0-9]/gi, '');
    var Soma;
    var Resto;
    var i;
    Soma = 0;
    if (strCPF === "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function retornaIdade(nascimento) {
    const hoje = new Date();
    const dataNascimento = new Date(nascimento);
    const diferencaAnos = hoje.getFullYear() - dataNascimento.getUTCFullYear();
    const diferencaMeses = hoje.getMonth() - dataNascimento.getUTCMonth();
    const diferencaDias = hoje.getDate() - dataNascimento.getUTCDate();

    if (diferencaMeses < 0 || (diferencaMeses === 0 && diferencaDias < 0)) {
        return diferencaAnos - 1;
    }

    return diferencaAnos;
}
  
function ClickFavoritar() {
    findElement(".click-favoritar").unbind("click");

    findElement(".click-favoritar").click(function () {
        var islock = false;
        
        var dataValue = ($(this).attr("data-value") == "0") ? "1" : "0";
        var srcImg = (dataValue == "0") ? "/assets/img/icons/feed/Vectormark.svg" : "/assets/img/icons/feed/Vectormarkbg.svg";
        var postId = $(this).attr("data-id");
        
        var imgMenu = findElement("#imgMenuFavorit" + postId);
        var imgPost = findElement("#imgFavorit" + postId);

        var textMenuFavorit = findElement("#textFavorit" + postId);
        var textFavorit = (dataValue == "0") ? $i18nShared.post.addToFavorites : $i18nShared.post.removeFromFavorites;
        var srcMenuImg = (dataValue == "0") ? "/assets/img/icons/feed/Vectoraddfavorit.svg" : "/assets/img/icons/feed/Vectorremovefavorit.svg";


        imgPost.attr("src", srcImg);
        imgMenu.attr("src", srcMenuImg);
        textMenuFavorit.html(textFavorit);
        findElement("#favorit" + postId).attr("data-value", dataValue);
        findElement("#favoritMenu" + postId).attr("data-value", dataValue);

        islock = $(this).attr("data-clicked") == "1";
        if (islock) {
            return false;
        }
        findElement("#favorit" + postId).attr("data-clicked", "1");
        findElement("#favoritMenu" + postId).attr("data-clicked", "1"); 

        var token = $("*").filter(function () {
            return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
        })[0]?.token;

        const isFavorite = dataValue ? parseInt(dataValue) == 1 : false;

        const url = isFavorite ? `${window.timelineActionApi}/post/${postId}/favorite` : `${window.timelineActionApi}/post/${postId}/unfavorite`;

        $.ajax({
            url: url,
            data: { PostId: postId, Valor: dataValue },
            cache: false,
            async: true,
            type: "POST",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            success: function (data) {
                //if (data.OK) {
                    imgPost.attr("src", srcImg);
                    imgMenu.attr("src", srcMenuImg);
                    textMenuFavorit.html(textFavorit);
                    findElement("#favorit" + postId).attr("data-value", dataValue);
                    findElement("#favoritMenu" + postId).attr("data-value", dataValue);

                    findElement("#favorit" + postId).attr("data-clicked", "0"); 
                    findElement("#favoritMenu" + postId).attr("data-clicked", "0");  
                    return true;
                //}

                //findElement("#favorit" + postId).attr("data-clicked", "0");
                //findElement("#favoritMenu" + postId).attr("data-clicked", "0");  
                //return false;
            },
            error: function (reponse) {
                findElement("#favorit" + postId).attr("data-clicked", "0");
                findElement("#favoritMenu" + postId).attr("data-clicked", "0");  
            }
        });
    });
}

var registerEvents = function () {

    ClickFavoritar();
    OcultarPost();

    $('span #clear-search').on('click', function () {
        $(this).siblings('input').val('');
    });

    $(".cpf").change(function () {
        if (!TestaCPF($(this).val())) {
            $(this).val("");
            AlertaErro("CPF Inválido", "Por favor, digite o CPF corretamente", this);
            $(this).parent(".control").parent(".field-group").removeClass("is-danger");
        }
    });

    $(".email").change(function () {
        if (!isEmail($(this).val())) {
            $(this).val("");
            AlertaErro("E-MAIL Inválido", "Por favor, digite um e-mail válido", this);
            $(this).parent(".control").parent(".field-group").removeClass("is-danger");
        }
    });

    $(".shareProfile").click(function (event) {
        ShareClick(this, event)
    });
}



function alert(msg, callback) {
    swal({
        title: $i18nShared.notice,
        text: msg,
        icon: "info",
        buttons: {
            confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "",
                closeModal: true
            }
        }
    }).then(callback);
}

function CopyText(url, msgAlert = '') {

    let textarea = null;
    let result;

    try {
        textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', 'true');

        textarea.setAttribute('contenteditable', 'true');
        textarea.style.position = 'fixed'; // prevent scroll  from jumping to the bottom when focus is set.
        textarea.value = url;

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        const range = document.createRange();
        range.selectNodeContents(textarea);

        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);

        textarea.setSelectionRange(0, textarea.value.length);
        result = document.execCommand('copy');
        document.body.removeChild(textarea);
    } catch (err) {
        result = null;
    }

    // manual copy fallback using prompt
    if (!result) {
        const isMac = navigator.platform.toUpperCase().indexOf('Mac') >= 0;
        const copyHotkey = isMac ? '⌘C' : 'CTRL+C';
        result = prompt(`Press ${copyHotkey}`, url); // eslint-disable-line no-alert
        return false;
    }
    if (msgAlert != '') {
        const messageTmpl = document.createElement("div");
        messageTmpl.classList.add("alert", "alert-success", "fixed-top");
        messageTmpl.id = "alert-msg";
        messageTmpl.innerHTML = msgAlert;
        $('body').append(messageTmpl);
        const el = $('#alert-msg');
        el.addClass('show');
        window.setTimeout(() => {
            el.removeClass('show');
        }, 500);
        window.setTimeout(() => el.remove(), 1500)
    }
        
}

function topSearchField() {
    var term = $("#termSearchHeader").val()
    window.location.href = term ? "/search?term=" + term : "/search";
}

function RegisterSearch() {
    $("#termSearchHeader").on("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            topSearchField();
        }
    });
}

function OcultarPost() {
    findElement(".click-ocultar").unbind("click");
    findElement(".click-ocultar").click(function () {

        const wc = document.getElementById('privacy-web-generic-modal');
        const postId = $(this).attr('data-id')
        wc.setAttribute('route', 'hide')

        const dataPrivacy = JSON.stringify({
            endpoint: `${window.timelineActionApi}/post/${postId}/hide`
        })

        wc.setAttribute('data-privacy', dataPrivacy)
        wc.setAttribute('show-dialog', true)
    })
}

function DesocultarPost() {
    findElement(".click-desocultar").unbind("click");
    findElement(".click-desocultar").click(function () {
        const postId = $(this).attr('data-id')
        const wc = document.getElementById('privacy-web-generic-modal');
        wc.setAttribute('route', 'unhide')

        const dataPrivacy = JSON.stringify({
            endpoint: `${window.timelineActionApi}/post/${postId}/unhide`
        })

        wc.setAttribute('data-privacy', dataPrivacy)
        wc.setAttribute('show-dialog', true)
    })
}

function initObserverNoScroll() {
    const html = document.documentElement;
    const body = document.body;

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.attributeName === 'class') {
                const hasPopupHidden = body.classList.contains('el-popup-parent--hidden');

                if (hasPopupHidden) {
                    html.style.overflow = 'hidden';
                    body.style.overflow = 'hidden';
                } else {
                    html.style.overflow = '';
                    body.style.overflow = '';
                }
            }
        }
    });

    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
}