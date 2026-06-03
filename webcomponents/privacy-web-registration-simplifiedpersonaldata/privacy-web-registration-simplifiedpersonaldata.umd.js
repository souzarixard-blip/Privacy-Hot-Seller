(function(r, A) {
    typeof exports == "object" && typeof module < "u" ? A(require("vue"), require("moment"), require("axios"), require("vue-i18n"), require("element-plus"), require("lodash"), require("element-plus/dist/locale/pt-br"), require("element-plus/dist/locale/es"), require("@fortawesome/fontawesome-svg-core")) : typeof define == "function" && define.amd ? define(["vue", "moment", "axios", "vue-i18n", "element-plus", "lodash", "element-plus/dist/locale/pt-br", "element-plus/dist/locale/es", "@fortawesome/fontawesome-svg-core"], A) : (r = typeof globalThis < "u" ? globalThis : r || self,
    A(r.Vue, r.moment, r.axios, r.VueI18n, r.ElementPlus, r._, r.ElementPlusLocalePtBr, r.ElementPlusLocaleEs, r["fontawesome-svg-core"]))
}
)(this, function(r, A, qe, We, D, he, Ye, Je, P) {
    "use strict";
    function Ke(e) {
        const t = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (e) {
            for (const n in e)
                if (n !== "default") {
                    const o = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, o.get ? o : {
                        enumerable: !0,
                        get: () => e[n]
                    })
                }
        }
        return t.default = e,
        Object.freeze(t)
    }
    const X = Ke(We)
      , ye = {
        name: "privacy.web.registration.simplifiedpersonaldata",
        version: "1.0.0",
        private: !0,
        scripts: {
            dev: "vite --host",
            build: "vite build --mode=production",
            "build-watch": "vite build --mode=production -w",
            "http-server": "http-server . -c 0 --cors *"
        },
        dependencies: {
            "@element-plus/icons-vue": "2.1.0",
            "@fortawesome/fontawesome-svg-core": "6.4.0",
            "@fortawesome/free-brands-svg-icons": "6.5.1",
            "@fortawesome/pro-light-svg-icons": "6.4.0",
            "@fortawesome/pro-solid-svg-icons": "6.5.1",
            "@fortawesome/pro-thin-svg-icons": "6.5.1",
            "@fortawesome/vue-fontawesome": "3.0.3",
            axios: "1.3.3",
            bootstrap: "5.3.2",
            "element-plus": "2.2.30",
            lodash: "4.17.21",
            maska: "2.1.9",
            moment: "2.29.4",
            pinia: "2.0.30",
            "url-join": "5.0.0",
            "vue-i18n": "9.5.0",
            "vue-jwt-decode": "0.1.0"
        },
        devDependencies: {
            "@intlify/unplugin-vue-i18n": "1.4.0",
            "@rushstack/eslint-patch": "1.2.0",
            "@vitejs/plugin-basic-ssl": "^1.0.2",
            "@vitejs/plugin-vue": "4.0.0",
            "@vue/eslint-config-prettier": "7.0.0",
            "core-js": "3.29.0",
            eslint: "8.34.0",
            "eslint-plugin-vue": "9.9.0",
            prettier: "2.8.4",
            sass: "1.59.3",
            "unplugin-auto-import": "0.15.1",
            "unplugin-element-plus": "0.7.0",
            "unplugin-vue-components": "0.24.1",
            vite: "4.1.1",
            vue: "3.3.0"
        }
    }.name.replace(/\./g, "-")
      , Ge = ({component: e=null, plugins: t=[]}={}) => r.defineCustomElement({
        emits: e.emits,
        computed: e.computed,
        props: e.props,
        styles: e.styles,
        setup(n) {
            const o = r.createApp();
            o.component("app-root", e),
            t.forEach(l => o.use(l));
            const a = r.getCurrentInstance()
              , s = Array.isArray(e.emits) ? e.emits : Object.keys(e.emits)
              , i = Object.fromEntries((s || []).map(l => [`on${l[0].toUpperCase()}${l.slice(1)}`, d => a.emit(l, d)]));
            return Object.assign(a.appContext, o._context),
            Object.assign(a.provides, o._context.provides),
            () => r.h(e, {
                ...n,
                ...i
            })
        }
    });
    A.locale("pt-br");
    function Ze(e) {
        A.locale(e)
    }
    const Xe = {
        loading: {
            messageNotFound: e => {
                const {normalize: t} = e;
                return t(["Sem resultados para sua pesquisa."])
            }
        },
        base: {
            btnSend: e => {
                const {normalize: t} = e;
                return t(["Confirmar"])
            }
            ,
            btnCancel: e => {
                const {normalize: t} = e;
                return t(["Cancelar"])
            }
            ,
            btnSave: e => {
                const {normalize: t} = e;
                return t(["Salvar"])
            }
            ,
            btnBack: e => {
                const {normalize: t} = e;
                return t(["Voltar"])
            }
            ,
            btnMyLink: e => {
                const {normalize: t} = e;
                return t(["Copiar meu link Privacy"])
            }
            ,
            defaultErrorMsg: e => {
                const {normalize: t} = e;
                return t(["Desculpe, ocorreu um erro ao processar sua solicitação."])
            }
        },
        personalData: {
            title: e => {
                const {normalize: t} = e;
                return t(["Dados Pessoais"])
            }
            ,
            nickName: e => {
                const {normalize: t} = e;
                return t(["Apelido"])
            }
            ,
            email: e => {
                const {normalize: t} = e;
                return t(["E-mail"])
            }
            ,
            fullName: e => {
                const {normalize: t} = e;
                return t(["Nome Completo"])
            }
            ,
            documentId: e => {
                const {normalize: t} = e;
                return t(["Documento de Identificação"])
            }
            ,
            documentCPF: e => {
                const {normalize: t} = e;
                return t(["CPF"])
            }
            ,
            birthDate: e => {
                const {normalize: t} = e;
                return t(["Data de Nascimento"])
            }
            ,
            phoneNumber: e => {
                const {normalize: t} = e;
                return t(["Celular"])
            }
            ,
            password: e => {
                const {normalize: t} = e;
                return t(["Senha"])
            }
            ,
            documentType: e => {
                const {normalize: t} = e;
                return t(["Tipo de Documento"])
            }
        },
        personalAddress: {
            country: e => {
                const {normalize: t} = e;
                return t(["País"])
            }
        },
        validation: {
            requiredField: e => {
                const {normalize: t} = e;
                return t(["Campo obrigatório"])
            }
            ,
            invalidCpf: e => {
                const {normalize: t} = e;
                return t(["CPF inválido"])
            }
            ,
            invalidAge: e => {
                const {normalize: t} = e;
                return t(["Precisa ser maior de 18 anos"])
            }
            ,
            invalidDate: e => {
                const {normalize: t} = e;
                return t(["Data inválida"])
            }
            ,
            invalidEmail: e => {
                const {normalize: t} = e;
                return t(["E-mail inválido"])
            }
            ,
            invalidCpfDate: e => {
                const {normalize: t} = e;
                return t(["A data de nascimento informada não corresponde ao CPF"])
            }
            ,
            invalidCpfName: e => {
                const {normalize: t} = e;
                return t(["O nome informado não corresponde com o CPF"])
            }
            ,
            invalidCpfInUse: e => {
                const {normalize: t} = e;
                return t(["O CPF fornecido já está cadastrado. Para recuperar a senha ACTION_MODAL"])
            }
            ,
            invalidDocumentInUse: e => {
                const {normalize: t} = e;
                return t(["O documento fornecido já está cadastrado."])
            }
            ,
            invalidEmailInUse: e => {
                const {normalize: t} = e;
                return t(["O email fornecido já está cadastrado"])
            }
            ,
            invalidPrice: e => {
                const {normalize: t, interpolate: n, named: o} = e;
                return t(["O valor mínimo da assinatura é R$ ", n(o("MIN_VALUE")), " e o valor máximo é R$ ", n(o("MAX_VALUE"))])
            }
            ,
            invalidZipCode: e => {
                const {normalize: t} = e;
                return t(["CEP inválido"])
            }
            ,
            emptyDocument: e => {
                const {normalize: t} = e;
                return t(["Documento inválido"])
            }
        },
        information: {
            password: e => {
                const {normalize: t} = e;
                return t(["Sua senha deve conter no mínimo 8 caracteres entre letras(minúscula/maiúscula), números e caracteres especiais"])
            }
            ,
            recoveryPassword: e => {
                const {normalize: t} = e;
                return t(["Para continuar a recuperação de senha, <br> confirme que este é seu e-mail."])
            }
        },
        alertText: {
            success: e => {
                const {normalize: t} = e;
                return t(["Dados salvos com sucesso"])
            }
            ,
            error: e => {
                const {normalize: t} = e;
                return t(["Não foi possível salvar os dados"])
            }
            ,
            copyLink: e => {
                const {normalize: t} = e;
                return t(["Link Copiado"])
            }
            ,
            sentEmail: e => {
                const {normalize: t} = e;
                return t(["E-mail enviado com sucesso"])
            }
            ,
            errorEmail: e => {
                const {normalize: t} = e;
                return t(["Não foi possível enviar o e-mail"])
            }
        },
        title: {
            personalConfigPerfil: e => {
                const {normalize: t} = e;
                return t(["Confirme suas informações"])
            }
            ,
            recoveryPassword: e => {
                const {normalize: t} = e;
                return t(["Recuperar senha"])
            }
        },
        action: {
            clickHere: e => {
                const {normalize: t} = e;
                return t(["clique aqui"])
            }
        }
    }
      , Qe = {
        loading: {
            messageNotFound: e => {
                const {normalize: t} = e;
                return t(["No results for your search."])
            }
        },
        base: {
            btnSend: e => {
                const {normalize: t} = e;
                return t(["Confirm"])
            }
            ,
            btnCancel: e => {
                const {normalize: t} = e;
                return t(["Cancel"])
            }
            ,
            btnSave: e => {
                const {normalize: t} = e;
                return t(["Save"])
            }
            ,
            btnBack: e => {
                const {normalize: t} = e;
                return t(["Back"])
            }
            ,
            btnMyLink: e => {
                const {normalize: t} = e;
                return t(["Copy my link Privacy"])
            }
            ,
            defaultErrorMsg: e => {
                const {normalize: t} = e;
                return t(["Sorry, there was an error processing your request."])
            }
        },
        personalData: {
            title: e => {
                const {normalize: t} = e;
                return t(["Personal Data"])
            }
            ,
            nickName: e => {
                const {normalize: t} = e;
                return t(["Nick name"])
            }
            ,
            email: e => {
                const {normalize: t} = e;
                return t(["E-mail"])
            }
            ,
            fullName: e => {
                const {normalize: t} = e;
                return t(["Full Name"])
            }
            ,
            documentId: e => {
                const {normalize: t} = e;
                return t(["Identification Document"])
            }
            ,
            documentCPF: e => {
                const {normalize: t} = e;
                return t(["CPF"])
            }
            ,
            birthDate: e => {
                const {normalize: t} = e;
                return t(["Date of Birth"])
            }
            ,
            phoneNumber: e => {
                const {normalize: t} = e;
                return t(["Cell Phone"])
            }
            ,
            password: e => {
                const {normalize: t} = e;
                return t(["Password"])
            }
            ,
            documentType: e => {
                const {normalize: t} = e;
                return t(["Document Type"])
            }
        },
        personalAddress: {
            country: e => {
                const {normalize: t} = e;
                return t(["Country"])
            }
        },
        validation: {
            requiredField: e => {
                const {normalize: t} = e;
                return t(["Required Field"])
            }
            ,
            invalidCpf: e => {
                const {normalize: t} = e;
                return t(["Invalid CPF"])
            }
            ,
            invalidAge: e => {
                const {normalize: t} = e;
                return t(["Must be over 18 years old"])
            }
            ,
            invalidDate: e => {
                const {normalize: t} = e;
                return t(["invalid date"])
            }
            ,
            invalidEmail: e => {
                const {normalize: t} = e;
                return t(["Invalid Email"])
            }
            ,
            invalidCpfDate: e => {
                const {normalize: t} = e;
                return t(["The date of birth provided does not correspond to the CPF"])
            }
            ,
            invalidCpfName: e => {
                const {normalize: t} = e;
                return t(["The name provided does not correspond to the CPF"])
            }
            ,
            invalidCpfInUse: e => {
                const {normalize: t} = e;
                return t(["The CPF provided is already registered. To recover the password ACTION_MODAL"])
            }
            ,
            invalidDocumentInUse: e => {
                const {normalize: t} = e;
                return t(["The document provided is already registered."])
            }
            ,
            invalidEmailInUse: e => {
                const {normalize: t} = e;
                return t(["The email provided is already registered"])
            }
            ,
            invalidPrice: e => {
                const {normalize: t, interpolate: n, named: o} = e;
                return t(["The minimum subscription value is R$ ", n(o("MIN_VALUE")), " and the maximum subscription value is R$ ", n(o("MAX_VALUE"))])
            }
            ,
            invalidZipCode: e => {
                const {normalize: t} = e;
                return t(["Invalid ZIP code"])
            }
            ,
            emptyDocument: e => {
                const {normalize: t} = e;
                return t(["Invalid Document"])
            }
        },
        information: {
            password: e => {
                const {normalize: t} = e;
                return t(["Your password must contain at least 8 characters including letters (lowercase/uppercase), numbers and special characters"])
            }
            ,
            recoveryPassword: e => {
                const {normalize: t} = e;
                return t(["To continue the password recovery process, <br> please confirm that this is your email."])
            }
        },
        alertText: {
            success: e => {
                const {normalize: t} = e;
                return t(["Data saved successfully"])
            }
            ,
            error: e => {
                const {normalize: t} = e;
                return t(["Unable to save data"])
            }
            ,
            copyLink: e => {
                const {normalize: t} = e;
                return t(["Copy Link"])
            }
            ,
            sentEmail: e => {
                const {normalize: t} = e;
                return t(["Email successfully sent"])
            }
            ,
            errorEmail: e => {
                const {normalize: t} = e;
                return t(["Unable to send the email"])
            }
        },
        title: {
            personalConfigPerfil: e => {
                const {normalize: t} = e;
                return t(["Confirm your information"])
            }
            ,
            recoveryPassword: e => {
                const {normalize: t} = e;
                return t(["Recover Password"])
            }
        },
        action: {
            clickHere: e => {
                const {normalize: t} = e;
                return t(["click here"])
            }
        }
    }
      , et = {
        loading: {
            messageNotFound: e => {
                const {normalize: t} = e;
                return t(["No hay resultados para su búsqueda."])
            }
        },
        base: {
            btnSend: e => {
                const {normalize: t} = e;
                return t(["Confirmar"])
            }
            ,
            btnCancel: e => {
                const {normalize: t} = e;
                return t(["Cancelar"])
            }
            ,
            btnSave: e => {
                const {normalize: t} = e;
                return t(["Guardar"])
            }
            ,
            btnBack: e => {
                const {normalize: t} = e;
                return t(["Volver"])
            }
            ,
            btnMyLink: e => {
                const {normalize: t} = e;
                return t(["Copiar mi enlace Privacy"])
            }
            ,
            defaultErrorMsg: e => {
                const {normalize: t} = e;
                return t(["Lo sentimos, hubo un error al procesar su solicitud"])
            }
        },
        personalData: {
            title: e => {
                const {normalize: t} = e;
                return t(["Datos Personales"])
            }
            ,
            nickName: e => {
                const {normalize: t} = e;
                return t(["Apellido"])
            }
            ,
            email: e => {
                const {normalize: t} = e;
                return t(["E-mail"])
            }
            ,
            fullName: e => {
                const {normalize: t} = e;
                return t(["Nombre Completo"])
            }
            ,
            documentId: e => {
                const {normalize: t} = e;
                return t(["Documento de identificación"])
            }
            ,
            documentCPF: e => {
                const {normalize: t} = e;
                return t(["CPF"])
            }
            ,
            birthDate: e => {
                const {normalize: t} = e;
                return t(["Fecha de Nacimiento"])
            }
            ,
            phoneNumber: e => {
                const {normalize: t} = e;
                return t(["Teléfono Móvil"])
            }
            ,
            password: e => {
                const {normalize: t} = e;
                return t(["Contraseña"])
            }
            ,
            documentType: e => {
                const {normalize: t} = e;
                return t(["Tipo de Documento"])
            }
        },
        personalAddress: {
            country: e => {
                const {normalize: t} = e;
                return t(["País"])
            }
        },
        validation: {
            requiredField: e => {
                const {normalize: t} = e;
                return t(["Campo obrigatório"])
            }
            ,
            invalidCpf: e => {
                const {normalize: t} = e;
                return t(["CPF inválido"])
            }
            ,
            invalidAge: e => {
                const {normalize: t} = e;
                return t(["Debe ser mayor de 18 años."])
            }
            ,
            invalidDate: e => {
                const {normalize: t} = e;
                return t(["Fecha Invalida"])
            }
            ,
            invalidEmail: e => {
                const {normalize: t} = e;
                return t(["E-mail Inválido"])
            }
            ,
            invalidCpfDate: e => {
                const {normalize: t} = e;
                return t(["La fecha de nacimiento proporcionada no corresponde al CPF"])
            }
            ,
            invalidCpfName: e => {
                const {normalize: t} = e;
                return t(["El nombre proporcionado no corresponde al CPF"])
            }
            ,
            invalidCpfInUse: e => {
                const {normalize: t} = e;
                return t(["El CPF proporcionado ya está registrado. Para recuperar la contraseña ACTION_MODAL"])
            }
            ,
            invalidDocumentInUse: e => {
                const {normalize: t} = e;
                return t(["El documento proporcionado ya está registrado."])
            }
            ,
            invalidEmailInUse: e => {
                const {normalize: t} = e;
                return t(["El correo electrónico proporcionado ya está registrado"])
            }
            ,
            invalidPrice: e => {
                const {normalize: t, interpolate: n, named: o} = e;
                return t(["El valor mínimo de suscripción es R$ ", n(o("MIN_VALUE")), " y el valor máximo de suscripción es R$ ", n(o("MAX_VALUE"))])
            }
            ,
            invalidZipCode: e => {
                const {normalize: t} = e;
                return t(["Código postal inválido"])
            }
            ,
            emptyDocument: e => {
                const {normalize: t} = e;
                return t(["Documento inválido"])
            }
        },
        information: {
            password: e => {
                const {normalize: t} = e;
                return t(["Su contraseña debe contener al menos 8 caracteres, incluidas letras (minúsculas/mayúsculas), números y caracteres especiales"])
            }
            ,
            recoveryPassword: e => {
                const {normalize: t} = e;
                return t(["Para continuar con la recuperación de contraseña, <br> confirma que este es tu correo electrónico."])
            }
        },
        alertText: {
            success: e => {
                const {normalize: t} = e;
                return t(["Datos guardados exitosamente"])
            }
            ,
            error: e => {
                const {normalize: t} = e;
                return t(["No se pueden guardar datos"])
            }
            ,
            copyLink: e => {
                const {normalize: t} = e;
                return t(["Enlace copiado"])
            }
            ,
            sentEmail: e => {
                const {normalize: t} = e;
                return t(["Email enviado con éxito"])
            }
            ,
            errorEmail: e => {
                const {normalize: t} = e;
                return t(["No fue posible enviar el correo electrónico"])
            }
        },
        title: {
            personalConfigPerfil: e => {
                const {normalize: t} = e;
                return t(["Confirme su información"])
            }
            ,
            recoveryPassword: e => {
                const {normalize: t} = e;
                return t(["Recuperar contraseña"])
            }
        },
        action: {
            clickHere: e => {
                const {normalize: t} = e;
                return t(["haga clic aquí"])
            }
        }
    };
    let q = null;
    const ne = {
        install(e) {
            return q = X.createI18n({
                legacy: !1,
                locale: "pt",
                fallbackLocale: "pt",
                globalInjection: !1
            }),
            e.use(q),
            tt(),
            q
        },
        get global() {
            return q.global
        }
    };
    function tt() {
        r.inject(X.I18nInjectionKey) || r.provide(X.I18nInjectionKey, q)
    }
    function B() {
        var o, a;
        const e = r.getCurrentInstance();
        r.inject((a = (o = e == null ? void 0 : e.appContext) == null ? void 0 : o.app) == null ? void 0 : a.__VUE_I18N_SYMBOL__) || (e.isCE = !0);
        const {t: n} = X.useI18n({
            messages: {
                pt: Xe,
                en: Qe,
                es: et
            }
        });
        return {
            t: n
        }
    }
    const I = {
        get defaultLocale() {
            return "pt"
        },
        set currentLocale(e) {
            e = e && e.split("-")[0],
            ne.global.locale.value = e
        },
        get currentLocale() {
            return ne.global.locale.value
        },
        setTranslate({t: e}) {
            this.t = e
        },
        getUserLocale() {
            const e = window.navigator.language || window.navigator.userLanguage || I.defaultLocale;
            return {
                locale: e,
                localeNoRegion: e.split("-")[0]
            }
        },
        getMessage(e, t) {
            return this.t(e, t)
        },
        async switchLanguage(e) {
            I.currentLocale = e,
            Ze(e)
        }
    };
    function nt(e) {
        const {t} = B();
        I.setTranslate({
            t
        }),
        r.watch(e.locale, n => {
            I.switchLanguage(n || e.locale)
        }
        , {
            immediate: !0
        })
    }
    const V = {
        value: null,
        provides: null
    }
      , ge = {
        install(e, t) {
            e.config.globalProperties.$http || (V.value = qe.create({
                baseURL: t == null ? void 0 : t.baseUrl
            }),
            V.value.interceptors.request.use(n => (V.provides.token.value && !n.headers.Authorization && (n.apiAuth == "v1" ? n.headers.Authorization = `Bearer ${V.provides.tokenV1.value}` : n.headers.Authorization = `Bearer ${V.provides.token.value}`),
            n.headers["Accept-Language"] || (n.headers["Accept-Language"] = V.provides.locale.value || I.defaultLocale),
            n), n => Promise.reject(n)),
            e.config.globalProperties.$http = V.value)
        },
        useProvides(e) {
            V.provides = e.provides
        }
    };
    var ot = !1;
    /*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
    let be;
    const Q = e => be = e
      , _e = Symbol();
    function oe(e) {
        return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
    }
    var W;
    (function(e) {
        e.direct = "direct",
        e.patchObject = "patch object",
        e.patchFunction = "patch function"
    }
    )(W || (W = {}));
    function rt() {
        const e = r.effectScope(!0)
          , t = e.run( () => r.ref({}));
        let n = []
          , o = [];
        const a = r.markRaw({
            install(s) {
                Q(a),
                a._a = s,
                s.provide(_e, a),
                s.config.globalProperties.$pinia = a,
                o.forEach(i => n.push(i)),
                o = []
            },
            use(s) {
                return !this._a && !ot ? o.push(s) : n.push(s),
                this
            },
            _p: n,
            _a: null,
            _e: e,
            _s: new Map,
            state: t
        });
        return a
    }
    const ve = () => {}
    ;
    function we(e, t, n, o=ve) {
        e.push(t);
        const a = () => {
            const s = e.indexOf(t);
            s > -1 && (e.splice(s, 1),
            o())
        }
        ;
        return !n && r.getCurrentScope() && r.onScopeDispose(a),
        a
    }
    function U(e, ...t) {
        e.slice().forEach(n => {
            n(...t)
        }
        )
    }
    function re(e, t) {
        e instanceof Map && t instanceof Map && t.forEach( (n, o) => e.set(o, n)),
        e instanceof Set && t instanceof Set && t.forEach(e.add, e);
        for (const n in t) {
            if (!t.hasOwnProperty(n))
                continue;
            const o = t[n]
              , a = e[n];
            oe(a) && oe(o) && e.hasOwnProperty(n) && !r.isRef(o) && !r.isReactive(o) ? e[n] = re(a, o) : e[n] = o
        }
        return e
    }
    const at = Symbol();
    function st(e) {
        return !oe(e) || !e.hasOwnProperty(at)
    }
    const {assign: j} = Object;
    function it(e) {
        return !!(r.isRef(e) && e.effect)
    }
    function lt(e, t, n, o) {
        const {state: a, actions: s, getters: i} = t
          , l = n.state.value[e];
        let d;
        function u() {
            l || (n.state.value[e] = a ? a() : {});
            const c = r.toRefs(n.state.value[e]);
            return j(c, s, Object.keys(i || {}).reduce( (m, y) => (m[y] = r.markRaw(r.computed( () => {
                Q(n);
                const g = n._s.get(e);
                return i[y].call(g, g)
            }
            )),
            m), {}))
        }
        return d = ze(e, u, t, n, o, !0),
        d.$reset = function() {
            const m = a ? a() : {};
            this.$patch(y => {
                j(y, m)
            }
            )
        }
        ,
        d
    }
    function ze(e, t, n={}, o, a, s) {
        let i;
        const l = j({
            actions: {}
        }, n)
          , d = {
            deep: !0
        };
        let u, c, m = r.markRaw([]), y = r.markRaw([]), g;
        const b = o.state.value[e];
        !s && !b && (o.state.value[e] = {}),
        r.ref({});
        let f;
        function S(_) {
            let w;
            u = c = !1,
            typeof _ == "function" ? (_(o.state.value[e]),
            w = {
                type: W.patchFunction,
                storeId: e,
                events: g
            }) : (re(o.state.value[e], _),
            w = {
                type: W.patchObject,
                payload: _,
                storeId: e,
                events: g
            });
            const x = f = Symbol();
            r.nextTick().then( () => {
                f === x && (u = !0)
            }
            ),
            c = !0,
            U(m, w, o.state.value[e])
        }
        const p = ve;
        function h() {
            i.stop(),
            m = [],
            y = [],
            o._s.delete(e)
        }
        function v(_, w) {
            return function() {
                Q(o);
                const x = Array.from(arguments)
                  , F = []
                  , T = [];
                function te(N) {
                    F.push(N)
                }
                function fe(N) {
                    T.push(N)
                }
                U(y, {
                    args: x,
                    name: _,
                    store: C,
                    after: te,
                    onError: fe
                });
                let Z;
                try {
                    Z = w.apply(this && this.$id === e ? this : C, x)
                } catch (N) {
                    throw U(T, N),
                    N
                }
                return Z instanceof Promise ? Z.then(N => (U(F, N),
                N)).catch(N => (U(T, N),
                Promise.reject(N))) : (U(F, Z),
                Z)
            }
        }
        const z = {
            _p: o,
            $id: e,
            $onAction: we.bind(null, y),
            $patch: S,
            $reset: p,
            $subscribe(_, w={}) {
                const x = we(m, _, w.detached, () => F())
                  , F = i.run( () => r.watch( () => o.state.value[e], T => {
                    (w.flush === "sync" ? c : u) && _({
                        storeId: e,
                        type: W.direct,
                        events: g
                    }, T)
                }
                , j({}, d, w)));
                return x
            },
            $dispose: h
        }
          , C = r.reactive(z);
        o._s.set(e, C);
        const k = o._e.run( () => (i = r.effectScope(),
        i.run( () => t())));
        for (const _ in k) {
            const w = k[_];
            if (r.isRef(w) && !it(w) || r.isReactive(w))
                s || (b && st(w) && (r.isRef(w) ? w.value = b[_] : re(w, b[_])),
                o.state.value[e][_] = w);
            else if (typeof w == "function") {
                const x = v(_, w);
                k[_] = x,
                l.actions[_] = w
            }
        }
        return j(C, k),
        j(r.toRaw(C), k),
        Object.defineProperty(C, "$state", {
            get: () => o.state.value[e],
            set: _ => {
                S(w => {
                    j(w, _)
                }
                )
            }
        }),
        o._p.forEach(_ => {
            j(C, i.run( () => _({
                store: C,
                app: o._a,
                pinia: o,
                options: l
            })))
        }
        ),
        b && s && n.hydrate && n.hydrate(C.$state, b),
        u = !0,
        c = !0,
        C
    }
    function ae(e, t, n) {
        let o, a;
        const s = typeof t == "function";
        typeof e == "string" ? (o = e,
        a = s ? n : t) : (a = e,
        o = e.id);
        function i(l, d) {
            const u = r.getCurrentInstance();
            return l = l || u && r.inject(_e, null),
            l && Q(l),
            l = be,
            l._s.has(o) || (s ? ze(o, t, a, l) : lt(o, a, l)),
            l._s.get(o)
        }
        return i.$id = o,
        i
    }
    function ct(e) {
        var t = [];
        if (e.length === 0)
            return "";
        if (typeof e[0] != "string")
            throw new TypeError("Url must be a string. Received " + e[0]);
        if (e[0].match(/^[^/:]+:\/*$/) && e.length > 1) {
            var n = e.shift();
            e[0] = n + e[0]
        }
        e[0].match(/^file:\/\/\//) ? e[0] = e[0].replace(/^([^/:]+):\/*/, "$1:///") : e[0] = e[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var o = 0; o < e.length; o++) {
            var a = e[o];
            if (typeof a != "string")
                throw new TypeError("Url must be a string. Received " + a);
            a !== "" && (o > 0 && (a = a.replace(/^[\/]+/, "")),
            o < e.length - 1 ? a = a.replace(/[\/]+$/, "") : a = a.replace(/[\/]+$/, "/"),
            t.push(a))
        }
        var s = t.join("/");
        s = s.replace(/\/(\?|&|#[^!])/g, "$1");
        var i = s.split("?");
        return s = i.shift() + (i.length > 0 ? "?" : "") + i.join("&"),
        s
    }
    function O() {
        var e;
        return typeof arguments[0] == "object" ? e = arguments[0] : e = [].slice.call(arguments),
        ct(e)
    }
    const se = ae("app", {
        state: () => ({
            alert: {
                text: null,
                show: !1,
                type: ""
            }
        }),
        getters: {
            ready: e => e.global.ready,
            appSettings: e => e.global.appSettings,
            token: e => e.global.token,
            $http: e => e.global.$http,
            locale: e => e.global.locale,
            isAuthenticated: e => !!e.token
        },
        actions: {
            async refreshJWT(e) {
                try {
                    const t = O(this.global.appSettings.ENDPOINT_API_AUTH, "/refresh-token")
                      , n = await this.global.$http.get(t);
                    if (n.data) {
                        const {token: o, tokenV1: a} = n.data;
                        let s = `${this.global.appSettings.PRIVACY_URL}/strangler/Login?token=${a}&tokenV2=${o}`;
                        e && (s = O(`${s}&returnUrl=`, ut(e))),
                        window.location.href = s
                    }
                } catch (t) {
                    console.error(t)
                }
            },
            showAlertSuccess(e) {
                this.alert.text = e,
                this.alert.type = "success",
                this.alert.show = !0,
                setTimeout( () => {
                    this.alert.show = !1
                }
                , 2e3)
            },
            showAlertError() {
                this.alert.type = "error",
                this.alert.show = !0
            },
            clearAlert() {
                this.alert.type = "",
                this.alert.text = "",
                this.alert.show = !1
            }
        }
    });
    function ut(e) {
        return e && (e = decodeURIComponent(e),
        e.charAt(0) === "/" && (e = e.substring(1)),
        encodeURIComponent(e))
    }
    function Ce(e, t=void 0) {
        var o, a, s, i, l, d;
        let n = "";
        return ((o = e == null ? void 0 : e.response) == null ? void 0 : o.status) === 400 && typeof ((s = (a = e == null ? void 0 : e.response) == null ? void 0 : a.data) == null ? void 0 : s.message) == "string" ? n = (l = (i = e == null ? void 0 : e.response) == null ? void 0 : i.data) == null ? void 0 : l.message : (d = e == null ? void 0 : e.message) != null && d.includes("DOCUMENT_IN_USE") && (n = I.getMessage("validation.invalidDocumentInUse")),
        n || t || I.getMessage("base.defaultErrorMsg")
    }
    const dt = () => ({
        id: "",
        nickName: "",
        email: "",
        fullName: "",
        documentID: null,
        birthDate: null,
        phoneNumber: null,
        password: null,
        documentType: null
    })
      , mt = () => ({
        id: null,
        userId: null,
        country: ""
    })
      , H = ae("personalDataStore", {
        state: () => ({
            loading: !1,
            loaded: !1,
            countryLoading: !1,
            countryLoaded: !1,
            model: dt(),
            countryModel: mt(),
            validateDocuments: {
                birthDate: !1,
                fullName: !1,
                isActivated: !1,
                cpfInUse: null,
                emailInUse: !1
            },
            appStore: se()
        }),
        getters: {
            hasDocumentId() {
                return !!this.model.documentID
            },
            isBrazilCountry() {
                return this.countryModel.country === "BR"
            }
        },
        actions: {
            async getInfoIfNotLoaded({force: e}={}) {
                this.model.id && !e || await this.getInfo()
            },
            async getInfo() {
                if (!this.loading)
                    try {
                        this.loading = !0;
                        const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Users")
                          , t = await this.global.$http.get(e);
                        t.data && this.fillOutForm(this.model, t.data),
                        this.loaded = !0
                    } catch (e) {
                        console.error(e)
                    } finally {
                        this.loading = !1
                    }
            },
            isDocumentTypeCnpj(e) {
                var t;
                return e == "BR" && ((t = this.model.documentID) == null ? void 0 : t.replace(/[^\d]/g, "").length) == 14
            },
            async loadProfileAddressIfNotLoaded({force: e}={}) {
                this.countryModel.id && !e || await this.loadProfileAddress()
            },
            async loadProfileAddress() {
                if (!this.countryLoading)
                    try {
                        this.countryLoading = !0;
                        const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Addresses")
                          , t = await this.global.$http.get(e);
                        t.data && this.fillOutCountryForm(this.countryModel, t.data),
                        this.countryLoaded = !0
                    } catch (e) {
                        console.error(e)
                    } finally {
                        this.countryLoading = !1
                    }
            },
            async submitForm() {
                try {
                    this.hideAlert();
                    const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Users");
                    if (!this.formattedDocument())
                        return this.appStore.alert.text = I.getMessage("validation.emptyDocument"),
                        this.showAlert(),
                        !1;
                    const n = {
                        id: this.model.id,
                        nickName: this.model.nickName,
                        name: this.model.fullName,
                        documentType: this.model.documentType,
                        document: this.formattedDocument(),
                        birthdayDate: A(this.model.birthDate || A(), "DD/MM/YYYY").format("YYYY-MM-DDTHH:mm:ss"),
                        ignorePhoneNumber: !0
                    };
                    return await this.updateCountry(),
                    await this.global.$http.put(e, n),
                    !0
                } catch (e) {
                    return this.appStore.alert.text = Ce(e),
                    this.showAlert(),
                    !1
                }
            },
            async updateCountry() {
                try {
                    const e = O(this.global.appSettings.ENDPOINT_API_PROFILE, `/Addresses/${this.countryModel.id}`)
                      , t = {
                        id: this.countryModel.id,
                        country: this.countryModel.country,
                        onlyUpdateCountry: !0
                    };
                    await this.global.$http.put(e, t)
                } catch (e) {
                    this.appStore.alert.text = Ce(e),
                    this.showAlert()
                }
            },
            async validateDocumentInUse(e) {
                var t, n;
                try {
                    this.validateDocuments.cpfInUse = null;
                    const o = this.formattedDocument();
                    if (!o)
                        return;
                    const a = O(this.global.appSettings.ENDPOINT_API_PROFILE, `/Users/verify-document/${o}/${e}`);
                    return await this.global.$http.get(a),
                    !1
                } catch (o) {
                    return ((t = o == null ? void 0 : o.response) == null ? void 0 : t.status) === 302 ? (this.validateDocuments.cpfInUse = this.model.documentID,
                    (n = o == null ? void 0 : o.response) == null ? void 0 : n.data) : !1
                }
            },
            async sendRecoveryPassword(e, t) {
                try {
                    const n = this.formattedDocument();
                    if (!n)
                        return;
                    const o = {
                        document: n,
                        country: e,
                        locale: t
                    }
                      , a = O(this.global.appSettings.ENDPOINT_API_PROFILE, "/Users/recovery-password");
                    return await this.global.$http.post(a, o),
                    "success"
                } catch (n) {
                    return console.error(n),
                    "error"
                }
            },
            fillOutForm(e, t) {
                e.id = t.id,
                e.fullName = t.name,
                e.nickName = t.nickName,
                e.birthDate = t.birthdayDate ? A(t.birthdayDate).format("DD/MM/YYYY") : null,
                e.documentID = t.document,
                e.phoneNumber = t.phoneNumber
            },
            fillOutCountryForm(e, t) {
                e.id = t.id,
                e.userId = t.userId,
                e.country = t.country
            },
            formattedDocument() {
                return this.model.documentID != null ? this.model.documentID.replace(/[^\w\s]/g, "") : null
            },
            showAlert() {
                this.appStore.alert.show = !0
            },
            hideAlert() {
                this.appStore.alert.show = !1
            }
        }
    })
      , Gn = ""
      , Zn = ""
      , Xn = ""
      , Qn = ""
      , eo = ""
      , pt = `.pub-alert.el-alert{--el-alert-description-font-size: 13px;--el-alert-close-font-size: 18px}.pub-alert.el-alert .el-alert__description{margin:0}.pub-alert.el-alert .el-alert__content{padding-right:20px}.pub-alert.el-alert .el-alert__icon svg{height:.7em;width:.7em}.pub-alert.el-alert .el-alert__close-btn{top:14px}
`
      , L = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [o,a] of t)
            n[o] = a;
        return n
    }
      , ft = {
        components: {
            ElAlert: D.ElAlert
        },
        props: {
            type: String
        }
    };
    function ht(e, t, n, o, a, s) {
        const i = r.resolveComponent("el-alert");
        return r.openBlock(),
        r.createBlock(i, {
            type: n.type,
            class: "pub-alert",
            "show-icon": "",
            closable: n.type != "success"
        }, {
            default: r.withCtx( () => [r.renderSlot(e.$slots, "default")]),
            _: 3
        }, 8, ["type", "closable"])
    }
    const ie = L(ft, [["render", ht], ["styles", [pt]]])
      , yt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ie
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    /*! maska v2.1.9 | (c) Alexander Shabunevich | Released under the MIT license */
    var gt = Object.defineProperty
      , bt = (e, t, n) => t in e ? gt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n
      , Y = (e, t, n) => (bt(e, typeof t != "symbol" ? t + "" : t, n),
    n);
    const De = {
        "#": {
            pattern: /[0-9]/
        },
        "@": {
            pattern: /[a-zA-Z]/
        },
        "*": {
            pattern: /[a-zA-Z0-9]/
        }
    };
    class R {
        constructor(t={}) {
            Y(this, "opts", {}),
            Y(this, "memo", new Map);
            const n = {
                ...t
            };
            if (n.tokens != null) {
                n.tokens = n.tokensReplace ? {
                    ...n.tokens
                } : {
                    ...De,
                    ...n.tokens
                };
                for (const o of Object.values(n.tokens))
                    typeof o.pattern == "string" && (o.pattern = new RegExp(o.pattern))
            } else
                n.tokens = De;
            Array.isArray(n.mask) && (n.mask.length > 1 ? n.mask = [...n.mask].sort( (o, a) => o.length - a.length) : n.mask = n.mask[0] ?? ""),
            n.mask === "" && (n.mask = null),
            this.opts = n
        }
        masked(t) {
            return this.process(t, this.findMask(t))
        }
        unmasked(t) {
            return this.process(t, this.findMask(t), !1)
        }
        isEager() {
            return this.opts.eager === !0
        }
        isReversed() {
            return this.opts.reversed === !0
        }
        completed(t) {
            const n = this.findMask(t);
            if (this.opts.mask == null || n == null)
                return !1;
            const o = this.process(t, n).length;
            return typeof this.opts.mask == "string" ? o >= this.opts.mask.length : typeof this.opts.mask == "function" ? o >= n.length : this.opts.mask.filter(a => o >= a.length).length === this.opts.mask.length
        }
        findMask(t) {
            const n = this.opts.mask;
            if (n == null)
                return null;
            if (typeof n == "string")
                return n;
            if (typeof n == "function")
                return n(t);
            const o = this.process(t, n.slice(-1).pop() ?? "", !1);
            return n.find(a => this.process(t, a, !1).length >= o.length) ?? ""
        }
        escapeMask(t) {
            const n = []
              , o = [];
            return t.split("").forEach( (a, s) => {
                a === "!" && t[s - 1] !== "!" ? o.push(s - o.length) : n.push(a)
            }
            ),
            {
                mask: n.join(""),
                escaped: o
            }
        }
        process(t, n, o=!0) {
            var a;
            if (n == null)
                return t;
            const s = `value=${t},mask=${n},masked=${o ? 1 : 0}`;
            if (this.memo.has(s))
                return this.memo.get(s);
            const {mask: i, escaped: l} = this.escapeMask(n)
              , d = []
              , u = this.opts.tokens != null ? this.opts.tokens : {}
              , c = this.isReversed() ? -1 : 1
              , m = this.isReversed() ? "unshift" : "push"
              , y = this.isReversed() ? 0 : i.length - 1
              , g = this.isReversed() ? () => p > -1 && h > -1 : () => p < i.length && h < t.length
              , b = v => !this.isReversed() && v <= y || this.isReversed() && v >= y;
            let f, S = -1, p = this.isReversed() ? i.length - 1 : 0, h = this.isReversed() ? t.length - 1 : 0;
            for (; g(); ) {
                const v = i.charAt(p)
                  , z = u[v]
                  , C = (z == null ? void 0 : z.transform) != null ? z.transform(t.charAt(h)) : t.charAt(h);
                if (!l.includes(p) && z != null) {
                    if (C.match(z.pattern) != null)
                        d[m](C),
                        z.repeated ? (S === -1 ? S = p : p === y && p !== S && (p = S - c),
                        y === S && (p -= c)) : z.multiple && (p -= c),
                        p += c;
                    else if (z.multiple) {
                        const k = ((a = d[h - c]) == null ? void 0 : a.match(z.pattern)) != null
                          , _ = i.charAt(p + c);
                        k && _ !== "" && u[_] == null ? (p += c,
                        h -= c) : d[m]("")
                    } else
                        C === f ? f = void 0 : z.optional && (p += c,
                        h -= c);
                    h += c
                } else
                    o && !this.isEager() && d[m](v),
                    C === v && !this.isEager() ? h += c : f = v,
                    this.isEager() || (p += c);
                if (this.isEager())
                    for (; b(p) && (u[i.charAt(p)] == null || l.includes(p)); )
                        o ? d[m](i.charAt(p)) : i.charAt(p) === t.charAt(h) && (h += c),
                        p += c
            }
            return this.memo.set(s, d.join("")),
            this.memo.get(s)
        }
    }
    const ke = e => JSON.parse(e.replaceAll("'", '"'))
      , Se = (e, t={}) => {
        const n = {
            ...t
        };
        return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = _t(e.dataset.maska)),
        e.dataset.maskaEager != null && (n.eager = le(e.dataset.maskaEager)),
        e.dataset.maskaReversed != null && (n.reversed = le(e.dataset.maskaReversed)),
        e.dataset.maskaTokensReplace != null && (n.tokensReplace = le(e.dataset.maskaTokensReplace)),
        e.dataset.maskaTokens != null && (n.tokens = vt(e.dataset.maskaTokens)),
        n
    }
      , le = e => e !== "" ? !!JSON.parse(e) : !0
      , _t = e => e.startsWith("[") && e.endsWith("]") ? ke(e) : e
      , vt = e => {
        if (e.startsWith("{") && e.endsWith("}"))
            return ke(e);
        const t = {};
        return e.split("|").forEach(n => {
            const o = n.split(":");
            t[o[0]] = {
                pattern: new RegExp(o[1]),
                optional: o[2] === "optional",
                multiple: o[2] === "multiple",
                repeated: o[2] === "repeated"
            }
        }
        ),
        t
    }
    ;
    class wt {
        constructor(t, n={}) {
            Y(this, "items", new Map),
            Y(this, "beforeinputEvent", o => {
                const a = o.target
                  , s = this.items.get(a);
                s.isEager() && "inputType"in o && o.inputType.startsWith("delete") && s.unmasked(a.value).length <= 1 && this.setMaskedValue(a, "")
            }
            ),
            Y(this, "inputEvent", o => {
                if (o instanceof CustomEvent && o.type === "input" && o.detail != null && typeof o.detail == "object" && "masked"in o.detail)
                    return;
                const a = o.target
                  , s = this.items.get(a)
                  , i = a.value
                  , l = a.selectionStart
                  , d = a.selectionEnd;
                let u = i;
                if (s.isEager()) {
                    const c = s.masked(i)
                      , m = s.unmasked(i);
                    m === "" && "data"in o && o.data != null ? u = o.data : m !== s.unmasked(c) && (u = m)
                }
                if (this.setMaskedValue(a, u),
                "inputType"in o && (o.inputType.startsWith("delete") || l != null && l < i.length))
                    try {
                        a.setSelectionRange(l, d)
                    } catch {}
            }
            ),
            this.options = n,
            typeof t == "string" ? this.init(Array.from(document.querySelectorAll(t)), this.getMaskOpts(n)) : this.init("length"in t ? Array.from(t) : [t], this.getMaskOpts(n))
        }
        destroy() {
            for (const t of this.items.keys())
                t.removeEventListener("input", this.inputEvent),
                t.removeEventListener("beforeinput", this.beforeinputEvent);
            this.items.clear()
        }
        needUpdateOptions(t, n) {
            const o = this.items.get(t)
              , a = new R(Se(t, this.getMaskOpts(n)));
            return JSON.stringify(o.opts) !== JSON.stringify(a.opts)
        }
        needUpdateValue(t) {
            const n = t.dataset.maskaValue;
            return n == null && t.value !== "" || n != null && n !== t.value
        }
        getMaskOpts(t) {
            const {onMaska: n, preProcess: o, postProcess: a, ...s} = t;
            return s
        }
        init(t, n) {
            for (const o of t) {
                const a = new R(Se(o, n));
                this.items.set(o, a),
                o.value !== "" && this.setMaskedValue(o, o.value),
                o.addEventListener("input", this.inputEvent),
                o.addEventListener("beforeinput", this.beforeinputEvent)
            }
        }
        setMaskedValue(t, n) {
            const o = this.items.get(t);
            this.options.preProcess != null && (n = this.options.preProcess(n));
            const a = o.masked(n)
              , s = o.unmasked(o.isEager() ? a : n)
              , i = o.completed(n)
              , l = {
                masked: a,
                unmasked: s,
                completed: i
            };
            n = a,
            this.options.postProcess != null && (n = this.options.postProcess(n)),
            t.value = n,
            t.dataset.maskaValue = n,
            this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach(d => d(l)) : this.options.onMaska(l)),
            t.dispatchEvent(new CustomEvent("maska",{
                detail: l
            })),
            t.dispatchEvent(new CustomEvent("input",{
                detail: l
            }))
        }
    }
    const ce = new WeakMap
      , zt = e => {
        setTimeout( () => {
            var t;
            ((t = ce.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"))
        }
        )
    }
      , xe = (e, t) => {
        const n = e instanceof HTMLInputElement ? e : e.querySelector("input")
          , o = {
            ...t.arg
        };
        if (n == null)
            return;
        zt(n);
        const a = ce.get(n);
        if (a != null) {
            if (!a.needUpdateOptions(n, o))
                return;
            a.destroy()
        }
        if (t.value != null) {
            const s = t.value
              , i = l => {
                s.masked = l.masked,
                s.unmasked = l.unmasked,
                s.completed = l.completed
            }
            ;
            o.onMaska = o.onMaska == null ? i : Array.isArray(o.onMaska) ? [...o.onMaska, i] : [o.onMaska, i]
        }
        ce.set(n, new wt(n,o))
    }
      , to = ""
      , no = ""
      , oo = ""
      , Ee = {
        cpf: {
            value: "###.###.###-##",
            instance: new R({
                mask: "###.###.###-##"
            })
        },
        cnpj: {
            value: "##.###.###/####-##",
            instance: new R({
                mask: "##.###.###/####-##"
            })
        },
        phone: {
            value: "(##) #####-####",
            instance: new R({
                mask: "(##) #####-####"
            })
        },
        cep: {
            value: "#####-###",
            instance: new R({
                mask: "#####-###"
            })
        },
        calendar: {
            value: "##/##/####",
            instance: new R({
                mask: "##/##/####"
            })
        }
    };
    var Ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function Dt(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var ue = {}
      , kt = {
        get exports() {
            return ue
        },
        set exports(e) {
            ue = e
        }
    };
    (function(e, t) {
        (function(n, o) {
            e.exports = o()
        }
        )(Ct, function() {
            return function(n) {
                function o(s) {
                    if (a[s])
                        return a[s].exports;
                    var i = a[s] = {
                        i: s,
                        l: !1,
                        exports: {}
                    };
                    return n[s].call(i.exports, i, i.exports, o),
                    i.l = !0,
                    i.exports
                }
                var a = {};
                return o.m = n,
                o.c = a,
                o.i = function(s) {
                    return s
                }
                ,
                o.d = function(s, i, l) {
                    o.o(s, i) || Object.defineProperty(s, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: l
                    })
                }
                ,
                o.n = function(s) {
                    var i = s && s.__esModule ? function() {
                        return s.default
                    }
                    : function() {
                        return s
                    }
                    ;
                    return o.d(i, "a", i),
                    i
                }
                ,
                o.o = function(s, i) {
                    return Object.prototype.hasOwnProperty.call(s, i)
                }
                ,
                o.p = "/vue-jwt-decode/dist",
                o(o.s = 10)
            }([function(n, o, a) {
                n.exports = !a(1)(function() {
                    return Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a != 7
                })
            }
            , function(n, o) {
                n.exports = function(a) {
                    try {
                        return !!a()
                    } catch {
                        return !0
                    }
                }
            }
            , function(n, o) {
                var a = n.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
                typeof __g == "number" && (__g = a)
            }
            , function(n, o) {
                n.exports = function(a) {
                    return typeof a == "object" ? a !== null : typeof a == "function"
                }
            }
            , function(n, o) {
                var a = n.exports = {
                    version: "2.5.3"
                };
                typeof __e == "number" && (__e = a)
            }
            , function(n, o) {
                n.exports = function(a) {
                    if (a == null)
                        throw TypeError("Can't call method on  " + a);
                    return a
                }
            }
            , function(n, o, a) {
                var s = a(16);
                n.exports = Object("z").propertyIsEnumerable(0) ? Object : function(i) {
                    return s(i) == "String" ? i.split("") : Object(i)
                }
            }
            , function(n, o) {
                var a = Math.ceil
                  , s = Math.floor;
                n.exports = function(i) {
                    return isNaN(i = +i) ? 0 : (i > 0 ? s : a)(i)
                }
            }
            , function(n, o, a) {
                var s = a(6)
                  , i = a(5);
                n.exports = function(l) {
                    return s(i(l))
                }
            }
            , function(n, o, a) {
                var s = a(11)
                  , i = a.n(s);
                o.a = {
                    install: function(l) {
                        l.prototype.$jwtDec = this,
                        l.jwtDec = this
                    },
                    decode: function(l) {
                        if (typeof l != "string" & !l instanceof String)
                            return null;
                        var d = l.split(".");
                        if (d.length < 2)
                            return null;
                        var u = JSON.parse(atob(d[0]))
                          , c = JSON.parse(atob(d[1]));
                        return i()({}, u, c)
                    }
                }
            }
            , function(n, o, a) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var s = a(9);
                o.default = s.a
            }
            , function(n, o, a) {
                n.exports = {
                    default: a(12),
                    __esModule: !0
                }
            }
            , function(n, o, a) {
                a(38),
                n.exports = a(4).Object.assign
            }
            , function(n, o) {
                n.exports = function(a) {
                    if (typeof a != "function")
                        throw TypeError(a + " is not a function!");
                    return a
                }
            }
            , function(n, o, a) {
                var s = a(3);
                n.exports = function(i) {
                    if (!s(i))
                        throw TypeError(i + " is not an object!");
                    return i
                }
            }
            , function(n, o, a) {
                var s = a(8)
                  , i = a(34)
                  , l = a(33);
                n.exports = function(d) {
                    return function(u, c, m) {
                        var y, g = s(u), b = i(g.length), f = l(m, b);
                        if (d && c != c) {
                            for (; b > f; )
                                if ((y = g[f++]) != y)
                                    return !0
                        } else
                            for (; b > f; f++)
                                if ((d || f in g) && g[f] === c)
                                    return d || f || 0;
                        return !d && -1
                    }
                }
            }
            , function(n, o) {
                var a = {}.toString;
                n.exports = function(s) {
                    return a.call(s).slice(8, -1)
                }
            }
            , function(n, o, a) {
                var s = a(13);
                n.exports = function(i, l, d) {
                    if (s(i),
                    l === void 0)
                        return i;
                    switch (d) {
                    case 1:
                        return function(u) {
                            return i.call(l, u)
                        }
                        ;
                    case 2:
                        return function(u, c) {
                            return i.call(l, u, c)
                        }
                        ;
                    case 3:
                        return function(u, c, m) {
                            return i.call(l, u, c, m)
                        }
                    }
                    return function() {
                        return i.apply(l, arguments)
                    }
                }
            }
            , function(n, o, a) {
                var s = a(3)
                  , i = a(2).document
                  , l = s(i) && s(i.createElement);
                n.exports = function(d) {
                    return l ? i.createElement(d) : {}
                }
            }
            , function(n, o) {
                n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }
            , function(n, o, a) {
                var s = a(2)
                  , i = a(4)
                  , l = a(17)
                  , d = a(22)
                  , u = function(c, m, y) {
                    var g, b, f, S = c & u.F, p = c & u.G, h = c & u.S, v = c & u.P, z = c & u.B, C = c & u.W, k = p ? i : i[m] || (i[m] = {}), _ = k.prototype, w = p ? s : h ? s[m] : (s[m] || {}).prototype;
                    p && (y = m);
                    for (g in y)
                        (b = !S && w && w[g] !== void 0) && g in k || (f = b ? w[g] : y[g],
                        k[g] = p && typeof w[g] != "function" ? y[g] : z && b ? l(f, s) : C && w[g] == f ? function(x) {
                            var F = function(T, te, fe) {
                                if (this instanceof x) {
                                    switch (arguments.length) {
                                    case 0:
                                        return new x;
                                    case 1:
                                        return new x(T);
                                    case 2:
                                        return new x(T,te)
                                    }
                                    return new x(T,te,fe)
                                }
                                return x.apply(this, arguments)
                            };
                            return F.prototype = x.prototype,
                            F
                        }(f) : v && typeof f == "function" ? l(Function.call, f) : f,
                        v && ((k.virtual || (k.virtual = {}))[g] = f,
                        c & u.R && _ && !_[g] && d(_, g, f)))
                };
                u.F = 1,
                u.G = 2,
                u.S = 4,
                u.P = 8,
                u.B = 16,
                u.W = 32,
                u.U = 64,
                u.R = 128,
                n.exports = u
            }
            , function(n, o) {
                var a = {}.hasOwnProperty;
                n.exports = function(s, i) {
                    return a.call(s, i)
                }
            }
            , function(n, o, a) {
                var s = a(25)
                  , i = a(30);
                n.exports = a(0) ? function(l, d, u) {
                    return s.f(l, d, i(1, u))
                }
                : function(l, d, u) {
                    return l[d] = u,
                    l
                }
            }
            , function(n, o, a) {
                n.exports = !a(0) && !a(1)(function() {
                    return Object.defineProperty(a(18)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a != 7
                })
            }
            , function(n, o, a) {
                var s = a(28)
                  , i = a(26)
                  , l = a(29)
                  , d = a(35)
                  , u = a(6)
                  , c = Object.assign;
                n.exports = !c || a(1)(function() {
                    var m = {}
                      , y = {}
                      , g = Symbol()
                      , b = "abcdefghijklmnopqrst";
                    return m[g] = 7,
                    b.split("").forEach(function(f) {
                        y[f] = f
                    }),
                    c({}, m)[g] != 7 || Object.keys(c({}, y)).join("") != b
                }) ? function(m, y) {
                    for (var g = d(m), b = arguments.length, f = 1, S = i.f, p = l.f; b > f; )
                        for (var h, v = u(arguments[f++]), z = S ? s(v).concat(S(v)) : s(v), C = z.length, k = 0; C > k; )
                            p.call(v, h = z[k++]) && (g[h] = v[h]);
                    return g
                }
                : c
            }
            , function(n, o, a) {
                var s = a(14)
                  , i = a(23)
                  , l = a(36)
                  , d = Object.defineProperty;
                o.f = a(0) ? Object.defineProperty : function(u, c, m) {
                    if (s(u),
                    c = l(c, !0),
                    s(m),
                    i)
                        try {
                            return d(u, c, m)
                        } catch {}
                    if ("get"in m || "set"in m)
                        throw TypeError("Accessors not supported!");
                    return "value"in m && (u[c] = m.value),
                    u
                }
            }
            , function(n, o) {
                o.f = Object.getOwnPropertySymbols
            }
            , function(n, o, a) {
                var s = a(21)
                  , i = a(8)
                  , l = a(15)(!1)
                  , d = a(31)("IE_PROTO");
                n.exports = function(u, c) {
                    var m, y = i(u), g = 0, b = [];
                    for (m in y)
                        m != d && s(y, m) && b.push(m);
                    for (; c.length > g; )
                        s(y, m = c[g++]) && (~l(b, m) || b.push(m));
                    return b
                }
            }
            , function(n, o, a) {
                var s = a(27)
                  , i = a(19);
                n.exports = Object.keys || function(l) {
                    return s(l, i)
                }
            }
            , function(n, o) {
                o.f = {}.propertyIsEnumerable
            }
            , function(n, o) {
                n.exports = function(a, s) {
                    return {
                        enumerable: !(1 & a),
                        configurable: !(2 & a),
                        writable: !(4 & a),
                        value: s
                    }
                }
            }
            , function(n, o, a) {
                var s = a(32)("keys")
                  , i = a(37);
                n.exports = function(l) {
                    return s[l] || (s[l] = i(l))
                }
            }
            , function(n, o, a) {
                var s = a(2)
                  , i = s["__core-js_shared__"] || (s["__core-js_shared__"] = {});
                n.exports = function(l) {
                    return i[l] || (i[l] = {})
                }
            }
            , function(n, o, a) {
                var s = a(7)
                  , i = Math.max
                  , l = Math.min;
                n.exports = function(d, u) {
                    return d = s(d),
                    d < 0 ? i(d + u, 0) : l(d, u)
                }
            }
            , function(n, o, a) {
                var s = a(7)
                  , i = Math.min;
                n.exports = function(l) {
                    return l > 0 ? i(s(l), 9007199254740991) : 0
                }
            }
            , function(n, o, a) {
                var s = a(5);
                n.exports = function(i) {
                    return Object(s(i))
                }
            }
            , function(n, o, a) {
                var s = a(3);
                n.exports = function(i, l) {
                    if (!s(i))
                        return i;
                    var d, u;
                    if (l && typeof (d = i.toString) == "function" && !s(u = d.call(i)) || typeof (d = i.valueOf) == "function" && !s(u = d.call(i)) || !l && typeof (d = i.toString) == "function" && !s(u = d.call(i)))
                        return u;
                    throw TypeError("Can't convert object to primitive value")
                }
            }
            , function(n, o) {
                var a = 0
                  , s = Math.random();
                n.exports = function(i) {
                    return "Symbol(".concat(i === void 0 ? "" : i, ")_", (++a + s).toString(36))
                }
            }
            , function(n, o, a) {
                var s = a(20);
                s(s.S + s.F, "Object", {
                    assign: a(24)
                })
            }
            ])
        })
    }
    )(kt);
    const St = Dt(ue)
      , Ie = ae("auth", {
        getters: {
            jwt: e => St.decode(e.global.token),
            currentUserId() {
                var e;
                return parseInt((e = this.jwt) == null ? void 0 : e.uid)
            },
            currentUseName() {
                var e;
                return parseInt((e = this.jwt) == null ? void 0 : e.uid)
            },
            roles() {
                var e;
                return he.castArray((e = this.jwt) == null ? void 0 : e.role).filter(t => t)
            },
            isCreator() {
                return this.roles.includes("Creator") && this.claims.includes("HasTraditionalBankAccount")
            },
            claims() {
                var t, n, o, a;
                return ((t = this.jwt) != null && t.claim && Array.isArray((n = this.jwt) == null ? void 0 : n.claim) ? (o = this.jwt) == null ? void 0 : o.claim : [(a = this.jwt) == null ? void 0 : a.claim]).filter(s => s)
            }
        }
    })
      , xt = 576;
    function Et(e, t=!0) {
        if (!e)
            return !t;
        if (e = e.toString(),
        e = e.replace(/\D/g, ""),
        e.toString().length != 11 || /^(\d)\1{10}$/.test(e))
            return !1;
        var n = !0;
        return [9, 10].forEach(function(o) {
            var a = 0, s;
            e.split(/(?=)/).splice(0, o).forEach(function(i, l) {
                a += parseInt(i) * (o + 2 - (l + 1))
            }),
            s = a % 11,
            s = s < 2 ? 0 : 11 - s,
            s != e.substring(o, o + 1) && (n = !1)
        }),
        n
    }
    function Ne() {
        return window.innerWidth < xt
    }
    function J(e) {
        return (e == null ? void 0 : e.toString().toLocaleLowerCase()) === "true" || e === !0
    }
    function It(e) {
        return e ? typeof e == "object" ? e : JSON.parse(e) : {}
    }
    function Nt(e) {
        const t = e ? atob(e) : void 0;
        return It(t)
    }
    function Pt(e) {
        for (const t in e)
            Ot(e[t]) && (e[t] = e[t].replace(/\?&/g, ""))
    }
    function Ot(e) {
        return e && typeof e == "string" && e.startsWith("http")
    }
    const $ = {
        requiredField: {
            required: !0,
            message: () => I.getMessage("validation.requiredField"),
            trigger: ["blur", "change"]
        },
        validateCPF: ({required: e}={}) => ({
            validator: (t, n) => Et(n, e),
            message: () => I.getMessage("validation.invalidCpf")
        }),
        validateSameCpfInUse: ({validateDocuments: e}={}) => ({
            validator: (t, n) => n ? e.cpfInUse != n : !0,
            message: () => I.getMessage("validation.invalidCpfInUse")
        })
    };
    r.computed( () => {
        var e, t;
        if ((e = I.currentLocale) != null && e.startsWith("pt"))
            return Ye;
        if ((t = I.currentLocale) != null && t.startsWith("es"))
            return Je
    }
    );
    var Mt = {
        prefix: "fat",
        iconName: "calendar-days",
        icon: [448, 512, ["calendar-alt"], "f073", "M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8V64H64C28.7 64 0 92.7 0 128v48 16 96 16 96 16 32c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V416 400 304 288 192 176 128c0-35.3-28.7-64-64-64H336V8c0-4.4-3.6-8-8-8s-8 3.6-8 8V64H128V8zM432 288H304V192H432v96zM288 192v96H160V192H288zm-144 0v96H16V192H144zM16 304H144v96H16V304zm0 112H144v80H64c-26.5 0-48-21.5-48-48V416zm144 80V416H288v80H160zm144 0V416H432v32c0 26.5-21.5 48-48 48H304zm128-96H304V304H432v96zM112 80v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80H320v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16V128c0-26.5 21.5-48 48-48h48zM288 400H160V304H288v96z"]
    }
      , At = {
        prefix: "fat",
        iconName: "file-signature",
        icon: [576, 512, [], "f573", "M64 496H320c26.5 0 48-21.5 48-48V433.3l7.5-1.9c2.9-.7 5.8-1.7 8.5-2.8V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H204.1c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9v23.5l-16 16V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64C37.5 16 16 37.5 16 64V448c0 26.5 21.5 48 48 48zM358.6 157.3L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4V136c0 13.3 10.7 24 24 24H361.1c-.8-1-1.6-1.9-2.4-2.7zM128 328c-1.1 0-2.1 .7-2.4 1.8l-15.5 56.7C105.4 403.9 89.6 416 71.6 416H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h7.6c10.8 0 20.3-7.2 23.2-17.7l15.5-56.7c2.2-8 9.5-13.6 17.8-13.6s15.6 5.6 17.8 13.6l19.4 71.1 21.9-38.3c5.1-8.9 14.6-14.5 24.9-14.5s19.8 5.5 24.9 14.5l16.8 29.5C258 395.4 266 400 274.6 400H288c0-1.3 .1-2.7 .5-4l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L493.2 139.7c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L382.9 391.9c-4.1 4.1-9.2 7-14.9 8.4l-3.4-13.6 3.4 13.6-60.1 15c-.6 .1-1.1 .3-1.7 .3c-.7 .2-1.4 .3-2.2 .3H274.6c-14.4 0-27.6-7.7-34.7-20.2L223 366.4c-2.3-3.9-6.5-6.4-11-6.4s-8.8 2.4-11 6.4L176.7 409c-2.5 4.3-7.1 7-12.1 7c-6.3 0-11.8-4.2-13.5-10.3l-20.7-75.9c-.3-1.1-1.3-1.8-2.4-1.8zm180.4 54.3L304 399.8l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2L514.4 237.7l-48.3-48.3L323.2 332.3c-2 2.1-3.5 4.6-4.2 7.4l-10.6 42.5zM552.8 199.4c9.4-9.4 9.4-24.6 0-33.9L538.4 151c-9.4-9.4-24.6-9.4-33.9 0l-27.1 27.1 48.3 48.3 27.1-27.1z"]
    }
      , Pe = {
        prefix: "fat",
        iconName: "id-card",
        icon: [576, 512, [62147, "drivers-license"], "f2c2", "M64 48C37.5 48 16 69.5 16 96v16H560V96c0-26.5-21.5-48-48-48H64zM16 128V416c0 26.5 21.5 48 48 48H512c26.5 0 48-21.5 48-48V128H16zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM192 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM152 352c-30.9 0-56 25.1-56 56c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72h80c39.8 0 72 32.2 72 72c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56H152zM352 232c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8z"]
    }
      , Vt = {
        prefix: "fat",
        iconName: "earth-americas",
        icon: [512, 512, [127758, "earth", "earth-america", "globe-americas"], "f57d", "M256 496C123.5 496 16 388.5 16 256c0-23.3 3.3-45.8 9.5-67.1l19.2 38.3c8.8 17.5 24.2 30.7 42.9 36.5l68.8 21.5c16.4 5.1 27.6 20.3 27.6 37.5v11.3c0 14 7.9 26.8 20.4 33c7.1 3.5 11.6 10.8 11.6 18.7v39c0 21.6 17.5 39.1 39.1 39.1c18.3 0 34.2-12.7 38.1-30.6l4.9-22.1c3.1-14.1 12.1-26.2 24.6-33.4l9-5.2c17.4-10 28.2-28.5 28.2-48.6v-8.3c0-14.9-5.9-29.1-16.4-39.6l-3.9-3.9C329.2 261.9 315 256 300.1 256H251.3c-6.2 0-12.3-1.4-17.9-4.2l-45.9-22.9c-3.6-1.8-6.6-4.8-8.4-8.4l-.7-1.4c-4.3-8.5-.8-18.9 7.7-23.2c4.1-2.1 8.9-2.4 13.2-.9l24.2 8.1c11.6 3.9 24.3-.5 31.1-10.7c6.7-10 6-23.2-1.7-32.4l-17.9-21.5c-5-6-4.9-14.7 .1-20.7l21-24.5c10.5-12.2 12.6-29.5 5.4-43.9L245.1 16.2c3.6-.2 7.3-.2 10.9-.2c87.2 0 163.5 46.5 205.5 116l-54.6 24.8c-18.6 8.5-27.9 29.6-21.4 49.1L403 258.3c4.2 12.7 14.5 22.4 27.4 25.9L491.8 301C470.7 412 373.2 496 256 496zM32.8 167.7C64.7 87.2 138.8 28 227.9 17.6l19.5 38.9c4.3 8.6 3 19-3.2 26.4l-21 24.5c-10.2 11.9-10.3 29.3-.3 41.3l17.9 21.5c3.1 3.8 3.4 9.2 .7 13.3c-2.8 4.2-8 6-12.7 4.4l-24.2-8.1c-8.4-2.8-17.5-2.1-25.4 1.8c-16.4 8.2-23.1 28.2-14.9 44.7l.7 1.4c3.4 6.7 8.8 12.2 15.6 15.6l45.9 22.9c7.8 3.9 16.4 5.9 25 5.9h48.8c10.6 0 20.8 4.2 28.3 11.7l3.9 3.9c7.5 7.5 11.7 17.7 11.7 28.3v8.3c0 14.4-7.7 27.6-20.2 34.7l-9.1 5.2c-16.5 9.4-28.2 25.3-32.3 43.8l-4.9 22.1c-2.3 10.6-11.7 18.1-22.5 18.1c-12.7 0-23.1-10.3-23.1-23.1v-39c0-14-7.9-26.8-20.4-33c-7.1-3.5-11.6-10.8-11.6-18.7V322.8c0-24.2-15.7-45.6-38.8-52.8L92.4 248.5c-14.5-4.5-26.6-14.8-33.4-28.4L32.8 167.7zM434.6 268.8c-7.7-2.1-13.9-8-16.5-15.6l-17.5-52.4c-3.9-11.7 1.7-24.4 12.8-29.4L469.4 146c17 33 26.6 70.4 26.6 110c0 9.8-.6 19.5-1.7 29.1l-59.6-16.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]
    };
    const ro = ""
      , ao = ""
      , so = ""
      , io = ""
      , lo = ""
      , co = ""
      , Tt = `.v10 .select-popper{background-color:var(--bs-border-color)!important;color:var(--bs-body-color)!important;border:1px solid var(--bs-border-color)!important}.v10 .select-popper .el-select-dropdown__item{color:var(--bs-body-color)!important}.v10 .select-popper .el-select-dropdown__item.selected{color:var(--color-privacy)!important}.v10 .el-popper__arrow:before{background:var(--bs-border-color)!important;border:1px solid var(--bs-border-color)!important}
`
      , jt = {
        inject: ["appSettings", "$http", "ready"],
        emits: ["country-updated"],
        props: {
            defaultCountry: String,
            allCountries: {
                type: Boolean,
                default: !1
            },
            disabledCountry: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            ElFormItem: D.ElFormItem,
            ElSelect: D.ElSelect,
            ElOption: D.ElOption
        },
        setup() {
            const {t: e} = B()
              , t = H();
            return {
                t: e,
                faEarthAmericas: Vt,
                personalDataStore: t
            }
        },
        data() {
            return {
                disabled: !1,
                optionsCountries: []
            }
        },
        computed: {
            allDataLoaded() {
                return this.personalDataStore.loaded && this.personalDataStore.countryLoaded
            }
        },
        watch: {
            allDataLoaded: {
                immediate: !0,
                async handler(e, t) {
                    e && !t && (this.disabled = this.personalDataStore.isBrazilCountry && this.personalDataStore.hasDocumentId)
                }
            },
            defaultCountry: {
                immediate: !0,
                handler(e) {
                    e === "BR" && (this.personalDataStore.countryModel.country = e)
                }
            },
            "personalDataStore.countryModel.country": {
                immediate: !0,
                handler(e) {
                    this.$emit("country-updated", {
                        country: e
                    })
                }
            }
        },
        mounted() {
            this.ready && this.getAllCountries()
        },
        methods: {
            async getAllCountries() {
                try {
                    const e = O(this.appSettings.ENDPOINT_API_UTIL, "/location/getallcountries")
                      , t = await this.$http.get(e);
                    this.optionsCountries = (t == null ? void 0 : t.data) || []
                } catch (e) {
                    console.error(e)
                }
            }
        }
    }
      , Lt = {
        class: "col-12 mt-3"
    };
    function Ft(e, t, n, o, a, s) {
        const i = r.resolveComponent("el-option")
          , l = r.resolveComponent("font-awesome-icon")
          , d = r.resolveComponent("el-select")
          , u = r.resolveComponent("el-form-item");
        return r.openBlock(),
        r.createElementBlock("div", Lt, [r.createVNode(u, {
            prop: "country",
            class: "form-group",
            label: o.t("personalAddress.country")
        }, {
            default: r.withCtx( () => [r.createVNode(d, {
                modelValue: o.personalDataStore.countryModel.country,
                "onUpdate:modelValue": t[0] || (t[0] = c => o.personalDataStore.countryModel.country = c),
                filterable: "",
                size: "large",
                "popper-class": "select-popper",
                teleported: !1,
                disabled: a.disabled || n.disabledCountry,
                placeholder: o.t("personalAddress.country")
            }, {
                prefix: r.withCtx( () => [r.createVNode(l, {
                    class: "icon-font",
                    icon: o.faEarthAmericas
                }, null, 8, ["icon"])]),
                default: r.withCtx( () => [(r.openBlock(!0),
                r.createElementBlock(r.Fragment, null, r.renderList(a.optionsCountries, (c, m) => (r.openBlock(),
                r.createBlock(i, {
                    label: c,
                    key: m,
                    value: m
                }, null, 8, ["label", "value"]))), 128))]),
                _: 1
            }, 8, ["modelValue", "disabled", "placeholder"])]),
            _: 1
        }, 8, ["label"])])
    }
    const Oe = L(jt, [["render", Ft], ["styles", [Tt]]])
      , Bt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Oe
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Rt = `.el-dialog__body{padding-top:0;padding-bottom:0}.el-form-item__label{font-size:12.8px!important}
`
      , Ut = {
        inject: ["locale"],
        components: {
            ElButton: D.ElButton,
            ElDialog: D.ElDialog,
            ElInput: D.ElInput,
            ElFormItem: D.ElFormItem,
            AlertText: ie
        },
        emits: ["update:modelValue"],
        props: {
            modelValue: Boolean,
            email: String,
            currentCountry: String
        },
        setup() {
            const {t: e} = B()
              , t = H();
            return {
                t: e,
                faEnvelope: P.faEnvelope,
                personalDataStore: t
            }
        },
        data() {
            return {
                loading: !1,
                remainingTime: 0,
                interval: null,
                type: null
            }
        },
        methods: {
            close() {
                this.$emit("update:modelValue", !1),
                this.type = null
            },
            async send() {
                this.loading = !0,
                this.remainingTime = 30,
                this.type = await this.personalDataStore.sendRecoveryPassword(this.currentCountry, this.locale),
                this.interval = setInterval( () => {
                    this.remainingTime > 0 ? this.remainingTime -= 1 : this.loading = !1
                }
                , 1e3)
            }
        }
    }
      , Ht = {
        class: "text-center mb-3"
    }
      , $t = ["innerHTML"]
      , qt = {
        class: "dialog-footer"
    };
    function Wt(e, t, n, o, a, s) {
        const i = r.resolveComponent("font-awesome-icon")
          , l = r.resolveComponent("el-input")
          , d = r.resolveComponent("el-form-item")
          , u = r.resolveComponent("el-button")
          , c = r.resolveComponent("AlertText")
          , m = r.resolveComponent("el-dialog");
        return r.openBlock(),
        r.createBlock(m, {
            "lock-scroll": "",
            width: "100%",
            style: {
                "max-width": "400px"
            },
            title: o.t("title.recoveryPassword"),
            modelValue: n.modelValue,
            "align-center": !0,
            "onUpdate:modelValue": t[0] || (t[0] = y => s.close())
        }, {
            footer: r.withCtx( () => [r.createElementVNode("div", qt, [r.createVNode(u, {
                class: "btn-primary mt-1 mt-sm-0",
                style: {
                    height: "42px"
                },
                disabled: a.loading,
                loading: a.loading,
                onClick: s.send
            }, {
                default: r.withCtx( () => [r.createElementVNode("span", null, r.toDisplayString(a.loading ? `${a.remainingTime} seg` : o.t("base.btnSend")), 1)]),
                _: 1
            }, 8, ["disabled", "loading", "onClick"]), r.createVNode(u, {
                class: "btn-secondary mt-1 mt-sm-0",
                style: {
                    height: "42px"
                },
                onClick: s.close
            }, {
                default: r.withCtx( () => [r.createElementVNode("span", null, r.toDisplayString(o.t("base.btnCancel")), 1)]),
                _: 1
            }, 8, ["onClick"])])]),
            default: r.withCtx( () => [r.createElementVNode("div", Ht, [r.createElementVNode("span", {
                innerHTML: o.t("information.recoveryPassword")
            }, null, 8, $t)]), r.createVNode(d, {
                class: "form-group",
                label: o.t("personalData.email")
            }, {
                default: r.withCtx( () => [r.createVNode(l, {
                    placeholder: n.email,
                    disabled: !0
                }, {
                    prefix: r.withCtx( () => [r.createVNode(i, {
                        icon: o.faEnvelope
                    }, null, 8, ["icon"])]),
                    _: 1
                }, 8, ["placeholder"])]),
                _: 1
            }, 8, ["label"]), a.type ? (r.openBlock(),
            r.createBlock(c, {
                key: 0,
                type: a.type
            }, {
                default: r.withCtx( () => [r.createTextVNode(r.toDisplayString(a.type == "success" ? o.t("alertText.sentEmail") : o.t("alertText.errorEmail")), 1)]),
                _: 1
            }, 8, ["type"])) : r.createCommentVNode("", !0)]),
            _: 1
        }, 8, ["title", "modelValue"])
    }
    const Me = L(Ut, [["render", Wt], ["styles", [Rt]]])
      , Yt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Me
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Jt = `.link{color:#f56c6c;text-decoration:underline;cursor:pointer}
`
      , Kt = {
        emits: ["validate-document"],
        components: {
            ElFormItem: D.ElFormItem,
            ElInput: D.ElInput,
            ModalRecoveryPassword: Me
        },
        props: {
            disabledField: Boolean,
            inputLabel: String,
            currentCountry: String
        },
        setup() {
            const {t: e} = B()
              , t = H();
            return {
                t: e,
                personalDataStore: t,
                faIdCard: Pe
            }
        },
        directives: {
            maska: xe
        },
        data() {
            return {
                masks: Ee,
                disabled: !1,
                showDialog: !1,
                email: ""
            }
        },
        computed: {
            allDataLoaded() {
                return this.personalDataStore.loaded && this.personalDataStore.countryLoaded
            },
            isCNPJ() {
                return this.personalDataStore.isDocumentTypeCnpj(this.personalDataStore.countryModel.country)
            },
            formModel() {
                return this.personalDataStore.model
            },
            documentInputLabel() {
                const e = this.inputLabel || this.t("personalData.documentId");
                return this.personalDataStore.isBrazilCountry && this.isCNPJ ? "CNPJ" : e
            }
        },
        methods: {
            openModalRecoveryPassword() {
                this.showDialog = !0
            },
            async callValidateDocument() {
                this.email = await this.personalDataStore.validateDocumentInUse(this.currentCountry),
                this.email && this.$emit("validate-document")
            }
        }
    }
      , Gt = {
        class: "col-12"
    }
      , Zt = ["innerHTML"]
      , Xt = {
        class: "el-form-item__error"
    }
      , Qt = {
        key: 0
    }
      , en = {
        key: 1
    };
    function tn(e, t, n, o, a, s) {
        const i = r.resolveComponent("font-awesome-icon")
          , l = r.resolveComponent("el-input")
          , d = r.resolveComponent("el-form-item")
          , u = r.resolveComponent("ModalRecoveryPassword")
          , c = r.resolveDirective("maska");
        return r.openBlock(),
        r.createElementBlock(r.Fragment, null, [r.createElementVNode("div", Gt, [r.createVNode(d, {
            class: "form-group",
            prop: "documentID"
        }, {
            label: r.withCtx( () => [r.createElementVNode("span", {
                innerHTML: s.documentInputLabel
            }, null, 8, Zt)]),
            error: r.withCtx(m => [r.createElementVNode("div", Xt, [m.error && m.error.includes("ACTION_MODAL") ? (r.openBlock(),
            r.createElementBlock("span", Qt, [r.createTextVNode(r.toDisplayString(m.error.replace("ACTION_MODAL", "")) + " ", 1), r.createElementVNode("span", {
                class: "link",
                onClick: t[1] || (t[1] = (...y) => s.openModalRecoveryPassword && s.openModalRecoveryPassword(...y))
            }, r.toDisplayString(o.t("action.clickHere")), 1)])) : (r.openBlock(),
            r.createElementBlock("span", en, r.toDisplayString(m.error), 1))])]),
            default: r.withCtx( () => [r.withDirectives((r.openBlock(),
            r.createBlock(l, {
                modelValue: s.formModel.documentID,
                "onUpdate:modelValue": t[0] || (t[0] = m => s.formModel.documentID = m),
                size: "large",
                maxlength: 14,
                disabled: n.disabledField,
                "data-maska": o.personalDataStore.isBrazilCountry ? a.masks.cpf.value : "",
                placeholder: o.personalDataStore.isBrazilCountry ? "000.000.000-00" : "000 000 000",
                formatter: o.personalDataStore.isBrazilCountry ? m => `${m}`.replace(/[^\d/.-]/g, "") : m => `${m}`.replace(/[^\w]/g, ""),
                onBlur: s.callValidateDocument
            }, {
                prefix: r.withCtx( () => [r.createVNode(i, {
                    icon: o.faIdCard
                }, null, 8, ["icon"])]),
                _: 1
            }, 8, ["modelValue", "disabled", "data-maska", "placeholder", "formatter", "onBlur"])), [[c]])]),
            _: 1
        })]), r.createVNode(u, {
            modelValue: a.showDialog,
            "onUpdate:modelValue": t[2] || (t[2] = m => a.showDialog = m),
            email: a.email,
            currentCountry: n.currentCountry
        }, null, 8, ["modelValue", "email", "currentCountry"])], 64)
    }
    const Ae = L(Kt, [["render", tn], ["styles", [Jt]]])
      , nn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ae
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , on = {
        inject: ["appSettings", "$http", "ready", "tokenRulesEngine"],
        emits: ["update:document-label", "update:show-document-type-input"],
        props: {
            currentCountry: String
        },
        components: {
            ElFormItem: D.ElFormItem,
            ElSelect: D.ElSelect,
            ElOption: D.ElOption
        },
        setup() {
            const {t: e} = B()
              , t = H()
              , n = Ie();
            return {
                t: e,
                personalDataStore: t,
                authStore: n,
                faIdCard: Pe
            }
        },
        data() {
            return {
                documentTypes: [],
                showInput: !1
            }
        },
        computed: {
            disableInput() {
                let e = !1;
                return (this.documentTypes.length <= 1 || this.authStore.isCreator) && (e = !0),
                e
            },
            formModel() {
                return this.personalDataStore.model
            }
        },
        watch: {
            currentCountry: {
                immediate: !0,
                async handler(e, t) {
                    e && (e !== t ? await this.getCountryDocumentTypes(!0) : await this.getCountryDocumentTypes())
                }
            }
        },
        methods: {
            async getCountryDocumentTypes(e=!1) {
                var t;
                try {
                    this.loading = !0;
                    const n = O(this.appSettings.ENDPOINT_API_RULES_ENGINE, "rulesengine/documentCountriesAllowed")
                      , o = {
                        countryCode: this.currentCountry
                    }
                      , a = await this.$http.get(n, {
                        params: o
                    });
                    (t = a == null ? void 0 : a.data) != null && t.length ? (this.documentTypes = a.data.map(s => s.documentType),
                    this.documentTypes.length === 1 ? (this.showInput = !1,
                    this.formModel.documentType = this.documentTypes[0],
                    this.$emit("update:document-label", this.documentTypes[0]),
                    this.$emit("update:show-document-type-input", !1)) : (this.personalDataStore.model.documentType = this.personalDataStore.model.documentType && !e ? this.personalDataStore.model.documentType : this.documentTypes[0],
                    this.$emit("update:document-label", null),
                    this.showInput = !0,
                    this.$emit("update:show-document-type-input", !0))) : (this.$emit("update:document-label", null),
                    this.formModel.documentType = null,
                    this.showInput = !1,
                    this.$emit("update:show-document-type-input", !1))
                } catch (n) {
                    console.error(n)
                } finally {
                    this.loading = !1
                }
            }
        }
    }
      , rn = {
        key: 0,
        class: "col-12 col-sm-6"
    };
    function an(e, t, n, o, a, s) {
        const i = r.resolveComponent("el-option")
          , l = r.resolveComponent("font-awesome-icon")
          , d = r.resolveComponent("el-select")
          , u = r.resolveComponent("el-form-item");
        return a.showInput ? (r.openBlock(),
        r.createElementBlock("div", rn, [r.createVNode(u, {
            prop: "documentType",
            class: "form-group",
            label: o.t("personalData.documentType")
        }, {
            default: r.withCtx( () => [r.createVNode(d, {
                modelValue: s.formModel.documentType,
                "onUpdate:modelValue": t[0] || (t[0] = c => s.formModel.documentType = c),
                size: "large",
                loading: e.loading,
                teleported: !1,
                disabled: s.disableInput,
                placeholder: o.t("personalData.documentType")
            }, {
                prefix: r.withCtx( () => [r.createVNode(l, {
                    class: "icon-font",
                    icon: o.faIdCard
                }, null, 8, ["icon"])]),
                default: r.withCtx( () => [(r.openBlock(!0),
                r.createElementBlock(r.Fragment, null, r.renderList(a.documentTypes, (c, m) => (r.openBlock(),
                r.createBlock(i, {
                    label: c,
                    key: m,
                    value: c
                }, null, 8, ["label", "value"]))), 128))]),
                _: 1
            }, 8, ["modelValue", "loading", "disabled", "placeholder"])]),
            _: 1
        }, 8, ["label"])])) : r.createCommentVNode("", !0)
    }
    const Ve = L(on, [["render", an]])
      , sn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ve
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , ln = `.el-loading-mask{z-index:2!important}
`
      , cn = {
        inject: ["appSettings", "$http", "ready", "token"],
        emits: ["country-updated"],
        components: {
            ElForm: D.ElForm,
            ElFormItem: D.ElFormItem,
            ElInput: D.ElInput,
            CountryInput: Oe,
            DocumentInput: Ae,
            DocumentTypeInput: Ve
        },
        props: {
            disabled: Boolean,
            isFreeProfile: Boolean,
            defaultCountry: String
        },
        setup() {
            const {t: e} = B()
              , t = r.ref()
              , n = Ie()
              , o = H();
            return {
                t: e,
                formRef: t,
                authStore: n,
                personalDataStore: o,
                faFileSignature: At,
                faCalendarDays: Mt
            }
        },
        directives: {
            maska: xe,
            loading: D.vLoading
        },
        data() {
            return {
                masks: Ee,
                loading: !1,
                documentLabel: null,
                showDocumentTypeInput: !1,
                disabledField: {
                    documentID: !1
                },
                formRules: {
                    country: [],
                    documentID: [$.requiredField],
                    fullName: [$.requiredField],
                    birthDate: [$.requiredField]
                }
            }
        },
        computed: {
            isLoading() {
                return !this.isFreeProfile && !this.allDataLoaded || this.loading
            },
            formModel() {
                return this.personalDataStore.model
            },
            recoveryModel() {
                return this.personalDataStore.recoveryModel
            },
            validateDocuments() {
                return this.personalDataStore.validateDocuments
            },
            allDataLoaded() {
                return this.personalDataStore.loaded && this.personalDataStore.countryLoaded
            },
            disableCountryInput() {
                return this.authStore.isCreator
            }
        },
        watch: {
            loading(e) {
                this.$emit("loading", e)
            },
            allDataLoaded: {
                immediate: !0,
                async handler(e, t) {
                    e && !t && await this.initForm({
                        disableFields: !0
                    })
                }
            },
            "personalDataStore.countryModel.country": {
                immediate: !0,
                async handler(e, t) {
                    t && (e == "BR" && t != "BR" && (this.personalDataStore.model.documentID = null),
                    await this.initForm({
                        disableFields: !1,
                        runValidation: !1
                    }))
                }
            }
        },
        mounted() {
            this.isFreeProfile ? this.updateDocumentIdRule() : this.loadData()
        },
        methods: {
            async loadData({force: e}={}) {
                try {
                    this.loading = !0,
                    await this.personalDataStore.loadProfileAddressIfNotLoaded({
                        force: e
                    }),
                    await this.personalDataStore.getInfoIfNotLoaded({
                        force: e
                    })
                } finally {
                    this.loading = !1
                }
            },
            async initForm({disableFields: e, runValidation: t=!0}) {
                var n, o;
                this.updateDocumentIdRule(),
                this.updateFieldVisibility(),
                await this.validateAntiFraud(e),
                t && ((n = this.formRef) == null || n.clearValidate(),
                await ((o = this.formRef) == null ? void 0 : o.validate()))
            },
            updateDocumentIdRule() {
                var e;
                this.formRules.documentID = [$.requiredField],
                this.personalDataStore.isBrazilCountry && !this.isCNPJ && this.formRules.documentID.push($.validateCPF(), $.validateSameCpfInUse({
                    validateDocuments: this.validateDocuments
                })),
                (e = this.formRef) == null || e.clearValidate()
            },
            async validateAntiFraud() {
                try {
                    if (this.isCNPJ || !this.personalDataStore.isBrazilCountry || !this.formModel.documentID)
                        return;
                    const e = O(this.appSettings.ENDPOINT_API_ANTI_FRAUD_SAFE_CHECK, "/api/BureauUser/CheckPersonalInfo")
                      , t = {
                        document: this.formModel.documentID,
                        fullName: this.formModel.fullName,
                        birthDate: A(this.formModel.birthDate, "DD/MM/YYYY").format("DD/MM/YYYY HH:mm:ss")
                    }
                      , n = await this.$http.post(e, t);
                    return n.data ? n.data.isValidateDate && n.data.isValidateName : void 0
                } catch (e) {
                    return console.error(e),
                    !1
                }
            },
            updateFieldVisibility() {
                const e = this.personalDataStore.model;
                this.personalDataStore.isBrazilCountry ? this.disabledField.documentID = e.documentID || this.isCNPJ : this.disabledField.documentID = !1
            },
            async validate() {
                var t, n, o;
                if (await ((t = this.formRef) == null ? void 0 : t.validate(a => a)))
                    return await this.validateAntiFraud(!1),
                    (n = this.formRef) == null || n.clearValidate(),
                    await ((o = this.formRef) == null ? void 0 : o.validate(a => a))
            },
            async submitForm() {
                var t;
                this.loading = !0;
                const e = await this.personalDataStore.submitForm();
                return this.loading = !1,
                e ? !0 : (await ((t = this.formRef) == null ? void 0 : t.validate()),
                !1)
            },
            async validateDocumentId() {
                var e;
                await ((e = this.formRef) == null ? void 0 : e.validate())
            },
            clearForm() {
                this.formModel.documentID = this.recoveryModel.documentID
            },
            getFormData() {
                return this.formModel
            }
        }
    }
      , un = {
        class: "row"
    }
      , dn = {
        class: "col-12"
    }
      , mn = {
        class: "col-12 col-sm-6"
    }
      , pn = {
        class: "col-12 col-sm-6"
    };
    function fn(e, t, n, o, a, s) {
        const i = r.resolveComponent("CountryInput")
          , l = r.resolveComponent("DocumentTypeInput")
          , d = r.resolveComponent("DocumentInput")
          , u = r.resolveComponent("font-awesome-icon")
          , c = r.resolveComponent("el-input")
          , m = r.resolveComponent("el-form-item")
          , y = r.resolveComponent("el-form")
          , g = r.resolveDirective("maska")
          , b = r.resolveDirective("loading");
        return r.withDirectives((r.openBlock(),
        r.createBlock(y, {
            ref: "formRef",
            "scroll-to-error": "",
            "label-position": "top",
            "require-asterisk-position": "right",
            model: s.formModel,
            rules: a.formRules,
            disabled: n.disabled,
            "validate-on-rule-change": !1
        }, {
            default: r.withCtx( () => [r.createElementVNode("div", un, [r.createElementVNode("div", dn, [r.createVNode(i, {
                disabledCountry: s.disableCountryInput,
                onCountryUpdated: t[0] || (t[0] = f => e.$emit("country-updated", f))
            }, null, 8, ["disabledCountry"])]), r.createVNode(l, {
                currentCountry: o.personalDataStore.countryModel.country,
                "onUpdate:documentLabel": t[1] || (t[1] = f => a.documentLabel = f),
                "onUpdate:showDocumentTypeInput": t[2] || (t[2] = f => a.showDocumentTypeInput = f)
            }, null, 8, ["currentCountry"]), r.createElementVNode("div", {
                class: r.normalizeClass(["col-12", a.showDocumentTypeInput ? "col-sm-6" : "col-sm-12"])
            }, [r.createVNode(d, {
                inputLabel: a.documentLabel,
                disabledField: a.disabledField.documentID,
                currentCountry: o.personalDataStore.countryModel.country,
                onValidateDocument: s.validateDocumentId
            }, null, 8, ["inputLabel", "disabledField", "currentCountry", "onValidateDocument"])], 2), r.createElementVNode("div", mn, [r.createVNode(m, {
                prop: "fullName",
                class: "form-group",
                label: o.t("personalData.fullName")
            }, {
                default: r.withCtx( () => [r.createVNode(c, {
                    modelValue: s.formModel.fullName,
                    "onUpdate:modelValue": t[3] || (t[3] = f => s.formModel.fullName = f),
                    size: "large",
                    maxlength: 100,
                    disabled: a.disabledField.fullName,
                    placeholder: o.t("personalData.fullName"),
                    formatter: f => `${f}`.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "")
                }, {
                    prefix: r.withCtx( () => [r.createVNode(u, {
                        icon: o.faFileSignature
                    }, null, 8, ["icon"])]),
                    _: 1
                }, 8, ["modelValue", "disabled", "placeholder", "formatter"])]),
                _: 1
            }, 8, ["label"])]), r.createElementVNode("div", pn, [r.createVNode(m, {
                label: o.t("personalData.birthDate"),
                prop: "birthDate",
                class: "form-group"
            }, {
                default: r.withCtx( () => [r.withDirectives((r.openBlock(),
                r.createBlock(c, {
                    modelValue: s.formModel.birthDate,
                    "onUpdate:modelValue": t[4] || (t[4] = f => s.formModel.birthDate = f),
                    size: "large",
                    placeholder: "dd/mm/yyyy",
                    "data-maska": a.masks.calendar.value,
                    disabled: a.disabledField.birthDate,
                    maxlength: a.masks.calendar.value.length,
                    formatter: f => `${f}`.replace(/[^\d/]/g, "")
                }, {
                    prefix: r.withCtx( () => [r.createVNode(u, {
                        icon: o.faCalendarDays
                    }, null, 8, ["icon"])]),
                    _: 1
                }, 8, ["modelValue", "data-maska", "disabled", "maxlength", "formatter"])), [[g]])]),
                _: 1
            }, 8, ["label"])])])]),
            _: 1
        }, 8, ["model", "rules", "disabled"])), [[b, s.isLoading]])
    }
    const Te = L(cn, [["render", fn], ["styles", [ln]]])
      , hn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Te
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , yn = `.spd-dialog-form{max-width:500px;background-color:var(--el-color-white)!important}.spd-dialog-form .el-dialog__header{margin:0;padding:14px 16px;border-bottom:1px solid #eeeeee}.spd-dialog-form .el-dialog__header .el-dialog__title{text-transform:uppercase;font-size:14px;font-weight:600}.v10 .spd-dialog-form{background-color:var(--bs-body-bg)!important}.v10 .spd-dialog-form .el-dialog__header{border-bottom:1px solid var(--bs-border-color)}.v10 .spd-dialog-form .el-dialog__title{color:var(--bs-body-color)}.el-input__prefix svg{margin-right:0!important}.v10 .el-select .el-input .el-input__wrapper{box-shadow:none!important}.v10 .el-select .el-input .el-input__wrapper .el-input__inner{border:none!important}.v10 .el-input .el-input__wrapper .el-input__inner{color:var(--bs-body-color)!important;border:none!important}.icon-font{margin-top:20px!important;width:16.63px!important;height:19px!important}.el-select .el-input{height:60px!important}.el-select .el-input__inner{font-size:16px!important;padding:20px 0 0 3px!important}.el-textarea__inner{padding:30px 20px!important}.el-input__suffix{position:absolute!important;right:10px!important}.btn+.btn{margin-left:10px!important}.form-grid{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:var(--grid-template-areas)}.form-grid .form-item-personal{grid-area:personal}.form-grid .el-form.separator{width:100%;margin-bottom:24px;padding-bottom:6px;border-bottom:1px solid var(--bs-border-color)}.el-form .form-group .input-inner,.el-form .form-group>.el-form-item__content>.el-input>.el-input__wrapper>input.el-input__inner{border-radius:inherit!important}.confirmation-dialog{max-width:400px}.confirmation-dialog .el-dialog__body{padding-top:8px;padding-bottom:8px}
`
      , gn = {
        name: "index",
        components: {
            PersonalData: Te,
            ElButton: D.ElButton,
            ElDialog: D.ElDialog,
            AlertText: ie
        },
        inject: ["token"],
        emits: ["country-updated", "close", "follow-creator"],
        setup() {
            const e = se()
              , t = H()
              , {t: n} = B();
            return {
                t: n,
                appStore: e,
                personalDataStore: t
            }
        },
        props: {
            view: Array,
            confirmAction: {
                type: Object,
                default: () => ({
                    text: "",
                    visible: !0
                })
            },
            cancelAction: {
                type: Object,
                default: () => ({
                    text: "",
                    visible: !1
                })
            },
            showAlerts: {
                type: Boolean,
                default: !0
            },
            showAboutInput: {
                type: Boolean,
                default: !0
            },
            disabledCountry: {
                type: Boolean,
                default: !1
            },
            showDialog: Boolean,
            defaultCountry: String,
            v10Enabled: Boolean
        },
        data() {
            return {
                disabled: !1,
                sending: !1,
                viewData: {
                    personal: {
                        priority: 1,
                        loading: !1
                    }
                },
                confirmationDialogTitle: "",
                confirmationDialogText: ""
            }
        },
        computed: {
            isFreeProfile() {
                return !this.appStore.token
            },
            loading() {
                for (const e in this.viewData)
                    if (this.viewData[e].loading)
                        return !0;
                return !1
            },
            viewAsPriority() {
                return he.sortBy(this.view, e => this.viewData[e].priority)
            },
            lastView() {
                return this.view[this.view.length - 1]
            },
            alertText() {
                return this.appStore.alert.type === "success" ? this.appStore.alert.text || this.t("alertText.success") : this.appStore.alert.text || this.t("alertText.error")
            }
        },
        methods: {
            async validateAndSubmit() {
                this.sending = !0;
                try {
                    return await this.submitAll() ? (this.appStore.showAlertSuccess(),
                    this.$emit("follow-creator"),
                    !0) : (this.sending = !1,
                    this.appStore.showAlertError(),
                    !1)
                } catch {
                    this.sending = !1
                }
            },
            async submitAll() {
                let e = !1;
                return e = await this.personalDataStore.submitForm(),
                e
            },
            clearForm() {
                var e;
                for (const t of this.view) {
                    const n = this.$refs[t];
                    (e = n.clearForm) == null || e.call(n)
                }
            },
            closeDialog() {
                this.sending = !1,
                this.$emit("close"),
                this.appStore.clearAlert()
            }
        }
    }
      , bn = {
        class: "form-grouping"
    }
      , _n = {
        class: "d-flex justify-content-end"
    };
    function vn(e, t, n, o, a, s) {
        const i = r.resolveComponent("PersonalData")
          , l = r.resolveComponent("AlertText")
          , d = r.resolveComponent("el-button")
          , u = r.resolveComponent("el-dialog");
        return r.openBlock(),
        r.createElementBlock("main", null, [r.createVNode(u, {
            persistent: "",
            width: "80%",
            class: "spd-dialog-form",
            "show-close": !1,
            "align-center": !0,
            "model-value": n.showDialog,
            "close-on-click-modal": !1,
            title: e.title || o.t("title.personalConfigPerfil"),
            onClose: t[6] || (t[6] = c => s.closeDialog())
        }, r.createSlots({
            default: r.withCtx( () => [r.createElementVNode("div", bn, [r.createElementVNode("div", {
                class: "form-grid",
                style: r.normalizeStyle(e.formGridStyle)
            }, [n.view.includes("personal") ? (r.openBlock(),
            r.createBlock(i, {
                key: 0,
                ref: "personal",
                class: r.normalizeClass(["form-item-personal", {
                    separator: s.lastView != "personal"
                }]),
                disabled: a.sending,
                isFreeProfile: s.isFreeProfile,
                defaultCountry: n.defaultCountry,
                onLoading: t[0] || (t[0] = c => a.viewData.personal.loading = c),
                onCountryUpdated: t[1] || (t[1] = c => e.$emit("country-updated", c))
            }, null, 8, ["class", "disabled", "isFreeProfile", "defaultCountry"])) : r.createCommentVNode("", !0)], 4)]), o.appStore.alert.show && n.showAlerts ? (r.openBlock(),
            r.createBlock(l, {
                key: 0,
                type: o.appStore.alert.type
            }, {
                default: r.withCtx( () => [r.createTextVNode(r.toDisplayString(s.alertText), 1)]),
                _: 1
            }, 8, ["type"])) : r.createCommentVNode("", !0)]),
            _: 2
        }, [n.v10Enabled ? {
            name: "footer",
            fn: r.withCtx( () => [r.createElementVNode("div", _n, [r.createVNode(d, {
                type: "primary",
                loading: s.loading || a.sending,
                onClick: t[2] || (t[2] = c => s.validateAndSubmit())
            }, {
                default: r.withCtx( () => [r.createElementVNode("span", null, r.toDisplayString(n.confirmAction.text || o.t("base.btnSend")), 1)]),
                _: 1
            }, 8, ["loading"]), r.createVNode(d, {
                type: "secondary",
                loading: s.loading || a.sending,
                onClick: t[3] || (t[3] = c => s.closeDialog())
            }, {
                default: r.withCtx( () => [r.createElementVNode("span", null, r.toDisplayString(n.cancelAction.text || o.t("base.btnCancel")), 1)]),
                _: 1
            }, 8, ["loading"])])]),
            key: "0"
        } : {
            name: "footer",
            fn: r.withCtx( () => [r.createElementVNode("div", {
                class: "d-flex justify-content-end"
            }, [r.createVNode(d, {
                type: "primary",
                class: "btn-primary",
                loading: s.loading || a.sending,
                onClick: t[4] || (t[4] = c => s.validateAndSubmit())
            }, {
                default: r.withCtx( () => [r.createElementVNode("span", null, r.toDisplayString(n.confirmAction.text || o.t("base.btnSend")), 1)]),
                _: 1
            }, 8, ["loading"]), r.createVNode(d, {
                type: "secondary",
                class: "btn-privacy btn-secondary",
                loading: s.loading || a.sending,
                onClick: t[5] || (t[5] = c => s.closeDialog())
            }, {
                default: r.withCtx( () => [r.createElementVNode("span", null, r.toDisplayString(n.cancelAction.text || o.t("base.btnCancel")), 1)]),
                _: 1
            }, 8, ["loading"])])]),
            key: "1"
        }]), 1032, ["model-value", "title"])])
    }
    const je = L(gn, [["render", vn], ["styles", [yn]]])
      , wn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: je
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Le = rt()
      , Fe = {
        install(e) {
            e.use(Le)
        },
        useProvides(e) {
            const t = e
              , n = () => ({
                global: {
                    instance: t,
                    ready: t.provides.ready,
                    appSettings: t.provides.appSettings,
                    token: t.provides.token,
                    $http: t.provides.$http,
                    locale: t.provides.locale
                }
            });
            Le.use(n)
        }
    }
      , zn = () => {
        const e = r.ref(Ne())
          , t = new ResizeObserver( () => {
            e.value = Ne()
        }
        );
        r.onMounted( () => {
            t.observe(document.body),
            r.provide("isSmallDevice", e)
        }
        ),
        r.onBeforeUnmount( () => {
            t && (t.unobserve(document.body),
            t.disconnect(document.body))
        }
        )
    }
      , Cn = e => {
        r.provide("ready", r.computed( () => e.ready == null ? !0 : J(e.ready))),
        r.provide("appSettings", r.computed( () => {
            const t = Nt(e.appSettings);
            return Pt(t),
            t
        }
        )),
        r.provide("token", r.computed( () => e.token)),
        r.provide("$http", r.computed( () => V.value)),
        r.provide("locale", r.computed( () => e.locale))
    }
      , Dn = ({emit: e}) => {
        const t = r.ref(!1);
        return r.onMounted( () => {
            if (document.readyState === "complete")
                t.value = !0,
                e("ready");
            else {
                const n = window.addEventListener("load", () => {
                    t.value = !0,
                    window.removeEventListener("load", n),
                    e("ready")
                }
                )
            }
        }
        ),
        {
            windowLoaded: t
        }
    }
      , kn = () => {
        const e = r.ref(document.documentElement.getAttribute("data-theme") || "light")
          , t = r.computed( () => e.value)
          , n = o => {
            var a;
            (a = o.detail) != null && a.theme && (e.value = o.detail.theme)
        }
        ;
        return r.onMounted( () => {
            document.addEventListener("theme-changed", n)
        }
        ),
        r.onBeforeUnmount( () => {
            document.removeEventListener("theme-changed", n)
        }
        ),
        {
            theme: t
        }
    }
      , Sn = `@import"https://fonts.googleapis.com/css2?family=Inter&display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/element-plus/2.2.30/index.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css";
`
      , xn = Object.assign({
        beforeMount() {
            this.$emit("before-mount", {
                context: this
            })
        },
        mounted() {
            this.$emit("mounted", {
                context: this,
                el: this.$el
            })
        },
        watch: {
            showDialog: {
                immediate: !0,
                handler(e) {
                    this.showDialogCasted = J(e)
                }
            }
        }
    }, {
        __name: "App.ce",
        props: {
            ready: {
                type: [Boolean, String],
                default: !0
            },
            appSettings: [Object, String],
            token: String,
            locale: String,
            view: String,
            title: String,
            page: {
                type: String,
                default: ""
            },
            showAboutInput: {
                type: Boolean,
                default: !0
            },
            disabledCountry: {
                type: Boolean,
                default: !1
            },
            confirmAction: {
                type: Object,
                default: () => ({
                    text: "",
                    visible: !0
                })
            },
            disabledFieldsAddress: {
                type: Boolean,
                default: !1
            },
            showDialog: {
                type: Boolean,
                default: !1
            },
            defaultCountry: String,
            creatorId: String
        },
        emits: {
            "before-mount": null,
            mounted: null,
            ready: null,
            "country-updated": null,
            close: null,
            "follow-creator": null
        },
        setup(e, {emit: t}) {
            const n = e
              , o = J(n.disabledFieldsAddress)
              , a = J(n.disabledCountry)
              , s = J(n.showAboutInput)
              , i = n.view.split(",").map(y => y == null ? void 0 : y.trim())
              , l = r.getCurrentInstance();
            Cn(n),
            zn();
            const {windowLoaded: d} = Dn({
                emit: t
            });
            nt(n),
            ge.useProvides(l),
            Fe.useProvides(l);
            const u = se()
              , {theme: c} = kn()
              , m = r.ref(document.documentElement.classList.contains("v10"));
            return (y, g) => {
                var b;
                return r.openBlock(),
                r.createElementBlock(r.Fragment, null, [(b = r.unref(u).appSettings) != null && b.PRIVACY_MODULES ? (r.openBlock(),
                r.createBlock(r.resolveDynamicComponent("style"), {
                    key: 0
                }, {
                    default: r.withCtx( () => {
                        var f;
                        return [r.createTextVNode(' @import "' + r.toDisplayString((f = r.unref(u).appSettings) == null ? void 0 : f.PRIVACY_MODULES) + '/styles/privacy.components.css"; ', 1)]
                    }
                    ),
                    _: 1
                })) : r.createCommentVNode("", !0), r.unref(u).ready && r.unref(d) ? (r.openBlock(),
                r.createBlock(je, {
                    key: 1,
                    class: r.normalizeClass(["app-wc", {
                        "dark-mode": r.unref(c) === "dark",
                        v10: m.value
                    }]),
                    createMode: y.castCreateMode,
                    title: e.title,
                    view: r.unref(i),
                    page: e.page,
                    defaultCountry: e.defaultCountry,
                    showAboutInput: r.unref(s),
                    confirmAction: e.confirmAction,
                    disabledCountry: r.unref(a),
                    disabledFieldsAddress: r.unref(o),
                    showDialog: y.showDialogCasted,
                    v10Enabled: m.value,
                    onCountryUpdated: g[0] || (g[0] = f => y.$emit("country-updated", f)),
                    onClose: g[1] || (g[1] = f => y.$emit("close")),
                    onFollowCreator: g[2] || (g[2] = f => y.$emit("follow-creator", e.creatorId))
                }, null, 8, ["class", "createMode", "title", "view", "page", "defaultCountry", "showAboutInput", "confirmAction", "disabledCountry", "disabledFieldsAddress", "showDialog", "v10Enabled"])) : r.createCommentVNode("", !0)], 64)
            }
        }
    })
      , K = L(xn, [["styles", [Sn]]])
      , En = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: K
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    async function In() {
        const e = Object.assign({
            "../App.ce.vue": () => Promise.resolve().then( () => En),
            "../components/Base/AlertText.vue": () => Promise.resolve().then( () => yt),
            "../components/Base/CountryInput.vue": () => Promise.resolve().then( () => Bt),
            "../components/Base/DocumentInput.vue": () => Promise.resolve().then( () => nn),
            "../components/Base/DocumentTypeInput.vue": () => Promise.resolve().then( () => sn),
            "../components/Base/ModalRecoveryPassword.vue": () => Promise.resolve().then( () => Yt),
            "../components/Forms/PersonalForm.vue": () => Promise.resolve().then( () => hn),
            "../components/Index.vue": () => Promise.resolve().then( () => wn)
        })
          , t = [];
        for (const n in e) {
            const o = await e[n]();
            t.push(o.default.styles)
        }
        return [t.flat().join("")]
    }
    function Be(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
    }
    function M(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Be(Object(n), !0).forEach(function(o) {
                E(e, o, n[o])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach(function(o) {
                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
            })
        }
        return e
    }
    function ee(e) {
        return ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        ee(e)
    }
    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Nn(e, t) {
        if (e == null)
            return {};
        var n = {}, o = Object.keys(e), a, s;
        for (s = 0; s < o.length; s++)
            a = o[s],
            !(t.indexOf(a) >= 0) && (n[a] = e[a]);
        return n
    }
    function Pn(e, t) {
        if (e == null)
            return {};
        var n = Nn(e, t), o, a;
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (a = 0; a < s.length; a++)
                o = s[a],
                !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o])
        }
        return n
    }
    function de(e) {
        return On(e) || Mn(e) || An(e) || Vn()
    }
    function On(e) {
        if (Array.isArray(e))
            return me(e)
    }
    function Mn(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
            return Array.from(e)
    }
    function An(e, t) {
        if (e) {
            if (typeof e == "string")
                return me(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor && (n = e.constructor.name),
            n === "Map" || n === "Set")
                return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return me(e, t)
        }
    }
    function me(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++)
            o[n] = e[n];
        return o
    }
    function Vn() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var Tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
      , Re = {
        exports: {}
    };
    (function(e) {
        (function(t) {
            var n = function(p, h, v) {
                if (!u(h) || m(h) || y(h) || g(h) || d(h))
                    return h;
                var z, C = 0, k = 0;
                if (c(h))
                    for (z = [],
                    k = h.length; C < k; C++)
                        z.push(n(p, h[C], v));
                else {
                    z = {};
                    for (var _ in h)
                        Object.prototype.hasOwnProperty.call(h, _) && (z[p(_, v)] = n(p, h[_], v))
                }
                return z
            }
              , o = function(p, h) {
                h = h || {};
                var v = h.separator || "_"
                  , z = h.split || /(?=[A-Z])/;
                return p.split(z).join(v)
            }
              , a = function(p) {
                return b(p) ? p : (p = p.replace(/[\-_\s]+(.)?/g, function(h, v) {
                    return v ? v.toUpperCase() : ""
                }),
                p.substr(0, 1).toLowerCase() + p.substr(1))
            }
              , s = function(p) {
                var h = a(p);
                return h.substr(0, 1).toUpperCase() + h.substr(1)
            }
              , i = function(p, h) {
                return o(p, h).toLowerCase()
            }
              , l = Object.prototype.toString
              , d = function(p) {
                return typeof p == "function"
            }
              , u = function(p) {
                return p === Object(p)
            }
              , c = function(p) {
                return l.call(p) == "[object Array]"
            }
              , m = function(p) {
                return l.call(p) == "[object Date]"
            }
              , y = function(p) {
                return l.call(p) == "[object RegExp]"
            }
              , g = function(p) {
                return l.call(p) == "[object Boolean]"
            }
              , b = function(p) {
                return p = p - 0,
                p === p
            }
              , f = function(p, h) {
                var v = h && "process"in h ? h.process : h;
                return typeof v != "function" ? p : function(z, C) {
                    return v(z, p, C)
                }
            }
              , S = {
                camelize: a,
                decamelize: i,
                pascalize: s,
                depascalize: i,
                camelizeKeys: function(p, h) {
                    return n(f(a, h), p)
                },
                decamelizeKeys: function(p, h) {
                    return n(f(i, h), p, h)
                },
                pascalizeKeys: function(p, h) {
                    return n(f(s, h), p)
                },
                depascalizeKeys: function() {
                    return this.decamelizeKeys.apply(this, arguments)
                }
            };
            e.exports ? e.exports = S : t.humps = S
        }
        )(Tn)
    }
    )(Re);
    var jn = Re.exports
      , Ln = ["class", "style"];
    function Fn(e) {
        return e.split(";").map(function(t) {
            return t.trim()
        }).filter(function(t) {
            return t
        }).reduce(function(t, n) {
            var o = n.indexOf(":")
              , a = jn.camelize(n.slice(0, o))
              , s = n.slice(o + 1).trim();
            return t[a] = s,
            t
        }, {})
    }
    function Bn(e) {
        return e.split(/\s+/).reduce(function(t, n) {
            return t[n] = !0,
            t
        }, {})
    }
    function pe(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (typeof e == "string")
            return e;
        var o = (e.children || []).map(function(d) {
            return pe(d)
        })
          , a = Object.keys(e.attributes || {}).reduce(function(d, u) {
            var c = e.attributes[u];
            switch (u) {
            case "class":
                d.class = Bn(c);
                break;
            case "style":
                d.style = Fn(c);
                break;
            default:
                d.attrs[u] = c
            }
            return d
        }, {
            attrs: {},
            class: {},
            style: {}
        });
        n.class;
        var s = n.style
          , i = s === void 0 ? {} : s
          , l = Pn(n, Ln);
        return r.h(e.tag, M(M(M({}, t), {}, {
            class: a.class,
            style: M(M({}, a.style), i)
        }, a.attrs), l), o)
    }
    var Ue = !1;
    try {
        Ue = !0
    } catch {}
    function Rn() {
        if (!Ue && console && typeof console.error == "function") {
            var e;
            (e = console).error.apply(e, arguments)
        }
    }
    function G(e, t) {
        return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? E({}, e, t) : {}
    }
    function Un(e) {
        var t, n = (t = {
            "fa-spin": e.spin,
            "fa-pulse": e.pulse,
            "fa-fw": e.fixedWidth,
            "fa-border": e.border,
            "fa-li": e.listItem,
            "fa-inverse": e.inverse,
            "fa-flip": e.flip === !0,
            "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
            "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
        },
        E(t, "fa-".concat(e.size), e.size !== null),
        E(t, "fa-rotate-".concat(e.rotation), e.rotation !== null),
        E(t, "fa-pull-".concat(e.pull), e.pull !== null),
        E(t, "fa-swap-opacity", e.swapOpacity),
        E(t, "fa-bounce", e.bounce),
        E(t, "fa-shake", e.shake),
        E(t, "fa-beat", e.beat),
        E(t, "fa-fade", e.fade),
        E(t, "fa-beat-fade", e.beatFade),
        E(t, "fa-flash", e.flash),
        E(t, "fa-spin-pulse", e.spinPulse),
        E(t, "fa-spin-reverse", e.spinReverse),
        t);
        return Object.keys(n).map(function(o) {
            return n[o] ? o : null
        }).filter(function(o) {
            return o
        })
    }
    function He(e) {
        if (e && ee(e) === "object" && e.prefix && e.iconName && e.icon)
            return e;
        if (P.parse.icon)
            return P.parse.icon(e);
        if (e === null)
            return null;
        if (ee(e) === "object" && e.prefix && e.iconName)
            return e;
        if (Array.isArray(e) && e.length === 2)
            return {
                prefix: e[0],
                iconName: e[1]
            };
        if (typeof e == "string")
            return {
                prefix: "fas",
                iconName: e
            }
    }
    var Hn = r.defineComponent({
        name: "FontAwesomeIcon",
        props: {
            border: {
                type: Boolean,
                default: !1
            },
            fixedWidth: {
                type: Boolean,
                default: !1
            },
            flip: {
                type: [Boolean, String],
                default: !1,
                validator: function(t) {
                    return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1
                }
            },
            icon: {
                type: [Object, Array, String],
                required: !0
            },
            mask: {
                type: [Object, Array, String],
                default: null
            },
            listItem: {
                type: Boolean,
                default: !1
            },
            pull: {
                type: String,
                default: null,
                validator: function(t) {
                    return ["right", "left"].indexOf(t) > -1
                }
            },
            pulse: {
                type: Boolean,
                default: !1
            },
            rotation: {
                type: [String, Number],
                default: null,
                validator: function(t) {
                    return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1
                }
            },
            swapOpacity: {
                type: Boolean,
                default: !1
            },
            size: {
                type: String,
                default: null,
                validator: function(t) {
                    return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1
                }
            },
            spin: {
                type: Boolean,
                default: !1
            },
            transform: {
                type: [String, Object],
                default: null
            },
            symbol: {
                type: [Boolean, String],
                default: !1
            },
            title: {
                type: String,
                default: null
            },
            inverse: {
                type: Boolean,
                default: !1
            },
            bounce: {
                type: Boolean,
                default: !1
            },
            shake: {
                type: Boolean,
                default: !1
            },
            beat: {
                type: Boolean,
                default: !1
            },
            fade: {
                type: Boolean,
                default: !1
            },
            beatFade: {
                type: Boolean,
                default: !1
            },
            flash: {
                type: Boolean,
                default: !1
            },
            spinPulse: {
                type: Boolean,
                default: !1
            },
            spinReverse: {
                type: Boolean,
                default: !1
            }
        },
        setup: function(t, n) {
            var o = n.attrs
              , a = r.computed(function() {
                return He(t.icon)
            })
              , s = r.computed(function() {
                return G("classes", Un(t))
            })
              , i = r.computed(function() {
                return G("transform", typeof t.transform == "string" ? P.parse.transform(t.transform) : t.transform)
            })
              , l = r.computed(function() {
                return G("mask", He(t.mask))
            })
              , d = r.computed(function() {
                return P.icon(a.value, M(M(M(M({}, s.value), i.value), l.value), {}, {
                    symbol: t.symbol,
                    title: t.title
                }))
            });
            r.watch(d, function(c) {
                if (!c)
                    return Rn("Could not find one or more icon(s)", a.value, l.value)
            }, {
                immediate: !0
            });
            var u = r.computed(function() {
                return d.value ? pe(d.value.abstract[0], {}, o) : null
            });
            return function() {
                return u.value
            }
        }
    });
    r.defineComponent({
        name: "FontAwesomeLayers",
        props: {
            fixedWidth: {
                type: Boolean,
                default: !1
            }
        },
        setup: function(t, n) {
            var o = n.slots
              , a = P.config.familyPrefix
              , s = r.computed(function() {
                return ["".concat(a, "-layers")].concat(de(t.fixedWidth ? ["".concat(a, "-fw")] : []))
            });
            return function() {
                return r.h("div", {
                    class: s.value
                }, o.default ? o.default() : [])
            }
        }
    }),
    r.defineComponent({
        name: "FontAwesomeLayersText",
        props: {
            value: {
                type: [String, Number],
                default: ""
            },
            transform: {
                type: [String, Object],
                default: null
            },
            counter: {
                type: Boolean,
                default: !1
            },
            position: {
                type: String,
                default: null,
                validator: function(t) {
                    return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1
                }
            }
        },
        setup: function(t, n) {
            var o = n.attrs
              , a = P.config.familyPrefix
              , s = r.computed(function() {
                return G("classes", [].concat(de(t.counter ? ["".concat(a, "-layers-counter")] : []), de(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])))
            })
              , i = r.computed(function() {
                return G("transform", typeof t.transform == "string" ? P.parse.transform(t.transform) : t.transform)
            })
              , l = r.computed(function() {
                var u = P.text(t.value.toString(), M(M({}, i.value), s.value))
                  , c = u.abstract;
                return t.counter && (c[0].attributes.class = c[0].attributes.class.replace("fa-layers-text", "")),
                c[0]
            })
              , d = r.computed(function() {
                return pe(l.value, {}, o)
            });
            return function() {
                return d.value
            }
        }
    }),
    P.dom.watch();
    const $e = {
        css: P.dom.css,
        install(e) {
            e.component("font-awesome-icon", Hn)
        }
    };
    (async () => {
        const e = [$e.css(), ...await In()];
        if (K.styles = e,
        !customElements.get(ye)) {
            const t = {
                component: K,
                props: K.props,
                plugins: [$e, Fe, ge, ne],
                renderOptions: {
                    props: K.props,
                    ref: "component"
                }
            }
              , n = Ge(t);
            customElements.define(ye, n)
        }
    }
    )()
});
