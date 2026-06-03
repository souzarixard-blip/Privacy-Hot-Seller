(function(o, q) {
    typeof exports == "object" && typeof module < "u" ? q(require("vue"), require("axios"), require("vue-i18n"), require("moment"), require("moment/dist/locale/pt-br"), require("moment/dist/locale/es"), require("@fortawesome/fontawesome-svg-core"), require("element-plus"), require("element-plus/dist/locale/pt-br"), require("element-plus/dist/locale/es"), require("lodash")) : typeof define == "function" && define.amd ? define(["vue", "axios", "vue-i18n", "moment", "moment/dist/locale/pt-br", "moment/dist/locale/es", "@fortawesome/fontawesome-svg-core", "element-plus", "element-plus/dist/locale/pt-br", "element-plus/dist/locale/es", "lodash"], q) : (o = typeof globalThis < "u" ? globalThis : o || self,
    q(o.Vue, o.axios, o.VueI18n, o.moment, null, null, o["fontawesome-svg-core"], o.ElementPlus, o.ElementPlusLocalePtBr, o.ElementPlusLocaleEs, o._))
}
)(this, function(o, q, Pt, R, zc, bc, B, I, Vt, Bt, Rt) {
    "use strict";
    function Re(t) {
        const e = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (t) {
            for (const i in t)
                if (i !== "default") {
                    const n = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(e, i, n.get ? n : {
                        enumerable: !0,
                        get: () => t[i]
                    })
                }
        }
        return e.default = t,
        Object.freeze(e)
    }
    const le = Re(Pt)
      , ye = Re(I);
    var Zt = !1;
    /*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
    let Ze;
    const ce = t => Ze = t
      , _e = Symbol();
    function Me(t) {
        return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function"
    }
    var K;
    (function(t) {
        t.direct = "direct",
        t.patchObject = "patch object",
        t.patchFunction = "patch function"
    }
    )(K || (K = {}));
    function _t() {
        const t = o.effectScope(!0)
          , e = t.run( () => o.ref({}));
        let i = []
          , n = [];
        const s = o.markRaw({
            install(r) {
                ce(s),
                s._a = r,
                r.provide(_e, s),
                r.config.globalProperties.$pinia = s,
                n.forEach(a => i.push(a)),
                n = []
            },
            use(r) {
                return !this._a && !Zt ? n.push(r) : i.push(r),
                this
            },
            _p: i,
            _a: null,
            _e: t,
            _s: new Map,
            state: e
        });
        return s
    }
    const Ue = () => {}
    ;
    function Fe(t, e, i, n=Ue) {
        t.push(e);
        const s = () => {
            const r = t.indexOf(e);
            r > -1 && (t.splice(r, 1),
            n())
        }
        ;
        return !i && o.getCurrentScope() && o.onScopeDispose(s),
        s
    }
    function Y(t, ...e) {
        t.slice().forEach(i => {
            i(...e)
        }
        )
    }
    function Ne(t, e) {
        t instanceof Map && e instanceof Map && e.forEach( (i, n) => t.set(n, i)),
        t instanceof Set && e instanceof Set && e.forEach(t.add, t);
        for (const i in e) {
            if (!e.hasOwnProperty(i))
                continue;
            const n = e[i]
              , s = t[i];
            Me(s) && Me(n) && t.hasOwnProperty(i) && !o.isRef(n) && !o.isReactive(n) ? t[i] = Ne(s, n) : t[i] = n
        }
        return t
    }
    const Ut = Symbol();
    function Ft(t) {
        return !Me(t) || !t.hasOwnProperty(Ut)
    }
    const {assign: Z} = Object;
    function Qt(t) {
        return !!(o.isRef(t) && t.effect)
    }
    function Ht(t, e, i, n) {
        const {state: s, actions: r, getters: a} = e
          , l = i.state.value[t];
        let c;
        function d() {
            l || (i.state.value[t] = s ? s() : {});
            const m = o.toRefs(i.state.value[t]);
            return Z(m, r, Object.keys(a || {}).reduce( (g, p) => (g[p] = o.markRaw(o.computed( () => {
                ce(i);
                const h = i._s.get(t);
                return a[p].call(h, h)
            }
            )),
            g), {}))
        }
        return c = Qe(t, d, e, i, n, !0),
        c.$reset = function() {
            const g = s ? s() : {};
            this.$patch(p => {
                Z(p, g)
            }
            )
        }
        ,
        c
    }
    function Qe(t, e, i={}, n, s, r) {
        let a;
        const l = Z({
            actions: {}
        }, i)
          , c = {
            deep: !0
        };
        let d, m, g = o.markRaw([]), p = o.markRaw([]), h;
        const M = n.state.value[t];
        !r && !M && (n.state.value[t] = {}),
        o.ref({});
        let D;
        function f(x) {
            let E;
            d = m = !1,
            typeof x == "function" ? (x(n.state.value[t]),
            E = {
                type: K.patchFunction,
                storeId: t,
                events: h
            }) : (Ne(n.state.value[t], x),
            E = {
                type: K.patchObject,
                payload: x,
                storeId: t,
                events: h
            });
            const U = D = Symbol();
            o.nextTick().then( () => {
                D === U && (d = !0)
            }
            ),
            m = !0,
            Y(g, E, n.state.value[t])
        }
        const u = Ue;
        function y() {
            a.stop(),
            g = [],
            p = [],
            n._s.delete(t)
        }
        function z(x, E) {
            return function() {
                ce(n);
                const U = Array.from(arguments)
                  , se = []
                  , re = [];
                function Mc(j) {
                    se.push(j)
                }
                function Nc(j) {
                    re.push(j)
                }
                Y(p, {
                    args: U,
                    name: x,
                    store: S,
                    after: Mc,
                    onError: Nc
                });
                let ae;
                try {
                    ae = E.apply(this && this.$id === t ? this : S, U)
                } catch (j) {
                    throw Y(re, j),
                    j
                }
                return ae instanceof Promise ? ae.then(j => (Y(se, j),
                j)).catch(j => (Y(re, j),
                Promise.reject(j))) : (Y(se, ae),
                ae)
            }
        }
        const N = {
            _p: n,
            $id: t,
            $onAction: Fe.bind(null, p),
            $patch: f,
            $reset: u,
            $subscribe(x, E={}) {
                const U = Fe(g, x, E.detached, () => se())
                  , se = a.run( () => o.watch( () => n.state.value[t], re => {
                    (E.flush === "sync" ? m : d) && x({
                        storeId: t,
                        type: K.direct,
                        events: h
                    }, re)
                }
                , Z({}, c, E)));
                return U
            },
            $dispose: y
        }
          , S = o.reactive(N);
        n._s.set(t, S);
        const b = n._e.run( () => (a = o.effectScope(),
        a.run( () => e())));
        for (const x in b) {
            const E = b[x];
            if (o.isRef(E) && !Qt(E) || o.isReactive(E))
                r || (M && Ft(E) && (o.isRef(E) ? E.value = M[x] : Ne(E, M[x])),
                n.state.value[t][x] = E);
            else if (typeof E == "function") {
                const U = z(x, E);
                b[x] = U,
                l.actions[x] = E
            }
        }
        return Z(S, b),
        Z(o.toRaw(S), b),
        Object.defineProperty(S, "$state", {
            get: () => n.state.value[t],
            set: x => {
                f(E => {
                    Z(E, x)
                }
                )
            }
        }),
        n._p.forEach(x => {
            Z(S, a.run( () => x({
                store: S,
                app: n._a,
                pinia: n,
                options: l
            })))
        }
        ),
        M && r && i.hydrate && i.hydrate(S.$state, M),
        d = !0,
        m = !0,
        S
    }
    function Yt(t, e, i) {
        let n, s;
        const r = typeof e == "function";
        typeof t == "string" ? (n = t,
        s = r ? i : e) : (s = t,
        n = t.id);
        function a(l, c) {
            const d = o.getCurrentInstance();
            return l = l || d && o.inject(_e, null),
            l && ce(l),
            l = Ze,
            l._s.has(n) || (r ? Qe(n, e, s, l) : Ht(n, s, l)),
            l._s.get(n)
        }
        return a.$id = n,
        a
    }
    let Wt = "Store";
    function Gt(...t) {
        return t.reduce( (e, i) => (e[i.$id + Wt] = function() {
            return i(this.$pinia)
        }
        ,
        e), {})
    }
    const He = _t()
      , Ye = {
        install(t) {
            t.use(He)
        },
        useProvides(t) {
            const e = () => ({
                global: {
                    instance: t,
                    ready: t.provides.ready,
                    appSettings: t.provides.appSettings,
                    token: t.provides.token,
                    tokenV1: t.provides.tokenV1,
                    $http: t.provides.$http,
                    locale: t.provides.locale
                }
            });
            He.use(e)
        }
    }
      , qt = {
        TITLE: {
            MY_PROFILE: t => {
                const {normalize: e} = t;
                return e(["Meu perfil"])
            }
        },
        READ_MORE: t => {
            const {normalize: e} = t;
            return e(["Ler mais"])
        }
        ,
        READ_LESS: t => {
            const {normalize: e} = t;
            return e(["Ler menos"])
        }
        ,
        AVAILABLE_NOW: t => {
            const {normalize: e} = t;
            return e(["Disponível agora"])
        }
        ,
        SCHEDULED_POSTS: t => {
            const {normalize: e} = t;
            return e(["Posts agendados"])
        }
        ,
        ARCHIVED: t => {
            const {normalize: e} = t;
            return e(["Arquivados"])
        }
        ,
        EDIT_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Editar perfil"])
        }
        ,
        FREE_SUBSCRIPTION: t => {
            const {normalize: e} = t;
            return e(["Assinatura gratuita"])
        }
        ,
        ACCESS_UNTIL: t => {
            const {normalize: e} = t;
            return e(["Acesso liberado até"])
        }
        ,
        CHAT: t => {
            const {normalize: e} = t;
            return e(["Chat"])
        }
        ,
        SUBSCRIBE_OPTION: t => {
            const {normalize: e} = t;
            return e(["Assinar"])
        }
        ,
        SHARE: t => {
            const {normalize: e} = t;
            return e(["Compartilhar"])
        }
        ,
        UNFOLLOW: t => {
            const {normalize: e} = t;
            return e(["Deixar de seguir"])
        }
        ,
        REPORT_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Denunciar perfil"])
        }
        ,
        MUTE_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Silenciar perfil"])
        }
        ,
        UNMUTE_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Cancelar silenciamento"])
        }
        ,
        ADD_FRIEND: t => {
            const {normalize: e} = t;
            return e(["Adicionar amigo"])
        }
        ,
        REMOVE_FRIEND: t => {
            const {normalize: e} = t;
            return e(["Remover amigo"])
        }
        ,
        ENABLE_RENEWAL: t => {
            const {normalize: e} = t;
            return e(["Ativar renovação"])
        }
        ,
        DISABLE_RENEWAL: t => {
            const {normalize: e} = t;
            return e(["Desativar renovação"])
        }
        ,
        MY_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Meu perfil"])
        }
        ,
        REQUEST_VERIFICATION: t => {
            const {normalize: e} = t;
            return e(["Solicitar verificação"])
        }
        ,
        SUBSCRIBE_FREE: t => {
            const {normalize: e} = t;
            return e(["Gratuito"])
        }
        ,
        TITLE_SUBSCRIBE: t => {
            const {normalize: e} = t;
            return e(["Assinaturas"])
        }
        ,
        MONTH: t => {
            const {normalize: e} = t;
            return e(["mês"])
        }
        ,
        MONTHS: t => {
            const {normalize: e} = t;
            return e(["meses"])
        }
        ,
        PROMOTIONS: t => {
            const {normalize: e} = t;
            return e(["Promoções"])
        }
        ,
        MEDIAS: {
            PHOTOS: t => {
                const {normalize: e} = t;
                return e(["Fotos"])
            }
            ,
            VIDEOS: t => {
                const {normalize: e} = t;
                return e(["Vídeos"])
            }
            ,
            GIFS: t => {
                const {normalize: e} = t;
                return e(["Gifs"])
            }
            ,
            ALL_POSTS: t => {
                const {normalize: e} = t;
                return e(["Postagens"])
            }
            ,
            ALL_MEDIA: t => {
                const {normalize: e} = t;
                return e(["Mídias"])
            }
            ,
            PAID: t => {
                const {normalize: e} = t;
                return e(["Pagos"])
            }
            ,
            ALL: t => {
                const {normalize: e} = t;
                return e(["Todos"])
            }
        },
        SEND_MIMO: t => {
            const {normalize: e} = t;
            return e(["Enviar mimo"])
        }
        ,
        TIP: t => {
            const {normalize: e} = t;
            return e(["Mimo"])
        }
        ,
        BUTTON_CHECKOUT: t => {
            const {normalize: e} = t;
            return e(["Continuar"])
        }
        ,
        ERROR_MESSAGE: {
            TERMS_NOT_ACCEPTED: t => {
                const {normalize: e} = t;
                return e(["Os Termos e a Privacidade são obrigatórios."])
            }
            ,
            REGISTER: t => {
                const {normalize: e} = t;
                return e(["Erro ao cadastrar os dados, por favor, preencher corretamente."])
            }
            ,
            EMAIL_IN_USE: t => {
                const {normalize: e} = t;
                return e(["O email já está cadastrado. Para recuperar a senha ACTION_MODAL"])
            }
            ,
            ADDRES_ZIP_CODE: t => {
                const {normalize: e} = t;
                return e(["Endereço inválido"])
            }
        },
        ACTION: {
            CLICK_HERE: t => {
                const {normalize: e} = t;
                return e(["clique aqui."])
            }
        },
        REGISTER_SUCCESS: {
            TITLE: t => {
                const {normalize: e} = t;
                return e(["Cadastro efetuado"])
            }
            ,
            TEXT: t => {
                const {normalize: e, interpolate: i, named: n} = t;
                return e(["Olá ", i(n("nickName")), ", <br> Para finalizar seu cadastro, enviamos um e-mail de confirmação para o endereço informado."])
            }
        },
        ACCEPT_TERMS: t => {
            const {normalize: e} = t;
            return e(['Ao se cadastrar na Privacy, você atesta que leu e concorda com nossos <a href="/termos">Termos</a> e <a href="/privacidade">Privacidade</a> e confirma que tem pelo menos 18 anos de idade . <span style="color: #f57c97;">*</span>'])
        }
        ,
        FILL_FULL_NAME: t => {
            const {normalize: e} = t;
            return e(["Favor preencher o nome completo."])
        }
        ,
        ERROR_OCCURRED_ENTERING_CPF: t => {
            const {normalize: e} = t;
            return e(["Ocorreu um erro ao inserir o CPF. Em caso de dúvidas, contate nosso atendimento."])
        }
        ,
        NON_EXISTENT_CPF: t => {
            const {normalize: e} = t;
            return e(["Documento inválido. Verifique os dados informados e tente novamente."])
        }
        ,
        CPF_PROVIDED_BEING_ANOTHER_USER: t => {
            const {normalize: e} = t;
            return e(["CPF informado já está sendo utilizado por outro usuário, caso estejam utilizando indevidamente favor entrar em contato com nosso suporte."])
        }
        ,
        CPF_BELONG_NAME_PROVIDED: t => {
            const {normalize: e} = t;
            return e(["O CPF não pertence ao nome informado."])
        }
        ,
        PLEASE_CHECK_DATE_BIRTH: t => {
            const {normalize: e} = t;
            return e(["Favor verificar a data de nascimento."])
        }
    }
      , Kt = {
        TITLE: {
            MY_PROFILE: t => {
                const {normalize: e} = t;
                return e(["My profile"])
            }
        },
        READ_MORE: t => {
            const {normalize: e} = t;
            return e(["Read more"])
        }
        ,
        READ_LESS: t => {
            const {normalize: e} = t;
            return e(["Read less"])
        }
        ,
        AVAILABLE_NOW: t => {
            const {normalize: e} = t;
            return e(["Available now"])
        }
        ,
        SCHEDULED_POSTS: t => {
            const {normalize: e} = t;
            return e(["Scheduled posts"])
        }
        ,
        ARCHIVED: t => {
            const {normalize: e} = t;
            return e(["Archived"])
        }
        ,
        EDIT_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Edit profile"])
        }
        ,
        FREE_SUBSCRIPTION: t => {
            const {normalize: e} = t;
            return e(["Free subscription"])
        }
        ,
        ACCESS_UNTIL: t => {
            const {normalize: e} = t;
            return e(["Access until"])
        }
        ,
        CHAT: t => {
            const {normalize: e} = t;
            return e(["Chat"])
        }
        ,
        SHARE: t => {
            const {normalize: e} = t;
            return e(["Share"])
        }
        ,
        SUBSCRIBE_OPTION: t => {
            const {normalize: e} = t;
            return e(["Subscribe"])
        }
        ,
        UNFOLLOW: t => {
            const {normalize: e} = t;
            return e(["Unfollow"])
        }
        ,
        REPORT_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Report profile"])
        }
        ,
        MUTE_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Mute profile"])
        }
        ,
        UNMUTE_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Unmute profile"])
        }
        ,
        ADD_FRIEND: t => {
            const {normalize: e} = t;
            return e(["Add friend"])
        }
        ,
        REMOVE_FRIEND: t => {
            const {normalize: e} = t;
            return e(["Remove friend"])
        }
        ,
        ENABLE_RENEWAL: t => {
            const {normalize: e} = t;
            return e(["Enable renewal"])
        }
        ,
        DISABLE_RENEWAL: t => {
            const {normalize: e} = t;
            return e(["Disable renewal"])
        }
        ,
        MY_PROFILE: t => {
            const {normalize: e} = t;
            return e(["My profile"])
        }
        ,
        REQUEST_VERIFICATION: t => {
            const {normalize: e} = t;
            return e(["Request verification"])
        }
        ,
        SUBSCRIBE_FREE: t => {
            const {normalize: e} = t;
            return e(["Free"])
        }
        ,
        TITLE_SUBSCRIBE: t => {
            const {normalize: e} = t;
            return e(["Subscriptions"])
        }
        ,
        MONTH: t => {
            const {normalize: e} = t;
            return e(["month"])
        }
        ,
        MONTHS: t => {
            const {normalize: e} = t;
            return e(["months"])
        }
        ,
        PROMOTIONS: t => {
            const {normalize: e} = t;
            return e(["Promotions"])
        }
        ,
        MEDIAS: {
            PHOTOS: t => {
                const {normalize: e} = t;
                return e(["Photos"])
            }
            ,
            VIDEOS: t => {
                const {normalize: e} = t;
                return e(["Videos"])
            }
            ,
            GIFS: t => {
                const {normalize: e} = t;
                return e(["Gifs"])
            }
            ,
            ALL_POSTS: t => {
                const {normalize: e} = t;
                return e(["Posts"])
            }
            ,
            ALL_MEDIA: t => {
                const {normalize: e} = t;
                return e(["Media"])
            }
            ,
            PAID: t => {
                const {normalize: e} = t;
                return e(["Paid"])
            }
            ,
            ALL: t => {
                const {normalize: e} = t;
                return e(["All"])
            }
        },
        SEND_MIMO: t => {
            const {normalize: e} = t;
            return e(["Send tip"])
        }
        ,
        TIP: t => {
            const {normalize: e} = t;
            return e(["Tip"])
        }
        ,
        BUTTON_CHECKOUT: t => {
            const {normalize: e} = t;
            return e(["Continue"])
        }
        ,
        ERROR_MESSAGE: {
            TERMS_NOT_ACCEPTED: t => {
                const {normalize: e} = t;
                return e(["Terms and Privacy are mandatory"])
            }
            ,
            REGISTER: t => {
                const {normalize: e} = t;
                return e(["Error registering the data, please fill out correctly."])
            }
            ,
            EMAIL_IN_USE: t => {
                const {normalize: e} = t;
                return e(["The provided email is already registered. To recover the password ACTION_MODAL"])
            }
            ,
            ADDRES_ZIP_CODE: t => {
                const {normalize: e} = t;
                return e(["Invalid address"])
            }
        },
        ACTION: {
            CLICK_HERE: t => {
                const {normalize: e} = t;
                return e(["click here."])
            }
        },
        REGISTER_SUCCESS: {
            TITLE: t => {
                const {normalize: e} = t;
                return e(["Registration Successful"])
            }
            ,
            TEXT: t => {
                const {normalize: e, interpolate: i, named: n} = t;
                return e(["Hello ", i(n("nickName")), ", <br> To complete your registration, we sent a confirmation email to the address provided."])
            }
        },
        ACCEPT_TERMS: t => {
            const {normalize: e} = t;
            return e(['By signing up with Privacy, you confirm that you have read and agree to our <a href="/termos">Terms</a> and <a href="/privacidade">Privacy</a> and that you are at least 18 years old. <span style="color: #f57c97;">*</span>'])
        }
        ,
        FILL_FULL_NAME: t => {
            const {normalize: e} = t;
            return e(["Please fill in your full name."])
        }
        ,
        ERROR_OCCURRED_ENTERING_CPF: t => {
            const {normalize: e} = t;
            return e(["An error occurred while entering the CPF. If you have any questions, please contact our support."])
        }
        ,
        NON_EXISTENT_CPF: t => {
            const {normalize: e} = t;
            return e(["Invalid document. Check the information provided and try again."])
        }
        ,
        CPF_PROVIDED_BEING_ANOTHER_USER: t => {
            const {normalize: e} = t;
            return e(["The provided CPF is already being used by another user. If it is being used improperly, please contact our support."])
        }
        ,
        CPF_BELONG_NAME_PROVIDED: t => {
            const {normalize: e} = t;
            return e(["The CPF does not belong to the provided name."])
        }
        ,
        PLEASE_CHECK_DATE_BIRTH: t => {
            const {normalize: e} = t;
            return e(["Please verify the date of birth."])
        }
    }
      , Jt = {
        TITLE: {
            MY_PROFILE: t => {
                const {normalize: e} = t;
                return e(["Mi perfil"])
            }
        },
        READ_MORE: t => {
            const {normalize: e} = t;
            return e(["Leer más"])
        }
        ,
        READ_LESS: t => {
            const {normalize: e} = t;
            return e(["Leer menos"])
        }
        ,
        AVAILABLE_NOW: t => {
            const {normalize: e} = t;
            return e(["Disponible ahora"])
        }
        ,
        SCHEDULED_POSTS: t => {
            const {normalize: e} = t;
            return e(["Publicaciones programadas"])
        }
        ,
        ARCHIVED: t => {
            const {normalize: e} = t;
            return e(["Archivados"])
        }
        ,
        EDIT_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Editar perfil"])
        }
        ,
        FREE_SUBSCRIPTION: t => {
            const {normalize: e} = t;
            return e(["Suscripción gratuita"])
        }
        ,
        ACCESS_UNTIL: t => {
            const {normalize: e} = t;
            return e(["Acceso hasta"])
        }
        ,
        CHAT: t => {
            const {normalize: e} = t;
            return e(["Chat"])
        }
        ,
        SHARE: t => {
            const {normalize: e} = t;
            return e(["Compartir"])
        }
        ,
        SUBSCRIBE_OPTION: t => {
            const {normalize: e} = t;
            return e(["Suscribir"])
        }
        ,
        UNFOLLOW: t => {
            const {normalize: e} = t;
            return e(["Dejar de seguir"])
        }
        ,
        REPORT_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Denunciar perfil"])
        }
        ,
        MUTE_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Silenciar perfil"])
        }
        ,
        UNMUTE_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Cancelar silenciamiento"])
        }
        ,
        ADD_FRIEND: t => {
            const {normalize: e} = t;
            return e(["Agregar amigo"])
        }
        ,
        REMOVE_FRIEND: t => {
            const {normalize: e} = t;
            return e(["Eliminar amigo"])
        }
        ,
        ENABLE_RENEWAL: t => {
            const {normalize: e} = t;
            return e(["Activar renovación"])
        }
        ,
        DISABLE_RENEWAL: t => {
            const {normalize: e} = t;
            return e(["Desactivar renovación"])
        }
        ,
        MY_PROFILE: t => {
            const {normalize: e} = t;
            return e(["Mi perfil"])
        }
        ,
        REQUEST_VERIFICATION: t => {
            const {normalize: e} = t;
            return e(["Solicitar verificación"])
        }
        ,
        SUBSCRIBE_FREE: t => {
            const {normalize: e} = t;
            return e(["Gratis"])
        }
        ,
        TITLE_SUBSCRIBE: t => {
            const {normalize: e} = t;
            return e(["Suscripciones"])
        }
        ,
        MONTH: t => {
            const {normalize: e} = t;
            return e(["mes"])
        }
        ,
        MONTHS: t => {
            const {normalize: e} = t;
            return e(["meses"])
        }
        ,
        PROMOTIONS: t => {
            const {normalize: e} = t;
            return e(["Promociones"])
        }
        ,
        MEDIAS: {
            PHOTOS: t => {
                const {normalize: e} = t;
                return e(["Fotos"])
            }
            ,
            VIDEOS: t => {
                const {normalize: e} = t;
                return e(["Videos"])
            }
            ,
            GIFS: t => {
                const {normalize: e} = t;
                return e(["Gifs"])
            }
            ,
            ALL_POSTS: t => {
                const {normalize: e} = t;
                return e(["Publicaciones"])
            }
            ,
            ALL_MEDIA: t => {
                const {normalize: e} = t;
                return e(["Medios"])
            }
            ,
            PAID: t => {
                const {normalize: e} = t;
                return e(["Pagados"])
            }
            ,
            ALL: t => {
                const {normalize: e} = t;
                return e(["Todos"])
            }
        },
        SEND_MIMO: t => {
            const {normalize: e} = t;
            return e(["Enviar mimo"])
        }
        ,
        TIP: t => {
            const {normalize: e} = t;
            return e(["Mimo"])
        }
        ,
        BUTTON_CHECKOUT: t => {
            const {normalize: e} = t;
            return e(["Continuar"])
        }
        ,
        ERROR_MESSAGE: {
            TERMS_NOT_ACCEPTED: t => {
                const {normalize: e} = t;
                return e(["Los Términos y La Privacidad son obligatorios"])
            }
            ,
            REGISTER: t => {
                const {normalize: e} = t;
                return e(["Error al registrar los datos, por favor complete correctamente."])
            }
            ,
            EMAIL_IN_USE: t => {
                const {normalize: e} = t;
                return e(["El email proporcionado ya está registrado. Para recuperar la contraseña ACTION_MODAL"])
            }
            ,
            ADDRES_ZIP_CODE: t => {
                const {normalize: e} = t;
                return e(["Dirección inválida"])
            }
        },
        ACTION: {
            CLICK_HERE: t => {
                const {normalize: e} = t;
                return e(["haga clic aquí."])
            }
        },
        REGISTER_SUCCESS: {
            TITLE: t => {
                const {normalize: e} = t;
                return e(["Registro Exitoso"])
            }
            ,
            TEXT: t => {
                const {normalize: e, interpolate: i, named: n} = t;
                return e(["Hola ", i(n("nickName")), ", <br> Para completar tu registro, enviamos un correo de confirmación a la dirección proporcionada."])
            }
        },
        ACCEPT_TERMS: t => {
            const {normalize: e} = t;
            return e(['Al registrarte en Privacy, confirmas que has leído y aceptas nuestros <a href="/termos">Términos</a> y <a href="/privacidade">Privacidad</a> y que tienes al menos 18 años de edad. <span style="color: #f57c97;">*</span>'])
        }
        ,
        FILL_FULL_NAME: t => {
            const {normalize: e} = t;
            return e(["Por favor, rellene su nombre completo."])
        }
        ,
        ERROR_OCCURRED_ENTERING_CPF: t => {
            const {normalize: e} = t;
            return e(["Se produjo un error al ingresar el CPF. Si tiene alguna duda, comuníquese con nuestro soporte."])
        }
        ,
        NON_EXISTENT_CPF: t => {
            const {normalize: e} = t;
            return e(["Documento inválido. Verifique los datos proporcionados e inténtelo de nuevo."])
        }
        ,
        CPF_PROVIDED_BEING_ANOTHER_USER: t => {
            const {normalize: e} = t;
            return e(["El CPF informado ya está siendo utilizado por otro usuario. Si lo están usando indebidamente, comuníquese con nuestro soporte."])
        }
        ,
        CPF_BELONG_NAME_PROVIDED: t => {
            const {normalize: e} = t;
            return e(["El CPF no pertenece al nombre informado."])
        }
        ,
        PLEASE_CHECK_DATE_BIRTH: t => {
            const {normalize: e} = t;
            return e(["Por favor, verifique la fecha de nacimiento."])
        }
    };
    let J = null;
    const ze = {
        install(t) {
            return J = le.createI18n({
                legacy: !1,
                locale: "pt",
                fallbackLocale: "pt",
                globalInjection: !1
            }),
            t.use(J),
            Xt(),
            J
        },
        get global() {
            return J.global
        }
    };
    function Xt() {
        o.inject(le.I18nInjectionKey) || o.provide(le.I18nInjectionKey, J)
    }
    function O() {
        var n, s;
        const t = o.getCurrentInstance();
        o.inject((s = (n = t == null ? void 0 : t.appContext) == null ? void 0 : n.app) == null ? void 0 : s.__VUE_I18N_SYMBOL__) || (t.isCE = !0);
        const {t: i} = le.useI18n({
            messages: {
                pt: qt,
                en: Kt,
                es: Jt
            }
        });
        return {
            t: i
        }
    }
    R.locale("pt-br");
    function $t(t) {
        R.locale(t)
    }
    const F = {
        get defaultLocale() {
            return "pt"
        },
        set currentLocale(t) {
            t = t && t.split("-")[0],
            ze.global.locale.value = t
        },
        get currentLocale() {
            return ze.global.locale.value
        },
        setTranslate({t}) {
            this.t = t
        },
        getUserLocale() {
            const t = window.navigator.language || window.navigator.userLanguage || F.defaultLocale;
            return {
                locale: t,
                localeNoRegion: t.split("-")[0]
            }
        },
        getMessage(t) {
            return this.t(t)
        },
        async switchLanguage(t) {
            F.currentLocale = t,
            $t(t)
        }
    };
    function ei(t) {
        const {t: e} = O();
        F.setTranslate({
            t: e
        }),
        o.watch(t.locale, i => {
            F.switchLanguage(i || t.locale)
        }
        , {
            immediate: !0
        })
    }
    const V = {
        value: null,
        provides: null,
        emit: null
    }
      , We = {
        install(t, e) {
            t.config.globalProperties.$http || (V.value = q.create({
                baseURL: e == null ? void 0 : e.baseUrl
            }),
            V.value.interceptors.request.use(i => (i.includeAppAuthorization != !1 && V.provides.token.value && !i.headers.Authorization && (i.apiAuth == "v1" ? i.headers.Authorization = `Bearer ${V.provides.tokenV1.value}` : i.headers.Authorization = `Bearer ${V.provides.token.value}`),
            i.headers["Accept-Language"] || (i.headers["Accept-Language"] = V.provides.locale.value || F.defaultLocale),
            i), i => Promise.reject(i)),
            t.config.globalProperties.$http = V.value)
        },
        useProvides(t) {
            V.provides = t.provides,
            V.emit = t.emit
        }
    };
    function Ge(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(s) {
                return Object.getOwnPropertyDescriptor(t, s).enumerable
            })),
            i.push.apply(i, n)
        }
        return i
    }
    function P(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Ge(Object(i), !0).forEach(function(n) {
                A(t, n, i[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ge(Object(i)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n))
            })
        }
        return t
    }
    function de(t) {
        return de = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        de(t)
    }
    function A(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i,
        t
    }
    function ti(t, e) {
        if (t == null)
            return {};
        var i = {}, n = Object.keys(t), s, r;
        for (r = 0; r < n.length; r++)
            s = n[r],
            !(e.indexOf(s) >= 0) && (i[s] = t[s]);
        return i
    }
    function ii(t, e) {
        if (t == null)
            return {};
        var i = ti(t, e), n, s;
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            for (s = 0; s < r.length; s++)
                n = r[s],
                !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
        }
        return i
    }
    function be(t) {
        return oi(t) || ni(t) || si(t) || ri()
    }
    function oi(t) {
        if (Array.isArray(t))
            return xe(t)
    }
    function ni(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
            return Array.from(t)
    }
    function si(t, e) {
        if (t) {
            if (typeof t == "string")
                return xe(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            if (i === "Object" && t.constructor && (i = t.constructor.name),
            i === "Map" || i === "Set")
                return Array.from(t);
            if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                return xe(t, e)
        }
    }
    function xe(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++)
            n[i] = t[i];
        return n
    }
    function ri() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var ai = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
      , qe = {
        exports: {}
    };
    (function(t) {
        (function(e) {
            var i = function(u, y, z) {
                if (!d(y) || g(y) || p(y) || h(y) || c(y))
                    return y;
                var N, S = 0, b = 0;
                if (m(y))
                    for (N = [],
                    b = y.length; S < b; S++)
                        N.push(i(u, y[S], z));
                else {
                    N = {};
                    for (var x in y)
                        Object.prototype.hasOwnProperty.call(y, x) && (N[u(x, z)] = i(u, y[x], z))
                }
                return N
            }
              , n = function(u, y) {
                y = y || {};
                var z = y.separator || "_"
                  , N = y.split || /(?=[A-Z])/;
                return u.split(N).join(z)
            }
              , s = function(u) {
                return M(u) ? u : (u = u.replace(/[\-_\s]+(.)?/g, function(y, z) {
                    return z ? z.toUpperCase() : ""
                }),
                u.substr(0, 1).toLowerCase() + u.substr(1))
            }
              , r = function(u) {
                var y = s(u);
                return y.substr(0, 1).toUpperCase() + y.substr(1)
            }
              , a = function(u, y) {
                return n(u, y).toLowerCase()
            }
              , l = Object.prototype.toString
              , c = function(u) {
                return typeof u == "function"
            }
              , d = function(u) {
                return u === Object(u)
            }
              , m = function(u) {
                return l.call(u) == "[object Array]"
            }
              , g = function(u) {
                return l.call(u) == "[object Date]"
            }
              , p = function(u) {
                return l.call(u) == "[object RegExp]"
            }
              , h = function(u) {
                return l.call(u) == "[object Boolean]"
            }
              , M = function(u) {
                return u = u - 0,
                u === u
            }
              , D = function(u, y) {
                var z = y && "process"in y ? y.process : y;
                return typeof z != "function" ? u : function(N, S) {
                    return z(N, u, S)
                }
            }
              , f = {
                camelize: s,
                decamelize: a,
                pascalize: r,
                depascalize: a,
                camelizeKeys: function(u, y) {
                    return i(D(s, y), u)
                },
                decamelizeKeys: function(u, y) {
                    return i(D(a, y), u, y)
                },
                pascalizeKeys: function(u, y) {
                    return i(D(r, y), u)
                },
                depascalizeKeys: function() {
                    return this.decamelizeKeys.apply(this, arguments)
                }
            };
            t.exports ? t.exports = f : e.humps = f
        }
        )(ai)
    }
    )(qe);
    var li = qe.exports
      , ci = ["class", "style"];
    function di(t) {
        return t.split(";").map(function(e) {
            return e.trim()
        }).filter(function(e) {
            return e
        }).reduce(function(e, i) {
            var n = i.indexOf(":")
              , s = li.camelize(i.slice(0, n))
              , r = i.slice(n + 1).trim();
            return e[s] = r,
            e
        }, {})
    }
    function mi(t) {
        return t.split(/\s+/).reduce(function(e, i) {
            return e[i] = !0,
            e
        }, {})
    }
    function De(t) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (typeof t == "string")
            return t;
        var n = (t.children || []).map(function(c) {
            return De(c)
        })
          , s = Object.keys(t.attributes || {}).reduce(function(c, d) {
            var m = t.attributes[d];
            switch (d) {
            case "class":
                c.class = mi(m);
                break;
            case "style":
                c.style = di(m);
                break;
            default:
                c.attrs[d] = m
            }
            return c
        }, {
            attrs: {},
            class: {},
            style: {}
        });
        i.class;
        var r = i.style
          , a = r === void 0 ? {} : r
          , l = ii(i, ci);
        return o.h(t.tag, P(P(P({}, e), {}, {
            class: s.class,
            style: P(P({}, s.style), a)
        }, s.attrs), l), n)
    }
    var Ke = !1;
    try {
        Ke = !0
    } catch {}
    function pi() {
        if (!Ke && console && typeof console.error == "function") {
            var t;
            (t = console).error.apply(t, arguments)
        }
    }
    function X(t, e) {
        return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? A({}, t, e) : {}
    }
    function ui(t) {
        var e, i = (e = {
            "fa-spin": t.spin,
            "fa-pulse": t.pulse,
            "fa-fw": t.fixedWidth,
            "fa-border": t.border,
            "fa-li": t.listItem,
            "fa-inverse": t.inverse,
            "fa-flip": t.flip === !0,
            "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
            "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
        },
        A(e, "fa-".concat(t.size), t.size !== null),
        A(e, "fa-rotate-".concat(t.rotation), t.rotation !== null),
        A(e, "fa-pull-".concat(t.pull), t.pull !== null),
        A(e, "fa-swap-opacity", t.swapOpacity),
        A(e, "fa-bounce", t.bounce),
        A(e, "fa-shake", t.shake),
        A(e, "fa-beat", t.beat),
        A(e, "fa-fade", t.fade),
        A(e, "fa-beat-fade", t.beatFade),
        A(e, "fa-flash", t.flash),
        A(e, "fa-spin-pulse", t.spinPulse),
        A(e, "fa-spin-reverse", t.spinReverse),
        e);
        return Object.keys(i).map(function(n) {
            return i[n] ? n : null
        }).filter(function(n) {
            return n
        })
    }
    function Je(t) {
        if (t && de(t) === "object" && t.prefix && t.iconName && t.icon)
            return t;
        if (B.parse.icon)
            return B.parse.icon(t);
        if (t === null)
            return null;
        if (de(t) === "object" && t.prefix && t.iconName)
            return t;
        if (Array.isArray(t) && t.length === 2)
            return {
                prefix: t[0],
                iconName: t[1]
            };
        if (typeof t == "string")
            return {
                prefix: "fas",
                iconName: t
            }
    }
    var hi = o.defineComponent({
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
                validator: function(e) {
                    return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1
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
                validator: function(e) {
                    return ["right", "left"].indexOf(e) > -1
                }
            },
            pulse: {
                type: Boolean,
                default: !1
            },
            rotation: {
                type: [String, Number],
                default: null,
                validator: function(e) {
                    return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1
                }
            },
            swapOpacity: {
                type: Boolean,
                default: !1
            },
            size: {
                type: String,
                default: null,
                validator: function(e) {
                    return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1
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
        setup: function(e, i) {
            var n = i.attrs
              , s = o.computed(function() {
                return Je(e.icon)
            })
              , r = o.computed(function() {
                return X("classes", ui(e))
            })
              , a = o.computed(function() {
                return X("transform", typeof e.transform == "string" ? B.parse.transform(e.transform) : e.transform)
            })
              , l = o.computed(function() {
                return X("mask", Je(e.mask))
            })
              , c = o.computed(function() {
                return B.icon(s.value, P(P(P(P({}, r.value), a.value), l.value), {}, {
                    symbol: e.symbol,
                    title: e.title
                }))
            });
            o.watch(c, function(m) {
                if (!m)
                    return pi("Could not find one or more icon(s)", s.value, l.value)
            }, {
                immediate: !0
            });
            var d = o.computed(function() {
                return c.value ? De(c.value.abstract[0], {}, n) : null
            });
            return function() {
                return d.value
            }
        }
    });
    o.defineComponent({
        name: "FontAwesomeLayers",
        props: {
            fixedWidth: {
                type: Boolean,
                default: !1
            }
        },
        setup: function(e, i) {
            var n = i.slots
              , s = B.config.familyPrefix
              , r = o.computed(function() {
                return ["".concat(s, "-layers")].concat(be(e.fixedWidth ? ["".concat(s, "-fw")] : []))
            });
            return function() {
                return o.h("div", {
                    class: r.value
                }, n.default ? n.default() : [])
            }
        }
    }),
    o.defineComponent({
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
                validator: function(e) {
                    return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1
                }
            }
        },
        setup: function(e, i) {
            var n = i.attrs
              , s = B.config.familyPrefix
              , r = o.computed(function() {
                return X("classes", [].concat(be(e.counter ? ["".concat(s, "-layers-counter")] : []), be(e.position ? ["".concat(s, "-layers-").concat(e.position)] : [])))
            })
              , a = o.computed(function() {
                return X("transform", typeof e.transform == "string" ? B.parse.transform(e.transform) : e.transform)
            })
              , l = o.computed(function() {
                var d = B.text(e.value.toString(), P(P({}, a.value), r.value))
                  , m = d.abstract;
                return e.counter && (m[0].attributes.class = m[0].attributes.class.replace("fa-layers-text", "")),
                m[0]
            })
              , c = o.computed(function() {
                return De(l.value, {}, n)
            });
            return function() {
                return c.value
            }
        }
    });
    const Xe = {
        css: B.dom.css,
        install(t) {
            t.component("font-awesome-icon", hi)
        }
    }
      , fi = {
        install(t) {
            t.directive("loading", ye.vLoading);
            for (const e in ye)
                e.startsWith("El") && t.component(e, ye[e])
        }
    };
    o.computed( () => {
        var t, e;
        if ((t = F.currentLocale) != null && t.startsWith("pt"))
            return Vt;
        if ((e = F.currentLocale) != null && e.startsWith("es"))
            return Bt
    }
    );
    async function gi() {
        const t = Object.assign({
            "../App.ce.vue": () => Promise.resolve().then( () => gc),
            "../components/Auth.vue": () => Promise.resolve().then( () => uo),
            "../components/Avatar.vue": () => Promise.resolve().then( () => Tn),
            "../components/Background.vue": () => Promise.resolve().then( () => $s),
            "../components/Base/AlertText.vue": () => Promise.resolve().then( () => Da),
            "../components/Base/IconToggle.vue": () => Promise.resolve().then( () => or),
            "../components/Base/MessageSuccess.vue": () => Promise.resolve().then( () => ol),
            "../components/Base/TabMenuContent.vue": () => Promise.resolve().then( () => xr),
            "../components/Bio.vue": () => Promise.resolve().then( () => to),
            "../components/IconButton.vue": () => Promise.resolve().then( () => fs),
            "../components/Index.vue": () => Promise.resolve().then( () => pc),
            "../components/PageCheckout.vue": () => Promise.resolve().then( () => yl),
            "../components/PageProfile.vue": () => Promise.resolve().then( () => lc),
            "../components/PersonalData.vue": () => Promise.resolve().then( () => _a),
            "../components/Popover.vue": () => Promise.resolve().then( () => _l),
            "../components/SimplifiedPersonalData.vue": () => Promise.resolve().then( () => vn),
            "../components/SocialMediaList.vue": () => Promise.resolve().then( () => qa),
            "../components/StatDisplay.vue": () => Promise.resolve().then( () => zs),
            "../components/Subscribe.vue": () => Promise.resolve().then( () => ls),
            "../components/UserContent.vue": () => Promise.resolve().then( () => za)
        })
          , e = [];
        for (const i in t) {
            const n = await t[i]();
            e.push(n.default.styles)
        }
        return [e.flat().join("")]
    }
    const yi = Yt("app", {
        state: () => ({
            socket: {
                instance: null,
                joined: !1
            }
        }),
        getters: {
            ready: t => t.global.ready,
            appSettings: t => t.global.appSettings,
            token: t => t.global.token,
            tokenV1: t => t.global.tokenV1,
            $http: t => t.global.$http,
            locale: t => t.global.locale
        }
    })
      , Mi = 700;
    function $e() {
        return window.innerWidth < Mi
    }
    function L(t) {
        return (t == null ? void 0 : t.toString().toLocaleLowerCase()) === "true" || t === !0
    }
    function Ni(t) {
        return t ? typeof t == "object" ? t : JSON.parse(t) : {}
    }
    function et(t) {
        const e = t ? atob(t) : void 0;
        return Ni(e)
    }
    function zi(t) {
        for (const e in t)
            bi(t[e]) && (t[e] = t[e].replace(/\?&/g, ""))
    }
    function bi(t) {
        return t && typeof t == "string" && t.startsWith("http")
    }
    const xi = () => {
        const t = o.ref($e())
          , e = new ResizeObserver( () => {
            t.value = $e()
        }
        );
        o.onMounted( () => {
            e.observe(document.body),
            o.provide("isSmallDevice", t)
        }
        ),
        o.onBeforeUnmount( () => {
            e && (e.unobserve(document.body),
            e.disconnect(document.body))
        }
        )
    }
      , Di = t => {
        o.provide("ready", o.computed( () => t.ready == null ? !0 : L(t.ready))),
        o.provide("appSettings", o.computed( () => {
            const e = et(t.appSettings);
            return zi(e),
            e
        }
        )),
        o.provide("token", o.computed( () => t.token)),
        o.provide("tokenV1", o.computed( () => t.tokenV1)),
        o.provide("$http", o.computed( () => V.value)),
        o.provide("locale", o.computed( () => t.locale))
    }
      , Ei = ({emit: t}) => {
        const e = o.ref(!1);
        return o.onMounted( () => {
            if (document.readyState === "complete")
                e.value = !0,
                t("ready");
            else {
                const i = window.addEventListener("load", () => {
                    e.value = !0,
                    window.removeEventListener("load", i),
                    t("ready")
                }
                )
            }
        }
        ),
        {
            windowLoaded: e
        }
    }
      , wi = () => {
        const t = o.ref(document.documentElement.getAttribute("data-theme") || "light")
          , e = o.computed( () => t.value)
          , i = n => {
            var s;
            (s = n.detail) != null && s.theme && (t.value = n.detail.theme)
        }
        ;
        return o.onMounted( () => {
            document.addEventListener("theme-changed", i)
        }
        ),
        o.onBeforeUnmount( () => {
            document.removeEventListener("theme-changed", i)
        }
        ),
        {
            theme: e
        }
    }
      , tt = t => typeof t == "string" && t.trim() === ""
      , it = t => Array.isArray(t) && t.length === 0;
    let Ee = {};
    const Ti = () => Ee
      , Si = t => {
        if (!t)
            return Ee = {};
        let e = Ii(t);
        Ai(e),
        Ci(e),
        Ee = e
    }
    ;
    function Ii(t) {
        return t ? typeof t == "string" ? et(t) : t : {}
    }
    function Ai(t) {
        Object.keys(t).forEach(e => {
            if (typeof t[e] == "string") {
                const i = Li(t[e]);
                i && (t[e] = i)
            }
        }
        )
    }
    function Ci(t) {
        t.SENSITIVE_INFOS_PATTERN && (t.SENSITIVE_INFOS_PATTERN = t.SENSITIVE_INFOS_PATTERN.map(e => {
            if (e)
                return ki(typeof e == "string" ? e : e.source)
        }
        ))
    }
    function Li(t) {
        if (t) {
            if (t instanceof RegExp)
                return t;
            if (typeof t != "string")
                return null;
            try {
                return vi(t)
            } catch (e) {
                console.warn("Error converting regex:", t, e)
            }
        }
    }
    function vi(t) {
        const e = t.match(/^\/(.+)\/([gimuy]*)$/);
        return e ? new RegExp(e[1],e[2]) : new RegExp(t)
    }
    function ki(t) {
        return t.includes("\\\\") ? t.replace(/\\\\/g, "\\") : t
    }
    const ji = ({EXIST_LINKS_PATTERN: t="", LINK_INTERNAL_PATTERN: e="", SENSITIVE_INFOS_PATTERN: i=[], KEYS_WORDS_NOT_ALLOWED: n=[]}) => tt(t) && tt(e) && it(i) && it(n);
    function Oi(t) {
        var n, s;
        const e = Ti();
        if (ji(e))
            return t;
        let i = t;
        try {
            if ((n = e == null ? void 0 : e.KEYS_WORDS_NOT_ALLOWED) != null && n.length) {
                const r = new RegExp(`\\b(${e.KEYS_WORDS_NOT_ALLOWED.join("|")})\\b`,"gi");
                i = i.replace(r, "")
            }
            if (e != null && e.EXIST_LINKS_PATTERN && (i.match(e.EXIST_LINKS_PATTERN) || []).forEach(a => {
                e.LINK_INTERNAL_PATTERN.test(a) || (i = i.replace(a, ""))
            }
            ),
            (s = e == null ? void 0 : e.SENSITIVE_INFOS_PATTERN) != null && s.length) {
                const r = e.SENSITIVE_INFOS_PATTERN.join("|")
                  , a = new RegExp(`(${r})`,"gim");
                i = i.replace(a, "")
            }
            return i.trim()
        } catch (r) {
            return console.error(r),
            t
        }
    }
    var Pi = {
        prefix: "fal",
        iconName: "circle-minus",
        icon: [512, 512, ["minus-circle"], "f056", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"]
    }
      , Vi = {
        prefix: "fal",
        iconName: "icons",
        icon: [512, 512, ["heart-music-camera-bolt"], "f86d", "M473.7 4.1C493.5 .2 512 15.3 512 35.5V168h-.2c.1 1.3 .2 2.7 .2 4c0 28.7-28.7 52-64 52s-64-23.3-64-52s28.7-52 64-52c11.7 0 22.6 2.5 32 7V35.5L352 61.1V200h-.2c.1 1.3 .2 2.7 .2 4c0 28.7-28.7 52-64 52s-64-23.3-64-52s28.7-52 64-52c11.7 0 22.6 2.5 32 7V61.1c0-15.3 10.8-28.4 25.7-31.4l128-25.6zM480 172c0-3.1-1.5-7.5-6.9-11.9c-5.5-4.5-14.3-8.1-25.1-8.1s-19.5 3.6-25.1 8.1c-5.5 4.4-6.9 8.8-6.9 11.9s1.5 7.5 6.9 11.9c5.5 4.5 14.3 8.1 25.1 8.1s19.5-3.6 25.1-8.1c5.5-4.4 6.9-8.8 6.9-11.9zM320 204c0-3.1-1.5-7.5-6.9-11.9c-5.5-4.5-14.3-8.1-25.1-8.1s-19.5 3.6-25.1 8.1c-5.5 4.4-6.9 8.8-6.9 11.9s1.5 7.5 6.9 11.9c5.5 4.5 14.3 8.1 25.1 8.1s19.5-3.6 25.1-8.1c5.5-4.4 6.9-8.8 6.9-11.9zM105.4 54.6l-6-6c-9-9-21.8-13.1-34.4-11c-19 3.2-33 19.6-33 38.9v2.9c0 11.9 4.9 23.2 13.6 31.4L128 187.7l82.4-76.9c8.7-8.1 13.6-19.5 13.6-31.4V76.5c0-19.3-13.9-35.8-33-38.9c-12.6-2.1-25.4 2-34.4 11l-6 6L128 77.3 105.4 54.6zM59.7 6C82.5 2.3 105.7 9.7 122 26l0 0 6 6 6-6C150.3 9.7 173.5 2.3 196.3 6C230.7 11.8 256 41.6 256 76.5v2.9c0 20.8-8.6 40.6-23.8 54.8l-90.4 84.3c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L23.8 134.2C8.6 120 0 100.2 0 79.5V76.5C0 41.6 25.3 11.8 59.7 6zM72 320H48c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H216c-12.1 0-23.2-6.8-28.6-17.7L180.2 288H107.8l-7.2 14.3C95.2 313.2 84.1 320 72 320zm136.8-46.3L216 288h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48H72l7.2-14.3c5.4-10.8 16.5-17.7 28.6-17.7h72.4c12.1 0 23.2 6.8 28.6 17.7zM112 392a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM475.3 283.3L390.6 368H480c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L441.4 400H352c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l112-112c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
    }
      , Bi = {
        prefix: "fal",
        iconName: "box-archive",
        icon: [512, 512, ["archive"], "f187", "M480 64H32v64H64 448h32V64zm0 96H448 64 32c-17.7 0-32-14.3-32-32V64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32zM160 240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm288-48h32V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192H64V416c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V192z"]
    }
      , ot = {
        prefix: "fal",
        iconName: "bars",
        icon: [448, 512, ["navicon"], "f0c9", "M0 80c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H432c8.8 0 16 7.2 16 16z"]
    }
      , Ri = {
        prefix: "fal",
        iconName: "circle-exclamation",
        icon: [512, 512, ["exclamation-circle"], "f06a", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16V272c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]
    }
      , Zi = {
        prefix: "fal",
        iconName: "share-nodes",
        icon: [448, 512, ["share-alt"], "f1e0", "M448 112c0 44.2-35.8 80-80 80c-22.9 0-43.6-9.6-58.1-25l-151 75.5c.8 4.4 1.1 8.9 1.1 13.5s-.4 9.1-1.1 13.5l151 75.5c14.6-15.4 35.2-25 58.1-25c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-9.7 1.7-19 4.9-27.7L147.2 299.5c-14.3 22-39 36.5-67.2 36.5c-44.2 0-80-35.8-80-80s35.8-80 80-80c28.2 0 52.9 14.5 67.2 36.5l145.7-72.9c-3.2-8.6-4.9-17.9-4.9-27.7c0-44.2 35.8-80 80-80s80 35.8 80 80zM80 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM416 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM368 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
    }
      , me = {
        prefix: "fal",
        iconName: "user",
        icon: [448, 512, [128100, 62144], "f007", "M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]
    }
      , _i = {
        prefix: "fal",
        iconName: "heart-circle-plus",
        icon: [576, 512, [], "e500", "M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2l10.9-10.2c4.3 10.2 9.6 20 15.7 29.1l-4.9 4.5c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 6.8-.5 13.5-1.4 20.1c-9.8-4.9-20.2-8.9-30.9-12c.2-2.7 .3-5.4 .3-8.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-64v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]
    }
      , we = {
        prefix: "fal",
        iconName: "message-lines",
        icon: [512, 512, ["comment-alt-lines"], "f4a6", "M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464V416zM64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h64 32v32 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm80 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H144zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H144z"]
    }
      , pe = {
        prefix: "fal",
        iconName: "image",
        icon: [512, 512, [], "f03e", "M64 64C46.3 64 32 78.3 32 96V329.4l67.7-67.7c15.6-15.6 40.9-15.6 56.6 0L224 329.4 355.7 197.7c15.6-15.6 40.9-15.6 56.6 0L480 265.4V96c0-17.7-14.3-32-32-32H64zM32 374.6V416c0 17.7 14.3 32 32 32h41.4l96-96-67.7-67.7c-3.1-3.1-8.2-3.1-11.3 0L32 374.6zM389.7 220.3c-3.1-3.1-8.2-3.1-11.3 0L150.6 448H448c17.7 0 32-14.3 32-32V310.6l-90.3-90.3zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm160 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
    }
      , ue = {
        prefix: "fal",
        iconName: "heart",
        icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2L443 275.5c23.6-22 37-52.8 37-85.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zm34.9-57.1C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 36-13.1 70.6-36.6 97.5c-3.4 3.8-6.9 7.5-10.7 11l-184 171.3c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5z"]
    }
      , Ui = {
        prefix: "fal",
        iconName: "lock-keyhole",
        icon: [448, 512, ["lock-alt"], "f30d", "M224 32c53 0 96 43 96 96v64H128V128c0-53 43-96 96-96zM96 128v64H80c-44.2 0-80 35.8-80 80V432c0 44.2 35.8 80 80 80H368c44.2 0 80-35.8 80-80V272c0-44.2-35.8-80-80-80H352V128C352 57.3 294.7 0 224 0S96 57.3 96 128zM80 224H368c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm160 88c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16V312z"]
    }
      , he = {
        prefix: "fal",
        iconName: "badge-check",
        icon: [512, 512, [], "f336", "M190.6 71.4C203 47.9 227.7 32 256 32s53 15.9 65.4 39.4c3.6 6.8 11.5 10.1 18.8 7.8c25.4-7.8 54.1-1.6 74.1 18.4s26.2 48.7 18.4 74.1c-2.3 7.3 1 15.2 7.8 18.8C464.1 203 480 227.7 480 256s-15.9 53-39.4 65.4c-6.8 3.6-10.1 11.5-7.8 18.8c7.8 25.4 1.6 54.1-18.4 74.1s-48.7 26.2-74.1 18.4c-7.3-2.3-15.2 1-18.8 7.8C309 464.1 284.3 480 256 480s-53-15.9-65.4-39.4c-3.6-6.8-11.5-10.1-18.8-7.8c-25.4 7.8-54.1 1.6-74.1-18.4s-26.2-48.7-18.4-74.1c2.3-7.3-1-15.2-7.8-18.8C47.9 309 32 284.3 32 256s15.9-53 39.4-65.4c6.8-3.6 10.1-11.5 7.8-18.8c-7.8-25.4-1.6-54.1 18.4-74.1s48.7-26.2 74.1-18.4c7.3 2.3 15.2-1 18.8-7.8zM256 0c-36.1 0-68 18.1-87.1 45.6c-33-6-68.3 3.8-93.9 29.4s-35.3 60.9-29.4 93.9C18.1 188 0 219.9 0 256s18.1 68 45.6 87.1c-6 33 3.8 68.3 29.4 93.9s60.9 35.3 93.9 29.4C188 493.9 219.9 512 256 512s68-18.1 87.1-45.6c33 6 68.3-3.8 93.9-29.4s35.3-60.9 29.4-93.9C493.9 324 512 292.1 512 256s-18.1-68-45.6-87.1c6-33-3.8-68.3-29.4-93.9s-60.9-35.3-93.9-29.4C324 18.1 292.1 0 256 0zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"]
    }
      , Fi = {
        prefix: "fal",
        iconName: "heart-circle-xmark",
        icon: [576, 512, [], "e501", "M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2l10.9-10.2c4.3 10.2 9.6 20 15.7 29.1l-4.9 4.5c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 6.8-.5 13.5-1.4 20.1c-9.8-4.9-20.2-8.9-30.9-12c.2-2.7 .3-5.4 .3-8.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-36.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L409.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L432 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
    }
      , Qi = {
        prefix: "fal",
        iconName: "phone",
        icon: [512, 512, [128222, 128379], "f095", "M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z"]
    }
      , Hi = {
        prefix: "fal",
        iconName: "volume-off",
        icon: [320, 512, [], "f026", "M288 66.7L151.6 188c-2.9 2.6-6.7 4-10.6 4H56c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h85c3.9 0 7.7 1.4 10.6 4L288 445.3V66.7zM270.4 39.5c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8V450.2c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L134.9 352H56c-30.9 0-56-25.1-56-56V216c0-30.9 25.1-56 56-56h78.9L270.4 39.5z"]
    }
      , Yi = {
        prefix: "fal",
        iconName: "gear",
        icon: [512, 512, [9881, "cog"], "f013", "M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.1-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.1-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"]
    }
      , Te = {
        prefix: "fal",
        iconName: "circle-dollar",
        icon: [512, 512, ["dollar-circle", "usd-circle"], "f2e8", "M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 120v23c13.5 1 26.6 4.6 39.6 8.3c1.5 .4 3.1 .9 4.6 1.3c8.5 2.4 13.5 11.2 11.2 19.7s-11.2 13.5-19.7 11.2c-2.4-.7-4.8-1.4-7.2-2.1c-7.5-2.2-15.2-4.4-22.9-5.5c-19.1-2.8-36.6-.4-49.3 5.1c-12.9 5.6-18.6 13.1-19.8 19.5c-1.8 9.8 2.1 16.5 10.2 21.7c10.6 6.8 26.5 11.3 45.8 16.8l.3 .1c17.7 5 38.9 11.1 54.3 21.7c19 13 27.8 33.8 23.6 56.5c-4 21.6-18.9 36-37.8 43.6c-9.9 4-21.1 6.3-33.1 6.9l0 24.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-25.9c-8.1-1.3-21.8-5.2-32.4-8.4c-6.9-2.1-13.8-4.3-20.7-6.5c-8.4-2.8-12.9-11.8-10.2-20.2s11.8-12.9 20.2-10.2c6.6 2.2 13.2 4.3 19.9 6.3c11.2 3.4 22.7 6.6 28.1 7.4c19.8 2.9 36.5 1.3 48-3.4c11.2-4.5 16.8-11.3 18.3-19.7c1.9-10.5-1.5-18.4-10.2-24.4c-12-8.2-26.8-12.3-40.9-16.2c-2.3-.6-4.7-1.3-6.9-1.9c-17.1-4.8-37-10.5-51.7-19.9c-8.1-5.2-15.7-12.1-20.5-21.7c-4.9-9.8-6.2-20.8-4-32.8c3.8-20.7 20-35.1 38.6-43.1c7.4-3.2 15.6-5.6 24.3-7.1V120c0-8.8 7.2-16 16-16s16 7.2 16 16z"]
    }
      , Wi = {
        prefix: "fal",
        iconName: "location-dot",
        icon: [384, 512, ["map-marker-alt"], "f3c5", "M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"]
    }
      , Se = Wi
      , Gi = {
        prefix: "fal",
        iconName: "volume-xmark",
        icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M151.6 188L288 66.7V445.3L151.6 324c-2.9-2.6-6.7-4-10.6-4H56c-13.3 0-24-10.7-24-24V216c0-13.3 10.7-24 24-24h85c3.9 0 7.7-1.4 10.6-4zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9L270.4 472.5l10.6-12-10.6 12c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8V61.8C320 45.3 306.7 32 290.2 32zM411.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 256l-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 278.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L502.6 256l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L480 233.4l-68.7-68.7z"]
    }
      , qi = {
        prefix: "fal",
        iconName: "circle-plus",
        icon: [512, 512, ["plus-circle"], "f055", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H272V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80z"]
    }
      , Ki = {
        prefix: "fal",
        iconName: "calendar-lines",
        icon: [448, 512, ["calendar-note"], "e0d5", "M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H32V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32zM96 368c0-8.8 7.2-16 16-16H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm16-112H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
    }
      , fe = {
        prefix: "fal",
        iconName: "video",
        icon: [576, 512, ["video-camera"], "f03d", "M64 96c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zM0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64v47.2V336.8 384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM519.4 411.3L416 354.4V317.9l118.8 65.4c.9 .5 1.9 .8 3 .8c3.4 0 6.2-2.8 6.2-6.2V134.2c0-3.4-2.8-6.2-6.2-6.2c-1 0-2.1 .3-3 .8L416 194.1V157.6l103.4-56.9c5.6-3.1 12-4.7 18.4-4.7c21.1 0 38.2 17.1 38.2 38.2V377.8c0 21.1-17.1 38.2-38.2 38.2c-6.4 0-12.8-1.6-18.4-4.7z"]
    };
    const w = (t, e) => {
        const i = t.__vccOpts || t;
        for (const [n,s] of e)
            i[n] = s;
        return i
    }
      , Ji = {
        props: {
            description: {
                type: String,
                required: !0
            },
            location: String,
            v10: Boolean
        },
        setup() {
            const {t} = O();
            return {
                t,
                faMapMarkerAlt: Se
            }
        },
        data() {
            return {
                isBioExpanded: !1,
                showToggleButton: !1
            }
        },
        mounted() {
            this.checkIfBioIsTruncated()
        },
        watch: {
            description() {
                this.checkIfBioIsTruncated()
            }
        },
        methods: {
            toggleBio() {
                this.isBioExpanded = !this.isBioExpanded
            },
            checkIfBioIsTruncated() {
                const t = this.$refs.bioText;
                t && (this.showToggleButton = t.scrollHeight > t.offsetHeight)
            },
            removeLinks(t) {
                return t ? Oi(t) : ""
            }
        }
    }
      , Xi = {
        class: "area-bio"
    }
      , $i = {
        key: 1,
        class: "location"
    };
    function eo(t, e, i, n, s, r) {
        const a = o.resolveComponent("font-awesome-icon");
        return o.openBlock(),
        o.createElementBlock("div", Xi, [o.createElementVNode("span", {
            ref: "bioText",
            class: o.normalizeClass(["font-normal text-sm bio", {
                "bio-expanded": s.isBioExpanded
            }])
        }, o.toDisplayString(r.removeLinks(i.description)), 3), s.showToggleButton ? (o.openBlock(),
        o.createElementBlock("div", {
            key: 0,
            class: "text-sm font-medium toggle-bio-button",
            onClick: e[0] || (e[0] = (...l) => r.toggleBio && r.toggleBio(...l))
        }, o.toDisplayString(s.isBioExpanded ? n.t("READ_LESS") : n.t("READ_MORE")), 1)) : o.createCommentVNode("", !0), i.location && i.v10 ? (o.openBlock(),
        o.createElementBlock("div", $i, [o.createVNode(a, {
            icon: n.faMapMarkerAlt
        }, null, 8, ["icon"]), o.createElementVNode("span", null, o.toDisplayString(i.location || "Miami FL"), 1)])) : o.createCommentVNode("", !0)])
    }
    const Ie = w(Ji, [["render", eo]])
      , to = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ie
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Ae = {
        run(t) {
            return window.WC_AUTO_LOADER.run(t)
        }
    }
      , xc = ""
      , Dc = ""
      , Ec = "";
    function io(t) {
        var e = [];
        if (t.length === 0)
            return "";
        if (typeof t[0] != "string")
            throw new TypeError("Url must be a string. Received " + t[0]);
        if (t[0].match(/^[^/:]+:\/*$/) && t.length > 1) {
            var i = t.shift();
            t[0] = i + t[0]
        }
        t[0].match(/^file:\/\/\//) ? t[0] = t[0].replace(/^([^/:]+):\/*/, "$1:///") : t[0] = t[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var n = 0; n < t.length; n++) {
            var s = t[n];
            if (typeof s != "string")
                throw new TypeError("Url must be a string. Received " + s);
            s !== "" && (n > 0 && (s = s.replace(/^[\/]+/, "")),
            n < t.length - 1 ? s = s.replace(/[\/]+$/, "") : s = s.replace(/[\/]+$/, "/"),
            e.push(s))
        }
        var r = e.join("/");
        r = r.replace(/\/(\?|&|#[^!])/g, "$1");
        var a = r.split("?");
        return r = a.shift() + (a.length > 0 ? "?" : "") + a.join("&"),
        r
    }
    function C() {
        var t;
        return typeof arguments[0] == "object" ? t = arguments[0] : t = [].slice.call(arguments),
        io(t)
    }
    const oo = `.auth{margin-left:17px;margin-right:20px}
`
      , no = {
        inject: ["locale", "appSettings", "$http"],
        emits: ["form-paid"],
        components: {
            ElSkeleton: I.ElSkeleton,
            ElSkeletonItem: I.ElSkeletonItem
        },
        props: {
            user: {
                type: Object,
                required: !0
            },
            orderPayment: {
                type: String,
                default: null
            },
            authView: String,
            isRecoveryConfirmation: Boolean
        },
        data() {
            return {
                wcAuth: {
                    visible: !1,
                    name: "privacy-web-auth",
                    ctx: null,
                    loaded: !1,
                    error: !1
                }
            }
        },
        computed: {
            appSettingsEncripted() {
                return btoa(JSON.stringify(this.appSettings))
            }
        },
        mounted() {
            this.loadWebComponent()
        },
        methods: {
            async loadWebComponent() {
                try {
                    const t = await Ae.run({
                        urlBase: this.appSettings.PRIVACY_MODULES + "/webcomponents",
                        componentName: this.wcAuth.name
                    });
                    this.wcAuth.loaded = t.loaded,
                    this.wcAuth.error = t.error
                } catch {
                    this.wcAuth.error = !0
                }
            },
            async finishCheckout(t) {
                var e;
                try {
                    let i = null;
                    if (this.orderPayment)
                        i = C(this.appSettings.PRIVACY_URL, `/profile/${this.user.profileName}/orderpayment=${this.orderPayment}`);
                    else {
                        const n = (e = t == null ? void 0 : t.detail) == null ? void 0 : e[0];
                        n != null && n.token && await this.verifyUser(n.token) && await this.followProfile(n.token),
                        i = C(this.appSettings.PRIVACY_URL, `/profile/${this.user.profileName}`)
                    }
                    window.location.href = i
                } catch (i) {
                    console.error(i)
                }
            },
            async followProfile(t) {
                var e;
                try {
                    const i = C(this.appSettings.ENDPOINT_API_CHECKOUT, "/follow-profile");
                    await this.$http.post(i, {
                        userId: (e = this.user) == null ? void 0 : e.userId
                    }, {
                        headers: {
                            Authorization: `Bearer ${t}`
                        }
                    })
                } catch (i) {
                    console.error(i)
                }
            },
            async verifyUser(t) {
                var e;
                try {
                    const i = C(this.appSettings.ENDPOINT_API_PROFILE, "/Users")
                      , n = await this.$http.get(i, {
                        headers: {
                            Authorization: `Bearer ${t}`
                        }
                    });
                    return n != null && n.data ? !!((e = n.data) != null && e.document) : !1
                } catch (i) {
                    console.error(i)
                }
            }
        }
    }
      , so = {
        class: "auth"
    }
      , ro = {
        key: 0
    }
      , ao = {
        key: 1,
        class: "mt-3"
    }
      , lo = {
        class: "d-flex justify-content-between mb-2"
    }
      , co = {
        class: "d-flex justify-content-center"
    }
      , mo = {
        class: "d-flex justify-content-between mb-4"
    };
    function po(t, e, i, n, s, r) {
        var d, m;
        const a = o.resolveComponent("privacy-web-auth")
          , l = o.resolveComponent("el-skeleton-item")
          , c = o.resolveComponent("el-skeleton");
        return o.openBlock(),
        o.createElementBlock("div", so, [s.wcAuth.loaded ? (o.openBlock(),
        o.createElementBlock("div", ro, [o.createVNode(a, {
            visible: s.wcAuth.visible,
            locale: r.locale,
            "app-settings": r.appSettingsEncripted,
            "profile-name": (d = i.user) == null ? void 0 : d.profileName,
            "is-free-creator": (m = i.user) == null ? void 0 : m.isFreeCreator,
            "is-recovery-confirmation": i.isRecoveryConfirmation,
            "is-checkout": !0,
            view: i.authView,
            "order-payment": i.orderPayment,
            onSuccessLogin: r.finishCheckout,
            onFormPaid: e[0] || (e[0] = g => t.$emit("form-paid"))
        }, null, 8, ["visible", "locale", "app-settings", "profile-name", "is-free-creator", "is-recovery-confirmation", "view", "order-payment", "onSuccessLogin"])])) : (o.openBlock(),
        o.createElementBlock("div", ao, [o.createVNode(c, null, {
            template: o.withCtx( () => [o.createVNode(l, {
                variant: "p",
                class: "mb-1",
                style: {
                    width: "30%",
                    height: "20px"
                }
            }), o.createVNode(l, {
                variant: "text",
                class: "mb-2",
                style: {
                    width: "100%",
                    height: "40px",
                    "border-radius": "18px"
                }
            }), o.createVNode(l, {
                variant: "text",
                class: "mb-1",
                style: {
                    width: "100%",
                    height: "40px",
                    "border-radius": "18px"
                }
            }), o.createElementVNode("div", lo, [o.createVNode(l, {
                variant: "text",
                style: {
                    width: "30%",
                    height: "20px"
                }
            }), o.createVNode(l, {
                variant: "text",
                style: {
                    width: "30%",
                    height: "20px"
                }
            })]), o.createVNode(l, {
                variant: "text",
                class: "mb-2",
                style: {
                    width: "100%",
                    height: "40px",
                    "border-radius": "18px"
                }
            }), o.createElementVNode("div", co, [o.createVNode(l, {
                variant: "p",
                class: "mb-3",
                style: {
                    width: "40%",
                    height: "20px"
                }
            })]), o.createElementVNode("div", mo, [o.createVNode(l, {
                variant: "text",
                style: {
                    width: "45%",
                    height: "40px",
                    "border-radius": "18px"
                }
            }), o.createVNode(l, {
                variant: "text",
                style: {
                    width: "45%",
                    height: "40px",
                    "border-radius": "18px"
                }
            })])]),
            _: 1
        })]))])
    }
    const nt = w(no, [["render", po], ["styles", [oo]]])
      , uo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function ho({userName: t}) {
        t = t.trim();
        const e = "#F4EEE5"
          , i = "#333333";
        let n = ""
          , s = "";
        if (!t)
            n = "",
            s = "";
        else {
            const m = Array.from(t.toUpperCase().replace(/\s+/g, ""));
            n = m[0] || "",
            s = m[1] || ""
        }
        const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        r.setAttribute("width", "120"),
        r.setAttribute("height", "120");
        const a = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        a.setAttribute("x", "0"),
        a.setAttribute("y", "0"),
        a.setAttribute("width", "120"),
        a.setAttribute("height", "120"),
        a.setAttribute("fill", e);
        const l = document.createElementNS("http://www.w3.org/2000/svg", "text");
        l.setAttribute("x", "60px"),
        l.setAttribute("y", "64px"),
        l.setAttribute("dominant-baseline", "middle"),
        l.setAttribute("text-anchor", "middle"),
        l.setAttribute("fill", i),
        l.setAttribute("font-family", "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, Helvetica, sans-serif"),
        l.setAttribute("font-size", "40px"),
        l.setAttribute("font-weight", "530"),
        l.textContent = `${n}${s}`,
        r.appendChild(a),
        r.appendChild(l);
        const c = new XMLSerializer().serializeToString(r);
        return `data:image/svg+xml;base64,${fo(c)}`
    }
    function fo(t) {
        const e = new TextEncoder().encode(t);
        let i = "";
        for (let n = 0; n < e.byteLength; n++)
            i += String.fromCharCode(e[n]);
        return btoa(i)
    }
    function st({userName: t}) {
        return ho({
            userName: t
        })
    }
    /*!
  * PhotoSwipe 5.3.8 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */
    function v(t, e, i) {
        const n = document.createElement(e);
        return t && (n.className = t),
        i && i.appendChild(n),
        n
    }
    function T(t, e) {
        return t.x = e.x,
        t.y = e.y,
        e.id !== void 0 && (t.id = e.id),
        t
    }
    function rt(t) {
        t.x = Math.round(t.x),
        t.y = Math.round(t.y)
    }
    function Ce(t, e) {
        const i = Math.abs(t.x - e.x)
          , n = Math.abs(t.y - e.y);
        return Math.sqrt(i * i + n * n)
    }
    function $(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function ee(t, e, i) {
        return Math.min(Math.max(t, e), i)
    }
    function te(t, e, i) {
        let n = `translate3d(${t}px,${e || 0}px,0)`;
        return i !== void 0 && (n += ` scale3d(${i},${i},1)`),
        n
    }
    function Q(t, e, i, n) {
        t.style.transform = te(e, i, n)
    }
    const go = "cubic-bezier(.4,0,.22,1)";
    function at(t, e, i, n) {
        t.style.transition = e ? `${e} ${i}ms ${n || go}` : "none"
    }
    function Le(t, e, i) {
        t.style.width = typeof e == "number" ? `${e}px` : e,
        t.style.height = typeof i == "number" ? `${i}px` : i
    }
    function yo(t) {
        at(t)
    }
    function Mo(t) {
        return "decode"in t ? t.decode().catch( () => {}
        ) : t.complete ? Promise.resolve(t) : new Promise( (e, i) => {
            t.onload = () => e(t),
            t.onerror = i
        }
        )
    }
    const k = {
        IDLE: "idle",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "error"
    };
    function No(t) {
        return "button"in t && t.button === 1 || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey
    }
    function zo(t, e, i=document) {
        let n = [];
        if (t instanceof Element)
            n = [t];
        else if (t instanceof NodeList || Array.isArray(t))
            n = Array.from(t);
        else {
            const s = typeof t == "string" ? t : e;
            s && (n = Array.from(i.querySelectorAll(s)))
        }
        return n
    }
    function lt() {
        return !!(navigator.vendor && navigator.vendor.match(/apple/i))
    }
    let ct = !1;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: () => {
                ct = !0
            }
        }))
    } catch {}
    class bo {
        constructor() {
            this._pool = []
        }
        add(e, i, n, s) {
            this._toggleListener(e, i, n, s)
        }
        remove(e, i, n, s) {
            this._toggleListener(e, i, n, s, !0)
        }
        removeAll() {
            this._pool.forEach(e => {
                this._toggleListener(e.target, e.type, e.listener, e.passive, !0, !0)
            }
            ),
            this._pool = []
        }
        _toggleListener(e, i, n, s, r, a) {
            if (!e)
                return;
            const l = r ? "removeEventListener" : "addEventListener";
            i.split(" ").forEach(d => {
                if (d) {
                    a || (r ? this._pool = this._pool.filter(g => g.type !== d || g.listener !== n || g.target !== e) : this._pool.push({
                        target: e,
                        type: d,
                        listener: n,
                        passive: s
                    }));
                    const m = ct ? {
                        passive: s || !1
                    } : !1;
                    e[l](d, n, m)
                }
            }
            )
        }
    }
    function dt(t, e) {
        if (t.getViewportSizeFn) {
            const i = t.getViewportSizeFn(t, e);
            if (i)
                return i
        }
        return {
            x: document.documentElement.clientWidth,
            y: window.innerHeight
        }
    }
    function ie(t, e, i, n, s) {
        let r = 0;
        if (e.paddingFn)
            r = e.paddingFn(i, n, s)[t];
        else if (e.padding)
            r = e.padding[t];
        else {
            const a = "padding" + t[0].toUpperCase() + t.slice(1);
            e[a] && (r = e[a])
        }
        return Number(r) || 0
    }
    function mt(t, e, i, n) {
        return {
            x: e.x - ie("left", t, e, i, n) - ie("right", t, e, i, n),
            y: e.y - ie("top", t, e, i, n) - ie("bottom", t, e, i, n)
        }
    }
    class xo {
        constructor(e) {
            this.slide = e,
            this.currZoomLevel = 1,
            this.center = {
                x: 0,
                y: 0
            },
            this.max = {
                x: 0,
                y: 0
            },
            this.min = {
                x: 0,
                y: 0
            }
        }
        update(e) {
            this.currZoomLevel = e,
            this.slide.width ? (this._updateAxis("x"),
            this._updateAxis("y"),
            this.slide.pswp.dispatch("calcBounds", {
                slide: this.slide
            })) : this.reset()
        }
        _updateAxis(e) {
            const {pswp: i} = this.slide
              , n = this.slide[e === "x" ? "width" : "height"] * this.currZoomLevel
              , r = ie(e === "x" ? "left" : "top", i.options, i.viewportSize, this.slide.data, this.slide.index)
              , a = this.slide.panAreaSize[e];
            this.center[e] = Math.round((a - n) / 2) + r,
            this.max[e] = n > a ? Math.round(a - n) + r : this.center[e],
            this.min[e] = n > a ? r : this.center[e]
        }
        reset() {
            this.center.x = 0,
            this.center.y = 0,
            this.max.x = 0,
            this.max.y = 0,
            this.min.x = 0,
            this.min.y = 0
        }
        correctPan(e, i) {
            return ee(i, this.max[e], this.min[e])
        }
    }
    const pt = 4e3;
    class ut {
        constructor(e, i, n, s) {
            this.pswp = s,
            this.options = e,
            this.itemData = i,
            this.index = n,
            this.panAreaSize = null,
            this.elementSize = null,
            this.fit = 1,
            this.fill = 1,
            this.vFill = 1,
            this.initial = 1,
            this.secondary = 1,
            this.max = 1,
            this.min = 1
        }
        update(e, i, n) {
            const s = {
                x: e,
                y: i
            };
            this.elementSize = s,
            this.panAreaSize = n;
            const r = n.x / s.x
              , a = n.y / s.y;
            this.fit = Math.min(1, r < a ? r : a),
            this.fill = Math.min(1, r > a ? r : a),
            this.vFill = Math.min(1, a),
            this.initial = this._getInitial(),
            this.secondary = this._getSecondary(),
            this.max = Math.max(this.initial, this.secondary, this._getMax()),
            this.min = Math.min(this.fit, this.initial, this.secondary),
            this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
                zoomLevels: this,
                slideData: this.itemData
            })
        }
        _parseZoomLevelOption(e) {
            const i = e + "ZoomLevel"
              , n = this.options[i];
            if (n)
                return typeof n == "function" ? n(this) : n === "fill" ? this.fill : n === "fit" ? this.fit : Number(n)
        }
        _getSecondary() {
            let e = this._parseZoomLevelOption("secondary");
            return e || (e = Math.min(1, this.fit * 3),
            this.elementSize && e * this.elementSize.x > pt && (e = pt / this.elementSize.x),
            e)
        }
        _getInitial() {
            return this._parseZoomLevelOption("initial") || this.fit
        }
        _getMax() {
            return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4)
        }
    }
    class Do {
        constructor(e, i, n) {
            this.data = e,
            this.index = i,
            this.pswp = n,
            this.isActive = i === n.currIndex,
            this.currentResolution = 0,
            this.panAreaSize = {
                x: 0,
                y: 0
            },
            this.pan = {
                x: 0,
                y: 0
            },
            this.isFirstSlide = this.isActive && !n.opener.isOpen,
            this.zoomLevels = new ut(n.options,e,i,n),
            this.pswp.dispatch("gettingData", {
                slide: this,
                data: this.data,
                index: i
            }),
            this.content = this.pswp.contentLoader.getContentBySlide(this),
            this.container = v("pswp__zoom-wrap", "div"),
            this.holderElement = null,
            this.currZoomLevel = 1,
            this.width = this.content.width,
            this.height = this.content.height,
            this.heavyAppended = !1,
            this.bounds = new xo(this),
            this.prevDisplayedWidth = -1,
            this.prevDisplayedHeight = -1,
            this.pswp.dispatch("slideInit", {
                slide: this
            })
        }
        setIsActive(e) {
            e && !this.isActive ? this.activate() : !e && this.isActive && this.deactivate()
        }
        append(e) {
            this.holderElement = e,
            this.container.style.transformOrigin = "0 0",
            this.data && (this.calculateSize(),
            this.load(),
            this.updateContentSize(),
            this.appendHeavy(),
            this.holderElement.appendChild(this.container),
            this.zoomAndPanToInitial(),
            this.pswp.dispatch("firstZoomPan", {
                slide: this
            }),
            this.applyCurrentZoomPan(),
            this.pswp.dispatch("afterSetContent", {
                slide: this
            }),
            this.isActive && this.activate())
        }
        load() {
            this.content.load(!1),
            this.pswp.dispatch("slideLoad", {
                slide: this
            })
        }
        appendHeavy() {
            const {pswp: e} = this
              , i = !0;
            this.heavyAppended || !e.opener.isOpen || e.mainScroll.isShifted() || !this.isActive && !i || this.pswp.dispatch("appendHeavy", {
                slide: this
            }).defaultPrevented || (this.heavyAppended = !0,
            this.content.append(),
            this.pswp.dispatch("appendHeavyContent", {
                slide: this
            }))
        }
        activate() {
            this.isActive = !0,
            this.appendHeavy(),
            this.content.activate(),
            this.pswp.dispatch("slideActivate", {
                slide: this
            })
        }
        deactivate() {
            this.isActive = !1,
            this.content.deactivate(),
            this.currZoomLevel !== this.zoomLevels.initial && this.calculateSize(),
            this.currentResolution = 0,
            this.zoomAndPanToInitial(),
            this.applyCurrentZoomPan(),
            this.updateContentSize(),
            this.pswp.dispatch("slideDeactivate", {
                slide: this
            })
        }
        destroy() {
            this.content.hasSlide = !1,
            this.content.remove(),
            this.container.remove(),
            this.pswp.dispatch("slideDestroy", {
                slide: this
            })
        }
        resize() {
            this.currZoomLevel === this.zoomLevels.initial || !this.isActive ? (this.calculateSize(),
            this.currentResolution = 0,
            this.zoomAndPanToInitial(),
            this.applyCurrentZoomPan(),
            this.updateContentSize()) : (this.calculateSize(),
            this.bounds.update(this.currZoomLevel),
            this.panTo(this.pan.x, this.pan.y))
        }
        updateContentSize(e) {
            const i = this.currentResolution || this.zoomLevels.initial;
            if (!i)
                return;
            const n = Math.round(this.width * i) || this.pswp.viewportSize.x
              , s = Math.round(this.height * i) || this.pswp.viewportSize.y;
            !this.sizeChanged(n, s) && !e || this.content.setDisplayedSize(n, s)
        }
        sizeChanged(e, i) {
            return e !== this.prevDisplayedWidth || i !== this.prevDisplayedHeight ? (this.prevDisplayedWidth = e,
            this.prevDisplayedHeight = i,
            !0) : !1
        }
        getPlaceholderElement() {
            var e;
            return (e = this.content.placeholder) == null ? void 0 : e.element
        }
        zoomTo(e, i, n, s) {
            const {pswp: r} = this;
            if (!this.isZoomable() || r.mainScroll.isShifted())
                return;
            r.dispatch("beforeZoomTo", {
                destZoomLevel: e,
                centerPoint: i,
                transitionDuration: n
            }),
            r.animations.stopAllPan();
            const a = this.currZoomLevel;
            s || (e = ee(e, this.zoomLevels.min, this.zoomLevels.max)),
            this.setZoomLevel(e),
            this.pan.x = this.calculateZoomToPanOffset("x", i, a),
            this.pan.y = this.calculateZoomToPanOffset("y", i, a),
            rt(this.pan);
            const l = () => {
                this._setResolution(e),
                this.applyCurrentZoomPan()
            }
            ;
            n ? r.animations.startTransition({
                isPan: !0,
                name: "zoomTo",
                target: this.container,
                transform: this.getCurrentTransform(),
                onComplete: l,
                duration: n,
                easing: r.options.easing
            }) : l()
        }
        toggleZoom(e) {
            this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, e, this.pswp.options.zoomAnimationDuration)
        }
        setZoomLevel(e) {
            this.currZoomLevel = e,
            this.bounds.update(this.currZoomLevel)
        }
        calculateZoomToPanOffset(e, i, n) {
            if (this.bounds.max[e] - this.bounds.min[e] === 0)
                return this.bounds.center[e];
            i || (i = this.pswp.getViewportCenterPoint()),
            n || (n = this.zoomLevels.initial);
            const r = this.currZoomLevel / n;
            return this.bounds.correctPan(e, (this.pan[e] - i[e]) * r + i[e])
        }
        panTo(e, i) {
            this.pan.x = this.bounds.correctPan("x", e),
            this.pan.y = this.bounds.correctPan("y", i),
            this.applyCurrentZoomPan()
        }
        isPannable() {
            return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit
        }
        isZoomable() {
            return Boolean(this.width) && this.content.isZoomable()
        }
        applyCurrentZoomPan() {
            this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel),
            this === this.pswp.currSlide && this.pswp.dispatch("zoomPanUpdate", {
                slide: this
            })
        }
        zoomAndPanToInitial() {
            this.currZoomLevel = this.zoomLevels.initial,
            this.bounds.update(this.currZoomLevel),
            T(this.pan, this.bounds.center),
            this.pswp.dispatch("initialZoomPan", {
                slide: this
            })
        }
        _applyZoomTransform(e, i, n) {
            n /= this.currentResolution || this.zoomLevels.initial,
            Q(this.container, e, i, n)
        }
        calculateSize() {
            const {pswp: e} = this;
            T(this.panAreaSize, mt(e.options, e.viewportSize, this.data, this.index)),
            this.zoomLevels.update(this.width, this.height, this.panAreaSize),
            e.dispatch("calcSlideSize", {
                slide: this
            })
        }
        getCurrentTransform() {
            const e = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
            return te(this.pan.x, this.pan.y, e)
        }
        _setResolution(e) {
            e !== this.currentResolution && (this.currentResolution = e,
            this.updateContentSize(),
            this.pswp.dispatch("resolutionChanged"))
        }
    }
    const Eo = .35
      , wo = .6
      , ht = .4
      , ft = .5;
    function To(t, e) {
        return t * e / (1 - e)
    }
    class So {
        constructor(e) {
            this.gestures = e,
            this.pswp = e.pswp,
            this.startPan = {
                x: 0,
                y: 0
            }
        }
        start() {
            this.pswp.currSlide && T(this.startPan, this.pswp.currSlide.pan),
            this.pswp.animations.stopAll()
        }
        change() {
            const {p1: e, prevP1: i, dragAxis: n} = this.gestures
              , {currSlide: s} = this.pswp;
            if (n === "y" && this.pswp.options.closeOnVerticalDrag && s && s.currZoomLevel <= s.zoomLevels.fit && !this.gestures.isMultitouch) {
                const r = s.pan.y + (e.y - i.y);
                if (!this.pswp.dispatch("verticalDrag", {
                    panY: r
                }).defaultPrevented) {
                    this._setPanWithFriction("y", r, wo);
                    const a = 1 - Math.abs(this._getVerticalDragRatio(s.pan.y));
                    this.pswp.applyBgOpacity(a),
                    s.applyCurrentZoomPan()
                }
            } else
                this._panOrMoveMainScroll("x") || (this._panOrMoveMainScroll("y"),
                s && (rt(s.pan),
                s.applyCurrentZoomPan()))
        }
        end() {
            const {velocity: e} = this.gestures
              , {mainScroll: i, currSlide: n} = this.pswp;
            let s = 0;
            if (this.pswp.animations.stopAll(),
            i.isShifted()) {
                const a = (i.x - i.getCurrSlideX()) / this.pswp.viewportSize.x;
                e.x < -ft && a < 0 || e.x < .1 && a < -.5 ? (s = 1,
                e.x = Math.min(e.x, 0)) : (e.x > ft && a > 0 || e.x > -.1 && a > .5) && (s = -1,
                e.x = Math.max(e.x, 0)),
                i.moveIndexBy(s, !0, e.x)
            }
            n && n.currZoomLevel > n.zoomLevels.max || this.gestures.isMultitouch ? this.gestures.zoomLevels.correctZoomPan(!0) : (this._finishPanGestureForAxis("x"),
            this._finishPanGestureForAxis("y"))
        }
        _finishPanGestureForAxis(e) {
            const {velocity: i} = this.gestures
              , {currSlide: n} = this.pswp;
            if (!n)
                return;
            const {pan: s, bounds: r} = n
              , a = s[e]
              , l = this.pswp.bgOpacity < 1 && e === "y"
              , c = .995
              , d = a + To(i[e], c);
            if (l) {
                const M = this._getVerticalDragRatio(a)
                  , D = this._getVerticalDragRatio(d);
                if (M < 0 && D < -ht || M > 0 && D > ht) {
                    this.pswp.close();
                    return
                }
            }
            const m = r.correctPan(e, d);
            if (a === m)
                return;
            const g = m === d ? 1 : .82
              , p = this.pswp.bgOpacity
              , h = m - a;
            this.pswp.animations.startSpring({
                name: "panGesture" + e,
                isPan: !0,
                start: a,
                end: m,
                velocity: i[e],
                dampingRatio: g,
                onUpdate: M => {
                    if (l && this.pswp.bgOpacity < 1) {
                        const D = 1 - (m - M) / h;
                        this.pswp.applyBgOpacity(ee(p + (1 - p) * D, 0, 1))
                    }
                    s[e] = Math.floor(M),
                    n.applyCurrentZoomPan()
                }
            })
        }
        _panOrMoveMainScroll(e) {
            const {p1: i, dragAxis: n, prevP1: s, isMultitouch: r} = this.gestures
              , {currSlide: a, mainScroll: l} = this.pswp
              , c = i[e] - s[e]
              , d = l.x + c;
            if (!c || !a)
                return !1;
            if (e === "x" && !a.isPannable() && !r)
                return l.moveTo(d, !0),
                !0;
            const {bounds: m} = a
              , g = a.pan[e] + c;
            if (this.pswp.options.allowPanToNext && n === "x" && e === "x" && !r) {
                const p = l.getCurrSlideX()
                  , h = l.x - p
                  , M = c > 0
                  , D = !M;
                if (g > m.min[e] && M) {
                    if (m.min[e] <= this.startPan[e])
                        return l.moveTo(d, !0),
                        !0;
                    this._setPanWithFriction(e, g)
                } else if (g < m.max[e] && D) {
                    if (this.startPan[e] <= m.max[e])
                        return l.moveTo(d, !0),
                        !0;
                    this._setPanWithFriction(e, g)
                } else if (h !== 0) {
                    if (h > 0)
                        return l.moveTo(Math.max(d, p), !0),
                        !0;
                    if (h < 0)
                        return l.moveTo(Math.min(d, p), !0),
                        !0
                } else
                    this._setPanWithFriction(e, g)
            } else
                e === "y" ? !l.isShifted() && m.min.y !== m.max.y && this._setPanWithFriction(e, g) : this._setPanWithFriction(e, g);
            return !1
        }
        _getVerticalDragRatio(e) {
            var i;
            return (e - (((i = this.pswp.currSlide) == null ? void 0 : i.bounds.center.y) ?? 0)) / (this.pswp.viewportSize.y / 3)
        }
        _setPanWithFriction(e, i, n) {
            const {currSlide: s} = this.pswp;
            if (!s)
                return;
            const {pan: r, bounds: a} = s;
            if (a.correctPan(e, i) !== i || n) {
                const c = Math.round(i - r[e]);
                r[e] += c * (n || Eo)
            } else
                r[e] = i
        }
    }
    const Io = .05
      , Ao = .15;
    function gt(t, e, i) {
        return t.x = (e.x + i.x) / 2,
        t.y = (e.y + i.y) / 2,
        t
    }
    class Co {
        constructor(e) {
            this.gestures = e,
            this._startPan = {
                x: 0,
                y: 0
            },
            this._startZoomPoint = {
                x: 0,
                y: 0
            },
            this._zoomPoint = {
                x: 0,
                y: 0
            },
            this._wasOverFitZoomLevel = !1,
            this._startZoomLevel = 1
        }
        start() {
            const {currSlide: e} = this.gestures.pswp;
            e && (this._startZoomLevel = e.currZoomLevel,
            T(this._startPan, e.pan)),
            this.gestures.pswp.animations.stopAllPan(),
            this._wasOverFitZoomLevel = !1
        }
        change() {
            const {p1: e, startP1: i, p2: n, startP2: s, pswp: r} = this.gestures
              , {currSlide: a} = r;
            if (!a)
                return;
            const l = a.zoomLevels.min
              , c = a.zoomLevels.max;
            if (!a.isZoomable() || r.mainScroll.isShifted())
                return;
            gt(this._startZoomPoint, i, s),
            gt(this._zoomPoint, e, n);
            let d = 1 / Ce(i, s) * Ce(e, n) * this._startZoomLevel;
            if (d > a.zoomLevels.initial + a.zoomLevels.initial / 15 && (this._wasOverFitZoomLevel = !0),
            d < l)
                if (r.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= a.zoomLevels.initial) {
                    const m = 1 - (l - d) / (l / 1.2);
                    r.dispatch("pinchClose", {
                        bgOpacity: m
                    }).defaultPrevented || r.applyBgOpacity(m)
                } else
                    d = l - (l - d) * Ao;
            else
                d > c && (d = c + (d - c) * Io);
            a.pan.x = this._calculatePanForZoomLevel("x", d),
            a.pan.y = this._calculatePanForZoomLevel("y", d),
            a.setZoomLevel(d),
            a.applyCurrentZoomPan()
        }
        end() {
            const {pswp: e} = this.gestures
              , {currSlide: i} = e;
            (!i || i.currZoomLevel < i.zoomLevels.initial) && !this._wasOverFitZoomLevel && e.options.pinchToClose ? e.close() : this.correctZoomPan()
        }
        _calculatePanForZoomLevel(e, i) {
            const n = i / this._startZoomLevel;
            return this._zoomPoint[e] - (this._startZoomPoint[e] - this._startPan[e]) * n
        }
        correctZoomPan(e) {
            const {pswp: i} = this.gestures
              , {currSlide: n} = i;
            if (!(n != null && n.isZoomable()))
                return;
            this._zoomPoint.x === 0 && (e = !0);
            const s = n.currZoomLevel;
            let r, a = !0;
            s < n.zoomLevels.initial ? r = n.zoomLevels.initial : s > n.zoomLevels.max ? r = n.zoomLevels.max : (a = !1,
            r = s);
            const l = i.bgOpacity
              , c = i.bgOpacity < 1
              , d = T({
                x: 0,
                y: 0
            }, n.pan);
            let m = T({
                x: 0,
                y: 0
            }, d);
            e && (this._zoomPoint.x = 0,
            this._zoomPoint.y = 0,
            this._startZoomPoint.x = 0,
            this._startZoomPoint.y = 0,
            this._startZoomLevel = s,
            T(this._startPan, d)),
            a && (m = {
                x: this._calculatePanForZoomLevel("x", r),
                y: this._calculatePanForZoomLevel("y", r)
            }),
            n.setZoomLevel(r),
            m = {
                x: n.bounds.correctPan("x", m.x),
                y: n.bounds.correctPan("y", m.y)
            },
            n.setZoomLevel(s);
            const g = !$(m, d);
            if (!g && !a && !c) {
                n._setResolution(r),
                n.applyCurrentZoomPan();
                return
            }
            i.animations.stopAllPan(),
            i.animations.startSpring({
                isPan: !0,
                start: 0,
                end: 1e3,
                velocity: 0,
                dampingRatio: 1,
                naturalFrequency: 40,
                onUpdate: p => {
                    if (p /= 1e3,
                    g || a) {
                        if (g && (n.pan.x = d.x + (m.x - d.x) * p,
                        n.pan.y = d.y + (m.y - d.y) * p),
                        a) {
                            const h = s + (r - s) * p;
                            n.setZoomLevel(h)
                        }
                        n.applyCurrentZoomPan()
                    }
                    c && i.bgOpacity < 1 && i.applyBgOpacity(ee(l + (1 - l) * p, 0, 1))
                }
                ,
                onComplete: () => {
                    n._setResolution(r),
                    n.applyCurrentZoomPan()
                }
            })
        }
    }
    function yt(t) {
        return !!t.target.closest(".pswp__container")
    }
    class Lo {
        constructor(e) {
            this.gestures = e
        }
        click(e, i) {
            const n = i.target.classList
              , s = n.contains("pswp__img")
              , r = n.contains("pswp__item") || n.contains("pswp__zoom-wrap");
            s ? this._doClickOrTapAction("imageClick", e, i) : r && this._doClickOrTapAction("bgClick", e, i)
        }
        tap(e, i) {
            yt(i) && this._doClickOrTapAction("tap", e, i)
        }
        doubleTap(e, i) {
            yt(i) && this._doClickOrTapAction("doubleTap", e, i)
        }
        _doClickOrTapAction(e, i, n) {
            var c;
            const {pswp: s} = this.gestures
              , {currSlide: r} = s
              , a = e + "Action"
              , l = s.options[a];
            if (!s.dispatch(a, {
                point: i,
                originalEvent: n
            }).defaultPrevented) {
                if (typeof l == "function") {
                    l.call(s, i, n);
                    return
                }
                switch (l) {
                case "close":
                case "next":
                    s[l]();
                    break;
                case "zoom":
                    r == null || r.toggleZoom(i);
                    break;
                case "zoom-or-close":
                    r != null && r.isZoomable() && r.zoomLevels.secondary !== r.zoomLevels.initial ? r.toggleZoom(i) : s.options.clickToCloseNonZoomable && s.close();
                    break;
                case "toggle-controls":
                    (c = this.gestures.pswp.element) == null || c.classList.toggle("pswp--ui-visible");
                    break
                }
            }
        }
    }
    const vo = 10
      , ko = 300
      , jo = 25;
    class Oo {
        constructor(e) {
            this.pswp = e,
            this.dragAxis = null,
            this.p1 = {
                x: 0,
                y: 0
            },
            this.p2 = {
                x: 0,
                y: 0
            },
            this.prevP1 = {
                x: 0,
                y: 0
            },
            this.prevP2 = {
                x: 0,
                y: 0
            },
            this.startP1 = {
                x: 0,
                y: 0
            },
            this.startP2 = {
                x: 0,
                y: 0
            },
            this.velocity = {
                x: 0,
                y: 0
            },
            this._lastStartP1 = {
                x: 0,
                y: 0
            },
            this._intervalP1 = {
                x: 0,
                y: 0
            },
            this._numActivePoints = 0,
            this._ongoingPointers = [],
            this._touchEventEnabled = "ontouchstart"in window,
            this._pointerEventEnabled = !!window.PointerEvent,
            this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1,
            this._numActivePoints = 0,
            this._intervalTime = 0,
            this._velocityCalculated = !1,
            this.isMultitouch = !1,
            this.isDragging = !1,
            this.isZooming = !1,
            this.raf = null,
            this._tapTimer = null,
            this.supportsTouch || (e.options.allowPanToNext = !1),
            this.drag = new So(this),
            this.zoomLevels = new Co(this),
            this.tapHandler = new Lo(this),
            e.on("bindEvents", () => {
                e.events.add(e.scrollWrap, "click", this._onClick.bind(this)),
                this._pointerEventEnabled ? this._bindEvents("pointer", "down", "up", "cancel") : this._touchEventEnabled ? (this._bindEvents("touch", "start", "end", "cancel"),
                e.scrollWrap && (e.scrollWrap.ontouchmove = () => {}
                ,
                e.scrollWrap.ontouchend = () => {}
                )) : this._bindEvents("mouse", "down", "up")
            }
            )
        }
        _bindEvents(e, i, n, s) {
            const {pswp: r} = this
              , {events: a} = r
              , l = s ? e + s : "";
            a.add(r.scrollWrap, e + i, this.onPointerDown.bind(this)),
            a.add(window, e + "move", this.onPointerMove.bind(this)),
            a.add(window, e + n, this.onPointerUp.bind(this)),
            l && a.add(r.scrollWrap, l, this.onPointerUp.bind(this))
        }
        onPointerDown(e) {
            const i = e.type === "mousedown" || e.pointerType === "mouse";
            if (i && e.button > 0)
                return;
            const {pswp: n} = this;
            if (!n.opener.isOpen) {
                e.preventDefault();
                return
            }
            n.dispatch("pointerDown", {
                originalEvent: e
            }).defaultPrevented || (i && (n.mouseDetected(),
            this._preventPointerEventBehaviour(e)),
            n.animations.stopAll(),
            this._updatePoints(e, "down"),
            this._numActivePoints === 1 && (this.dragAxis = null,
            T(this.startP1, this.p1)),
            this._numActivePoints > 1 ? (this._clearTapTimer(),
            this.isMultitouch = !0) : this.isMultitouch = !1)
        }
        onPointerMove(e) {
            e.preventDefault(),
            this._numActivePoints && (this._updatePoints(e, "move"),
            !this.pswp.dispatch("pointerMove", {
                originalEvent: e
            }).defaultPrevented && (this._numActivePoints === 1 && !this.isDragging ? (this.dragAxis || this._calculateDragDirection(),
            this.dragAxis && !this.isDragging && (this.isZooming && (this.isZooming = !1,
            this.zoomLevels.end()),
            this.isDragging = !0,
            this._clearTapTimer(),
            this._updateStartPoints(),
            this._intervalTime = Date.now(),
            this._velocityCalculated = !1,
            T(this._intervalP1, this.p1),
            this.velocity.x = 0,
            this.velocity.y = 0,
            this.drag.start(),
            this._rafStopLoop(),
            this._rafRenderLoop())) : this._numActivePoints > 1 && !this.isZooming && (this._finishDrag(),
            this.isZooming = !0,
            this._updateStartPoints(),
            this.zoomLevels.start(),
            this._rafStopLoop(),
            this._rafRenderLoop())))
        }
        _finishDrag() {
            this.isDragging && (this.isDragging = !1,
            this._velocityCalculated || this._updateVelocity(!0),
            this.drag.end(),
            this.dragAxis = null)
        }
        onPointerUp(e) {
            this._numActivePoints && (this._updatePoints(e, "up"),
            !this.pswp.dispatch("pointerUp", {
                originalEvent: e
            }).defaultPrevented && (this._numActivePoints === 0 && (this._rafStopLoop(),
            this.isDragging ? this._finishDrag() : !this.isZooming && !this.isMultitouch && this._finishTap(e)),
            this._numActivePoints < 2 && this.isZooming && (this.isZooming = !1,
            this.zoomLevels.end(),
            this._numActivePoints === 1 && (this.dragAxis = null,
            this._updateStartPoints()))))
        }
        _rafRenderLoop() {
            (this.isDragging || this.isZooming) && (this._updateVelocity(),
            this.isDragging ? $(this.p1, this.prevP1) || this.drag.change() : (!$(this.p1, this.prevP1) || !$(this.p2, this.prevP2)) && this.zoomLevels.change(),
            this._updatePrevPoints(),
            this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this)))
        }
        _updateVelocity(e) {
            const i = Date.now()
              , n = i - this._intervalTime;
            n < 50 && !e || (this.velocity.x = this._getVelocity("x", n),
            this.velocity.y = this._getVelocity("y", n),
            this._intervalTime = i,
            T(this._intervalP1, this.p1),
            this._velocityCalculated = !0)
        }
        _finishTap(e) {
            const {mainScroll: i} = this.pswp;
            if (i.isShifted()) {
                i.moveIndexBy(0, !0);
                return
            }
            if (e.type.indexOf("cancel") > 0)
                return;
            if (e.type === "mouseup" || e.pointerType === "mouse") {
                this.tapHandler.click(this.startP1, e);
                return
            }
            const n = this.pswp.options.doubleTapAction ? ko : 0;
            this._tapTimer ? (this._clearTapTimer(),
            Ce(this._lastStartP1, this.startP1) < jo && this.tapHandler.doubleTap(this.startP1, e)) : (T(this._lastStartP1, this.startP1),
            this._tapTimer = setTimeout( () => {
                this.tapHandler.tap(this.startP1, e),
                this._clearTapTimer()
            }
            , n))
        }
        _clearTapTimer() {
            this._tapTimer && (clearTimeout(this._tapTimer),
            this._tapTimer = null)
        }
        _getVelocity(e, i) {
            const n = this.p1[e] - this._intervalP1[e];
            return Math.abs(n) > 1 && i > 5 ? n / i : 0
        }
        _rafStopLoop() {
            this.raf && (cancelAnimationFrame(this.raf),
            this.raf = null)
        }
        _preventPointerEventBehaviour(e) {
            e.preventDefault()
        }
        _updatePoints(e, i) {
            if (this._pointerEventEnabled) {
                const n = e
                  , s = this._ongoingPointers.findIndex(r => r.id === n.pointerId);
                i === "up" && s > -1 ? this._ongoingPointers.splice(s, 1) : i === "down" && s === -1 ? this._ongoingPointers.push(this._convertEventPosToPoint(n, {
                    x: 0,
                    y: 0
                })) : s > -1 && this._convertEventPosToPoint(n, this._ongoingPointers[s]),
                this._numActivePoints = this._ongoingPointers.length,
                this._numActivePoints > 0 && T(this.p1, this._ongoingPointers[0]),
                this._numActivePoints > 1 && T(this.p2, this._ongoingPointers[1])
            } else {
                const n = e;
                this._numActivePoints = 0,
                n.type.indexOf("touch") > -1 ? n.touches && n.touches.length > 0 && (this._convertEventPosToPoint(n.touches[0], this.p1),
                this._numActivePoints++,
                n.touches.length > 1 && (this._convertEventPosToPoint(n.touches[1], this.p2),
                this._numActivePoints++)) : (this._convertEventPosToPoint(e, this.p1),
                i === "up" ? this._numActivePoints = 0 : this._numActivePoints++)
            }
        }
        _updatePrevPoints() {
            T(this.prevP1, this.p1),
            T(this.prevP2, this.p2)
        }
        _updateStartPoints() {
            T(this.startP1, this.p1),
            T(this.startP2, this.p2),
            this._updatePrevPoints()
        }
        _calculateDragDirection() {
            if (this.pswp.mainScroll.isShifted())
                this.dragAxis = "x";
            else {
                const e = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
                if (e !== 0) {
                    const i = e > 0 ? "x" : "y";
                    Math.abs(this.p1[i] - this.startP1[i]) >= vo && (this.dragAxis = i)
                }
            }
        }
        _convertEventPosToPoint(e, i) {
            return i.x = e.pageX - this.pswp.offset.x,
            i.y = e.pageY - this.pswp.offset.y,
            "pointerId"in e ? i.id = e.pointerId : e.identifier !== void 0 && (i.id = e.identifier),
            i
        }
        _onClick(e) {
            this.pswp.mainScroll.isShifted() && (e.preventDefault(),
            e.stopPropagation())
        }
    }
    const Po = .35;
    class Vo {
        constructor(e) {
            this.pswp = e,
            this.x = 0,
            this.slideWidth = 0,
            this._currPositionIndex = 0,
            this._prevPositionIndex = 0,
            this._containerShiftIndex = -1,
            this.itemHolders = []
        }
        resize(e) {
            const {pswp: i} = this
              , n = Math.round(i.viewportSize.x + i.viewportSize.x * i.options.spacing)
              , s = n !== this.slideWidth;
            s && (this.slideWidth = n,
            this.moveTo(this.getCurrSlideX())),
            this.itemHolders.forEach( (r, a) => {
                s && Q(r.el, (a + this._containerShiftIndex) * this.slideWidth),
                e && r.slide && r.slide.resize()
            }
            )
        }
        resetPosition() {
            this._currPositionIndex = 0,
            this._prevPositionIndex = 0,
            this.slideWidth = 0,
            this._containerShiftIndex = -1
        }
        appendHolders() {
            this.itemHolders = [];
            for (let e = 0; e < 3; e++) {
                const i = v("pswp__item", "div", this.pswp.container);
                i.setAttribute("role", "group"),
                i.setAttribute("aria-roledescription", "slide"),
                i.setAttribute("aria-hidden", "true"),
                i.style.display = e === 1 ? "block" : "none",
                this.itemHolders.push({
                    el: i
                })
            }
        }
        canBeSwiped() {
            return this.pswp.getNumItems() > 1
        }
        moveIndexBy(e, i, n) {
            const {pswp: s} = this;
            let r = s.potentialIndex + e;
            const a = s.getNumItems();
            if (s.canLoop()) {
                r = s.getLoopedIndex(r);
                const c = (e + a) % a;
                c <= a / 2 ? e = c : e = c - a
            } else
                r < 0 ? r = 0 : r >= a && (r = a - 1),
                e = r - s.potentialIndex;
            s.potentialIndex = r,
            this._currPositionIndex -= e,
            s.animations.stopMainScroll();
            const l = this.getCurrSlideX();
            if (!i)
                this.moveTo(l),
                this.updateCurrItem();
            else {
                s.animations.startSpring({
                    isMainScroll: !0,
                    start: this.x,
                    end: l,
                    velocity: n || 0,
                    naturalFrequency: 30,
                    dampingRatio: 1,
                    onUpdate: d => {
                        this.moveTo(d)
                    }
                    ,
                    onComplete: () => {
                        this.updateCurrItem(),
                        s.appendHeavy()
                    }
                });
                let c = s.potentialIndex - s.currIndex;
                if (s.canLoop()) {
                    const d = (c + a) % a;
                    d <= a / 2 ? c = d : c = d - a
                }
                Math.abs(c) > 1 && this.updateCurrItem()
            }
            return Boolean(e)
        }
        getCurrSlideX() {
            return this.slideWidth * this._currPositionIndex
        }
        isShifted() {
            return this.x !== this.getCurrSlideX()
        }
        updateCurrItem() {
            var r;
            const {pswp: e} = this
              , i = this._prevPositionIndex - this._currPositionIndex;
            if (!i)
                return;
            this._prevPositionIndex = this._currPositionIndex,
            e.currIndex = e.potentialIndex;
            let n = Math.abs(i), s;
            n >= 3 && (this._containerShiftIndex += i + (i > 0 ? -3 : 3),
            n = 3);
            for (let a = 0; a < n; a++)
                i > 0 ? (s = this.itemHolders.shift(),
                s && (this.itemHolders[2] = s,
                this._containerShiftIndex++,
                Q(s.el, (this._containerShiftIndex + 2) * this.slideWidth),
                e.setContent(s, e.currIndex - n + a + 2))) : (s = this.itemHolders.pop(),
                s && (this.itemHolders.unshift(s),
                this._containerShiftIndex--,
                Q(s.el, this._containerShiftIndex * this.slideWidth),
                e.setContent(s, e.currIndex + n - a - 2)));
            Math.abs(this._containerShiftIndex) > 50 && !this.isShifted() && (this.resetPosition(),
            this.resize()),
            e.animations.stopAllPan(),
            this.itemHolders.forEach( (a, l) => {
                a.slide && a.slide.setIsActive(l === 1)
            }
            ),
            e.currSlide = (r = this.itemHolders[1]) == null ? void 0 : r.slide,
            e.contentLoader.updateLazy(i),
            e.currSlide && e.currSlide.applyCurrentZoomPan(),
            e.dispatch("change")
        }
        moveTo(e, i) {
            if (!this.pswp.canLoop() && i) {
                let n = (this.slideWidth * this._currPositionIndex - e) / this.slideWidth;
                n += this.pswp.currIndex;
                const s = Math.round(e - this.x);
                (n < 0 && s > 0 || n >= this.pswp.getNumItems() - 1 && s < 0) && (e = this.x + s * Po)
            }
            this.x = e,
            this.pswp.container && Q(this.pswp.container, e),
            this.pswp.dispatch("moveMainScroll", {
                x: e,
                dragging: i ?? !1
            })
        }
    }
    const Bo = {
        Escape: 27,
        z: 90,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Tab: 9
    }
      , H = (t, e) => e ? t : Bo[t];
    class Ro {
        constructor(e) {
            this.pswp = e,
            this._wasFocused = !1,
            e.on("bindEvents", () => {
                e.options.initialPointerPos || this._focusRoot(),
                e.events.add(document, "focusin", this._onFocusIn.bind(this)),
                e.events.add(document, "keydown", this._onKeyDown.bind(this))
            }
            );
            const i = document.activeElement;
            e.on("destroy", () => {
                e.options.returnFocus && i && this._wasFocused && i.focus()
            }
            )
        }
        _focusRoot() {
            !this._wasFocused && this.pswp.element && (this.pswp.element.focus(),
            this._wasFocused = !0)
        }
        _onKeyDown(e) {
            const {pswp: i} = this;
            if (i.dispatch("keydown", {
                originalEvent: e
            }).defaultPrevented || No(e))
                return;
            let n, s, r = !1;
            const a = "key"in e;
            switch (a ? e.key : e.keyCode) {
            case H("Escape", a):
                i.options.escKey && (n = "close");
                break;
            case H("z", a):
                n = "toggleZoom";
                break;
            case H("ArrowLeft", a):
                s = "x";
                break;
            case H("ArrowUp", a):
                s = "y";
                break;
            case H("ArrowRight", a):
                s = "x",
                r = !0;
                break;
            case H("ArrowDown", a):
                r = !0,
                s = "y";
                break;
            case H("Tab", a):
                this._focusRoot();
                break
            }
            if (s) {
                e.preventDefault();
                const {currSlide: l} = i;
                i.options.arrowKeys && s === "x" && i.getNumItems() > 1 ? n = r ? "next" : "prev" : l && l.currZoomLevel > l.zoomLevels.fit && (l.pan[s] += r ? -80 : 80,
                l.panTo(l.pan.x, l.pan.y))
            }
            n && (e.preventDefault(),
            i[n]())
        }
        _onFocusIn(e) {
            const {template: i} = this.pswp;
            i && document !== e.target && i !== e.target && !i.contains(e.target) && i.focus()
        }
    }
    const Zo = "cubic-bezier(.4,0,.22,1)";
    class _o {
        constructor(e) {
            this.props = e;
            const {target: i, onComplete: n, transform: s, onFinish: r= () => {}
            , duration: a=333, easing: l=Zo} = e;
            this.onFinish = r;
            const c = s ? "transform" : "opacity"
              , d = e[c] ?? "";
            this._target = i,
            this._onComplete = n,
            this._finished = !1,
            this._onTransitionEnd = this._onTransitionEnd.bind(this),
            this._helperTimeout = setTimeout( () => {
                at(i, c, a, l),
                this._helperTimeout = setTimeout( () => {
                    i.addEventListener("transitionend", this._onTransitionEnd, !1),
                    i.addEventListener("transitioncancel", this._onTransitionEnd, !1),
                    this._helperTimeout = setTimeout( () => {
                        this._finalizeAnimation()
                    }
                    , a + 500),
                    i.style[c] = d
                }
                , 30)
            }
            , 0)
        }
        _onTransitionEnd(e) {
            e.target === this._target && this._finalizeAnimation()
        }
        _finalizeAnimation() {
            this._finished || (this._finished = !0,
            this.onFinish(),
            this._onComplete && this._onComplete())
        }
        destroy() {
            this._helperTimeout && clearTimeout(this._helperTimeout),
            yo(this._target),
            this._target.removeEventListener("transitionend", this._onTransitionEnd, !1),
            this._target.removeEventListener("transitioncancel", this._onTransitionEnd, !1),
            this._finished || this._finalizeAnimation()
        }
    }
    const Uo = 12
      , Fo = .75;
    class Qo {
        constructor(e, i, n) {
            this.velocity = e * 1e3,
            this._dampingRatio = i || Fo,
            this._naturalFrequency = n || Uo,
            this._dampedFrequency = this._naturalFrequency,
            this._dampingRatio < 1 && (this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio))
        }
        easeFrame(e, i) {
            let n = 0, s;
            i /= 1e3;
            const r = Math.E ** (-this._dampingRatio * this._naturalFrequency * i);
            if (this._dampingRatio === 1)
                s = this.velocity + this._naturalFrequency * e,
                n = (e + s * i) * r,
                this.velocity = n * -this._naturalFrequency + s * r;
            else if (this._dampingRatio < 1) {
                s = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * e + this.velocity);
                const a = Math.cos(this._dampedFrequency * i)
                  , l = Math.sin(this._dampedFrequency * i);
                n = r * (e * a + s * l),
                this.velocity = n * -this._naturalFrequency * this._dampingRatio + r * (-this._dampedFrequency * e * l + this._dampedFrequency * s * a)
            }
            return n
        }
    }
    class Ho {
        constructor(e) {
            this.props = e,
            this._raf = 0;
            const {start: i, end: n, velocity: s, onUpdate: r, onComplete: a, onFinish: l= () => {}
            , dampingRatio: c, naturalFrequency: d} = e;
            this.onFinish = l;
            const m = new Qo(s,c,d);
            let g = Date.now()
              , p = i - n;
            const h = () => {
                this._raf && (p = m.easeFrame(p, Date.now() - g),
                Math.abs(p) < 1 && Math.abs(m.velocity) < 50 ? (r(n),
                a && a(),
                this.onFinish()) : (g = Date.now(),
                r(p + n),
                this._raf = requestAnimationFrame(h)))
            }
            ;
            this._raf = requestAnimationFrame(h)
        }
        destroy() {
            this._raf >= 0 && cancelAnimationFrame(this._raf),
            this._raf = 0
        }
    }
    class Yo {
        constructor() {
            this.activeAnimations = []
        }
        startSpring(e) {
            this._start(e, !0)
        }
        startTransition(e) {
            this._start(e)
        }
        _start(e, i) {
            const n = i ? new Ho(e) : new _o(e);
            return this.activeAnimations.push(n),
            n.onFinish = () => this.stop(n),
            n
        }
        stop(e) {
            e.destroy();
            const i = this.activeAnimations.indexOf(e);
            i > -1 && this.activeAnimations.splice(i, 1)
        }
        stopAll() {
            this.activeAnimations.forEach(e => {
                e.destroy()
            }
            ),
            this.activeAnimations = []
        }
        stopAllPan() {
            this.activeAnimations = this.activeAnimations.filter(e => e.props.isPan ? (e.destroy(),
            !1) : !0)
        }
        stopMainScroll() {
            this.activeAnimations = this.activeAnimations.filter(e => e.props.isMainScroll ? (e.destroy(),
            !1) : !0)
        }
        isPanRunning() {
            return this.activeAnimations.some(e => e.props.isPan)
        }
    }
    class Wo {
        constructor(e) {
            this.pswp = e,
            e.events.add(e.element, "wheel", this._onWheel.bind(this))
        }
        _onWheel(e) {
            e.preventDefault();
            const {currSlide: i} = this.pswp;
            let {deltaX: n, deltaY: s} = e;
            if (i && !this.pswp.dispatch("wheel", {
                originalEvent: e
            }).defaultPrevented)
                if (e.ctrlKey || this.pswp.options.wheelToZoom) {
                    if (i.isZoomable()) {
                        let r = -s;
                        e.deltaMode === 1 ? r *= .05 : r *= e.deltaMode ? 1 : .002,
                        r = 2 ** r;
                        const a = i.currZoomLevel * r;
                        i.zoomTo(a, {
                            x: e.clientX,
                            y: e.clientY
                        })
                    }
                } else
                    i.isPannable() && (e.deltaMode === 1 && (n *= 18,
                    s *= 18),
                    i.panTo(i.pan.x - n, i.pan.y - s))
        }
    }
    function Go(t) {
        if (typeof t == "string")
            return t;
        if (!t || !t.isCustomSVG)
            return "";
        const e = t;
        let i = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
        return i = i.split("%d").join(e.size || 32),
        e.outlineID && (i += '<use class="pswp__icn-shadow" xlink:href="#' + e.outlineID + '"/>'),
        i += e.inner,
        i += "</svg>",
        i
    }
    class qo {
        constructor(e, i) {
            const n = i.name || i.className;
            let s = i.html;
            if (e.options[n] === !1)
                return;
            typeof e.options[n + "SVG"] == "string" && (s = e.options[n + "SVG"]),
            e.dispatch("uiElementCreate", {
                data: i
            });
            let r = "";
            i.isButton ? (r += "pswp__button ",
            r += i.className || `pswp__button--${i.name}`) : r += i.className || `pswp__${i.name}`;
            let a = i.isButton ? i.tagName || "button" : i.tagName || "div";
            a = a.toLowerCase();
            const l = v(r, a);
            if (i.isButton) {
                a === "button" && (l.type = "button");
                let {title: m} = i;
                const {ariaLabel: g} = i;
                typeof e.options[n + "Title"] == "string" && (m = e.options[n + "Title"]),
                m && (l.title = m);
                const p = g || m;
                p && l.setAttribute("aria-label", p)
            }
            l.innerHTML = Go(s),
            i.onInit && i.onInit(l, e),
            i.onClick && (l.onclick = m => {
                typeof i.onClick == "string" ? e[i.onClick]() : typeof i.onClick == "function" && i.onClick(m, l, e)
            }
            );
            const c = i.appendTo || "bar";
            let d = e.element;
            c === "bar" ? (e.topBar || (e.topBar = v("pswp__top-bar pswp__hide-on-close", "div", e.scrollWrap)),
            d = e.topBar) : (l.classList.add("pswp__hide-on-close"),
            c === "wrapper" && (d = e.scrollWrap)),
            d == null || d.appendChild(e.applyFilters("uiElement", l, i))
        }
    }
    function Mt(t, e, i) {
        t.classList.add("pswp__button--arrow"),
        t.setAttribute("aria-controls", "pswp__items"),
        e.on("change", () => {
            e.options.loop || (i ? t.disabled = !(e.currIndex < e.getNumItems() - 1) : t.disabled = !(e.currIndex > 0))
        }
        )
    }
    const Ko = {
        name: "arrowPrev",
        className: "pswp__button--arrow--prev",
        title: "Previous",
        order: 10,
        isButton: !0,
        appendTo: "wrapper",
        html: {
            isCustomSVG: !0,
            size: 60,
            inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
            outlineID: "pswp__icn-arrow"
        },
        onClick: "prev",
        onInit: Mt
    }
      , Jo = {
        name: "arrowNext",
        className: "pswp__button--arrow--next",
        title: "Next",
        order: 11,
        isButton: !0,
        appendTo: "wrapper",
        html: {
            isCustomSVG: !0,
            size: 60,
            inner: '<use xlink:href="#pswp__icn-arrow"/>',
            outlineID: "pswp__icn-arrow"
        },
        onClick: "next",
        onInit: (t, e) => {
            Mt(t, e, !0)
        }
    }
      , Xo = {
        name: "close",
        title: "Close",
        order: 20,
        isButton: !0,
        html: {
            isCustomSVG: !0,
            inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
            outlineID: "pswp__icn-close"
        },
        onClick: "close"
    }
      , $o = {
        name: "zoom",
        title: "Zoom",
        order: 10,
        isButton: !0,
        html: {
            isCustomSVG: !0,
            inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
            outlineID: "pswp__icn-zoom"
        },
        onClick: "toggleZoom"
    }
      , en = {
        name: "preloader",
        appendTo: "bar",
        order: 7,
        html: {
            isCustomSVG: !0,
            inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
            outlineID: "pswp__icn-loading"
        },
        onInit: (t, e) => {
            let i, n = null;
            const s = (l, c) => {
                t.classList.toggle("pswp__preloader--" + l, c)
            }
              , r = l => {
                i !== l && (i = l,
                s("active", l))
            }
              , a = () => {
                var l;
                if (!((l = e.currSlide) != null && l.content.isLoading())) {
                    r(!1),
                    n && (clearTimeout(n),
                    n = null);
                    return
                }
                n || (n = setTimeout( () => {
                    var c;
                    r(Boolean((c = e.currSlide) == null ? void 0 : c.content.isLoading())),
                    n = null
                }
                , e.options.preloaderDelay))
            }
            ;
            e.on("change", a),
            e.on("loadComplete", l => {
                e.currSlide === l.slide && a()
            }
            ),
            e.ui && (e.ui.updatePreloaderVisibility = a)
        }
    }
      , tn = {
        name: "counter",
        order: 5,
        onInit: (t, e) => {
            e.on("change", () => {
                t.innerText = e.currIndex + 1 + e.options.indexIndicatorSep + e.getNumItems()
            }
            )
        }
    };
    function Nt(t, e) {
        t.classList.toggle("pswp--zoomed-in", e)
    }
    class on {
        constructor(e) {
            this.pswp = e,
            this.isRegistered = !1,
            this.uiElementsData = [],
            this.items = [],
            this.updatePreloaderVisibility = () => {}
            ,
            this._lastUpdatedZoomLevel = void 0
        }
        init() {
            const {pswp: e} = this;
            this.isRegistered = !1,
            this.uiElementsData = [Xo, Ko, Jo, $o, en, tn],
            e.dispatch("uiRegister"),
            this.uiElementsData.sort( (i, n) => (i.order || 0) - (n.order || 0)),
            this.items = [],
            this.isRegistered = !0,
            this.uiElementsData.forEach(i => {
                this.registerElement(i)
            }
            ),
            e.on("change", () => {
                var i;
                (i = e.element) == null || i.classList.toggle("pswp--one-slide", e.getNumItems() === 1)
            }
            ),
            e.on("zoomPanUpdate", () => this._onZoomPanUpdate())
        }
        registerElement(e) {
            this.isRegistered ? this.items.push(new qo(this.pswp,e)) : this.uiElementsData.push(e)
        }
        _onZoomPanUpdate() {
            const {template: e, currSlide: i, options: n} = this.pswp;
            if (this.pswp.opener.isClosing || !e || !i)
                return;
            let {currZoomLevel: s} = i;
            if (this.pswp.opener.isOpen || (s = i.zoomLevels.initial),
            s === this._lastUpdatedZoomLevel)
                return;
            this._lastUpdatedZoomLevel = s;
            const r = i.zoomLevels.initial - i.zoomLevels.secondary;
            if (Math.abs(r) < .01 || !i.isZoomable()) {
                Nt(e, !1),
                e.classList.remove("pswp--zoom-allowed");
                return
            }
            e.classList.add("pswp--zoom-allowed");
            const a = s === i.zoomLevels.initial ? i.zoomLevels.secondary : i.zoomLevels.initial;
            Nt(e, a <= s),
            (n.imageClickAction === "zoom" || n.imageClickAction === "zoom-or-close") && e.classList.add("pswp--click-to-zoom")
        }
    }
    function nn(t) {
        const e = t.getBoundingClientRect();
        return {
            x: e.left,
            y: e.top,
            w: e.width
        }
    }
    function sn(t, e, i) {
        const n = t.getBoundingClientRect()
          , s = n.width / e
          , r = n.height / i
          , a = s > r ? s : r
          , l = (n.width - e * a) / 2
          , c = (n.height - i * a) / 2
          , d = {
            x: n.left + l,
            y: n.top + c,
            w: e * a
        };
        return d.innerRect = {
            w: n.width,
            h: n.height,
            x: l,
            y: c
        },
        d
    }
    function rn(t, e, i) {
        const n = i.dispatch("thumbBounds", {
            index: t,
            itemData: e,
            instance: i
        });
        if (n.thumbBounds)
            return n.thumbBounds;
        const {element: s} = e;
        let r, a;
        if (s && i.options.thumbSelector !== !1) {
            const l = i.options.thumbSelector || "img";
            a = s.matches(l) ? s : s.querySelector(l)
        }
        return a = i.applyFilters("thumbEl", a, e, t),
        a && (e.thumbCropped ? r = sn(a, e.width || e.w || 0, e.height || e.h || 0) : r = nn(a)),
        i.applyFilters("thumbBounds", r, e, t)
    }
    class an {
        constructor(e, i) {
            this.type = e,
            this.defaultPrevented = !1,
            i && Object.assign(this, i)
        }
        preventDefault() {
            this.defaultPrevented = !0
        }
    }
    class ln {
        constructor() {
            this._listeners = {},
            this._filters = {},
            this.pswp = void 0,
            this.options = void 0
        }
        addFilter(e, i, n=100) {
            var s, r, a;
            this._filters[e] || (this._filters[e] = []),
            (s = this._filters[e]) == null || s.push({
                fn: i,
                priority: n
            }),
            (r = this._filters[e]) == null || r.sort( (l, c) => l.priority - c.priority),
            (a = this.pswp) == null || a.addFilter(e, i, n)
        }
        removeFilter(e, i) {
            this._filters[e] && (this._filters[e] = this._filters[e].filter(n => n.fn !== i)),
            this.pswp && this.pswp.removeFilter(e, i)
        }
        applyFilters(e, ...i) {
            var n;
            return (n = this._filters[e]) == null || n.forEach(s => {
                i[0] = s.fn.apply(this, i)
            }
            ),
            i[0]
        }
        on(e, i) {
            var n, s;
            this._listeners[e] || (this._listeners[e] = []),
            (n = this._listeners[e]) == null || n.push(i),
            (s = this.pswp) == null || s.on(e, i)
        }
        off(e, i) {
            var n;
            this._listeners[e] && (this._listeners[e] = this._listeners[e].filter(s => i !== s)),
            (n = this.pswp) == null || n.off(e, i)
        }
        dispatch(e, i) {
            var s;
            if (this.pswp)
                return this.pswp.dispatch(e, i);
            const n = new an(e,i);
            return (s = this._listeners[e]) == null || s.forEach(r => {
                r.call(this, n)
            }
            ),
            n
        }
    }
    class cn {
        constructor(e, i) {
            if (this.element = v("pswp__img pswp__img--placeholder", e ? "img" : "div", i),
            e) {
                const n = this.element;
                n.decoding = "async",
                n.alt = "",
                n.src = e,
                n.setAttribute("role", "presentation")
            }
            this.element.setAttribute("aria-hidden", "true")
        }
        setDisplayedSize(e, i) {
            this.element && (this.element.tagName === "IMG" ? (Le(this.element, 250, "auto"),
            this.element.style.transformOrigin = "0 0",
            this.element.style.transform = te(0, 0, e / 250)) : Le(this.element, e, i))
        }
        destroy() {
            var e;
            (e = this.element) != null && e.parentNode && this.element.remove(),
            this.element = null
        }
    }
    class dn {
        constructor(e, i, n) {
            this.instance = i,
            this.data = e,
            this.index = n,
            this.element = void 0,
            this.placeholder = void 0,
            this.slide = void 0,
            this.displayedImageWidth = 0,
            this.displayedImageHeight = 0,
            this.width = Number(this.data.w) || Number(this.data.width) || 0,
            this.height = Number(this.data.h) || Number(this.data.height) || 0,
            this.isAttached = !1,
            this.hasSlide = !1,
            this.isDecoding = !1,
            this.state = k.IDLE,
            this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html",
            this.instance.dispatch("contentInit", {
                content: this
            })
        }
        removePlaceholder() {
            this.placeholder && !this.keepPlaceholder() && setTimeout( () => {
                this.placeholder && (this.placeholder.destroy(),
                this.placeholder = void 0)
            }
            , 1e3)
        }
        load(e, i) {
            if (this.slide && this.usePlaceholder())
                if (this.placeholder) {
                    const n = this.placeholder.element;
                    n && !n.parentElement && this.slide.container.prepend(n)
                } else {
                    const n = this.instance.applyFilters("placeholderSrc", this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : !1, this);
                    this.placeholder = new cn(n,this.slide.container)
                }
            this.element && !i || this.instance.dispatch("contentLoad", {
                content: this,
                isLazy: e
            }).defaultPrevented || (this.isImageContent() ? (this.element = v("pswp__img", "img"),
            this.displayedImageWidth && this.loadImage(e)) : (this.element = v("pswp__content", "div"),
            this.element.innerHTML = this.data.html || ""),
            i && this.slide && this.slide.updateContentSize(!0))
        }
        loadImage(e) {
            if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
                content: this,
                isLazy: e
            }).defaultPrevented)
                return;
            const i = this.element;
            this.updateSrcsetSizes(),
            this.data.srcset && (i.srcset = this.data.srcset),
            i.src = this.data.src ?? "",
            i.alt = this.data.alt ?? "",
            this.state = k.LOADING,
            i.complete ? this.onLoaded() : (i.onload = () => {
                this.onLoaded()
            }
            ,
            i.onerror = () => {
                this.onError()
            }
            )
        }
        setSlide(e) {
            this.slide = e,
            this.hasSlide = !0,
            this.instance = e.pswp
        }
        onLoaded() {
            this.state = k.LOADED,
            this.slide && this.element && (this.instance.dispatch("loadComplete", {
                slide: this.slide,
                content: this
            }),
            this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(),
            this.slide.updateContentSize(!0)),
            (this.state === k.LOADED || this.state === k.ERROR) && this.removePlaceholder())
        }
        onError() {
            this.state = k.ERROR,
            this.slide && (this.displayError(),
            this.instance.dispatch("loadComplete", {
                slide: this.slide,
                isError: !0,
                content: this
            }),
            this.instance.dispatch("loadError", {
                slide: this.slide,
                content: this
            }))
        }
        isLoading() {
            return this.instance.applyFilters("isContentLoading", this.state === k.LOADING, this)
        }
        isError() {
            return this.state === k.ERROR
        }
        isImageContent() {
            return this.type === "image"
        }
        setDisplayedSize(e, i) {
            if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(e, i),
            !this.instance.dispatch("contentResize", {
                content: this,
                width: e,
                height: i
            }).defaultPrevented && (Le(this.element, e, i),
            this.isImageContent() && !this.isError()))) {
                const n = !this.displayedImageWidth && e;
                this.displayedImageWidth = e,
                this.displayedImageHeight = i,
                n ? this.loadImage(!1) : this.updateSrcsetSizes(),
                this.slide && this.instance.dispatch("imageSizeChange", {
                    slide: this.slide,
                    width: e,
                    height: i,
                    content: this
                })
            }
        }
        isZoomable() {
            return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== k.ERROR, this)
        }
        updateSrcsetSizes() {
            if (!this.isImageContent() || !this.element || !this.data.srcset)
                return;
            const e = this.element
              , i = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
            (!e.dataset.largestUsedSize || i > parseInt(e.dataset.largestUsedSize, 10)) && (e.sizes = i + "px",
            e.dataset.largestUsedSize = String(i))
        }
        usePlaceholder() {
            return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this)
        }
        lazyLoad() {
            this.instance.dispatch("contentLazyLoad", {
                content: this
            }).defaultPrevented || this.load(!0)
        }
        keepPlaceholder() {
            return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this)
        }
        destroy() {
            this.hasSlide = !1,
            this.slide = void 0,
            !this.instance.dispatch("contentDestroy", {
                content: this
            }).defaultPrevented && (this.remove(),
            this.placeholder && (this.placeholder.destroy(),
            this.placeholder = void 0),
            this.isImageContent() && this.element && (this.element.onload = null,
            this.element.onerror = null,
            this.element = void 0))
        }
        displayError() {
            var e;
            if (this.slide) {
                let i = v("pswp__error-msg", "div");
                i.innerText = ((e = this.instance.options) == null ? void 0 : e.errorMsg) ?? "",
                i = this.instance.applyFilters("contentErrorElement", i, this),
                this.element = v("pswp__content pswp__error-msg-container", "div"),
                this.element.appendChild(i),
                this.slide.container.innerText = "",
                this.slide.container.appendChild(this.element),
                this.slide.updateContentSize(!0),
                this.removePlaceholder()
            }
        }
        append() {
            if (this.isAttached || !this.element)
                return;
            if (this.isAttached = !0,
            this.state === k.ERROR) {
                this.displayError();
                return
            }
            if (this.instance.dispatch("contentAppend", {
                content: this
            }).defaultPrevented)
                return;
            const e = "decode"in this.element;
            this.isImageContent() ? e && this.slide && (!this.slide.isActive || lt()) ? (this.isDecoding = !0,
            this.element.decode().catch( () => {}
            ).finally( () => {
                this.isDecoding = !1,
                this.appendImage()
            }
            )) : this.appendImage() : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element)
        }
        activate() {
            this.instance.dispatch("contentActivate", {
                content: this
            }).defaultPrevented || !this.slide || (this.isImageContent() && this.isDecoding && !lt() ? this.appendImage() : this.isError() && this.load(!1, !0),
            this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"))
        }
        deactivate() {
            this.instance.dispatch("contentDeactivate", {
                content: this
            }),
            this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true")
        }
        remove() {
            this.isAttached = !1,
            !this.instance.dispatch("contentRemove", {
                content: this
            }).defaultPrevented && (this.element && this.element.parentNode && this.element.remove(),
            this.placeholder && this.placeholder.element && this.placeholder.element.remove())
        }
        appendImage() {
            this.isAttached && (this.instance.dispatch("contentAppendImage", {
                content: this
            }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element),
            (this.state === k.LOADED || this.state === k.ERROR) && this.removePlaceholder()))
        }
    }
    const mn = 5;
    function zt(t, e, i) {
        const n = e.createContentFromData(t, i);
        let s;
        const {options: r} = e;
        if (r) {
            s = new ut(r,t,-1);
            let a;
            e.pswp ? a = e.pswp.viewportSize : a = dt(r, e);
            const l = mt(r, a, t, i);
            s.update(n.width, n.height, l)
        }
        return n.lazyLoad(),
        s && n.setDisplayedSize(Math.ceil(n.width * s.initial), Math.ceil(n.height * s.initial)),
        n
    }
    function pn(t, e) {
        const i = e.getItemData(t);
        if (!e.dispatch("lazyLoadSlide", {
            index: t,
            itemData: i
        }).defaultPrevented)
            return zt(i, e, t)
    }
    class un {
        constructor(e) {
            this.pswp = e,
            this.limit = Math.max(e.options.preload[0] + e.options.preload[1] + 1, mn),
            this._cachedItems = []
        }
        updateLazy(e) {
            const {pswp: i} = this;
            if (i.dispatch("lazyLoad").defaultPrevented)
                return;
            const {preload: n} = i.options
              , s = e === void 0 ? !0 : e >= 0;
            let r;
            for (r = 0; r <= n[1]; r++)
                this.loadSlideByIndex(i.currIndex + (s ? r : -r));
            for (r = 1; r <= n[0]; r++)
                this.loadSlideByIndex(i.currIndex + (s ? -r : r))
        }
        loadSlideByIndex(e) {
            const i = this.pswp.getLoopedIndex(e);
            let n = this.getContentByIndex(i);
            n || (n = pn(i, this.pswp),
            n && this.addToCache(n))
        }
        getContentBySlide(e) {
            let i = this.getContentByIndex(e.index);
            return i || (i = this.pswp.createContentFromData(e.data, e.index),
            this.addToCache(i)),
            i.setSlide(e),
            i
        }
        addToCache(e) {
            if (this.removeByIndex(e.index),
            this._cachedItems.push(e),
            this._cachedItems.length > this.limit) {
                const i = this._cachedItems.findIndex(n => !n.isAttached && !n.hasSlide);
                i !== -1 && this._cachedItems.splice(i, 1)[0].destroy()
            }
        }
        removeByIndex(e) {
            const i = this._cachedItems.findIndex(n => n.index === e);
            i !== -1 && this._cachedItems.splice(i, 1)
        }
        getContentByIndex(e) {
            return this._cachedItems.find(i => i.index === e)
        }
        destroy() {
            this._cachedItems.forEach(e => e.destroy()),
            this._cachedItems = []
        }
    }
    class hn extends ln {
        getNumItems() {
            var s;
            let e = 0;
            const i = (s = this.options) == null ? void 0 : s.dataSource;
            i && "length"in i ? e = i.length : i && "gallery"in i && (i.items || (i.items = this._getGalleryDOMElements(i.gallery)),
            i.items && (e = i.items.length));
            const n = this.dispatch("numItems", {
                dataSource: i,
                numItems: e
            });
            return this.applyFilters("numItems", n.numItems, i)
        }
        createContentFromData(e, i) {
            return new dn(e,this,i)
        }
        getItemData(e) {
            var a;
            const i = (a = this.options) == null ? void 0 : a.dataSource;
            let n = {};
            Array.isArray(i) ? n = i[e] : i && "gallery"in i && (i.items || (i.items = this._getGalleryDOMElements(i.gallery)),
            n = i.items[e]);
            let s = n;
            s instanceof Element && (s = this._domElementToItemData(s));
            const r = this.dispatch("itemData", {
                itemData: s || {},
                index: e
            });
            return this.applyFilters("itemData", r.itemData, e)
        }
        _getGalleryDOMElements(e) {
            var i, n;
            return (i = this.options) != null && i.children || (n = this.options) != null && n.childSelector ? zo(this.options.children, this.options.childSelector, e) || [] : [e]
        }
        _domElementToItemData(e) {
            const i = {
                element: e
            }
              , n = e.tagName === "A" ? e : e.querySelector("a");
            if (n) {
                i.src = n.dataset.pswpSrc || n.href,
                n.dataset.pswpSrcset && (i.srcset = n.dataset.pswpSrcset),
                i.width = n.dataset.pswpWidth ? parseInt(n.dataset.pswpWidth, 10) : 0,
                i.height = n.dataset.pswpHeight ? parseInt(n.dataset.pswpHeight, 10) : 0,
                i.w = i.width,
                i.h = i.height,
                n.dataset.pswpType && (i.type = n.dataset.pswpType);
                const s = e.querySelector("img");
                s && (i.msrc = s.currentSrc || s.src,
                i.alt = s.getAttribute("alt") ?? ""),
                (n.dataset.pswpCropped || n.dataset.cropped) && (i.thumbCropped = !0)
            }
            return this.applyFilters("domItemData", i, e, n)
        }
        lazyLoadData(e, i) {
            return zt(e, this, i)
        }
    }
    const oe = .003;
    class fn {
        constructor(e) {
            this.pswp = e,
            this.isClosed = !0,
            this.isOpen = !1,
            this.isClosing = !1,
            this.isOpening = !1,
            this._duration = void 0,
            this._useAnimation = !1,
            this._croppedZoom = !1,
            this._animateRootOpacity = !1,
            this._animateBgOpacity = !1,
            this._placeholder = void 0,
            this._opacityElement = void 0,
            this._cropContainer1 = void 0,
            this._cropContainer2 = void 0,
            this._thumbBounds = void 0,
            this._prepareOpen = this._prepareOpen.bind(this),
            e.on("firstZoomPan", this._prepareOpen)
        }
        open() {
            this._prepareOpen(),
            this._start()
        }
        close() {
            if (this.isClosed || this.isClosing || this.isOpening)
                return;
            const e = this.pswp.currSlide;
            this.isOpen = !1,
            this.isOpening = !1,
            this.isClosing = !0,
            this._duration = this.pswp.options.hideAnimationDuration,
            e && e.currZoomLevel * e.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0),
            this._applyStartProps(),
            setTimeout( () => {
                this._start()
            }
            , this._croppedZoom ? 30 : 0)
        }
        _prepareOpen() {
            if (this.pswp.off("firstZoomPan", this._prepareOpen),
            !this.isOpening) {
                const e = this.pswp.currSlide;
                this.isOpening = !0,
                this.isClosing = !1,
                this._duration = this.pswp.options.showAnimationDuration,
                e && e.zoomLevels.initial * e.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0),
                this._applyStartProps()
            }
        }
        _applyStartProps() {
            var s;
            const {pswp: e} = this
              , i = this.pswp.currSlide
              , {options: n} = e;
            if (n.showHideAnimationType === "fade" ? (n.showHideOpacity = !0,
            this._thumbBounds = void 0) : n.showHideAnimationType === "none" ? (n.showHideOpacity = !1,
            this._duration = 0,
            this._thumbBounds = void 0) : this.isOpening && e._initialThumbBounds ? this._thumbBounds = e._initialThumbBounds : this._thumbBounds = this.pswp.getThumbBounds(),
            this._placeholder = i == null ? void 0 : i.getPlaceholderElement(),
            e.animations.stopAll(),
            this._useAnimation = Boolean(this._duration && this._duration > 50),
            this._animateZoom = Boolean(this._thumbBounds) && (i == null ? void 0 : i.content.usePlaceholder()) && (!this.isClosing || !e.mainScroll.isShifted()),
            this._animateZoom ? this._animateRootOpacity = n.showHideOpacity ?? !1 : (this._animateRootOpacity = !0,
            this.isOpening && i && (i.zoomAndPanToInitial(),
            i.applyCurrentZoomPan())),
            this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > oe,
            this._opacityElement = this._animateRootOpacity ? e.element : e.bg,
            !this._useAnimation) {
                this._duration = 0,
                this._animateZoom = !1,
                this._animateBgOpacity = !1,
                this._animateRootOpacity = !0,
                this.isOpening && (e.element && (e.element.style.opacity = String(oe)),
                e.applyBgOpacity(1));
                return
            }
            this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect ? (this._croppedZoom = !0,
            this._cropContainer1 = this.pswp.container,
            this._cropContainer2 = (s = this.pswp.currSlide) == null ? void 0 : s.holderElement,
            e.container && (e.container.style.overflow = "hidden",
            e.container.style.width = e.viewportSize.x + "px")) : this._croppedZoom = !1,
            this.isOpening ? (this._animateRootOpacity ? (e.element && (e.element.style.opacity = String(oe)),
            e.applyBgOpacity(1)) : (this._animateBgOpacity && e.bg && (e.bg.style.opacity = String(oe)),
            e.element && (e.element.style.opacity = "1")),
            this._animateZoom && (this._setClosedStateZoomPan(),
            this._placeholder && (this._placeholder.style.willChange = "transform",
            this._placeholder.style.opacity = String(oe)))) : this.isClosing && (e.mainScroll.itemHolders[0] && (e.mainScroll.itemHolders[0].el.style.display = "none"),
            e.mainScroll.itemHolders[2] && (e.mainScroll.itemHolders[2].el.style.display = "none"),
            this._croppedZoom && e.mainScroll.x !== 0 && (e.mainScroll.resetPosition(),
            e.mainScroll.resize()))
        }
        _start() {
            this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG" ? new Promise(e => {
                let i = !1
                  , n = !0;
                Mo(this._placeholder).finally( () => {
                    i = !0,
                    n || e(!0)
                }
                ),
                setTimeout( () => {
                    n = !1,
                    i && e(!0)
                }
                , 50),
                setTimeout(e, 250)
            }
            ).finally( () => this._initiate()) : this._initiate()
        }
        _initiate() {
            var e, i;
            (e = this.pswp.element) == null || e.style.setProperty("--pswp-transition-duration", this._duration + "ms"),
            this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart"),
            this.pswp.dispatch("initialZoom" + (this.isOpening ? "In" : "Out")),
            (i = this.pswp.element) == null || i.classList.toggle("pswp--ui-visible", this.isOpening),
            this.isOpening ? (this._placeholder && (this._placeholder.style.opacity = "1"),
            this._animateToOpenState()) : this.isClosing && this._animateToClosedState(),
            this._useAnimation || this._onAnimationComplete()
        }
        _onAnimationComplete() {
            var i;
            const {pswp: e} = this;
            this.isOpen = this.isOpening,
            this.isClosed = this.isClosing,
            this.isOpening = !1,
            this.isClosing = !1,
            e.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd"),
            e.dispatch("initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")),
            this.isClosed ? e.destroy() : this.isOpen && (this._animateZoom && e.container && (e.container.style.overflow = "visible",
            e.container.style.width = "100%"),
            (i = e.currSlide) == null || i.applyCurrentZoomPan())
        }
        _animateToOpenState() {
            const {pswp: e} = this;
            this._animateZoom && (this._croppedZoom && this._cropContainer1 && this._cropContainer2 && (this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)"),
            this._animateTo(this._cropContainer2, "transform", "none")),
            e.currSlide && (e.currSlide.zoomAndPanToInitial(),
            this._animateTo(e.currSlide.container, "transform", e.currSlide.getCurrentTransform()))),
            this._animateBgOpacity && e.bg && this._animateTo(e.bg, "opacity", String(e.options.bgOpacity)),
            this._animateRootOpacity && e.element && this._animateTo(e.element, "opacity", "1")
        }
        _animateToClosedState() {
            const {pswp: e} = this;
            this._animateZoom && this._setClosedStateZoomPan(!0),
            this._animateBgOpacity && e.bgOpacity > .01 && e.bg && this._animateTo(e.bg, "opacity", "0"),
            this._animateRootOpacity && e.element && this._animateTo(e.element, "opacity", "0")
        }
        _setClosedStateZoomPan(e) {
            if (!this._thumbBounds)
                return;
            const {pswp: i} = this
              , {innerRect: n} = this._thumbBounds
              , {currSlide: s, viewportSize: r} = i;
            if (this._croppedZoom && n && this._cropContainer1 && this._cropContainer2) {
                const a = -r.x + (this._thumbBounds.x - n.x) + n.w
                  , l = -r.y + (this._thumbBounds.y - n.y) + n.h
                  , c = r.x - n.w
                  , d = r.y - n.h;
                e ? (this._animateTo(this._cropContainer1, "transform", te(a, l)),
                this._animateTo(this._cropContainer2, "transform", te(c, d))) : (Q(this._cropContainer1, a, l),
                Q(this._cropContainer2, c, d))
            }
            s && (T(s.pan, n || this._thumbBounds),
            s.currZoomLevel = this._thumbBounds.w / s.width,
            e ? this._animateTo(s.container, "transform", s.getCurrentTransform()) : s.applyCurrentZoomPan())
        }
        _animateTo(e, i, n) {
            if (!this._duration) {
                e.style[i] = n;
                return
            }
            const {animations: s} = this.pswp
              , r = {
                duration: this._duration,
                easing: this.pswp.options.easing,
                onComplete: () => {
                    s.activeAnimations.length || this._onAnimationComplete()
                }
                ,
                target: e
            };
            r[i] = n,
            s.startTransition(r)
        }
    }
    const gn = {
        allowPanToNext: !0,
        spacing: .1,
        loop: !0,
        pinchToClose: !0,
        closeOnVerticalDrag: !0,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        zoomAnimationDuration: 333,
        escKey: !0,
        arrowKeys: !0,
        returnFocus: !0,
        maxWidthToAnimate: 4e3,
        clickToCloseNonZoomable: !0,
        imageClickAction: "zoom-or-close",
        bgClickAction: "close",
        tapAction: "toggle-controls",
        doubleTapAction: "zoom",
        indexIndicatorSep: " / ",
        preloaderDelay: 2e3,
        bgOpacity: .8,
        index: 0,
        errorMsg: "The image cannot be loaded",
        preload: [1, 2],
        easing: "cubic-bezier(.4,0,.22,1)"
    };
    class yn extends hn {
        constructor(e) {
            super(),
            this.options = this._prepareOptions(e || {}),
            this.offset = {
                x: 0,
                y: 0
            },
            this._prevViewportSize = {
                x: 0,
                y: 0
            },
            this.viewportSize = {
                x: 0,
                y: 0
            },
            this.bgOpacity = 1,
            this.currIndex = 0,
            this.potentialIndex = 0,
            this.isOpen = !1,
            this.isDestroying = !1,
            this.hasMouse = !1,
            this._initialItemData = {},
            this._initialThumbBounds = void 0,
            this.topBar = void 0,
            this.element = void 0,
            this.template = void 0,
            this.container = void 0,
            this.scrollWrap = void 0,
            this.currSlide = void 0,
            this.events = new bo,
            this.animations = new Yo,
            this.mainScroll = new Vo(this),
            this.gestures = new Oo(this),
            this.opener = new fn(this),
            this.keyboard = new Ro(this),
            this.contentLoader = new un(this)
        }
        init() {
            if (this.isOpen || this.isDestroying)
                return !1;
            this.isOpen = !0,
            this.dispatch("init"),
            this.dispatch("beforeOpen"),
            this._createMainStructure();
            let e = "pswp--open";
            return this.gestures.supportsTouch && (e += " pswp--touch"),
            this.options.mainClass && (e += " " + this.options.mainClass),
            this.element && (this.element.className += " " + e),
            this.currIndex = this.options.index || 0,
            this.potentialIndex = this.currIndex,
            this.dispatch("firstUpdate"),
            this.scrollWheel = new Wo(this),
            (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) && (this.currIndex = 0),
            this.gestures.supportsTouch || this.mouseDetected(),
            this.updateSize(),
            this.offset.y = window.pageYOffset,
            this._initialItemData = this.getItemData(this.currIndex),
            this.dispatch("gettingData", {
                index: this.currIndex,
                data: this._initialItemData,
                slide: void 0
            }),
            this._initialThumbBounds = this.getThumbBounds(),
            this.dispatch("initialLayout"),
            this.on("openingAnimationEnd", () => {
                const {itemHolders: i} = this.mainScroll;
                i[0] && (i[0].el.style.display = "block",
                this.setContent(i[0], this.currIndex - 1)),
                i[2] && (i[2].el.style.display = "block",
                this.setContent(i[2], this.currIndex + 1)),
                this.appendHeavy(),
                this.contentLoader.updateLazy(),
                this.events.add(window, "resize", this._handlePageResize.bind(this)),
                this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this)),
                this.dispatch("bindEvents")
            }
            ),
            this.mainScroll.itemHolders[1] && this.setContent(this.mainScroll.itemHolders[1], this.currIndex),
            this.dispatch("change"),
            this.opener.open(),
            this.dispatch("afterInit"),
            !0
        }
        getLoopedIndex(e) {
            const i = this.getNumItems();
            return this.options.loop && (e > i - 1 && (e -= i),
            e < 0 && (e += i)),
            ee(e, 0, i - 1)
        }
        appendHeavy() {
            this.mainScroll.itemHolders.forEach(e => {
                var i;
                (i = e.slide) == null || i.appendHeavy()
            }
            )
        }
        goTo(e) {
            this.mainScroll.moveIndexBy(this.getLoopedIndex(e) - this.potentialIndex)
        }
        next() {
            this.goTo(this.potentialIndex + 1)
        }
        prev() {
            this.goTo(this.potentialIndex - 1)
        }
        zoomTo(...e) {
            var i;
            (i = this.currSlide) == null || i.zoomTo(...e)
        }
        toggleZoom() {
            var e;
            (e = this.currSlide) == null || e.toggleZoom()
        }
        close() {
            !this.opener.isOpen || this.isDestroying || (this.isDestroying = !0,
            this.dispatch("close"),
            this.events.removeAll(),
            this.opener.close())
        }
        destroy() {
            var e;
            if (!this.isDestroying) {
                this.options.showHideAnimationType = "none",
                this.close();
                return
            }
            this.dispatch("destroy"),
            this._listeners = {},
            this.scrollWrap && (this.scrollWrap.ontouchmove = null,
            this.scrollWrap.ontouchend = null),
            (e = this.element) == null || e.remove(),
            this.mainScroll.itemHolders.forEach(i => {
                var n;
                (n = i.slide) == null || n.destroy()
            }
            ),
            this.contentLoader.destroy(),
            this.events.removeAll()
        }
        refreshSlideContent(e) {
            this.contentLoader.removeByIndex(e),
            this.mainScroll.itemHolders.forEach( (i, n) => {
                var r, a;
                let s = (((r = this.currSlide) == null ? void 0 : r.index) ?? 0) - 1 + n;
                this.canLoop() && (s = this.getLoopedIndex(s)),
                s === e && (this.setContent(i, e, !0),
                n === 1 && (this.currSlide = i.slide,
                (a = i.slide) == null || a.setIsActive(!0)))
            }
            ),
            this.dispatch("change")
        }
        setContent(e, i, n) {
            if (this.canLoop() && (i = this.getLoopedIndex(i)),
            e.slide) {
                if (e.slide.index === i && !n)
                    return;
                e.slide.destroy(),
                e.slide = void 0
            }
            if (!this.canLoop() && (i < 0 || i >= this.getNumItems()))
                return;
            const s = this.getItemData(i);
            e.slide = new Do(s,i,this),
            i === this.currIndex && (this.currSlide = e.slide),
            e.slide.append(e.el)
        }
        getViewportCenterPoint() {
            return {
                x: this.viewportSize.x / 2,
                y: this.viewportSize.y / 2
            }
        }
        updateSize(e) {
            if (this.isDestroying)
                return;
            const i = dt(this.options, this);
            !e && $(i, this._prevViewportSize) || (T(this._prevViewportSize, i),
            this.dispatch("beforeResize"),
            T(this.viewportSize, this._prevViewportSize),
            this._updatePageScrollOffset(),
            this.dispatch("viewportSize"),
            this.mainScroll.resize(this.opener.isOpen),
            !this.hasMouse && window.matchMedia("(any-hover: hover)").matches && this.mouseDetected(),
            this.dispatch("resize"))
        }
        applyBgOpacity(e) {
            this.bgOpacity = Math.max(e, 0),
            this.bg && (this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity))
        }
        mouseDetected() {
            var e;
            this.hasMouse || (this.hasMouse = !0,
            (e = this.element) == null || e.classList.add("pswp--has_mouse"))
        }
        _handlePageResize() {
            this.updateSize(),
            /iPhone|iPad|iPod/i.test(window.navigator.userAgent) && setTimeout( () => {
                this.updateSize()
            }
            , 500)
        }
        _updatePageScrollOffset() {
            this.setScrollOffset(0, window.pageYOffset)
        }
        setScrollOffset(e, i) {
            this.offset.x = e,
            this.offset.y = i,
            this.dispatch("updateScrollOffset")
        }
        _createMainStructure() {
            this.element = v("pswp", "div"),
            this.element.setAttribute("tabindex", "-1"),
            this.element.setAttribute("role", "dialog"),
            this.template = this.element,
            this.bg = v("pswp__bg", "div", this.element),
            this.scrollWrap = v("pswp__scroll-wrap", "section", this.element),
            this.container = v("pswp__container", "div", this.scrollWrap),
            this.scrollWrap.setAttribute("aria-roledescription", "carousel"),
            this.container.setAttribute("aria-live", "off"),
            this.container.setAttribute("id", "pswp__items"),
            this.mainScroll.appendHolders(),
            this.ui = new on(this),
            this.ui.init(),
            (this.options.appendToEl || document.body).appendChild(this.element)
        }
        getThumbBounds() {
            return rn(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this)
        }
        canLoop() {
            return this.options.loop && this.getNumItems() > 2
        }
        _prepareOptions(e) {
            return window.matchMedia("(prefers-reduced-motion), (update: slow)").matches && (e.showHideAnimationType = "none",
            e.zoomAnimationDuration = 0),
            {
                ...gn,
                ...e
            }
        }
    }
    function Mn({appendToEl: t, dataSource: e}) {
        const i = new yn({
            appendToEl: t,
            dataSource: e,
            loop: !1,
            bgOpacity: .9,
            showHideAnimationType: "zoom",
            counter: !1
        });
        return i.on("contentLoad", async n => {
            if (!Nn(n.content))
                return;
            const s = n.content.data;
            if (n.preventDefault(),
            n.content.element)
                return;
            n.content.element = document.createElement("div"),
            n.content.element.className = "media-content-wrapper";
            let r = zn({
                mediaData: s
            });
            n.content.element.appendChild(r)
        }
        ),
        i.on("init", () => {
            i.on("close", () => {
                i.destroy()
            }
            )
        }
        ),
        i
    }
    function Nn(t) {
        return t.type === "image"
    }
    function zn({mediaData: t}) {
        let e;
        return e = document.createElement("img"),
        e.src = t.url || t.src,
        e.className = "pswp-media-image",
        e
    }
    const bn = `.pswp__bg{opacity:1!important}.pswp__preloader,.pswp__button.pswp__button--zoom{position:relative;overflow:hidden;display:none!important;width:50px;height:60px;margin-right:auto}.pswp__img.pswp__img--placeholder{opacity:0!important}.pswp-media-image{object-fit:contain;border-radius:50%;max-height:100vh;height:100vh;width:auto;display:block;margin:0 auto}
`
      , xn = {
        props: {
            image: {
                type: String,
                required: !0,
                default: ""
            },
            expandImageFunctionality: {
                type: Boolean,
                default: !1
            },
            expandImageDateFunctionality: {
                type: String,
                default: "2025-05-15"
            },
            isPost: {
                type: Boolean,
                default: !1
            },
            userName: {
                type: String,
                required: !0,
                default: ""
            },
            isOnline: {
                type: Boolean,
                default: !1
            }
        },
        data() {
            return {
                imagesWithDimensions: [],
                clickTimer: null,
                millisecondsDoubleClick: 200,
                avatar: this.image || st({
                    userName: this.userName
                })
            }
        },
        computed: {
            isDateValid() {
                if (!this.image || !this.expandImageFunctionality)
                    return !1;
                const t = this.image.match(/\/w\d+\/(.*)/)
                  , e = t ? t[1] : null;
                if (!e)
                    return !1;
                try {
                    const i = atob(e)
                      , n = JSON.parse(i);
                    if (!n.key)
                        return !1;
                    const s = n.key.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
                    if (!s)
                        return !1;
                    const [r] = s
                      , a = R(r, "YYYY-M-D")
                      , l = R(this.expandImageDateFunctionality, "YYYY-M-D");
                    return a.isSameOrAfter(l, "date")
                } catch {
                    return !1
                }
            },
            sizeDefault() {
                return {
                    path: "/w1080",
                    width: 1080,
                    height: 1080
                }
            }
        },
        methods: {
            onAvatarError() {
                this.avatar = st({
                    userName: this.userName
                })
            },
            replaceWidthInSrc(t) {
                return /\/w\d+/.test(t) ? t.replace(/\/w\d+/g, this.sizeDefault.path) : t
            },
            handleClick(t) {
                this.clickTimer === null ? this.clickTimer = setTimeout( () => {
                    this.initPhotoswipe(),
                    this.clickTimer = null
                }
                , this.millisecondsDoubleClick) : (clearTimeout(this.clickTimer),
                this.clickTimer = null,
                this.handleDoubleClick(t))
            },
            handleDoubleClick(t) {
                let e = (t == null ? void 0 : t.clientX) || (t == null ? void 0 : t.posX) || this.mousePosX
                  , i = (t == null ? void 0 : t.clientY) || (t == null ? void 0 : t.posY) || this.mousePosY;
                this.$emit("double-click", {
                    contextId: this.contextId,
                    posX: e,
                    posY: i
                })
            },
            initPhotoswipe() {
                const t = this.$refs.parent;
                document.documentElement.style.overflow = "hidden";
                let e = [{
                    ...this.imagesWithDimensions[0],
                    type: "image"
                }];
                const i = Mn({
                    appendToEl: t,
                    dataSource: e
                });
                i.on("close", () => {
                    document.documentElement.style.overflow = ""
                }
                ),
                i.init()
            },
            handleMediaLoad(t) {
                const e = t.currentTarget;
                this.imagesWithDimensions.push({
                    src: this.replaceWidthInSrc(e.src),
                    width: this.sizeDefault.width,
                    height: this.sizeDefault.height
                })
            }
        }
    }
      , Dn = ["src"]
      , En = {
        key: 0,
        class: "vac-state-online"
    };
    function wn(t, e, i, n, s, r) {
        return o.openBlock(),
        o.createElementBlock("div", {
            ref: "parent",
            class: o.normalizeClass(["avatar-wrapper", r.isDateValid ? "parent-avatar" : null])
        }, [o.createElementVNode("div", {
            class: "avatar",
            style: o.normalizeStyle(i.isPost ? "margin-top: 5px !important; width: 70px !important; height: 70px !important;" : null)
        }, [o.createElementVNode("img", {
            src: s.avatar,
            onClick: e[0] || (e[0] = a => r.isDateValid ? r.handleClick(a) : null),
            onError: e[1] || (e[1] = (...a) => r.onAvatarError && r.onAvatarError(...a)),
            onLoad: e[2] || (e[2] = (...a) => r.handleMediaLoad && r.handleMediaLoad(...a))
        }, null, 40, Dn)], 4), i.isOnline ? (o.openBlock(),
        o.createElementBlock("div", En)) : o.createCommentVNode("", !0)], 2)
    }
    const ge = w(xn, [["render", wn], ["styles", [bn]]])
      , Tn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ge
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , wc = ""
      , Tc = ""
      , Sc = "";
    var Sn = {
        prefix: "fad",
        iconName: "chevron-up",
        icon: [512, 512, [], "f077", ["M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z", ""]]
    }
      , In = {
        prefix: "fad",
        iconName: "chevron-down",
        icon: [512, 512, [], "f078", ["M278.6 406.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 338.7 425.4 169.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192z", ""]]
    };
    const W = {
        CHECKOUT: "checkout",
        PROFILE: "profile"
    }
      , G = [{
        VALUE: "1",
        TYPE: "Mensal"
    }, {
        VALUE: "2",
        TYPE: "Trimestral"
    }, {
        VALUE: "3",
        TYPE: "Semestral"
    }]
      , An = {
        inject: ["locale", "appSettings", "$http", "token"],
        emits: ["follow-creator", "update:show-dialog"],
        props: {
            showDialog: Boolean,
            creatorId: String
        },
        setup() {
            const {t} = O();
            return {
                t
            }
        },
        data() {
            return {
                wcSimplifiedPersonalData: {
                    name: "privacy-web-registration-simplifiedpersonaldata",
                    ctx: null,
                    loaded: !1,
                    error: !1
                }
            }
        },
        computed: {
            appSettingsEncripted() {
                return btoa(JSON.stringify(this.appSettings))
            }
        },
        mounted() {
            this.loadWebComponent()
        },
        methods: {
            async loadWebComponent() {
                try {
                    const t = await Ae.run({
                        urlBase: this.appSettings.PRIVACY_MODULES + "/webcomponents",
                        componentName: this.wcSimplifiedPersonalData.name
                    });
                    this.wcSimplifiedPersonalData.loaded = t.loaded,
                    this.wcSimplifiedPersonalData.error = t.error
                } catch {
                    this.wcSimplifiedPersonalData.error = !0
                }
            }
        }
    }
      , Cn = {
        key: 0
    };
    function Ln(t, e, i, n, s, r) {
        const a = o.resolveComponent("privacy-web-registration-simplifiedpersonaldata");
        return o.openBlock(),
        o.createElementBlock("div", null, [s.wcSimplifiedPersonalData.loaded ? (o.openBlock(),
        o.createElementBlock("div", Cn, [o.createVNode(a, {
            ref: "wcSimplifiedPersonalData",
            locale: r.locale,
            "app-settings": r.appSettingsEncripted,
            view: "personal",
            token: r.token,
            "show-dialog": i.showDialog,
            "creator-id": i.creatorId,
            onFollowCreator: e[0] || (e[0] = l => t.$emit("follow-creator")),
            onClose: e[1] || (e[1] = l => t.$emit("update:show-dialog", !1))
        }, null, 8, ["locale", "app-settings", "token", "show-dialog", "creator-id"])])) : o.createCommentVNode("", !0)])
    }
    const ve = w(An, [["render", Ln]])
      , vn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ve
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , kn = `.v10 .subscriber{margin-top:18px}.el-button.is-loading{align-content:center}.line{border:none;background-color:#e3e3e3;height:6px}.profile-signatures{margin-left:15px!important;margin-bottom:4px!important;padding-left:16px}.v10 .profile-signatures{margin-left:0!important}.v10 .text-subs{color:var(--accent-color)}.subscription-body{margin-left:25px;margin-right:8px}.subscription-options{color:var(--el-color-black);font-size:var(--el-font-size-medium);font-weight:500;padding:0 12px;margin-right:8px}.v10 .subscription-options{padding:0}.btn-options{padding:6px 0 5px 4px;display:flex;justify-content:space-between;align-items:center;width:100%}.btn-options span{padding-left:16px}.btn-options svg{padding-right:16px}.btn-subscription{border-radius:30px!important;padding:0 25px;width:100%;height:60px!important;font-size:var(--el-font-size-large);font-weight:300;color:var(--el-color-white);background:linear-gradient(45deg,#F58170,#F9AF77)}.v10 .btn-subscription{background:var(--color-gradient-primary)!important;color:var(--el-color-black)!important;height:47px!important}.v10 .el-button.btn-subscription span{font-weight:500;font-size:16px}.btn-subscription:hover,.btn-subscription:active,.btn-subscription:focus{color:var(--el-color-white);background:linear-gradient(45deg,#FFA08A,#FFC09A)}.v10 .btn-subscription:hover,.v10 .btn-subscription:active,.v10 .btn-subscription:focus{color:var(--el-color-black)!important;background:var(--color-gradient-primary)!important}.icon-arrow{color:var(--color-privacy-6-hover);user-select:none}.v10 .icon-arrow{color:var(--accent-color)}.el-collapse-item__arrow{display:none!important}.el-collapse-item__wrap{background:transparent!important;border:none!important}.el-collapse-item__header{border-bottom:none!important;cursor:default!important}.el-collapse-item__content{padding-bottom:0}.v10 .el-collapse-item__content{padding:0 10px}[role=tab]{pointer-events:none;display:none!important;cursor:default}@media (max-width: 460px){.btn-subscription{padding:0 12px}}
`
      , jn = {
        inject: ["appSettings", "$http", "token"],
        emits: ["call-auth", "open-payment-modal"],
        components: {
            ElButton: I.ElButton,
            ElCollapse: I.ElCollapse,
            ElCollapseItem: I.ElCollapseItem,
            SimplifiedPersonalData: ve
        },
        setup() {
            const {t} = O()
              , e = o.ref(["1"]);
            return {
                t,
                subscribeOption: e,
                faChevronUp: Sn,
                faChevronDown: In,
                toggleCollapse: () => {
                    e.value.includes("1") ? e.value = [] : e.value = ["1"]
                }
            }
        },
        props: {
            user: {
                type: Object,
                required: !0
            },
            v10: Boolean,
            view: String,
            currencyCode: String
        },
        computed: {
            monthly() {
                var t, e, i, n;
                return `${(e = (t = this.user) == null ? void 0 : t.prices) == null ? void 0 : e.CurrencySymbol} ${(n = (i = this.user) == null ? void 0 : i.prices) == null ? void 0 : n.Monthly.toFixed(2).replace(".", ",")}`
            },
            quarterly() {
                var t, e, i, n;
                return `${(e = (t = this.user) == null ? void 0 : t.prices) == null ? void 0 : e.CurrencySymbol} ${(n = (i = this.user) == null ? void 0 : i.prices) == null ? void 0 : n.Quarterly.toFixed(2).replace(".", ",")}`
            },
            semiAnnual() {
                var t, e, i, n;
                return `${(e = (t = this.user) == null ? void 0 : t.prices) == null ? void 0 : e.CurrencySymbol} ${(n = (i = this.user) == null ? void 0 : i.prices) == null ? void 0 : n.SemiAnnual.toFixed(2).replace(".", ",")}`
            },
            discountQuarterly() {
                var t, e;
                return (e = (t = this.user) == null ? void 0 : t.prices) != null && e.DiscountQuarterly ? `3 ${this.t("MONTHS")} (${this.user.prices.DiscountQuarterly}% off )` : `3 ${this.t("MONTHS")}`
            },
            discountSemiAnnual() {
                var t, e;
                return (e = (t = this.user) == null ? void 0 : t.prices) != null && e.DiscountSemiAnnual ? `6 ${this.t("MONTHS")} (${this.user.prices.DiscountSemiAnnual}% off )` : `6 ${this.t("MONTHS")}`
            },
            hasOptionPayment() {
                var t, e, i, n;
                return ((e = (t = this.user) == null ? void 0 : t.prices) == null ? void 0 : e.Quarterly) || ((n = (i = this.user) == null ? void 0 : i.prices) == null ? void 0 : n.SemiAnnual)
            }
        },
        data() {
            return {
                loading: !1,
                showSimplifiedPersonalDialog: !1
            }
        },
        methods: {
            async subscribe(t, e) {
                var i;
                if (this.view == "checkout"){
                    const n = this.getRecurrence(e);
                    if (n == "Mensal") {
                        openPopup("Monthly")
                    } else if (n == "Trimestral") {
                        openPopup("Quarterly")
                    } else if (n == "Semestral") {
                        openPopup("SemiAnnual")
                    }
                    // this.$emit("open-payment-modal", {
                    //     clientId: this.user.clientId,
                    //     value: this.user.bumePrice ? this.user.bumePrice : t,
                    //     profileName: this.user.profileName,
                    //     cover: this.user.cover,
                    //     avatar: this.user.avatar,
                    //     currencyCode: this.currencyCode,
                    //     currencySymbol: this.user.prices.CurrencySymbol,
                    //     spreadFee: this.user.prices.SpreadFee,
                    //     recurrence: n,
                    //     nickName: this.user.name
                    // })
                }
            },
            getRecurrence(t) {
                const e = G.find(i => i.VALUE === t);
                return e ? e.TYPE : G[0].TYPE
            },
            async followCreator() {
                var t;
                try {
                    this.loading = !0;
                    const e = C(this.appSettings.ENDPOINT_API_CHECKOUT, "/follow-profile");
                    await this.$http.post(e, {
                        userId: (t = this.user) == null ? void 0 : t.userId
                    })
                } catch (e) {
                    console.error(e)
                } finally {
                    this.loading = !1,
                    window.location.reload()
                }
            },
            async verifyUser() {
                var t;
                try {
                    const e = C(this.appSettings.ENDPOINT_API_PROFILE, "/Users")
                      , i = await this.$http.get(e);
                    return i != null && i.data ? !!((t = i.data) != null && t.document) : !1
                } catch (e) {
                    console.log(e)
                }
            },
            showSimplifiedPersonalData() {
                this.showSimplifiedPersonalDialog = !0
            }
        }
    }
      , On = {
        class: "d-flex flex-wrap subscriber"
    }
      , Pn = {
        class: "w-100"
    }
      , Vn = {
        key: 0,
        class: "line"
    }
      , Bn = {
        style: {
            "padding-left": "0px 12px"
        }
    }
      , Rn = {
        class: "profile-signatures"
    }
      , Zn = {
        class: "text-base font-medium text-subs"
    }
      , _n = {
        key: 0,
        class: "subscription-body"
    }
      , Un = {
        class: "col d-flex justify-content-center"
    }
      , Fn = {
        key: 0
    }
      , Qn = {
        key: 1,
        class: "subscription-body mb-2"
    }
      , Hn = {
        class: "col d-flex"
    }
      , Yn = {
        class: "col d-flex justify-content-end"
    }
      , Wn = {
        key: 2,
        class: "subscription-options"
    }
      , Gn = {
        class: "btn-options"
    }
      , qn = {
        class: "text-base font-medium text-subs"
    }
      , Kn = {
        key: 0
    }
      , Jn = {
        class: "d-flex justify-content-center"
    }
      , Xn = {
        class: "col d-flex"
    }
      , $n = ["innerHTML"]
      , es = {
        class: "col d-flex justify-content-end"
    }
      , ts = {
        key: 1
    }
      , is = {
        class: "d-flex justify-content-center mt-2"
    }
      , os = {
        class: "col d-flex"
    }
      , ns = ["innerHTML"]
      , ss = {
        class: "col d-flex justify-content-end"
    }
      , rs = {
        key: 1,
        class: "line"
    };
    function as(t, e, i, n, s, r) {
        var g;
        const a = o.resolveComponent("el-button")
          , l = o.resolveComponent("font-awesome-icon")
          , c = o.resolveComponent("el-collapse-item")
          , d = o.resolveComponent("el-collapse")
          , m = o.resolveComponent("SimplifiedPersonalData");
        return o.openBlock(),
        o.createElementBlock("div", On, [o.createElementVNode("div", Pn, [i.v10 ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createElementBlock("hr", Vn)), o.createElementVNode("div", Bn, [o.createElementVNode("div", Rn, [o.createElementVNode("span", Zn, o.toDisplayString(n.t("TITLE_SUBSCRIBE")), 1)]), i.user.isFreeCreator ? (o.openBlock(),
        o.createElementBlock("div", _n, [o.createVNode(a, {
            class: "btn-subscription row d-flex",
            loading: s.loading,
            onClick: r.subscribe
        }, {
            default: o.withCtx( () => [o.createElementVNode("div", Un, [s.loading ? o.createCommentVNode("", !0) : (o.openBlock(),
            o.createElementBlock("span", Fn, o.toDisplayString(n.t("SUBSCRIBE_FREE")), 1))])]),
            _: 1
        }, 8, ["loading", "onClick"])])) : (o.openBlock(),
        o.createElementBlock("div", Qn, [o.createVNode(a, {
            class: "btn-subscription row d-flex",
            onClick: e[0] || (e[0] = p => {
                var h, M;
                return r.subscribe((M = (h = i.user) == null ? void 0 : h.prices) == null ? void 0 : M.Monthly, "1")
            }
            )
        }, {
            default: o.withCtx( () => [o.createElementVNode("div", Hn, [o.createElementVNode("span", null, "1 " + o.toDisplayString(n.t("MONTH")), 1)]), o.createElementVNode("div", Yn, [o.createElementVNode("span", null, o.toDisplayString(r.monthly), 1)])]),
            _: 1
        })])), r.hasOptionPayment ? (o.openBlock(),
        o.createElementBlock("div", Wn, [o.createElementVNode("div", Gn, [o.createElementVNode("span", qn, o.toDisplayString(n.t("PROMOTIONS")), 1), o.createVNode(l, {
            icon: n.subscribeOption.includes("1") ? n.faChevronUp : n.faChevronDown,
            class: "icon-arrow",
            onClick: n.toggleCollapse
        }, null, 8, ["icon", "onClick"])]), r.hasOptionPayment ? (o.openBlock(),
        o.createBlock(d, {
            key: 0,
            modelValue: n.subscribeOption,
            "onUpdate:modelValue": e[3] || (e[3] = p => n.subscribeOption = p),
            style: {
                border: "none !important"
            }
        }, {
            default: o.withCtx( () => [o.createVNode(c, {
                name: "1",
                disabled: !0
            }, {
                default: o.withCtx( () => {
                    var p, h, M, D;
                    return [(h = (p = i.user) == null ? void 0 : p.prices) != null && h.Quarterly ? (o.openBlock(),
                    o.createElementBlock("div", Kn, [o.createElementVNode("div", Jn, [o.createVNode(a, {
                        class: "btn-subscription row d-flex",
                        onClick: e[1] || (e[1] = f => {
                            var u, y;
                            return r.subscribe((y = (u = i.user) == null ? void 0 : u.prices) == null ? void 0 : y.Quarterly, "2")
                        }
                        )
                    }, {
                        default: o.withCtx( () => [o.createElementVNode("div", Xn, [o.createElementVNode("span", {
                            innerHTML: r.discountQuarterly
                        }, null, 8, $n)]), o.createElementVNode("div", es, [o.createElementVNode("span", null, o.toDisplayString(r.quarterly), 1)])]),
                        _: 1
                    })])])) : o.createCommentVNode("", !0), (D = (M = i.user) == null ? void 0 : M.prices) != null && D.SemiAnnual ? (o.openBlock(),
                    o.createElementBlock("div", ts, [o.createElementVNode("div", is, [o.createVNode(a, {
                        class: "btn-subscription el-button--gradient row d-flex",
                        onClick: e[2] || (e[2] = f => {
                            var u, y;
                            return r.subscribe((y = (u = i.user) == null ? void 0 : u.prices) == null ? void 0 : y.SemiAnnual, "3")
                        }
                        )
                    }, {
                        default: o.withCtx( () => [o.createElementVNode("div", os, [o.createElementVNode("span", {
                            innerHTML: r.discountSemiAnnual
                        }, null, 8, ns)]), o.createElementVNode("div", ss, [o.createElementVNode("span", null, o.toDisplayString(r.semiAnnual), 1)])]),
                        _: 1
                    })])])) : o.createCommentVNode("", !0)]
                }
                ),
                _: 1
            })]),
            _: 1
        }, 8, ["modelValue"])) : o.createCommentVNode("", !0)])) : o.createCommentVNode("", !0)]), i.v10 ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createElementBlock("hr", rs))]), o.createVNode(m, {
            "creator-id": (g = this.user) == null ? void 0 : g.clientId,
            "show-dialog": s.showSimplifiedPersonalDialog,
            onFollowCreator: e[4] || (e[4] = p => r.followCreator()),
            "onUpdate:showDialog": e[5] || (e[5] = p => s.showSimplifiedPersonalDialog = p)
        }, null, 8, ["creator-id", "show-dialog"])])
    }
    const ke = w(jn, [["render", as], ["styles", [kn]]])
      , ls = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ke
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Ic = ""
      , Ac = ""
      , cs = `.icon-button{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:1px solid #ccc;cursor:pointer}.icon-button svg.fa-share-nodes{margin-left:-3px}
`
      , ds = {
        props: {
            icon: {
                type: String,
                required: !0
            },
            iconType: {
                type: String,
                default: "font-awesome"
            },
            iconSize: {
                type: String
            },
            iconStyle: {
                type: Object,
                default: () => ({})
            },
            text: {
                type: String,
                default: ""
            }
        }
    }
      , ms = {
        class: "icon-button"
    }
      , ps = ["src"]
      , us = {
        key: 2
    };
    function hs(t, e, i, n, s, r) {
        const a = o.resolveComponent("font-awesome-icon");
        return o.openBlock(),
        o.createElementBlock("div", null, [o.createElementVNode("div", ms, [i.iconType === "font-awesome" ? (o.openBlock(),
        o.createBlock(a, {
            key: 0,
            icon: i.icon,
            style: o.normalizeStyle(i.iconStyle)
        }, null, 8, ["icon", "style"])) : (o.openBlock(),
        o.createElementBlock("img", {
            key: 1,
            src: i.icon,
            style: o.normalizeStyle({
                width: i.iconSize
            })
        }, null, 12, ps)), i.text ? (o.openBlock(),
        o.createElementBlock("span", us, o.toDisplayString(i.text), 1)) : o.createCommentVNode("", !0)])])
    }
    const ne = w(ds, [["render", hs], ["styles", [cs]]])
      , fs = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ne
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , gs = `.count-item{display:flex;align-items:center;font-size:var(--el-font-size-base);gap:6px}.count-item span{line-height:19px}
`
      , ys = {
        props: {
            icon: {
                type: String,
                required: !0
            },
            count: {
                type: Number,
                required: !0
            },
            iconSize: {
                type: String
            }
        }
    }
      , Ms = {
        class: "count-item"
    };
    function Ns(t, e, i, n, s, r) {
        const a = o.resolveComponent("font-awesome-icon");
        return o.openBlock(),
        o.createElementBlock("div", null, [o.createElementVNode("div", Ms, [o.createVNode(a, {
            icon: i.icon,
            style: o.normalizeStyle({
                width: i.iconSize
            })
        }, null, 8, ["icon", "style"]), o.createElementVNode("span", null, o.toDisplayString(i.count), 1)])])
    }
    const je = w(ys, [["render", Ns], ["styles", [gs]]])
      , zs = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: je
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , bt = "data:image/png;base64,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";
    var bs = {
        prefix: "fak",
        iconName: "bell",
        icon: [461, 512, [], "e001", "M214 16c0-8.8 7.4-16 16.5-16s16.5 7.2 16.5 16V32.8C330.1 40.8 395 109 395 192v29.1c0 43.7 17.9 85.6 49.7 116.6l2.9 2.8c8.5 8.3 13.4 19.6 13.4 31.3c0 24.5-20.4 44.3-45.6 44.3L45.7 416C20.5 416 .1 396.2 .1 371.7c0-11.7 4.8-23 13.4-31.3l2.9-2.8C48 306.7 65.9 264.8 65.9 221.1V192c0-83 64.9-151.2 148.1-159.2V16zm16.5 48C157.7 64 98.8 121.3 98.8 192v29.1c0 52.2-21.3 102.3-59.3 139.2L36.7 363c-2.4 2.3-3.7 5.4-3.7 8.7c0 6.8 5.7 12.3 12.6 12.3H415.2c7 0 12.6-5.5 12.6-12.3c0-3.3-1.3-6.4-3.7-8.7l-2.9-2.8C383.4 323.3 362 273.2 362 221V191.9c0-70.7-58.9-128-131.6-128l.1 .1zM199.4 458.7c4.5 12.4 16.8 21.3 31.1 21.3s26.5-8.9 31.1-21.3c3-8.3 12.4-12.7 21-9.8s13.1 12.1 10.1 20.4c-9 24.9-33.4 42.7-62.1 42.7s-53.1-17.8-62.1-42.7c-3-8.3 1.4-17.5 10.1-20.4s18 1.4 21 9.8z"]
    }
      , xs = {
        prefix: "fak",
        iconName: "chart",
        icon: [878, 512, [], "e002", "M560.8 24.4C560.8 11 571.8 0 585.2 0H853.4c13.4 0 24.4 11 24.4 24.4V292.6c0 13.4-11 24.4-24.4 24.4S829 306 829 292.6V83.2L504.9 407.3c-9.4 9.4-25 9.4-34.4 0L292.6 229.5l-251 251c-9.4 9.4-25 9.4-34.4 0s-9.4-25 0-34.4L275.4 177.8c9.4-9.4 25-9.4 34.4 0L487.7 355.7 794.6 48.8H585.2c-13.4 0-24.4-11-24.4-24.4z"]
    }
      , Ds = {
        prefix: "fak",
        iconName: "chart-1",
        icon: [559, 512, [], "e010", "M34.9 29.1c0-9.6-7.9-17.5-17.5-17.5S0 19.5 0 29.1l0 384c0 48.2 39.1 87.3 87.3 87.3l453.8 0c9.6 0 17.5-7.9 17.5-17.5s-7.9-17.5-17.5-17.5l-453.8 0c-28.9 0-52.4-23.5-52.4-52.4l0-384zM349.1 133.8c0 9.6 7.9 17.5 17.5 17.5l97.5 0-115 115-92.4-92.4c-6.8-6.8-17.9-6.8-24.7 0L109.9 296c-6.8 6.8-6.8 17.9 0 24.7s17.9 6.8 24.7 0l109.9-109.9 92.4 92.4c6.8 6.8 17.9 6.8 24.7 0l127.3-127.3 0 97.5c0 9.6 7.9 17.5 17.5 17.5s17.5-7.9 17.5-17.5l0-139.6c0-9.6-7.9-17.5-17.5-17.5l-139.6 0c-9.6 0-17.5 7.9-17.5 17.5z"]
    }
      , Es = {
        prefix: "fak",
        iconName: "chart-2",
        icon: [512, 512, [], "e015", "M73.1 36.6c-20.2 0-36.6 16.3-36.6 36.6l0 365.7c0 20.2 16.3 36.6 36.6 36.6l365.7 0c20.2 0 36.6-16.3 36.6-36.6l0-365.7c0-20.2-16.3-36.6-36.6-36.6l-365.7 0zM0 73.1C0 32.8 32.8 0 73.1 0L438.9 0C479.2 0 512 32.8 512 73.1l0 365.7c0 40.3-32.8 73.1-73.1 73.1L73.1 512C32.8 512 0 479.2 0 438.9L0 73.1zM146.3 219.4c10.1 0 18.3 8.2 18.3 18.3l0 146.3c0 10.1-8.2 18.3-18.3 18.3S128 394.1 128 384l0-146.3c0-10.1 8.2-18.3 18.3-18.3zM237.7 128c0-10.1 8.2-18.3 18.3-18.3s18.3 8.2 18.3 18.3l0 256c0 10.1-8.2 18.3-18.3 18.3s-18.3-8.2-18.3-18.3l0-256zm128 164.6c10.1 0 18.3 8.2 18.3 18.3l0 73.1c0 10.1-8.2 18.3-18.3 18.3s-18.3-8.2-18.3-18.3l0-73.1c0-10.1 8.2-18.3 18.3-18.3z"]
    }
      , ws = {
        prefix: "fak",
        iconName: "chat",
        icon: [470, 512, [], "e003", "M239.5 0c27.2 0 54 4.9 79.2 14.2C364 30.9 404 61.9 431.8 104.6c27.7 42.7 39.8 92 36.7 140.2c-3.1 48.2-21.3 95.6-54.3 134.4c-32.9 38.8-76.6 64.5-123.7 75.2c-14.3 3.3-28.9 5.2-43.6 5.7l-7.4 .1c-34.5 0-68.6-7.8-99.7-22.8l-24 39.2L110 486c-6.4 10.5-15.7 18.1-26.4 22.3C74.4 512 64 513 53.8 511l-4.4-1c-11.8-3.3-21.6-10.3-28.5-19.4c-6.1-8-9.9-17.7-10.7-28.2l-.2-4.5V230.1H10l.2-9.5C12 176.3 26.4 134.7 50.2 99.8l5.3-7.4c28.8-38.8 69.9-68.4 118.7-83C195.8 3.1 217.8 0 239.5 0zm0 32c-18.7 0-37.6 2.6-56.1 8.2c-42 12.5-77.3 38-102.1 71.4v0C56.4 144.9 42 186.1 42 230.1v32h-.1V457.8l.3 3.8c.4 2.4 1.2 4.7 2.3 6.7l1.9 2.9 .1 .1c2.8 3.7 6.7 6.5 11.7 7.9c5 1.4 9.8 1.1 13.9-.6l.1 0c4.1-1.6 7.9-4.6 10.7-9.2h0l5.7-9.4 24-39.2L127.6 396l26.1 12.6c26.8 12.9 56 19.6 85.7 19.6h0c-.1 0 .1 0 .9 0c.6 0 1.5 0 2.3 0s1.7 0 2.5 0c.3 0 .7 0 1 0c12.5-.4 25-2.1 37.1-4.9h0c40.5-9.3 78.1-31.3 106.4-64.7l0 0c28.4-33.4 44.1-74.2 46.8-115.7l.4-7.8c1-39-9.6-78.4-32-112.9C381 85.3 346.6 58.6 307.6 44.2h0c-21.7-8-44.7-12.2-68.1-12.2zM133.7 215c8.4 0 16.1 2.8 22.1 8.8c6.1 5.8 9.1 13.3 9.1 21.6s-3 15.8-8.9 21.7l-.1 .1c-6.1 5.8-13.7 8.5-22.1 8.5c-8.5 0-16.2-2.6-22.4-8.4l-.3-.3c-5.9-5.9-8.9-13.4-8.9-21.7s3-15.8 9.1-21.6l0 0c6.2-5.9 14-8.8 22.5-8.8zm103.7 0c8.4 0 16.1 2.8 22.1 8.8c6.1 5.8 9.1 13.3 9.1 21.6s-3 15.8-8.9 21.7l-.1 .1c-6.1 5.8-13.7 8.5-22.1 8.5c-8.5 0-16.2-2.6-22.4-8.4l-.3-.3c-5.9-5.9-8.9-13.4-8.9-21.7s3-15.8 9.1-21.6l0 0c6.2-5.9 14-8.8 22.5-8.8zm103.7 0c8.4 0 16.1 2.8 22.1 8.8c6.1 5.8 9.1 13.3 9.1 21.6s-3 15.8-8.9 21.7l-.1 .1c-6.1 5.8-13.7 8.5-22.1 8.5c-8.5 0-16.2-2.6-22.4-8.4l-.3-.3c-5.9-5.9-8.9-13.4-8.9-21.7s3-15.8 9.1-21.6l0 0c6.2-5.9 14-8.8 22.5-8.8z"]
    }
      , Ts = {
        prefix: "fak",
        iconName: "coin",
        icon: [486, 512, [], "e009", "M258.2 148.9c12.8 .9 25.2 4.5 37.5 7.9c1.5 .4 2.9 .8 4.4 1.2c8.1 2.2 12.9 10.6 10.6 18.7c-2.2 8.1-10.6 12.8-18.7 10.5c-2.3-.6-4.5-1.2-6.8-1.9c-8-2.1-14.3-5-21.6-5.3c-18.2-2.7-34.8-.3-46.7 4.8c-12.2 5.3-17.6 12.4-18.8 18.5c-1.7 9.2 2 15.6 9.7 20.6c10.1 6.4 25.1 10.7 43.5 15.9l.2-.8c16.9 5.6 36.9 11.3 51.5 21.3c18 12.4 26.2 32.1 22.4 53.6c-3.8 20.5-18 34.1-35.9 41.3c-9.4 3.8-20 6-31.3 6.6v22.9c0 8.3-6.8 15.2-15.2 15.2s-15.2-6.8-15.2-15.2V360.3c-7.7-1.1-20.7-4.9-30.7-8c-6.5-2-13.1-4.1-20.4-6.2c-7.1-2.7-11.5-11.2-8.8-20c2.7-7.1 11.2-11.5 19.1-8.8c6.3 1.2 12.6 4.1 18.9 6c10.7 3.2 21.5 6.3 26.6 7c18.8 2.8 34.6 1.2 45.6-3.1c10.5-4.3 15.8-10.7 17.3-18.8c1.8-9.9-1.4-17.4-9.7-23.1c-11.4-7.8-25.4-11.6-38.8-15.3c-2.2-.7-4.4-1.2-6.5-2.7c-16.2-3.8-35.1-9.1-49-18.1c-7.7-4.8-14.9-11.5-19.4-20.5c-4.6-9.3-5.9-19.7-3.8-31.1c3.6-19.6 19-33.3 36.6-40.8c7.1-3 14.8-5.3 22.2-6.6V127.2c0-8.3 7.7-15.2 15.2-15.2c9.2 0 16 6.8 16 15.2v21.8zM.5 256a242.5 242.5 0 1 1 485.1 0A242.5 242.5 0 1 1 .5 256zM243 43.8a212.2 212.2 0 1 0 0 424.4 212.2 212.2 0 1 0 0-424.4z"]
    }
      , Ss = {
        prefix: "fak",
        iconName: "comment",
        icon: [486, 512, [], "e008", "M243 471.6c119.1 0 215.6-96.5 215.6-215.6s-96.5-215.6-215.6-215.6S27.4 136.9 27.4 256c0 45.6 14.1 87.8 38.3 122.6c2.5 3.6 3 8.3 1.2 12.3L37.7 453.7c-4.6 8 1.2 17.9 10.4 17.9H243z"]
    }
      , Is = {
        prefix: "fak",
        iconName: "comment-outline",
        icon: [486, 512, [], "e00a", "M442.4 256c0-110.1-89.3-199.4-199.4-199.4S43.6 145.9 43.6 256c0 42.2 13.1 81.2 35.4 113.4c4.9 7.1 6.5 16.2 3.9 24.7l-1.4 3.6L54.7 455.4H243c110.1 0 199.4-89.3 199.4-199.4zm32.3 0C474.7 384 371 487.7 243 487.7H48.1c-21.2 0-34.5-22.4-25-40.9H23l28.2-60.8C26 349 11.3 304.2 11.3 256C11.3 128 115 24.3 243 24.3S474.7 128 474.7 256z"]
    }
      , As = {
        prefix: "fak",
        iconName: "feed",
        icon: [307, 512, [], "e006", "M256.4 41.2H49.1C22.5 41.2 .4 62.7 .4 89.3V426.7c0 25.6 30.6 43.2 40.2 43.2H256.4c26.6 0 50.2-21.6 50.2-48.2V89.3c0-26.6-23.1-48.2-50.2-48.2zm20.1 362.9c0 18.6-1.5 35.6-20.1 35.6H50.6c-10 0-20.1-10-20.1-18.1V109.3c0-18.6 7.1-41 25.6-41H241.3c18.6 0 35.1 3 35.1 21.1V404.1zm-40.2 87.8H70.7c-5.4 0-10.1 4.7-10.1 10s4.7 10 10.1 10H236.3c5.4 0 10.1-4.7 10.1-10s-4.7-10-10.1-10zM236.3 0H70.7C65.3 0 60.6 4.7 60.6 10s4.7 10 10.1 10H236.3c5.4 0 10.1-4.7 10.1-10s-4.7-10-10.1-10z"]
    }
      , Cs = {
        prefix: "fak",
        iconName: "feed-2",
        icon: [308, 512, [], "e018", "M62.8 96.3c-12.6 0-22.7 10.1-22.7 22.7l0 272.3c0 12.6 10.1 22.7 22.7 22.7l181.5 0c12.6 0 22.7-10.1 22.7-22.7l0-272.3c0-12.6-10.1-22.7-22.7-22.7l-181.5 0zM17.4 119c0-25 20.4-45.4 45.4-45.4l181.5 0c25 0 45.4 20.4 45.4 45.4l0 272.3c0 25-20.4 45.4-45.4 45.4l-181.5 0c-25 0-45.4-20.4-45.4-45.4l0-272.3zM258.3 10.6c0-5.9-4.7-10.6-10.5-10.6L59.3 0C53.6 0 48.9 4.8 48.9 10.6s4.7 10.6 10.5 10.6l188.5 0c5.8 0 10.5-4.8 10.5-10.6zm0 490.7c0-5.8-4.7-10.6-10.5-10.6l-188.5 0c-5.8 0-10.5 4.8-10.5 10.6S53.6 512 59.3 512l188.5 0c5.8 0 10.5-4.8 10.5-10.6z"]
    }
      , Ls = {
        prefix: "fak",
        iconName: "image",
        icon: [586, 512, [], "e00d", "M86.2 52.2c-18.8 0-34 15.2-34 34l0 247.7 71.8-71.8c16.6-16.6 43.4-16.6 60.1 0L256 333.9 395.8 194.1c16.6-16.6 43.4-16.6 60.1 0l71.8 71.8 0-179.8c0-18.8-15.2-34-34-34l-407.5 0zm-34 329.6l0 43.9c0 18.8 15.2 34 34 34l43.9 0 101.9-101.9-71.8-71.8c-3.3-3.3-8.7-3.3-12 0L52.2 381.9zM431.8 218.1c-3.3-3.3-8.7-3.3-12 0l-241.7 241.6 315.6 0c18.8 0 34-15.2 34-34l0-111.9-95.8-95.8zM18.3 86.2c0-37.5 30.5-67.9 67.9-67.9l407.5 0c37.5 0 67.9 30.5 67.9 67.9l0 339.6c0 37.5-30.5 67.9-67.9 67.9l-407.5 0c-37.5 0-67.9-30.5-67.9-67.9l0-339.6zm169.8 50.9a17 17 0 1 0 -34 0 17 17 0 1 0 34 0zm34 0a50.9 50.9 0 1 1 -101.9 0 50.9 50.9 0 1 1 101.9 0z"]
    }
      , vs = {
        prefix: "fak",
        iconName: "live",
        icon: [768, 512, [], "e00f", "M133.1 7.3c13.6 11.2 15.5 31.5 4.3 45.1-45.9 55.3-73.3 126.3-73.3 203.7s27.5 148.4 73.3 203.7c11.2 13.6 9.3 33.7-4.3 45.1s-33.7 9.3-45.1-4.3C33.1 434.2 0 349 0 256.1S33.1 78 88 11.6C99.2-2 119.5-3.9 133.1 7.3zm502 0c13.6-11.2 33.7-9.3 45.1 4.3 54.9 66.4 88 151.7 88 244.5s-33.1 178.1-88 244.5c-11.2 13.6-31.5 15.5-45.1 4.3s-15.5-31.5-4.3-45.1c45.7-55.3 73.3-126.3 73.3-203.7S676.7 107.7 630.8 52.4c-11.2-13.6-9.3-33.7 4.3-45.1zM437.3 255.9a53.3 53.3 0 1 1 -106.7 .2 53.3 53.3 0 1 1 106.7-.2zM249.2 151.4c-22.5 28.9-35.9 65.2-35.9 104.7s13.3 75.7 35.9 104.7c10.8 14 8.4 34-5.6 44.9s-34 8.4-44.9-5.6c-30.9-39.7-49.3-89.7-49.3-144s18.4-104.3 49.3-144c10.8-14 30.9-16.4 44.9-5.6s16.4 30.9 5.6 44.9zm320.1-39.3c30.9 39.7 49.3 89.7 49.3 144s-18.4 104.3-49.3 144c-10.8 14-30.9 16.4-44.9 5.6s-16.4-30.9-5.6-44.9c22.5-28.9 35.9-65.2 35.9-104.7s-13.3-75.7-35.9-104.7c-10.8-14-8.4-34 5.6-44.9s34-8.4 44.9 5.6z"]
    }
      , ks = {
        prefix: "fak",
        iconName: "lock",
        icon: [512, 512, [], "e00e", "M256.1 32c53 0 96 43 96 96l0 64-192 0 0-64c0-53 43-96 96-96zm-128 96l0 64-16 0c-44.2 0-80 35.8-80 80l0 160c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80l-16 0 0-64c0-70.7-57.3-128-128-128s-128 57.3-128 128zm-16 96l288 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48zm160 88c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z"]
    }
      , js = {
        prefix: "fak",
        iconName: "logo-privacy-1",
        icon: [470, 512, [], "e00b", "M239.5 0c27.2 0 54 4.9 79.2 14.2C364 30.9 404 61.9 431.8 104.6c27.7 42.7 39.8 92 36.7 140.2s-21.3 95.6-54.3 134.4c-32.9 38.8-76.6 64.5-123.7 75.2c-14.3 3.3-28.9 5.2-43.6 5.7l-7.4 .1c-34.5 0-68.6-7.8-99.7-22.8l-24 39.2L110 486c-6.4 10.5-15.7 18.1-26.4 22.3C74.4 512 64 513 53.8 511l-4.4-1c-11.8-3.3-21.6-10.3-28.5-19.4c-6.1-8-9.9-17.7-10.7-28.2l-.2-4.5V230.1h0l.2-9.5c1.8-44.3 16.2-85.9 40-120.8l5.3-7.4c28.8-38.8 69.9-68.4 118.7-83C195.8 3.1 217.8 0 239.5 0zm0 32c-18.7 0-37.6 2.6-56.1 8.2c-42 12.5-77.3 38-102.1 71.4v0C56.4 144.9 42 186.1 42 230.1v32h-.1V457.8l.3 3.8c.4 2.4 1.2 4.7 2.3 6.7l1.9 2.9 .1 .1c2.8 3.7 6.7 6.5 11.7 7.9s9.8 1.1 13.9-.6l.1 0c4.1-1.6 7.9-4.6 10.7-9.2h0l5.7-9.4 24-39.2 15-24.8 26.1 12.6c26.8 12.9 56 19.6 85.7 19.6h0c-.1 0 .1 0 .9 0c.6 0 1.5 0 2.3 0s1.7 0 2.5 0c.3 0 .7 0 1 0c12.5-.4 25-2.1 37.1-4.9h0c40.5-9.3 78.1-31.3 106.4-64.7l0 0c28.4-33.4 44.1-74.2 46.8-115.7l.4-7.8c1-39-9.6-78.4-32-112.9c-23.8-36.9-58.2-63.6-97.2-78h0c-21.7-8-44.7-12.2-68.1-12.2z"]
    }
      , Os = {
        prefix: "fak",
        iconName: "media-play",
        icon: [640, 512, [], "e00c", "M576 182.9l0 256c0 20.2-16.3 36.6-36.6 36.6l-438.9 0c-20.2 0-36.6-16.3-36.6-36.6l0-256 512 0zm0-36.6l-111.3 0 99.8-99.8c7.1 6.6 11.5 16.1 11.5 26.6l0 73.1zm-285 0l109.7-109.7 122.1 0-109.7 109.7-122.1 0zm-51.8 0l-121.9 0 109.7-109.7 122.1 0-109.7 109.7-.1 0zM100.5 36.6l74.7 0-109.7 109.7-1.6 0 0-73.1c0-20.2 16.3-36.6 36.6-36.6zm512 109.7l0-73.1C612.6 32.8 579.8 0 539.4 0L100.5 0C60.2 0 27.4 32.8 27.4 73.1l0 73.1 0 18.3 0 18.3 0 256c0 40.3 32.8 73.1 73.1 73.1l438.9 0c40.3 0 73.1-32.8 73.1-73.1l0-256 0-18.3 0-18.3zM274.4 221.9c-5.6-3.3-12.7-3.3-18.4-.1s-9.3 9.3-9.3 15.9l0 182.9c0 6.5 3.5 12.6 9.3 15.9s12.7 3.2 18.4-.1l155.4-91.4c5.6-3.3 9-9.3 9-15.8s-3.4-12.5-9-15.8L274.4 221.9zM384.4 329.1l-101 59.4 0-118.9 101 59.4z"]
    }
      , Ps = {
        prefix: "fak",
        iconName: "mural",
        icon: [384, 512, [], "e005", "M269.2 6.3C273.7 2.2 279.5 0 285.5 0c16.8 0 28.6 17.1 22.9 33.3L241.7 224h108c14.6 0 26.4 12.1 26.4 27c0 7.8-3.2 15.1-8.9 20.3L106.9 505.8c-4.4 4-10.2 6.2-16.2 6.2c-16.8 0-28.6-17.1-23-33.3L134.5 288H25.3C11.4 288 0 276.4 0 262.2c0-7.4 3.1-14.4 8.5-19.3L269.2 6.3zm.5 42.4L41.2 256H156.7c5.1 0 9.9 2.5 12.8 6.8s3.6 9.7 2 14.6L106.4 463.6 336.8 256H219.4c-5.1 0-9.9-2.5-12.8-6.8s-3.6-9.7-2-14.6l65-186v.1z"]
    }
      , Vs = {
        prefix: "fak",
        iconName: "pasted-svg",
        icon: [405, 512, [], "e007", "M341.5 0H89.2C54.5 0 26.2 28.7 26.2 64V495.1c0 5.8 3.1 11.2 8.2 14c5.1 2.8 11.2 2.6 16-.5l165-106.5 165 106.5c2.6 2.6 5.5 3.4 8.5 3.4c2.6 0 5.2-.7 7.6-2c5-2.8 8.2-8.2 8.2-14.9V64c0-35.3-28.3-64-63.1-64zm31.5 466.9L223.9 370.5c-3.4-1.7-5.5-2.5-8.5-2.5s-5.9 .8-8.5 2.5L57.7 466.9V64c0-17.6 14.1-32 31.5-32H341.5c17.4 0 31.5 14.4 31.5 32V466.9z"]
    }
      , Bs = {
        prefix: "fak",
        iconName: "plus",
        icon: [512, 512, [], "e004", "M276 19.7C276 8.9 267 0 256 0s-20 8.9-20 19.7V236.3H15.9c-11 0-20 8.9-20 19.7s9 19.7 20 19.7H236V492.3c0 10.8 9 19.7 20 19.7s20-8.9 20-19.7V275.7H496.1c11 0 20-8.9 20-19.7s-9-19.7-20-19.7H276V19.7z"]
    }
      , Rs = {
        prefix: "fak",
        iconName: "search",
        icon: [512, 512, [], "e000", "M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z"]
    }
      , Zs = {
        prefix: "fak",
        iconName: "topshare",
        icon: [512, 512, [], "e016", "M185.8 470.5l-42.9 0c-15.1 0-29.4-2.9-42.7-8.6s-24.9-13.3-34.7-23.1c-9.8-9.6-17.8-21.1-23.7-34.1s-8.8-27.2-8.8-42.3l0-179.7-32.9 0 0-78.5 175.2 0 0 78.5-53.8 0 0 179.7c0 6.3 2 11.7 6.3 15.7 4.3 4.3 9.2 6.3 15.1 6.3l42.9 0 0 86zm167.4-66.4c17.8 1.2 32.1-1.4 43.3-8s18.4-14.1 21.9-22.7 2.5-17.2-2.9-25.5-15.7-14.3-31.3-17.8l-77.1-11.4c-30.5-4.7-54.8-16.1-73.4-34.7S206 240.2 206 208.7c0-17.4 3.7-33.1 11-47.4s17.6-26.6 30.5-36.6c12.9-10.2 28.4-18 46.4-23.3 18.2-5.5 38-8.2 59.5-8.2 27.8 0 54.2 3.9 79.1 11.4s47.2 18.2 67 31.7l-39.2 65.2c-12.3-9.6-28.2-17.4-47.8-22.7-19.6-5.5-39.2-8.2-59.1-8.2s-33.9 3.1-43.7 9.2c-9.6 6.1-15.3 13.1-16.8 20.8s.6 15.1 6.3 22.1 14.3 11.2 25.5 12.9l78.5 12.1c12.7 2 25.3 5.9 38.2 11.4S466 272 476.6 281.6c10.6 9.4 19 21.3 25.5 35.2s9.8 30.5 9.8 49.3-4.3 34.3-12.7 48.6-19.8 26.4-34.5 36.4c-14.5 9.8-31.5 17.6-50.7 22.7-19.2 5.3-39.4 8-61.1 8-30.5 0-58.7-3.9-85-11.4s-49.7-18.2-69.9-31.7l43.7-68.9c13.5 9.6 29.8 17.6 49.1 23.7s39.9 9.8 62.3 11l0-.4zM123.5 28l-86.7 0 0 82.2 86.7 0 0-82.2z"]
    }
      , _s = {
        prefix: "fak",
        iconName: "x",
        icon: [512, 512, [], "e017", "M403.2 24L481.7 24 310.2 220 512 486.8 354 486.8 230.2 325.1 88.7 486.8 10 486.8 193.5 277.1 0 24 162 24 273.8 171.9 403.2 24zM375.6 439.9l43.5 0-280.8-371.4-46.7 0 284 371.4z"]
    };
    const Us = Object.freeze(Object.defineProperty({
        __proto__: null,
        faBell: bs,
        faChart: xs,
        faChart1: Ds,
        faChart2: Es,
        faChat: ws,
        faCoin: Ts,
        faComment: Ss,
        faCommentOutline: Is,
        faFeed: As,
        faFeed2: Cs,
        faImage: Ls,
        faLive: vs,
        faLock: ks,
        faLogoPrivacy1: js,
        faMediaPlay: Os,
        faMural: Ps,
        faPastedSvg: Vs,
        faPlus: Bs,
        faSearch: Rs,
        faTopshare: Zs,
        faX: _s
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var _ = {
        fak: {}
    };
    function Fs(t) {
        Object.keys(t).forEach(function(e) {
            if (e !== "prefix") {
                var i = t[e]
                  , n = i.icon[2];
                n.forEach(function(s) {
                    typeof s == "string" && (_[i.prefix][s] = i)
                }),
                _[i.prefix][i.iconName] = i
            }
        })
    }
    Fs(Us);
    var Qs = {
        prefix: "fas",
        iconName: "arrow-left",
        icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
    };
    const Hs = `.background{height:175px;padding:16px;position:relative}.background:before{content:"";position:absolute;top:0;left:0;right:0;height:160px;background:linear-gradient(to bottom,rgba(0,0,0,.275),rgba(0,0,0,0));z-index:2}.background .bg-image{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;z-index:1}.background .medias-container{position:relative;z-index:2;display:flex;align-items:center;gap:10px;color:var(--el-color-white)}.background .medias-container .back-button{cursor:pointer;padding:8px}.background .medias-container .back-button svg{font-size:24px}.background .medias-container .count-container{display:flex;flex-direction:column;gap:6px}.background .medias-container .count-container .user-name{margin:0;font-weight:600;font-size:24px}.v10 .background{height:88px}.v10 .background .medias-container{top:80px;justify-content:end;color:var(--btn-privacy-color-1)}.v10 .background:before{border-radius:24px 24px 0 0;background:none}.v10 .background .bg-image{border-radius:24px 24px 0 0}.onboarding-info:before{border-radius:16px 16px 0 0}.onboarding-info .bg-image{border-radius:16px 16px 0 0}
`
      , Ys = {
        emits: ["back-profile"],
        components: {
            StatDisplay: je
        },
        props: {
            user: {
                type: Object,
                required: !0,
                default: () => ({
                    avatar: "",
                    name: "",
                    stats: {
                        images: 0,
                        videos: 0,
                        likes: 0,
                        postPaid: 0
                    }
                })
            },
            v10: {
                type: Boolean,
                default: !1
            },
            showBackButton: Boolean,
            isOnboarding: Boolean,
            backToProfile: {
                type: Boolean,
                default: !1
            },
            showFollowers: {
                type: Boolean,
                default: !1
            }
        },
        setup() {
            return {
                faArrowLeft: Qs,
                faImage: pe,
                faVideo: fe,
                faHeart: ue,
                regularIcons: _,
                defaultCover: bt
            }
        },
        computed: {
            mediaList() {
                const t = this.user.stats || {}
                  , e = [];
                return t.images && e.push({
                    icon: pe,
                    count: this.formatCount(t.images),
                    iconSize: "17px"
                }),
                t.videos && e.push({
                    icon: this.v10 ? this.regularIcons.fak["media-play"] : fe,
                    count: this.formatCount(t.videos),
                    iconSize: "17px"
                }),
                t.postsPaid && this.v10 && e.push({
                    icon: this.regularIcons.fak.lock,
                    count: this.formatCount(t.postsPaid),
                    iconSize: "17px"
                }),
                t.likes && e.push({
                    icon: ue,
                    count: this.formatCount(t.likes),
                    iconSize: "17px"
                }),
                this.showFollowers && t.followers && !this.v10 && e.push({
                    icon: me,
                    count: this.formatCount(t.followers),
                    iconSize: "15px"
                }),
                e
            },
            cover() {
                return this.user.cover ? this.user.cover : bt
            }
        },
        methods: {
            back() {
                if (this.backToProfile)
                    return this.$emit("back-profile");
                document.referrer ? window.history.back() : window.location.href = "/"
            },
            formatCount(t) {
                return t >= 1e6 ? (t / 1e6).toFixed(1).replace(".0", "") + "M" : t >= 1e3 ? (t / 1e3).toFixed(1).replace(".0", "") + "K" : t.toString()
            }
        }
    }
      , Ws = ["src"]
      , Gs = {
        class: "medias-container"
    }
      , qs = {
        class: "count-container"
    }
      , Ks = {
        key: 0,
        class: "user-name"
    }
      , Js = {
        class: "count-list"
    };
    function Xs(t, e, i, n, s, r) {
        const a = o.resolveComponent("font-awesome-icon")
          , l = o.resolveComponent("stat-display");
        return o.openBlock(),
        o.createElementBlock("div", null, [o.createElementVNode("div", {
            class: o.normalizeClass(["background", {
                "onboarding-info": i.isOnboarding
            }])
        }, [o.createElementVNode("img", {
            class: "bg-image",
            src: r.cover,
            loading: "lazy"
        }, null, 8, Ws), o.createElementVNode("div", Gs, [i.showBackButton && !i.v10 ? (o.openBlock(),
        o.createElementBlock("div", {
            key: 0,
            class: "back-button",
            onClick: e[0] || (e[0] = (...c) => r.back && r.back(...c))
        }, [o.createVNode(a, {
            icon: n.faArrowLeft
        }, null, 8, ["icon"])])) : o.createCommentVNode("", !0), o.createElementVNode("div", qs, [i.v10 ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createElementBlock("p", Ks, o.toDisplayString(i.user.name), 1)), o.createElementVNode("div", Js, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(r.mediaList, (c, d) => (o.openBlock(),
        o.createBlock(l, {
            class: "stat-display",
            key: d,
            icon: c.icon,
            count: c.count,
            "icon-size": c.iconSize
        }, null, 8, ["icon", "count", "icon-size"]))), 128))])])])], 2)])
    }
    const Oe = w(Ys, [["render", Xs], ["styles", [Hs]]])
      , $s = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Oe
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , er = {
        props: {
            active: {
                type: Boolean,
                required: !0
            },
            icon: String,
            iconBg: String
        },
        computed: {
            computedIcon() {
                return this.active ? this.iconBg : this.icon
            }
        }
    }
      , tr = ["src"];
    function ir(t, e, i, n, s, r) {
        return o.openBlock(),
        o.createElementBlock("img", {
            src: r.computedIcon
        }, null, 8, tr)
    }
    const xt = w(er, [["render", ir]])
      , or = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xt
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , nr = {
        emits: ["show-posts"],
        props: {
            user: {
                type: Object,
                required: !0
            },
            v10: Boolean,
            view: String
        },
        setup() {
            const {t} = O();
            return {
                t,
                regularIcons: _
            }
        },
        computed: {
            totalPosts() {
                var t, e, i, n;
                return (e = (t = this == null ? void 0 : this.user) == null ? void 0 : t.stats) != null && e.posts ? (n = (i = this == null ? void 0 : this.user) == null ? void 0 : i.stats) == null ? void 0 : n.posts : 0
            },
            totalImages() {
                var t, e, i, n;
                return (e = (t = this == null ? void 0 : this.user) == null ? void 0 : t.stats) != null && e.images ? (n = (i = this == null ? void 0 : this.user) == null ? void 0 : i.stats) == null ? void 0 : n.images : 0
            },
            totalVideos() {
                var t, e, i, n;
                return (e = (t = this == null ? void 0 : this.user) == null ? void 0 : t.stats) != null && e.videos ? (n = (i = this == null ? void 0 : this.user) == null ? void 0 : i.stats) == null ? void 0 : n.videos : 0
            },
            totalgifs() {
                var t, e, i, n;
                return (e = (t = this == null ? void 0 : this.user) == null ? void 0 : t.stats) != null && e.gifs ? (n = (i = this == null ? void 0 : this.user) == null ? void 0 : i.stats) == null ? void 0 : n.gifs : 0
            },
            totalMedia() {
                return this.totalImages + this.totalVideos + this.totalgifs
            },
            totalPaid() {
                var t, e, i, n;
                return (e = (t = this == null ? void 0 : this.user) == null ? void 0 : t.stats) != null && e.postsPaid ? (n = (i = this == null ? void 0 : this.user) == null ? void 0 : i.stats) == null ? void 0 : n.postsPaid : 0
            }
        },
        data() {
            return {
                activeTab: "tab1",
                activeSubtab: "total"
            }
        },
        methods: {
            changeMainTab(t) {
                this.activeTab !== t && (this.activeTab = t,
                this.$emit("show-posts", t),
                this.view,
                W.CHECKOUT)
            },
            changeSubTab(t) {
                this.activeSubTab !== t && (this.activeSubtab = t,
                this.view,
                W.CHECKOUT)
            }
        }
    }
      , sr = {
        class: "nav nav-tabs tab-main mb-2"
    }
      , rr = {
        class: "nav-item main"
    }
      , ar = {
        class: "tab-main-item"
    }
      , lr = {
        class: "nav-item main"
    }
      , cr = {
        class: "text-base font-normal"
    }
      , dr = {
        key: 0,
        class: "nav nav-tabs tab-sub"
    }
      , mr = {
        class: "nav-item sub pt-1"
    }
      , pr = {
        class: "text-base font-normal"
    }
      , ur = {
        key: 0,
        class: "nav-item sub pt-1"
    }
      , hr = {
        class: "text-base font-normal"
    }
      , fr = {
        key: 1,
        class: "nav-item sub pt-1"
    }
      , gr = {
        class: "text-base font-normal"
    }
      , yr = {
        key: 2,
        class: "nav-item sub pt-1"
    }
      , Mr = {
        class: "text-base font-normal"
    }
      , Nr = {
        key: 3,
        class: "nav-item sub pt-1"
    }
      , zr = {
        class: "text-base font-normal"
    };
    function br(t, e, i, n, s, r) {
        const a = o.resolveComponent("font-awesome-icon");
        return o.openBlock(),
        o.createElementBlock(o.Fragment, null, [o.createElementVNode("ul", sr, [o.createElementVNode("li", rr, [o.createElementVNode("div", ar, [o.createElementVNode("a", {
            class: o.normalizeClass(["text-tab", s.activeTab === "tab1" ? "text-base font-normal nav-link active main-item" : "text-base font-normal nav-link main-item"]),
            style: o.normalizeStyle(i.v10 ? "" : "margin-right: 1px;"),
            onClick: e[0] || (e[0] = l => r.changeMainTab("tab1")),
            "data-bs-toggle": "tab"
        }, [i.v10 ? (o.openBlock(),
        o.createBlock(a, {
            key: 0,
            icon: n.regularIcons.fak["feed-2"],
            class: "icon-tab-feed",
            style: {
                "margin-right": "8px"
            }
        }, null, 8, ["icon"])) : o.createCommentVNode("", !0), o.createTextVNode(" " + o.toDisplayString(r.totalPosts.toLocaleString("pt-BR")) + " " + o.toDisplayString(n.t("MEDIAS.ALL_POSTS")), 1)], 6)])]), o.createElementVNode("li", lr, [o.createElementVNode("a", {
            class: o.normalizeClass(["text-tab", s.activeTab === "tab2" ? "text-base font-normal nav-link active main-item" : "text-base font-normal nav-link main-item"]),
            "data-bs-toggle": "tab",
            style: o.normalizeStyle(i.v10 ? "" : "margin-left: 1px;"),
            onClick: e[1] || (e[1] = l => r.changeMainTab("tab2"))
        }, [i.v10 ? (o.openBlock(),
        o.createBlock(a, {
            key: 0,
            icon: n.regularIcons.fak["media-play"],
            class: "icon-tab-media-play",
            style: {
                "margin-right": "8px"
            }
        }, null, 8, ["icon"])) : o.createCommentVNode("", !0), o.createElementVNode("span", cr, o.toDisplayString(r.totalMedia.toLocaleString("pt-BR")) + " " + o.toDisplayString(n.t("MEDIAS.ALL_MEDIA")), 1)], 6)])]), s.activeTab === "tab2" && r.totalMedia > 0 ? (o.openBlock(),
        o.createElementBlock("ul", dr, [o.createElementVNode("li", mr, [o.createElementVNode("a", {
            class: o.normalizeClass(["text-sub-tab", s.activeSubtab === "total" ? "nav-link active sub-item" : "nav-link sub-item"]),
            "data-bs-toggle": "tab",
            onClick: e[2] || (e[2] = l => r.changeSubTab("total"))
        }, [o.createElementVNode("span", pr, o.toDisplayString(i.v10 ? null : r.totalMedia.toLocaleString("pt-BR")) + " " + o.toDisplayString(n.t("MEDIAS.ALL")), 1)], 2)]), r.totalImages > 0 ? (o.openBlock(),
        o.createElementBlock("li", ur, [o.createElementVNode("a", {
            class: o.normalizeClass(["text-sub-tab", s.activeSubtab === "photos" ? "nav-link active sub-item" : "nav-link sub-item"]),
            "data-bs-toggle": "tab",
            onClick: e[3] || (e[3] = l => r.changeSubTab("photos"))
        }, [o.createElementVNode("span", hr, o.toDisplayString(i.v10 ? null : r.totalImages.toLocaleString("pt-BR")) + " " + o.toDisplayString(n.t("MEDIAS.PHOTOS")), 1)], 2)])) : o.createCommentVNode("", !0), r.totalgifs > 0 ? (o.openBlock(),
        o.createElementBlock("li", fr, [o.createElementVNode("a", {
            class: o.normalizeClass(["text-sub-tab", s.activeSubtab === "gifs" ? "nav-link active sub-item" : "nav-link sub-item"]),
            "data-bs-toggle": "tab",
            onClick: e[4] || (e[4] = l => r.changeSubTab("gifs"))
        }, [o.createElementVNode("span", gr, o.toDisplayString(i.v10 ? null : r.totalgifs.toLocaleString("pt-BR")) + " " + o.toDisplayString(n.t("MEDIAS.GIFS")), 1)], 2)])) : o.createCommentVNode("", !0), r.totalVideos > 0 ? (o.openBlock(),
        o.createElementBlock("li", yr, [o.createElementVNode("a", {
            class: o.normalizeClass(["text-sub-tab", s.activeSubtab === "videos" ? "nav-link active sub-item" : "nav-link sub-item"]),
            "data-bs-toggle": "tab",
            onClick: e[5] || (e[5] = l => r.changeSubTab("videos"))
        }, [o.createElementVNode("span", Mr, o.toDisplayString(i.v10 ? null : r.totalVideos.toLocaleString("pt-BR")) + " " + o.toDisplayString(n.t("MEDIAS.VIDEOS")), 1)], 2)])) : o.createCommentVNode("", !0), r.totalPaid > 0 ? (o.openBlock(),
        o.createElementBlock("li", Nr, [o.createElementVNode("a", {
            class: o.normalizeClass(["text-sub-tab", s.activeSubtab === "paid" ? "nav-link active sub-item" : "nav-link sub-item"]),
            "data-bs-toggle": "tab",
            onClick: e[6] || (e[6] = l => r.changeSubTab("paid"))
        }, [o.createElementVNode("span", zr, o.toDisplayString(i.v10 ? null : r.totalPaid.toLocaleString("pt-BR")) + " " + o.toDisplayString(n.t("MEDIAS.PAID")), 1)], 2)])) : o.createCommentVNode("", !0)])) : o.createCommentVNode("", !0)], 64)
    }
    const Dt = w(nr, [["render", br]])
      , xr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Dt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var Dr = {
        prefix: "far",
        iconName: "arrow-left",
        icon: [448, 512, [8592], "f060", "M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"]
    }
      , Et = {
        prefix: "far",
        iconName: "ellipsis-vertical",
        icon: [128, 512, ["ellipsis-v"], "f142", "M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z"]
    }
      , Er = Et;
    const wr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTdDMTMuNDE4MyAxNyAxNyAxMy40MTgzIDE3IDlDMTcgNC41ODE3MiAxMy40MTgzIDEgOSAxQzQuNTgxNzIgMSAxIDQuNTgxNzIgMSA5QzEgMTAuNjkwOCAxLjUyNDUzIDEyLjI1OTEgMi40MTk3NCAxMy41NTFDMi41MTI2MSAxMy42ODUgMi41MzEyIDEzLjg1ODEgMi40NjI0OCAxNC4wMDU5TDEuMzc5OTcgMTYuMzM1QzEuMjEwNjYgMTYuNjMxMyAxLjQyNDYgMTcgMS43NjU4NiAxN0g5WiIgc3Ryb2tlPSIjNmM3NTdkIiBzdHJva2Utd2lkdGg9IjEuMiIvPgo8L3N2Zz4K"
      , Tr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTdDMTMuNDE4MyAxNyAxNyAxMy40MTgzIDE3IDlDMTcgNC41ODE3MiAxMy40MTgzIDEgOSAxQzQuNTgxNzIgMSAxIDQuNTgxNzIgMSA5QzEgMTAuNjkwOCAxLjUyNDUzIDEyLjI1OTEgMi40MTk3NCAxMy41NTFDMi41MTI2MSAxMy42ODUgMi41MzEyIDEzLjg1ODEgMi40NjI0OCAxNC4wMDU5TDEuMzc5OTcgMTYuMzM1QzEuMjEwNjYgMTYuNjMxMyAxLjQyNDYgMTcgMS43NjU4NiAxN0g5WiIgc3Ryb2tlPSIjRjY4RDNEIiBzdHJva2Utd2lkdGg9IjEuMiIvPgo8L3N2Zz4K"
      , Sr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNDY2NiAyLjU2MjcxTDkuOTExOTEgMi4xMTgxNEMxMS4xNTUxIDAuOTA2NTE1IDEyLjg3NyAwLjM1NTA3IDE0LjU2OTEgMC42MzY3M0MxNy4xMjYgMS4wNjI3NSAxOSAzLjI3NTIxIDE5IDUuODY5MTVWNi4wODQzOUMxOSA3LjYyNDQyIDE4LjM2MTcgOS4wOTc2NyAxNy4yMzM2IDEwLjE0NzlMMTAuNTI3OSAxNi40MDgyQzEwLjI0OTYgMTYuNjY4IDkuODgyMjMgMTYuODEyNyA5LjUgMTYuODEyN0M5LjExNzc3IDE2LjgxMjcgOC43NTAzOSAxNi42NjggOC40NzIwNyAxNi40MDgyTDEuNzY2MDQgMTAuMTQ3OUMwLjYzOTM5NSA5LjA5NzY3IDAgNy42MjQ0MiAwIDYuMDg0MzlWNS44NjkxNUMwIDMuMjc1MjEgMS44NzQ3NyAxLjA2Mjc1IDQuNDMwODYgMC42MzY3M0M2LjA4OTY1IDAuMzU1MDcgNy44NDQ5MiAwLjkwNjUxNSA5LjA1NDY5IDIuMTE4MTRMOS40NjY2IDIuNTYyNzFaTTkuNDY2NiA0LjI0Mzc2TDguMjE2MDIgMi45NTYwN0M3LjI3NzE1IDIuMDE3NTcgNS45Mzc1IDEuNTg5MzMgNC42Mjc1NCAxLjgwNzlDMi42NDI1NiAyLjEzODkyIDEuMTU0MSAzLjg1NzgyIDEuMTU0MSA1Ljg2OTE1VjYuMDg0MzlDMS4xNTQxIDcuMjk3ODYgMS42OTAzMyA4LjQ1MTk2IDIuNTc2MTMgOS4yNzk1TDkuMjgxMDUgMTUuNTM5OUM5LjM0MDQzIDE1LjU5NTUgOS40MTgzNiAxNS42MjUyIDkuNDY2NiAxNS42MjUyQzkuNTgxNjQgMTUuNjI1MiA5LjY1OTU3IDE1LjU5NTUgOS43MTg5NSAxNS41Mzk5TDE2LjQyNDYgOS4yNzk1QzE3LjMwNzggOC40NTE5NiAxNy44MTI1IDcuMjk3ODYgMTcuODEyNSA2LjA4NDM5VjUuODY5MTVDMTcuODEyNSAzLjg1NzgyIDE2LjM1NzggMi4xMzg5MiAxNC4zNzI1IDEuODA3OUMxMy4wMjkxIDEuNTg5MzMgMTEuNzIyOSAyLjAxNzU3IDEwLjc4NCAyLjk1NjA3TDkuNDY2NiA0LjI0Mzc2WiIgZmlsbD0iIzZjNzU3ZCIvPgo8L3N2Zz4K"
      , Ir = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNDY2NiAzLjU2MjcxTDkuOTExOTEgMy4xMTgxNEMxMS4xNTUxIDEuOTA2NTEgMTIuODc3IDEuMzU1MDcgMTQuNTY5MSAxLjYzNjczQzE3LjEyNiAyLjA2Mjc1IDE5IDQuMjc1MjEgMTkgNi44NjkxNVY3LjA4NDM5QzE5IDguNjI0NDIgMTguMzYxNyAxMC4wOTc3IDE3LjIzMzYgMTEuMTQ3OUwxMC41Mjc5IDE3LjQwODJDMTAuMjQ5NiAxNy42NjggOS44ODIyMyAxNy44MTI3IDkuNSAxNy44MTI3QzkuMTE3NzcgMTcuODEyNyA4Ljc1MDM5IDE3LjY2OCA4LjQ3MjA3IDE3LjQwODJMMS43NjYwNCAxMS4xNDc5QzAuNjM5Mzk1IDEwLjA5NzcgMCA4LjYyNDQyIDAgNy4wODQzOVY2Ljg2OTE1QzAgNC4yNzUyMSAxLjg3NDc3IDIuMDYyNzUgNC40MzA4NiAxLjYzNjczQzYuMDg5NjUgMS4zNTUwNyA3Ljg0NDkyIDEuOTA2NTEgOS4wNTQ2OSAzLjExODE0TDkuNDY2NiAzLjU2MjcxWk05LjQ2NjYgNS4yNDM3Nkw4LjIxNjAyIDMuOTU2MDdDNy4yNzcxNSAzLjAxNzU3IDUuOTM3NSAyLjU4OTMzIDQuNjI3NTQgMi44MDc5QzIuNjQyNTYgMy4xMzg5MiAxLjE1NDEgNC44NTc4MiAxLjE1NDEgNi44NjkxNVY3LjA4NDM5QzEuMTU0MSA4LjI5Nzg2IDEuNjkwMzMgOS40NTE5NiAyLjU3NjEzIDEwLjI3OTVMOS4yODEwNSAxNi41Mzk5QzkuMzQwNDMgMTYuNTk1NSA5LjQxODM2IDE2LjYyNTIgOS40NjY2IDE2LjYyNTJDOS41ODE2NCAxNi42MjUyIDkuNjU5NTcgMTYuNTk1NSA5LjcxODk1IDE2LjUzOTlMMTYuNDI0NiAxMC4yNzk1QzE3LjMwNzggOS40NTE5NiAxNy44MTI1IDguMjk3ODYgMTcuODEyNSA3LjA4NDM5VjYuODY5MTVDMTcuODEyNSA0Ljg1NzgyIDE2LjM1NzggMy4xMzg5MiAxNC4zNzI1IDIuODA3OUMxMy4wMjkxIDIuNTg5MzMgMTEuNzIyOSAzLjAxNzU3IDEwLjc4NCAzLjk1NjA3TDkuNDY2NiA1LjI0Mzc2WiIgZmlsbD0iI0Y2OEQzRCIvPgo8cGF0aCBkPSJNMi41IDNMMSA1LjVMMC41IDcuNUwxLjUgOS41TDkuNSAxNy41TDE2LjUgMTFMMTggOC41TDE4LjUgNUwxNyAzLjVMMTUgMi41SDEzTDExIDNMOS41IDVMOC41IDMuNUw2IDIuNUg0LjVMMi41IDNaIiBmaWxsPSIjRjY4RDNEIi8+Cjwvc3ZnPgo="
      , Ar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk5IiBoZWlnaHQ9IjM0MSIgdmlld0JveD0iMCAwIDI5OSAzNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMTIuMTIyIDkuMjMyMDFDMTg5LjU4MiAtMTEuNTIzMyAyNjkuMTYzIDM0LjQyMjggMjg5LjkxOCAxMTEuODgzQzMxMC42NzQgMTg5LjM0MyAyNjQuNzI4IDI2OC45MjMgMTg3LjI2OCAyODkuNjc5QzE2NC40MzIgMjk1Ljc5OCAxNDEuNDQxIDI5Ni4xMjcgMTE5Ljc3OCAyOTEuNTM1TDExNi4xOTMgMjkwLjc3NUwxMTUuMTIzIDI5NC4yNzlMMTAzLjMyNiAzMzIuOTE1QzEwMS4xMjYgMzM5LjY5MiA5OS4xMzEyIDM0My42OTQgOTYuMTc3IDM0Ni41NzVDOTMuMjI3NyAzNDkuNDUxIDg4Ljg5NjYgMzUxLjYxOSA4MS4xMjM3IDM1My43MDJDNjcuMjM1MiAzNTcuNDIzIDUyLjkxMyAzNDkuMTUzIDQ5LjE5MTYgMzM1LjI2NUw5LjQ3MTcyIDE4Ny4wMjhDLTExLjI4MzUgMTA5LjU2OCAzNC42NjI1IDI5Ljk4NzMgMTEyLjEyMiA5LjIzMjAxWiIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXJfNDAwMDU3ODdfMzcpIiBzdHJva2Utd2lkdGg9IjgiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80MDAwNTc4N18zNyIgeDE9IjM5LjcxMTMiIHkxPSIzNDEuMDIzIiB4Mj0iMjI0Ljk2IiB5Mj0iMjAuOTY3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC40IiBzdG9wLWNvbG9yPSIjRkNGQkY5Ii8+CjxzdG9wIG9mZnNldD0iMC45IiBzdG9wLWNvbG9yPSIjRjZGMUVBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y0RUVFNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
      , Cr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcwMjkgMEgyLjM0MDU4QzEuMDUwMzQgMCAwIDEuMDY1MDQgMCAyLjM3NVYxOC4zNzI5QzAgMTguNTg5NyAwLjExNjU5IDE4Ljc4OTYgMC4zMDM5ODMgMTguODkzOUMwLjQ5MTQxMiAxOC45OTcxIDAuNzE4NzA0IDE4Ljk4ODkgMC44OTkzNjggMTguODc0Mkw3LjAyMTc0IDE0LjkyMTdMMTMuMTQzOCAxOC44NzM4QzEzLjIzODkgMTguOTcwMyAxMy4zNDg2IDE5IDEzLjQ1ODMgMTlDMTMuNTU1NSAxOSAxMy42NTE1IDE4Ljk3NTYgMTMuNzM5NSAxOC45MjY5QzEzLjkyNjQgMTguODIxOSAxNC4wNDM1IDE4LjYyMTUgMTQuMDQzNSAxOC4zNzI5VjIuMzc1QzE0LjA0MzUgMS4wNjUwNCAxMi45OTM5IDAgMTEuNzAyOSAwWk0xMi44NzMyIDE3LjMyNjRMNy4zMzYyNiAxMy43NTA1QzcuMjA4MjUgMTMuNjg1OSA3LjEzMTQ1IDEzLjY1NjIgNy4wMjE3NCAxMy42NTYyQzYuOTEyMDIgMTMuNjU2MiA2LjgwMzQ0IDEzLjY4NyA2LjcwNzQ0IDEzLjc0OUwxLjE3MDI5IDE3LjMyNjRWMi4zNzVDMS4xNzAyOSAxLjcyMDM5IDEuNjk0NzMgMS4xODc1IDIuMzQwNTggMS4xODc1SDExLjcwMjlDMTIuMzQ4OCAxLjE4NzUgMTIuODczMiAxLjcyMDM5IDEyLjg3MzIgMi4zNzVWMTcuMzI2NFoiIGZpbGw9IiM2Yzc1N2QiLz4KPC9zdmc+Cg=="
      , Lr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcwMjkgMEgyLjM0MDU4QzEuMDUwMzQgMCAwIDEuMDY1MDQgMCAyLjM3NVYxOC4zNzI5QzAgMTguNTg5NyAwLjExNjU5IDE4Ljc4OTYgMC4zMDM5ODMgMTguODkzOUMwLjQ5MTQxMiAxOC45OTcxIDAuNzE4NzA0IDE4Ljk4ODkgMC44OTkzNjggMTguODc0Mkw3LjAyMTc0IDE0LjkyMTdMMTMuMTQzOCAxOC44NzM4QzEzLjIzODkgMTguOTcwMyAxMy4zNDg2IDE5IDEzLjQ1ODMgMTlDMTMuNTU1NSAxOSAxMy42NTE1IDE4Ljk3NTYgMTMuNzM5NSAxOC45MjY5QzEzLjkyNjQgMTguODIxOSAxNC4wNDM1IDE4LjYyMTUgMTQuMDQzNSAxOC4zNzI5VjIuMzc1QzE0LjA0MzUgMS4wNjUwNCAxMi45OTM5IDAgMTEuNzAyOSAwWk0xMi44NzMyIDE3LjMyNjRMNy4zMzYyNiAxMy43NTA1QzcuMjA4MjUgMTMuNjg1OSA3LjEzMTQ1IDEzLjY1NjIgNy4wMjE3NCAxMy42NTYyQzYuOTEyMDIgMTMuNjU2MiA2LjgwMzQ0IDEzLjY4NyA2LjcwNzQ0IDEzLjc0OUwxLjE3MDI5IDE3LjMyNjRWMi4zNzVDMS4xNzAyOSAxLjcyMDM5IDEuNjk0NzMgMS4xODc1IDIuMzQwNTggMS4xODc1SDExLjcwMjlDMTIuMzQ4OCAxLjE4NzUgMTIuODczMiAxLjcyMDM5IDEyLjg3MzIgMi4zNzVWMTcuMzI2NFoiIGZpbGw9IiNGNjhEM0QiLz4KPHBhdGggZD0iTTAuNSAxOFYyTDEuNSAwLjVIMTIuNUwxMy41IDJWMTguNUw3IDE0LjVMMC41IDE4WiIgZmlsbD0iI0Y2OEQzRCIvPgo8L3N2Zz4K"
      , wt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDMyMCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMTE5Ljg4OSAyNzEuMzI4TDEyMS42NDUgMjY4LjM5NEwxMzEuNjgyIDI1MS45NzFMMTQzLjU2IDIzMi42MTRDMTQ3LjA3MyAyMjYuODMzIDE0NS4yMzMgMjE5LjI5MSAxMzkuNDYxIDIxNS42ODlDMTMyLjAxNyAyMTEuMDc5IDEyNi40OTYgMjA0LjI5MiAxMjMuNDg1IDE5Ni41ODNDMTIwLjQ3NCAxODguNzkxIDExOS44ODkgMTgwLjA3NiAxMjIuMjMxIDE3MS42MTNDMTI0LjU3MyAxNjMuMTUgMTI5LjU5MiAxNTYuMDI3IDEzNi4yODMgMTUxQzE0Mi44OTEgMTQ1Ljk3MiAxNTEuMTcyIDE0My4wNCAxNTkuODcxIDE0My4wNEMxNjguNTcgMTQzLjA0IDE3Ni44NTEgMTQ1Ljk3MiAxODMuNDU5IDE1MUMxOTAuMDY3IDE1Ni4wMjcgMTk1LjA4NSAxNjMuMTUgMTk3LjUxMSAxNzEuNjEzQzE5OS44NTMgMTgwLjA3NiAxOTkuMzUxIDE4OC43OTEgMTk2LjI1NyAxOTYuNTgzQzE5My4yNDUgMjA0LjM3NyAxODcuNzI1IDIxMS4xNjQgMTgwLjI4MSAyMTUuNjg5QzE3NC41MDkgMjE5LjIwOCAxNzIuNjY4IDIyNi43NDkgMTc2LjE4MSAyMzIuNjE0TDE5NC40MTYgMjYyLjQ0NUwxOTkuOTM3IDI3MS40MTFDMTkzLjk5OCAyNzQuMDkyIDE4Ny44OTIgMjc2LjEwMyAxODEuNjE5IDI3Ny41MjhDMTc0LjUwOSAyNzkuMTIgMTY3LjE0OCAyNzkuNjIzIDE1OS44NzEgMjc5LjYyM0MxNTkuMjAyIDI3OS42MjMgMTU4LjQ0OSAyNzkuNjIzIDE1Ny43OCAyNzkuNjIzQzE0NC42NDcgMjc5LjYyMyAxMzEuNzY2IDI3Ni43NzQgMTE5LjgwNSAyNzEuMjQzTTgxLjgzIDEyNC4wMTlDOTQuMTI1OCAxMDcuNTEgMTExLjUyNCA5NC45NDIxIDEzMi4xODQgODguODI0NkMxNTIuODQ1IDgyLjcwOCAxNzQuMzQxIDgzLjcxMzYgMTkzLjU4IDkwLjgzNTdDMjEyLjgxOCA5Ny45NTg3IDIyOS43OTggMTExLjExNCAyNDEuNTkyIDEyOS4yMTNDMjUzLjM4NiAxNDcuMzEzIDI1OC40ODkgMTY4LjI2MSAyNTcuMTUgMTg4Ljc5MUMyNTUuODEyIDIwOS4zMiAyNDguMTE2IDIyOS40MzEgMjM0LjE0OCAyNDUuODU0QzIzMC4wNDkgMjUwLjYzMSAyMjUuNjE2IDI1NC45MDQgMjIwLjkzMiAyNTguNzU4TDIxNS40MTEgMjQ5Ljc5M0wyMDMuMDMxIDIyOS41MTRDMjEwLjIyNSAyMjIuODk1IDIxNS43NDYgMjE0Ljc2NiAyMTkuMjU5IDIwNS44MDFDMjI0LjE5NCAxOTMuMTQ4IDIyNS4xMTQgMTc4Ljk4NyAyMjEuMjY2IDE2NS4yNDVDMjE3LjQxOSAxNTEuNTAyIDIwOS4yMjEgMTM5Ljg1NSAxOTguNDMxIDEzMS42NDNDMTg3LjY0MSAxMjMuNDMyIDE3NC4yNTggMTE4LjczOSAxNjAuMDM4IDExOC43MzlDMTQ1LjgxOCAxMTguNzM5IDEzMi40MzYgMTIzLjUxNiAxMjEuNjQ1IDEzMS42NDNDMTEwLjg1NSAxMzkuODU1IDEwMi42NTggMTUxLjQxOSA5OC44MDk5IDE2NS4yNDVDOTQuOTYyMyAxNzguOTg3IDk1Ljg4MjQgMTkzLjE0OCAxMDAuODE3IDIwNS44MDFDMTA0LjMzIDIxNC42ODMgMTA5Ljc2NyAyMjIuODk1IDExNy4wNDUgMjI5LjUxNEw3MC40NTQzIDMwNS42ODNDNjkuOTUyNCAzMDYuNTIxIDY5LjE5OTYgMzA3LjEwOCA2OC40NDY4IDMwNy40NDNDNjcuNjEwMyAzMDcuNzc4IDY2LjY5MDMgMzA3Ljc3OCA2NS43NzAyIDMwNy41MjZDNjQuODUwMSAzMDcuMjc1IDY0LjA5NzIgMzA2Ljc3MiA2My41OTU0IDMwNi4xMDJDNjMuMDkzNSAzMDUuNDMyIDYyLjg0MjYgMzA0LjUxIDYyLjg0MjYgMzAzLjUwNFYxODIuNTlDNjIuODQyNiAxNjEuMDU1IDY5Ljk1MjQgMTQwLjY5MyA4Mi4yNDgzIDEyNC4xODZNMTI1LjI0MiA2NS4xOTUzQzk5LjMxMTggNzIuOTA0NCA3Ny40ODA1IDg4LjY1NzEgNjIuMTczNCAxMDkuMjcxQzQ2Ljg2NjMgMTI5LjggMzggMTU1LjI3MyAzOCAxODIuMzM4VjMwMy4yNTNDMzggMzA5LjcwNSA0MC4wOTEyIDMxNS43MzggNDMuNzcxNSAzMjAuNTk4QzQ3LjQ1MTkgMzI1LjQ1OCA1Mi43MjE1IDMyOS4xNDUgNTguOTExMyAzMzAuOTA1QzY1LjEwMSAzMzIuNjY1IDcxLjQ1OCAzMzIuMjQ1IDc3LjE0NTkgMzMwLjA2N0M4Mi44MzM4IDMyNy44MDUgODcuNzY4OCAzMjMuNzgyIDkxLjE5ODIgMzE4LjI1Mkw5NC4yOTMxIDMxMy4yMjRMMTA3LjAwNyAyOTIuMzZDMTIzLjU2OSAzMDAuMzIgMTQxLjYzNiAzMDQuNTEgMTYwLjAzOCAzMDQuNDI2QzE2MC41NCAzMDQuNDI2IDE2My4zODQgMzA0LjQyNiAxNjMuOTY5IDMwNC40MjZDMTcxLjc0OSAzMDQuMTc0IDE3OS41MjcgMzAzLjE2OSAxODcuMTM5IDMwMS40MUMyMTIuMTQ5IDI5NS43MTEgMjM1LjQwMiAyODIuMDUzIDI1Mi44ODQgMjYxLjQ0QzI3MC40NSAyNDAuODI2IDI4MC4xNTMgMjE1LjY4OSAyODEuNzQxIDE5MC4wNDdDMjgzLjQxNCAxNjQuNDA3IDI3Ni45NzQgMTM4LjI2MyAyNjIuMjUyIDExNS41NTVDMjQ3LjUzMSA5Mi44NDY4IDIyNi4yMDEgNzYuMzM5NiAyMDIuMTEyIDY3LjU0MTVDMTg4LjcyOCA2Mi41OTcyIDE3NC41MDkgNjAgMTYwLjAzOCA2MEMxNDUuNTY4IDYwIDEzNi43ODQgNjEuNjc1OSAxMjUuMzI1IDY1LjAyNzciIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl83MjlfMikiLz4KCTxkZWZzPgoJCTxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl83MjlfMiIgeDE9IjMyLjU2MzEiIHkxPSIzMDkuOTU2IiB4Mj0iMjQ2LjU3MSIgeTI9Ijk2LjMyNzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjQiIHN0b3AtY29sb3I9IiNGQ0ZCRjkiLz4KCQkJPHN0b3Agb2Zmc2V0PSIwLjkiIHN0b3AtY29sb3I9IiNGNkYxRUEiLz4KCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjRFRUU1Ii8+CgkJPC9saW5lYXJHcmFkaWVudD4KCTwvZGVmcz4KPC9zdmc+Cg=="
      , vr = `.v10 .feed-card{background-color:var(--card-bg-1);margin:16px;border-radius:16px}.v10 .feed-card .block-info-user{display:flex;justify-content:space-between;margin-bottom:16px}.v10 .feed-card .block-info-user .post-blocked{display:flex}.v10 .feed-card .block-info-user .block-user-info{margin-left:18px;margin-top:35px}.v10 .feed-card .block-info-user .block-user-info .user-name{color:var(--el-color-black)}.v10 .feed-card .block-info-user .block-user-info .profile-name{color:var(--color-privacy-3)}.v10 .feed-card .block-info-user .block-options{margin-right:16px;margin-top:25px}.v10 .feed-card .icon-media-locked{background-color:var(--color-bg-light);width:100%!important;height:660px!important}.v10 .feed-card .post-details{color:#67748e}@media (max-width: 500px){.v10 .feed-card .icon-media-locked{height:450px!important}}.v10 .tab-menu{justify-content:center;padding-right:16px!important;padding-left:16px!important}.block-actions{display:flex;justify-content:space-between;margin-bottom:16px}.v10 .block-actions{padding:16px}.videopostagem{text-align:center;overflow:hidden;position:relative;height:unset;width:100%}.videopostagem.fullwidth img{object-fit:cover;max-height:calc(100vh - 120px);width:100%;display:inline-block;max-width:unset;height:calc(40vh - 120px)!important}@media (max-width: 750px){.videopostagem.fullwidth.grid img{height:calc(27vh - 120px)!important}}.post-details{position:absolute;top:60%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:8px}.post-details svg{height:50px}.board-block{padding:0 16px}.board-block .board-block-content{color:var(--post-lock-icon-color);background-color:var(--avatar-border-color)!important;display:flex;flex-wrap:wrap;justify-content:center;gap:4px}.grid svg{height:20%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
`
      , kr = {
        inject: ["isSmallDevice", "appSettings", "$http", "token"],
        emits: ["open-payment-modal", "open-auth"],
        components: {
            TabMenuContent: Dt,
            Avatar: ge,
            IconToggle: xt,
            StatDisplay: je,
            SimplifiedPersonalData: ve
        },
        props: {
            user: {
                type: Object,
                required: !0
            },
            rulesShowContent: {
                type: Boolean,
                default: !0
            },
            showFollowers: {
                type: Boolean,
                default: !1
            },
            v10: {
                type: Boolean,
                default: !1
            },
            view: String
        },
        setup() {
            const {t} = O();
            return {
                t,
                faEllipsisV: Er,
                faBadgeCheck: he,
                faCircleDollar: Te,
                faLockKeyhole: Ui,
                faIcons: Vi,
                faImage: pe,
                faVideo: fe,
                faHeart: ue,
                faUser: me,
                commentIcon: wr,
                commentIconBg: Tr,
                heartIcon: Sr,
                heartIconBg: Ir,
                logoIcon: Ar,
                markIcon: Cr,
                markIconBg: Lr,
                regularIcons: _
            }
        },
        computed: {
            mediaList() {
                const t = this.user.stats || {}
                  , e = [];
                return t.images && e.push({
                    icon: pe,
                    count: this.formatCount(t.images),
                    iconSize: "17px"
                }),
                t.videos && e.push({
                    icon: this.v10 ? this.regularIcons.fak["media-play"] : fe,
                    count: this.formatCount(t.videos),
                    iconSize: "17px"
                }),
                t.likes && e.push({
                    icon: ue,
                    count: this.formatCount(t.likes),
                    iconSize: "17px"
                }),
                this.showFollowers && t.followers && e.push({
                    icon: me,
                    count: this.formatCount(t.followers),
                    iconSize: "15px"
                }),
                e
            },
            needLogin() {
                return this.view === W.CHECKOUT
            }
        },
        data() {
            return {
                showPost: !0,
                activeHeart: !1,
                activeComment: !1,
                activeMark: !1,
                showSimplifiedPersonalDialog: !1,
                screenBreakpointSmallGrid: 1200,
                isSmallGrid: window.innerWidth < this.screenBreakpointSmallGrid
            }
        },
        mounted() {
            this.checkScreenSize(),
            window.addEventListener("resize", this.checkScreenSize)
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.checkScreenSize)
        },
        methods: {
            checkScreenSize() {
                this.isSmallGrid = window.innerWidth < this.screenBreakpointSmallGrid
            },
            getDisplayProfileName() {
                var e;
                return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[2-9a-bA-BeE][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test((e = this.user) == null ? void 0 : e.profileName) ? null : `@${this.user.profileName}`
            },
            activePost(t) {
                this.showPost = t === "tab1"
            },
            formatCount(t) {
                return t >= 1e6 ? (t / 1e6).toFixed(1).replace(".0", "") + "M" : t >= 1e3 ? (t / 1e3).toFixed(1).replace(".0", "") + "K" : t.toString()
            },
            async handleClick() {
                var t, e, i;
                this.needLogin ? this.$emit("open-auth", "1") : (t = this.user) != null && t.isFreeCreator ? await this.verifyUser() ? await this.followCreator() : this.showSimplifiedPersonalDialog = !0 : this.rulesShowContent && this.$emit("open-payment-modal", {
                    clientId: this.user.clientId,
                    value: this.user.bumePrice ? this.user.bumePrice : (i = (e = this.user) == null ? void 0 : e.prices) == null ? void 0 : i.Monthly,
                    profileName: this.user.profileName,
                    cover: this.user.cover,
                    avatar: this.user.avatar,
                    currencyCode: this.currencyCode,
                    currencySymbol: this.user.prices.CurrencySymbol,
                    recurrence: G[0].TYPE,
                    spreadFee: this.user.prices.SpreadFee,
                    nickName: this.user.name
                })
            },
            async verifyUser() {
                var t;
                try {
                    const e = C(this.appSettings.ENDPOINT_API_PROFILE, "/Users")
                      , i = await this.$http.get(e);
                    return i != null && i.data ? !!((t = i.data) != null && t.document) : !1
                } catch (e) {
                    console.error(e)
                }
            },
            async followCreator() {
                var t;
                try {
                    this.loading = !0;
                    const e = C(this.appSettings.ENDPOINT_API_CHECKOUT, "/follow-profile");
                    await this.$http.post(e, {
                        userId: (t = this.user) == null ? void 0 : t.userId
                    })
                } catch (e) {
                    console.error(e)
                } finally {
                    this.loading = !1,
                    window.location.reload()
                }
            }
        }
    }
      , jr = {
        class: "px-2 tab-menu"
    }
      , Or = {
        key: 0,
        class: "d-flex align-items-center justify-content-between mt-1 mb-2 px-2"
    }
      , Pr = {
        class: "d-flex"
    }
      , Vr = {
        class: "user-info",
        style: {
            "padding-top": "21px",
            "padding-left": "4px"
        }
    }
      , Br = {
        class: "user-name"
    }
      , Rr = {
        style: {
            "font-size": "var(--el-font-size-medium) !important"
        }
    }
      , Zr = {
        class: "profile-name"
    }
      , _r = {
        key: 0,
        style: {
            "font-size": "var(--el-font-size-medium) !important"
        }
    }
      , Ur = {
        class: "d-flex justify-content-end align-items-center"
    }
      , Fr = {
        key: 1,
        class: "videopostagem fullwidth mb-2"
    }
      , Qr = o.createElementVNode("img", {
        src: wt,
        alt: "bg-locked",
        class: "w-100",
        style: {
            "background-color": "var(--color-bg-light)"
        }
    }, null, -1)
      , Hr = {
        class: "post-details"
    }
      , Yr = {
        class: "count-list"
    }
      , Wr = {
        key: 2,
        class: "d-flex justify-content-between mb-4 mt-2 px-2"
    }
      , Gr = {
        class: "d-flex align-items-center"
    }
      , qr = {
        class: "d-flex align-items-center",
        style: {
            "margin-left": "10px"
        }
    }
      , Kr = {
        style: {
            "margin-left": "5px"
        }
    }
      , Jr = {
        key: 3,
        class: "d-flex flex-wrap justify-content-center gap-1 mw-100"
    }
      , Xr = o.createElementVNode("img", {
        src: wt,
        alt: "bg-locked",
        class: "w-100",
        style: {
            "background-color": "var(--color-bg-light)"
        }
    }, null, -1)
      , $r = {
        key: 4,
        class: "feed-card"
    }
      , ea = {
        class: "block-info-user"
    }
      , ta = {
        class: "post-blocked"
    }
      , ia = {
        class: "block-user-info"
    }
      , oa = {
        class: "text-sm font-medium user-name"
    }
      , na = {
        style: {
            "font-size": "var(--el-font-size-medium) !important"
        }
    }
      , sa = {
        class: "text-xs font-normal profile-name"
    }
      , ra = {
        key: 0,
        style: {
            "font-size": "var(--el-font-size-medium) !important"
        }
    }
      , aa = {
        class: "block-options"
    }
      , la = {
        class: "videopostagem fullwidth mb-2"
    }
      , ca = ["src"]
      , da = {
        class: "post-details"
    }
      , ma = {
        class: "count-list"
    }
      , pa = {
        class: "block-actions"
    }
      , ua = {
        class: "d-flex align-items-center"
    }
      , ha = {
        class: "d-flex align-items-center",
        style: {
            "margin-left": "10px"
        }
    }
      , fa = o.createElementVNode("span", {
        style: {
            "margin-left": "5px"
        }
    }, null, -1)
      , ga = {
        key: 5,
        class: "board-block"
    }
      , ya = {
        class: "board-block-content",
        style: {
            "background-color": "#fff"
        }
    }
      , Ma = ["src"];
    function Na(t, e, i, n, s, r) {
        var p;
        const a = o.resolveComponent("TabMenuContent")
          , l = o.resolveComponent("avatar")
          , c = o.resolveComponent("font-awesome-icon")
          , d = o.resolveComponent("stat-display")
          , m = o.resolveComponent("IconToggle")
          , g = o.resolveComponent("SimplifiedPersonalData");
        return o.openBlock(),
        o.createElementBlock(o.Fragment, null, [o.createElementVNode("div", jr, [o.createVNode(a, {
            view: i.view,
            user: i.user,
            v10: i.v10,
            onShowPosts: r.activePost
        }, null, 8, ["view", "user", "v10", "onShowPosts"])]), s.showPost && !i.v10 ? (o.openBlock(),
        o.createElementBlock("div", Or, [o.createElementVNode("div", Pr, [o.createVNode(l, {
            "expand-image-functionality": !0,
            "expand-image-date-functionality": i.user.expandImageDateFunctionality,
            isPost: !0,
            image: i.user.avatar,
            "user-name": i.user.name
        }, null, 8, ["expand-image-date-functionality", "image", "user-name"]), o.createElementVNode("div", Vr, [o.createElementVNode("div", Br, [o.createElementVNode("span", Rr, o.toDisplayString(i.user.name), 1), i.user.verified ? (o.openBlock(),
        o.createBlock(c, {
            key: 0,
            style: {
                "margin-left": "2px"
            },
            icon: n.faBadgeCheck
        }, null, 8, ["icon"])) : o.createCommentVNode("", !0)]), o.createElementVNode("div", Zr, [i.user.profileName ? (o.openBlock(),
        o.createElementBlock("span", _r, o.toDisplayString(r.getDisplayProfileName()), 1)) : o.createCommentVNode("", !0)])])]), o.createElementVNode("div", Ur, [o.createVNode(c, {
            style: {
                "font-size": "1.2rem"
            },
            icon: n.faEllipsisV
        }, null, 8, ["icon"])])])) : o.createCommentVNode("", !0), s.showPost && !i.v10 ? (o.openBlock(),
        o.createElementBlock("div", Fr, [Qr, o.createElementVNode("div", Hr, [o.createVNode(c, {
            class: "cursor-pointer",
            icon: n.faLockKeyhole,
            onClick: r.handleClick
        }, null, 8, ["icon", "onClick"]), o.createElementVNode("div", Yr, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(r.mediaList, (h, M) => (o.openBlock(),
        o.createBlock(d, {
            class: "stat-display",
            key: M,
            icon: h.icon,
            count: h.count,
            "icon-size": h.iconSize
        }, null, 8, ["icon", "count", "icon-size"]))), 128))])])])) : o.createCommentVNode("", !0), s.showPost && !i.v10 ? (o.openBlock(),
        o.createElementBlock("div", Wr, [o.createElementVNode("div", Gr, [o.createVNode(m, {
            style: {
                width: "22px",
                height: "22px"
            },
            active: s.activeHeart,
            icon: n.heartIcon,
            iconBg: n.heartIconBg,
            onClick: e[0] || (e[0] = h => s.activeHeart = !s.activeHeart)
        }, null, 8, ["active", "icon", "iconBg"]), o.createVNode(m, {
            style: {
                "margin-left": "10px",
                width: "22px",
                height: "22px"
            },
            active: s.activeComment,
            icon: n.commentIcon,
            iconBg: n.commentIconBg,
            onClick: e[1] || (e[1] = h => s.activeComment = !s.activeComment)
        }, null, 8, ["active", "icon", "iconBg"]), o.createElementVNode("div", qr, [o.createVNode(c, {
            style: {
                width: "22px",
                height: "22px"
            },
            icon: n.faCircleDollar
        }, null, 8, ["icon"]), o.createElementVNode("span", Kr, o.toDisplayString(n.t("SEND_MIMO")), 1)])]), o.createElementVNode("div", null, [o.createVNode(m, {
            style: {
                width: "17px",
                height: "20px"
            },
            active: s.activeMark,
            icon: n.markIcon,
            iconBg: n.markIconBg,
            onClick: e[2] || (e[2] = h => s.activeMark = !s.activeMark)
        }, null, 8, ["active", "icon", "iconBg"])])])) : o.createCommentVNode("", !0), !s.showPost && !i.v10 ? (o.openBlock(),
        o.createElementBlock("div", Jr, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(s.isSmallGrid ? 6 : 8, h => (o.openBlock(),
        o.createElementBlock("div", {
            key: h,
            class: "videopostagem fullwidth grid",
            style: {
                flex: "1 1 calc(33.33% - 3px)",
                "max-width": "260px",
                "aspect-ratio": "1 / 1"
            }
        }, [o.createVNode(c, {
            class: "cursor-pointer",
            icon: n.faLockKeyhole,
            onClick: r.handleClick
        }, null, 8, ["icon", "onClick"]), Xr]))), 128))])) : o.createCommentVNode("", !0), s.showPost && i.v10 ? (o.openBlock(),
        o.createElementBlock("div", $r, [o.createElementVNode("div", ea, [o.createElementVNode("div", ta, [o.createVNode(l, {
            "expand-image-functionality": !0,
            "expand-image-date-functionality": i.user.expandImageDateFunctionality,
            isPost: !0,
            image: i.user.avatar,
            "user-name": i.user.name,
            style: {
                bottom: "16px",
                left: "16px"
            }
        }, null, 8, ["expand-image-date-functionality", "image", "user-name"]), o.createElementVNode("div", ia, [o.createElementVNode("div", oa, [o.createElementVNode("span", na, o.toDisplayString(i.user.name), 1), i.user.verified ? (o.openBlock(),
        o.createBlock(c, {
            key: 0,
            style: {
                "margin-left": "2px"
            },
            icon: n.faBadgeCheck
        }, null, 8, ["icon"])) : o.createCommentVNode("", !0)]), o.createElementVNode("div", sa, [i.user.profileName ? (o.openBlock(),
        o.createElementBlock("span", ra, o.toDisplayString(r.getDisplayProfileName()), 1)) : o.createCommentVNode("", !0)])])]), o.createElementVNode("div", aa, [o.createVNode(c, {
            style: {
                "font-size": "1.2rem"
            },
            icon: n.faEllipsisV
        }, null, 8, ["icon"])])]), o.createElementVNode("div", la, [o.createElementVNode("img", {
            class: "icon-media-locked",
            src: n.logoIcon,
            alt: "logo-privacy"
        }, null, 8, ca), o.createElementVNode("div", da, [o.createVNode(c, {
            class: "cursor-pointer",
            icon: n.faLockKeyhole,
            onClick: r.handleClick
        }, null, 8, ["icon", "onClick"]), o.createElementVNode("div", ma, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(r.mediaList, (h, M) => (o.openBlock(),
        o.createBlock(d, {
            class: "stat-display",
            key: M,
            icon: h.icon,
            count: h.count,
            "icon-size": h.iconSize
        }, null, 8, ["icon", "count", "icon-size"]))), 128))])])]), o.createElementVNode("div", pa, [o.createElementVNode("div", ua, [o.createVNode(m, {
            style: {
                width: "22px",
                height: "22px"
            },
            active: s.activeHeart,
            icon: n.heartIcon,
            iconBg: n.heartIconBg,
            onClick: e[3] || (e[3] = h => s.activeHeart = !s.activeHeart)
        }, null, 8, ["active", "icon", "iconBg"]), o.createVNode(m, {
            style: {
                "margin-left": "10px",
                width: "22px",
                height: "22px"
            },
            active: s.activeComment,
            icon: n.commentIcon,
            iconBg: n.commentIconBg,
            onClick: e[4] || (e[4] = h => s.activeComment = !s.activeComment)
        }, null, 8, ["active", "icon", "iconBg"]), o.createElementVNode("div", ha, [o.createVNode(c, {
            style: {
                width: "22px",
                height: "22px",
                color: "#656565"
            },
            icon: n.faCircleDollar
        }, null, 8, ["icon"]), fa])]), o.createElementVNode("div", null, [o.createVNode(m, {
            style: {
                width: "17px",
                height: "20px"
            },
            active: s.activeMark,
            icon: n.markIcon,
            iconBg: n.markIconBg,
            onClick: e[5] || (e[5] = h => s.activeMark = !s.activeMark)
        }, null, 8, ["active", "icon", "iconBg"])])])])) : o.createCommentVNode("", !0), !s.showPost && i.v10 ? (o.openBlock(),
        o.createElementBlock("div", ga, [o.createElementVNode("div", ya, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(s.isSmallGrid ? 6 : 8, h => (o.openBlock(),
        o.createElementBlock("div", {
            key: h,
            class: "videopostagem fullwidth grid",
            style: {
                flex: "1 1 calc(33.33% - 3px)",
                "max-width": "260px",
                "aspect-ratio": "1 / 1"
            }
        }, [o.createVNode(c, {
            class: "cursor-pointer",
            icon: n.faLockKeyhole,
            onClick: r.handleClick
        }, null, 8, ["icon", "onClick"]), o.createElementVNode("img", {
            src: n.logoIcon,
            alt: "bg-locked",
            class: "w-100",
            style: {
                "background-color": "var(--color-bg-light)"
            }
        }, null, 8, Ma)]))), 128))])])) : o.createCommentVNode("", !0), o.createVNode(g, {
            "creator-id": (p = this.user) == null ? void 0 : p.clientId,
            "show-dialog": s.showSimplifiedPersonalDialog,
            onFollowCreator: e[6] || (e[6] = h => r.followCreator()),
            "onUpdate:showDialog": e[7] || (e[7] = h => s.showSimplifiedPersonalDialog = h)
        }, null, 8, ["creator-id", "show-dialog"])], 64)
    }
    const Pe = w(kr, [["render", Na], ["styles", [vr]]])
      , za = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Pe
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Cc = ""
      , ba = {
        emits: ["closeAlert"],
        components: {
            ElAlert: I.ElAlert
        },
        props: {
            type: String
        },
        methods: {
            handleClose() {
                this.$emit("closeAlert", !1)
            }
        }
    };
    function xa(t, e, i, n, s, r) {
        const a = o.resolveComponent("el-alert");
        return o.openBlock(),
        o.createBlock(a, {
            class: "pub-alert",
            "show-icon": "",
            type: i.type,
            onClose: r.handleClose
        }, {
            default: o.withCtx( () => [o.renderSlot(t.$slots, "default")]),
            _: 3
        }, 8, ["type", "onClose"])
    }
    const Tt = w(ba, [["render", xa]])
      , Da = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Tt
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Lc = "";
    function Ea(t, e=void 0) {
        var n, s, r;
        let i = "";
        if (((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 400 && ((s = t == null ? void 0 : t.response) != null && s.data)) {
            const a = (r = t == null ? void 0 : t.response) == null ? void 0 : r.data;
            typeof a == "string" ? i = a : typeof a.message == "string" && (i = a.message)
        } else
            typeof t == "string" && t.length >= 1 && (i = t);
        return i || e
    }
    const wa = `.personalData{margin-left:17px;margin-right:20px}.accept-terms-container{display:flex;margin-left:23px}.accept-terms-container .el-checkbox{margin-right:12px!important}.accept-terms-container .el-checkbox .el-checkbox__inner{margin-top:4px;height:20px!important;width:20px!important;border:2px solid var(--color-privacy-7);border-radius:3px}.accept-terms-container .el-checkbox .el-checkbox__inner:after{height:10px;width:6px;left:5px}.accept-terms-container label{display:inline-block;position:relative;font-size:var(--el-font-size-base);cursor:pointer;color:var(--color-privacy-5)}.btn-subscription{border-radius:30px!important;padding:0 25px;width:100%!important;height:60px!important;font-size:var(--el-font-size-large);font-weight:700;color:var(--el-color-white)!important;background:linear-gradient(45deg,#F58170,#F9AF77)!important}.btn-subscription:hover{color:var(--el-color-white)!important;background:linear-gradient(45deg,#FFA08A,#FFC09A)!important}.input-content{display:flex;justify-content:space-between}.input-field{width:47%;height:50px;border-radius:18px}@media (max-width: 460px){.btn-subscription{padding:0 12px}}.link{color:#f56c6c;text-decoration:underline;cursor:pointer}
`
      , Ta = {
        inject: ["locale", "appSettings", "$http"],
        emits: ["register-success", "call-recovery-password"],
        components: {
            ElButton: I.ElButton,
            ElCheckbox: I.ElCheckbox,
            AlertText: Tt,
            ElSkeleton: I.ElSkeleton,
            ElSkeletonItem: I.ElSkeletonItem
        },
        props: {
            defaultCountry: String,
            profileName: String,
            orderPayment: String
        },
        setup() {
            const {t} = O();
            return {
                t
            }
        },
        data() {
            return {
                wcPersonalData: {
                    name: "privacy-web-registration-personaldata",
                    ctx: null,
                    loaded: !1,
                    error: !1
                },
                loading: !1,
                termsAndPolicy: !1,
                recoveryPassword: "recovery-password",
                error: {
                    show: !1,
                    message: null
                }
            }
        },
        computed: {
            appSettingsEncripted() {
                return btoa(JSON.stringify(this.appSettings))
            }
        },
        mounted() {
            this.loadWebComponent()
        },
        methods: {
            async loadWebComponent() {
                try {
                    const t = await Ae.run({
                        urlBase: this.appSettings.PRIVACY_MODULES + "/webcomponents",
                        componentName: this.wcPersonalData.name
                    });
                    this.wcPersonalData.loaded = t.loaded,
                    this.wcPersonalData.error = t.error
                } catch {
                    this.wcPersonalData.error = !0
                }
            },
            openModalRecoveryPassword() {
                this.$emit("call-recovery-password", this.recoveryPassword)
            },
            async register() {
                var t, e;
                try {
                    if (this.closeAlert(),
                    this.loading = !0,
                    !this.termsAndPolicy) {
                        this.messageError(this.t("ERROR_MESSAGE.TERMS_NOT_ACCEPTED"));
                        return
                    }
                    if (!await this.$refs.wcPersonalData._proxyStore.validate()) {
                        this.messageError(this.t("ERROR_MESSAGE.REGISTER"));
                        return
                    }
                    const n = await this.$refs.wcPersonalData._proxyStore.getFormData();
                    if (!await this.validateUser(n) || !await this.sendRegisterUser(n))
                        return;
                    const a = await this.getToken(n);
                    if (!await this.$refs.wcPersonalData._proxyStore.validateAndSubmit((t = a == null ? void 0 : a.data) == null ? void 0 : t.token)) {
                        this.messageError(this.t("ERROR_MESSAGE.REGISTER"));
                        return
                    }
                    this.$emit("register-success", (e = n.personal) == null ? void 0 : e.nickName)
                } catch (i) {
                    console.error(i)
                } finally {
                    this.loading = !1
                }
            },
            async sendRegisterUser(t) {
                var e, i, n, s;
                try {
                    const r = {
                        email: (e = t == null ? void 0 : t.personal) == null ? void 0 : e.email,
                        nickName: (i = t == null ? void 0 : t.personal) == null ? void 0 : i.nickName,
                        password: (n = t == null ? void 0 : t.address) == null ? void 0 : n.password,
                        country: (s = t == null ? void 0 : t.address) == null ? void 0 : s.country,
                        locale: this.locale,
                        profileName: this.profileName,
                        orderPayment: this.orderPayment
                    }
                      , a = C(this.appSettings.ENDPOINT_API_CHECKOUT, "/register-user");
                    return await this.$http.post(a, r),
                    !0
                } catch (r) {
                    return this.messageError(Ea(r, this.t("ERROR_MESSAGE.REGISTER"))),
                    !1
                }
            },
            messageError(t) {
                this.error.message = t,
                this.error.show = !0
            },
            closeAlert() {
                this.error.message = null,
                this.error.show = !1
            },
            async getToken(t) {
                var e, i;
                try {
                    const n = {
                        Email: (e = t == null ? void 0 : t.personal) == null ? void 0 : e.email,
                        Password: (i = t == null ? void 0 : t.address) == null ? void 0 : i.password
                    }
                      , s = C(this.appSettings.ENDPOINT_API_AUTH, "/get-token");
                    return await this.$http.post(s, n)
                } catch (n) {
                    console.error(n)
                }
            },
            async validateUser(t) {
                var e, i, n, s, r, a, l;
                try {
                    const c = {
                        document: t.personal.documentID,
                        name: t.personal.fullName,
                        dateBirth: t.personal.birthDate,
                        email: t.personal.email,
                        country: t.address.country,
                        zipCode: t.address.cep
                    }
                      , d = C(this.appSettings.ENDPOINT_API_ANTI_FRAUD_SAFE_CHECK, "/api/bureauuser/validateregistrationdata")
                      , m = await this.$http.post(d, c);
                    return ((e = m == null ? void 0 : m.data) == null ? void 0 : e.statusCode) === 200
                } catch (c) {
                    return (n = (i = c == null ? void 0 : c.response) == null ? void 0 : i.data) != null && n.message && (this.t((r = (s = c == null ? void 0 : c.response) == null ? void 0 : s.data) == null ? void 0 : r.message) ? this.messageError(this.t((l = (a = c == null ? void 0 : c.response) == null ? void 0 : a.data) == null ? void 0 : l.message)) : this.messageError(this.t("ERROR_MESSAGE.EMAIL_IN_USE"))),
                    !1
                }
            }
        }
    }
      , Sa = {
        class: "personalData mt-3"
    }
      , Ia = {
        key: 0
    }
      , Aa = {
        class: "accept-terms-container mb-3"
    }
      , Ca = ["innerHTML"]
      , La = {
        key: 0
    }
      , va = {
        key: 1
    }
      , ka = {
        class: "col d-flex justify-content-center"
    }
      , ja = {
        key: 0
    }
      , Oa = {
        key: 1
    }
      , Pa = {
        class: "input-content"
    }
      , Va = {
        class: "input-content"
    }
      , Ba = {
        class: "input-content"
    }
      , Ra = {
        class: "input-content"
    };
    function Za(t, e, i, n, s, r) {
        const a = o.resolveComponent("privacy-web-registration-personaldata")
          , l = o.resolveComponent("el-checkbox")
          , c = o.resolveComponent("AlertText")
          , d = o.resolveComponent("el-button")
          , m = o.resolveComponent("el-skeleton-item")
          , g = o.resolveComponent("el-skeleton");
        return o.openBlock(),
        o.createElementBlock("div", Sa, [s.wcPersonalData.loaded ? (o.openBlock(),
        o.createElementBlock("div", Ia, [o.createVNode(a, {
            ref: "wcPersonalData",
            locale: r.locale,
            "app-settings": r.appSettingsEncripted,
            "refresh-token": !1,
            view: "personal, address",
            "default-country": i.defaultCountry,
            "disabled-fields-address": !0
        }, null, 8, ["locale", "app-settings", "default-country"]), o.createElementVNode("div", Aa, [o.createVNode(l, {
            modelValue: s.termsAndPolicy,
            "onUpdate:modelValue": e[0] || (e[0] = p => s.termsAndPolicy = p),
            id: "acceptTerms",
            size: "large"
        }, null, 8, ["modelValue"]), o.createElementVNode("label", {
            for: "acceptTerms",
            innerHTML: n.t("ACCEPT_TERMS")
        }, null, 8, Ca)]), s.error.show ? (o.openBlock(),
        o.createBlock(c, {
            key: 0,
            onCloseAlert: r.closeAlert,
            type: "error",
            class: "mb-3"
        }, {
            default: o.withCtx( () => [s.error.message.includes("ACTION_MODAL") ? (o.openBlock(),
            o.createElementBlock("span", La, [o.createTextVNode(o.toDisplayString(s.error.message.replace("ACTION_MODAL", "")) + " ", 1), o.createElementVNode("span", {
                class: "link",
                onClick: e[1] || (e[1] = (...p) => r.openModalRecoveryPassword && r.openModalRecoveryPassword(...p))
            }, o.toDisplayString(n.t("ACTION.CLICK_HERE")), 1)])) : (o.openBlock(),
            o.createElementBlock("span", va, o.toDisplayString(s.error.message), 1))]),
            _: 1
        }, 8, ["onCloseAlert"])) : o.createCommentVNode("", !0), o.createVNode(d, {
            class: "btn-subscription el-button--gradient mb-4",
            loading: s.loading,
            onClick: r.register
        }, {
            default: o.withCtx( () => [o.createElementVNode("div", ka, [s.loading ? o.createCommentVNode("", !0) : (o.openBlock(),
            o.createElementBlock("span", ja, o.toDisplayString(n.t("BUTTON_CHECKOUT")), 1))])]),
            _: 1
        }, 8, ["loading", "onClick"])])) : (o.openBlock(),
        o.createElementBlock("div", Oa, [o.createVNode(g, null, {
            template: o.withCtx( () => [o.createVNode(m, {
                variant: "text",
                class: "mb-2",
                style: {
                    width: "100%",
                    height: "40px",
                    "border-radius": "18px"
                }
            }), o.createElementVNode("div", Pa, [o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field"
            }), o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field"
            })]), o.createElementVNode("div", Va, [o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field"
            }), o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field"
            })]), o.createElementVNode("div", Ba, [o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field"
            }), o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field"
            })]), o.createElementVNode("div", Ra, [o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field",
                style: {
                    width: "67%"
                }
            }), o.createVNode(m, {
                variant: "text",
                class: "mb-2 input-field",
                style: {
                    width: "27%"
                }
            })]), o.createVNode(m, {
                variant: "text",
                class: "mb-2",
                style: {
                    width: "100%",
                    height: "40px",
                    "border-radius": "18px"
                }
            }), o.createVNode(m, {
                variant: "text",
                class: "mb-2",
                style: {
                    width: "100%",
                    height: "30px"
                }
            }), o.createVNode(m, {
                variant: "text",
                class: "mb-3",
                style: {
                    width: "100%",
                    height: "30px",
                    "border-radius": "18px"
                }
            })]),
            _: 1
        })]))])
    }
    const St = w(Ta, [["render", Za], ["styles", [wa]]])
      , _a = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: St
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Ua = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDAuNzk4IDZIMTIwLjQzNUw3Ny41NDU0IDU1LjAwODNMMTI4IDEyMS43MDZIODguNTA0MUw1Ny41NDcxIDgxLjI2NDdMMjIuMTY3OCAxMjEuNzA2SDIuNTAzMjZMNDguMzY4NSA2OS4yNzY4TDAgNkg0MC40OTcyTDY4LjQ1MDIgNDIuOTY0OEwxMDAuNzk4IDZaTTkzLjkgMTA5Ljk2OUgxMDQuNzc1TDM0LjU3MjggMTcuMTI1NkgyMi44OTA5TDkzLjkgMTA5Ljk2OVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
      , Fa = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYuNDQ4IDExNy42MjdIMzUuNzE3NEMzMS45MzYyIDExNy42MjcgMjguMzU5MyAxMTYuOTExIDI1LjAzOCAxMTUuNDgxQzIxLjcxNjYgMTE0LjA1IDE4LjgwNCAxMTIuMTU5IDE2LjM1MTMgMTA5LjcwN0MxMy44OTg2IDEwNy4zMDUgMTEuOTA1OCAxMDQuNDQ0IDEwLjQyNCAxMDEuMTczQzguOTQyMTQgOTcuOTAzIDguMjI2NzcgOTQuMzc3MyA4LjIyNjc3IDkwLjU5NlY0NS42ODA5SDBWMjYuMDU5M0g0My43OTA5VjQ1LjY4MDlIMzAuMzUyMlY5MC41OTZDMzAuMzUyMiA5Mi4xOCAzMC44NjMxIDkzLjUwODYgMzEuOTM2MiA5NC41MzA2QzMzLjAwOTMgOTUuNjAzNiAzNC4yMzU2IDk2LjExNDYgMzUuNzE3NCA5Ni4xMTQ2SDQ2LjQ0OFYxMTcuNjI3WiIgZmlsbD0iI0RGNjQyMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg4LjI5NyAxMDEuMDJDOTIuNzQyNSAxMDEuMzI3IDk2LjMxOTQgMTAwLjY2MiA5OS4xMjk4IDk5LjAyNzJDMTAxLjk0IDk3LjM5MiAxMDMuNzI5IDk1LjUwMTQgMTA0LjU5NyA5My4zNTUzQzEwNS40NjYgOTEuMjA5MiAxMDUuMjEgODkuMDYzMSAxMDMuODgyIDg2Ljk2ODFDMTAyLjU1MyA4NC44NzMgOTkuOTQ3MyA4My4zOTEyIDk2LjA2MzkgODIuNTIyNUw3Ni44IDc5LjY2MTFDNjkuMTg2NCA3OC40ODU4IDYzLjEwNTcgNzUuNjI0MyA1OC40NTU4IDcwLjk3NDRDNTMuODA1OSA2Ni4zMjQ1IDUxLjUwNjUgNjAuMDM5NSA1MS41MDY1IDUyLjE3MDRDNTEuNTA2NSA0Ny44MjcxIDUyLjQyNjMgNDMuODkyNSA1NC4yNjU4IDQwLjMxNTdDNTYuMTA1MyAzNi43Mzg4IDU4LjY2MDIgMzMuNjcyOSA2MS44Nzk0IDMxLjE2OTFDNjUuMDk4NSAyOC42MTQyIDY4Ljk4MiAyNi42NzI1IDczLjQ3ODYgMjUuMzQ0Qzc4LjAyNjMgMjMuOTY0MyA4Mi45ODI4IDIzLjMgODguMzQ4MSAyMy4zQzk1LjI5NzQgMjMuMyAxMDEuODg5IDI0LjI3MDkgMTA4LjEyMyAyNi4xNjE1QzExNC4zNTcgMjguMDUyMiAxMTkuOTI3IDMwLjcwOTMgMTI0Ljg4MyAzNC4wODE3TDExNS4wNzIgNTAuMzgyQzExMi4wMDYgNDcuOTgwNCAxMDguMDIxIDQ2LjAzODYgMTAzLjExNSA0NC43MTAxQzk4LjIxIDQzLjMzMDQgOTMuMzA0NiA0Mi42NjYyIDg4LjM0ODEgNDIuNjY2MkM4My4zOTE2IDQyLjY2NjIgNzkuODY1OSA0My40MzI2IDc3LjQxMzIgNDQuOTY1NkM3NS4wMTE1IDQ2LjQ5ODUgNzMuNTgwOCA0OC4yMzU4IDczLjIyMzEgNTAuMTc3NkM3Mi44NjU0IDUyLjExOTMgNzMuMzc2NCA1My45NTg4IDc0LjgwNzEgNTUuNjk2MUM3Ni4yMzc5IDU3LjQzMzUgNzguMzg0IDU4LjUwNjUgODEuMTk0NCA1OC45MTUzTDEwMC44MTYgNjEuOTMwMUMxMDMuOTg0IDYyLjQ0MTEgMTA3LjE1MiA2My40MTE5IDExMC4zNzEgNjQuNzkxNkMxMTMuNTkgNjYuMTcxMiAxMTYuNTAzIDY4LjAxMDcgMTE5LjE2IDcwLjQxMjNDMTIxLjgxNyA3Mi43NjI4IDEyMy45MTIgNzUuNzI2NSAxMjUuNTQ3IDc5LjIwMTJDMTI3LjE4MyA4Mi42NzU4IDEyOCA4Ni44MTQ4IDEyOCA5MS41MTU4QzEyOCA5Ni4yMTY4IDEyNi45MjcgMTAwLjEgMTI0LjgzMiAxMDMuNjc3QzEyMi43MzcgMTA3LjI1NCAxMTkuODc2IDExMC4yNjkgMTE2LjE5NiAxMTIuNzczQzExMi41NjkgMTE1LjIyNSAxMDguMzI3IDExNy4xNjcgMTAzLjUyNCAxMTguNDQ0Qzk4LjcyMSAxMTkuNzczIDkzLjY2MjMgMTIwLjQzNyA4OC4yNDU5IDEyMC40MzdDODAuNjMyMyAxMjAuNDM3IDczLjU4MDggMTE5LjQ2NiA2Ni45ODkyIDExNy41NzZDNjAuMzk3NSAxMTUuNjg1IDU0LjU3MjQgMTEzLjAyOCA0OS41MTM3IDEwOS42NTZMNjAuNDQ4NiA5Mi40MzU1QzYzLjgyMTEgOTQuODM3MSA2Ny45MDg5IDk2LjgzIDcyLjcxMjEgOTguMzYyOUM3Ny41MTUzIDk5Ljg5NTggODIuNjc2MiAxMDAuODE2IDg4LjI5NyAxMDEuMTIyVjEwMS4wMloiIGZpbGw9IiNERjY0MjEiLz4KPHBhdGggZD0iTTMwLjg2NDcgN0g5LjE5OTIyVjI3LjU0MTRIMzAuODY0N1Y3WiIgZmlsbD0iI0RGNjQyMSIvPgo8L3N2Zz4K"
      , Qa = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MzlfOCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwNS44NDMgMjkuODM3QzEwNS44NDMgMzQuMDc5IDEwMi40MDQgMzcuNTE3IDk4LjE2MyAzNy41MTdDOTMuOTIyIDM3LjUxNyA5MC40ODMgMzQuMDc5IDkwLjQ4MyAyOS44MzdDOTAuNDgzIDI1LjU5NSA5My45MjIgMjIuMTU3IDk4LjE2MyAyMi4xNTdDMTAyLjQwNSAyMi4xNTcgMTA1Ljg0MyAyNS41OTUgMTA1Ljg0MyAyOS44MzdaTTY0IDg1LjMzM0M1Mi4yMTggODUuMzMzIDQyLjY2NyA3NS43ODIgNDIuNjY3IDY0QzQyLjY2NyA1Mi4yMTggNTIuMjE4IDQyLjY2NyA2NCA0Mi42NjdDNzUuNzgyIDQyLjY2NyA4NS4zMzMgNTIuMjE4IDg1LjMzMyA2NEM4NS4zMzMgNzUuNzgyIDc1Ljc4MiA4NS4zMzMgNjQgODUuMzMzWk02NCAzMS4xMzVDNDUuODQ5IDMxLjEzNSAzMS4xMzUgNDUuODQ5IDMxLjEzNSA2NEMzMS4xMzUgODIuMTUxIDQ1Ljg0OSA5Ni44NjUgNjQgOTYuODY1QzgyLjE1MSA5Ni44NjUgOTYuODY1IDgyLjE1MSA5Ni44NjUgNjRDOTYuODY1IDQ1Ljg0OSA4Mi4xNTEgMzEuMTM1IDY0IDMxLjEzNVpNNjQgMTEuNTMyQzgxLjA4OSAxMS41MzIgODMuMTEzIDExLjU5NyA4OS44NjEgMTEuOTA1Qzk2LjEwMSAxMi4xOSA5OS40OSAxMy4yMzIgMTAxLjc0NSAxNC4xMDlDMTA0LjczMiAxNS4yNyAxMDYuODY0IDE2LjY1NyAxMDkuMTA0IDE4Ljg5N0MxMTEuMzQ0IDIxLjEzNiAxMTIuNzMxIDIzLjI2OCAxMTMuODkyIDI2LjI1NkMxMTQuNzY4IDI4LjUxMSAxMTUuODExIDMxLjkgMTE2LjA5NiAzOC4xNEMxMTYuNDA0IDQ0Ljg4OSAxMTYuNDY5IDQ2LjkxMyAxMTYuNDY5IDY0LjAwMkMxMTYuNDY5IDgxLjA5MSAxMTYuNDA0IDgzLjExNSAxMTYuMDk2IDg5Ljg2M0MxMTUuODExIDk2LjEwMyAxMTQuNzY5IDk5LjQ5MiAxMTMuODkyIDEwMS43NDdDMTEyLjczMSAxMDQuNzM0IDExMS4zNDQgMTA2Ljg2NiAxMDkuMTA0IDEwOS4xMDZDMTA2Ljg2NSAxMTEuMzQ2IDEwNC43MzMgMTEyLjczMyAxMDEuNzQ1IDExMy44OTRDOTkuNDkgMTE0Ljc3IDk2LjEwMSAxMTUuODEzIDg5Ljg2MSAxMTYuMDk4QzgzLjExMyAxMTYuNDA2IDgxLjA4OSAxMTYuNDcxIDY0IDExNi40NzFDNDYuOTEgMTE2LjQ3MSA0NC44ODYgMTE2LjQwNiAzOC4xMzggMTE2LjA5OEMzMS44OTggMTE1LjgxMyAyOC41MDkgMTE0Ljc3MSAyNi4yNTQgMTEzLjg5NEMyMy4yNjcgMTEyLjczMyAyMS4xMzUgMTExLjM0NiAxOC44OTUgMTA5LjEwNkMxNi42NTYgMTA2Ljg2NyAxNS4yNjggMTA0LjczNSAxNC4xMDcgMTAxLjc0N0MxMy4yMzEgOTkuNDkyIDEyLjE4OCA5Ni4xMDMgMTEuOTAzIDg5Ljg2M0MxMS41OTUgODMuMTE0IDExLjUzIDgxLjA5IDExLjUzIDY0LjAwMkMxMS41MyA0Ni45MTMgMTEuNTk1IDQ0Ljg4OSAxMS45MDMgMzguMTRDMTIuMTg4IDMxLjkgMTMuMjMgMjguNTExIDE0LjEwNyAyNi4yNTZDMTUuMjY4IDIzLjI2OSAxNi42NTUgMjEuMTM3IDE4Ljg5NSAxOC44OTdDMjEuMTM0IDE2LjY1NyAyMy4yNjYgMTUuMjcgMjYuMjU0IDE0LjEwOUMyOC41MDkgMTMuMjMzIDMxLjg5OCAxMi4xOSAzOC4xMzggMTEuOTA1QzQ0Ljg4NyAxMS41OTcgNDYuOTExIDExLjUzMiA2NCAxMS41MzJaTTY0IDBDNDYuNjE5IDAgNDQuNDM5IDAuMDc0IDM3LjYxMyAwLjM4NUMzMC44MDEgMC42OTYgMjYuMTQ4IDEuNzc4IDIyLjA3OCAzLjM2QzE3Ljg2OSA0Ljk5NSAxNC4zIDcuMTg0IDEwLjc0MiAxMC43NDJDNy4xODQgMTQuMyA0Ljk5NSAxNy44NjkgMy4zNiAyMi4wNzhDMS43NzggMjYuMTQ5IDAuNjk2IDMwLjgwMSAwLjM4NSAzNy42MTNDMC4wNzQgNDQuNDM5IDAgNDYuNjE5IDAgNjRDMCA4MS4zODEgMC4wNzQgODMuNTYxIDAuMzg1IDkwLjM4N0MwLjY5NiA5Ny4xOTkgMS43NzggMTAxLjg1MSAzLjM2IDEwNS45MjJDNC45OTUgMTEwLjEzMSA3LjE4NCAxMTMuNyAxMC43NDIgMTE3LjI1OEMxNC4zIDEyMC44MTYgMTcuODY5IDEyMy4wMDQgMjIuMDc4IDEyNC42NEMyNi4xNDkgMTI2LjIyMiAzMC44MDEgMTI3LjMwNCAzNy42MTMgMTI3LjYxNUM0NC40MzkgMTI3LjkyNiA0Ni42MTkgMTI4IDY0IDEyOEM4MS4zODEgMTI4IDgzLjU2MSAxMjcuOTI2IDkwLjM4NyAxMjcuNjE1Qzk3LjE5OSAxMjcuMzA0IDEwMS44NTEgMTI2LjIyMiAxMDUuOTIyIDEyNC42NEMxMTAuMTMxIDEyMy4wMDQgMTEzLjcgMTIwLjgxNiAxMTcuMjU4IDExNy4yNThDMTIwLjgxNiAxMTMuNyAxMjMuMDA0IDExMC4xMzEgMTI0LjY0IDEwNS45MjJDMTI2LjIyMiAxMDEuODUxIDEyNy4zMDQgOTcuMTk5IDEyNy42MTUgOTAuMzg3QzEyNy45MjYgODMuNTYxIDEyOCA4MS4zODEgMTI4IDY0QzEyOCA0Ni42MTkgMTI3LjkyNiA0NC40MzkgMTI3LjYxNSAzNy42MTNDMTI3LjMwNCAzMC44MDEgMTI2LjIyMiAyNi4xNDkgMTI0LjY0IDIyLjA3OEMxMjMuMDA0IDE3Ljg2OSAxMjAuODE2IDE0LjMgMTE3LjI1OCAxMC43NDJDMTEzLjcgNy4xODQgMTEwLjEzMSA0Ljk5NiAxMDUuOTIyIDMuMzZDMTAxLjg1MSAxLjc3OCA5Ny4xOTkgMC42OTYgOTAuMzg3IDAuMzg1QzgzLjU2MSAwLjA3NCA4MS4zODEgMCA2NCAwWiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzQzOV84KSIvPgo8L2c+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDM5XzgiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMTExMSAxMjguNDQ0KSBzY2FsZSgxNjMuNTUyKSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkIxNDAiLz4KPHN0b3Agb2Zmc2V0PSIwLjI1NTkiIHN0b3AtY29sb3I9IiNGRjU0NDUiLz4KPHN0b3Agb2Zmc2V0PSIwLjU5OSIgc3RvcC1jb2xvcj0iI0ZDMkI4MiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RTQwQjciLz4KPC9yYWRpYWxHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MzlfOCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
    var It = {
        prefix: "fab",
        iconName: "tiktok",
        icon: [448, 512, [], "e07b", "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]
    }
      , At = {
        prefix: "fab",
        iconName: "instagram",
        icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
    };
    const Ha = {
        emits: ["open-payment-modal", "open-auth"],
        props: {
            user: {
                type: Object,
                default: () => ({})
            },
            isMyProfile: {
                type: Boolean,
                default: !1
            },
            view: String,
            rulesShowContent: {
                type: Boolean,
                default: !1
            },
            currencyCode: String,
            v10: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            IconButton: ne
        },
        setup() {
            return {
                faTiktok: It,
                faInstagram: At,
                regularIcons: _
            }
        },
        computed: {
            needLogin() {
                return this.view === W.CHECKOUT
            },
            hideSocialName() {
                return this.view === W.CHECKOUT || this.v10
            },
            socialMediaList() {
                const t = this.user.socialMedia || {}
                  , e = []
                  , i = {
                    twitter: "https://www.twitter.com/",
                    tiktok: "https://www.tiktok.com/",
                    instagram: "https://www.instagram.com/",
                    topshare: "https://topshare.com.br/profile/"
                };
                if (t.instagram.exists) {
                    let n = t.instagram.url;
                    n = n ? n.replace(/@/g, "") : null,
                    e.push({
                        icon: this.hideSocialName ? At : Qa,
                        iconType: this.hideSocialName ? "font-awesome" : "image",
                        iconSize: "18px",
                        iconStyle: this.hideSocialName ? {
                            width: "18px",
                            height: "20px"
                        } : {},
                        url: `${i.instagram}${n}`,
                        text: this.hideSocialName ? null : "Instagram"
                    })
                }
                return t.twitter.exists && e.push({
                    icon: this.hideSocialName ? this.regularIcons.fak.x : Ua,
                    iconType: this.hideSocialName ? "font-awesome" : "image",
                    iconSize: this.hideSocialName ? "15px" : "14px",
                    url: `${i.twitter}${t.twitter.url}`,
                    text: this.hideSocialName ? null : "X"
                }),
                t.tiktok.exists && e.push({
                    icon: It,
                    iconStyle: this.hideSocialName ? null : {
                        color: "#292828"
                    },
                    url: `${i.tiktok}${t.tiktok.url}`,
                    text: this.hideSocialName ? null : "TikTok"
                }),
                t.topshare.exists && e.push({
                    icon: this.hideSocialName ? this.regularIcons.fak.topshare : Fa,
                    iconType: this.hideSocialName ? "font-awesome" : "image",
                    iconSize: "16px",
                    url: `${i.topshare}${t.topshare.url}`,
                    text: this.hideSocialName ? null : "topshare"
                }),
                e
            }
        },
        methods: {
            handleClick(t) {
                var e, i;
                if (this.needLogin)
                    this.$emit("open-auth", "1");
                else if (this.rulesShowContent)
                    this.$emit("open-payment-modal", {
                        clientId: this.user.clientId,
                        value: this.user.bumePrice ? this.user.bumePrice : (i = (e = this.user) == null ? void 0 : e.prices) == null ? void 0 : i.Monthly,
                        profileName: this.user.profileName,
                        cover: this.user.cover,
                        avatar: this.user.avatar,
                        currencyCode: this.currencyCode,
                        currencySymbol: this.user.prices.CurrencySymbol,
                        recurrence: G[0].TYPE,
                        spreadFee: this.user.prices.SpreadFee,
                        nickName: this.user.name
                    });
                else {
                    if (!t)
                        return;
                    const n = t.startsWith("http") ? t : `https://${t}`;
                    window.open(n, "_blank");
                    return
                }
            }
        }
    }
      , Ya = {
        class: "social-media-icons"
    }
      , Wa = ["onClick"];
    function Ga(t, e, i, n, s, r) {
        const a = o.resolveComponent("icon-button");
        return o.openBlock(),
        o.createElementBlock("div", null, [o.createElementVNode("div", Ya, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(r.socialMediaList, (l, c) => (o.openBlock(),
        o.createElementBlock("div", {
            key: c,
            onClick: d => r.handleClick(l.url)
        }, [o.createVNode(a, {
            icon: l.icon,
            "icon-type": l.iconType,
            "icon-size": l.iconSize,
            "icon-style": l.iconStyle,
            text: l.text
        }, null, 8, ["icon", "icon-type", "icon-size", "icon-style", "text"])], 8, Wa))), 128))])])
    }
    const Ve = w(Ha, [["render", Ga]])
      , qa = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ve
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Ka = `.auth{margin-left:17px;margin-right:20px}.btn-subscription{border-radius:30px!important;padding:0 25px;width:100%;font-size:var(--el-font-size-large);font-weight:700;color:var(--el-color-white)!important;background:linear-gradient(45deg,#F58170,#F9AF77)!important}.btn-subscription:hover{color:var(--el-color-white)!important;background:linear-gradient(45deg,#FFA08A,#FFC09A)!important}
`
      , Ja = {
        emits: ["call-auth"],
        components: {
            ElButton: I.ElButton
        },
        props: {
            nickName: String
        },
        setup() {
            const {t} = O();
            return {
                t
            }
        }
    }
      , Xa = {
        class: "auth mt-3"
    }
      , $a = {
        style: {
            "font-size": "var(--el-font-size-medium)",
            color: "var(--el-color-black)",
            "font-weight": "300",
            "font-family": "'Inter', sans-serif",
            display: "block",
            "margin-bottom": "8px",
            "margin-top": "20px"
        }
    }
      , el = ["innerHTML"]
      , tl = o.createElementVNode("div", {
        class: "col d-flex justify-content-center"
    }, [o.createElementVNode("span", null, "OK")], -1);
    function il(t, e, i, n, s, r) {
        const a = o.resolveComponent("el-button");
        return o.openBlock(),
        o.createElementBlock("div", Xa, [o.createElementVNode("span", $a, o.toDisplayString(n.t("REGISTER_SUCCESS.TITLE")), 1), o.createElementVNode("span", {
            class: "mb-2",
            style: {
                "font-size": "var(--el-font-size-base)",
                color: "#66748E",
                "font-weight": "500",
                "font-family": "'Inter', sans-serif",
                "margin-bottom": "8px"
            },
            innerHTML: n.t("REGISTER_SUCCESS.TEXT", {
                nickName: i.nickName
            })
        }, null, 8, el), o.createVNode(a, {
            class: "btn-subscription el-button--gradient mt-2 mb-4",
            style: {
                height: "44px !important"
            },
            loading: t.loading,
            disabled: t.loading,
            onClick: e[0] || (e[0] = l => t.$emit("call-auth"))
        }, {
            default: o.withCtx( () => [tl]),
            _: 1
        }, 8, ["loading", "disabled"])])
    }
    const Ct = w(Ja, [["render", il], ["styles", [Ka]]])
      , ol = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ct
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , nl = `.v10 .page-checkout{background-color:var(--el-bg-color);border:.5px solid var(--color-border-light);border-radius:24px;margin:0 16px 16px;padding-bottom:24px}
`
      , sl = {
        inject: ["appSettings"],
        components: {
            Background: Oe,
            Avatar: ge,
            ElPopover: I.ElPopover,
            Bio: Ie,
            SocialMediaList: Ve,
            Subscribe: ke,
            Auth: nt,
            IconButton: ne,
            MessageSuccess: Ct,
            PersonalData: St,
            UserContent: Pe
        },
        props: {
            defaultCountry: String,
            user: {
                type: Object,
                required: !0
            },
            v10: Boolean,
            showFollowers: {
                type: Boolean,
                default: !1
            }
        },
        setup() {
            const {t} = O();
            return {
                t,
                faBadgeCheck: he,
                faBars: ot,
                faMapMarkerAlt: Se,
                faCircleDollar: Te,
                faMessageLines: we,
                VIEWS: W
            }
        },
        mounted() {
            this.openConfirmEmail()
        },
        computed: {
            showAuth() {
                return this.showDetails && !this.showPersonal && !this.messageSuccess.show
            }
        },
        data() {
            return {
                showDetails: !1,
                showPersonal: !1,
                messageSuccess: {
                    show: !1,
                    nickName: null
                },
                orderPayment: null,
                authView: null,
                isRecoveryConfirmation: !1
            }
        },
        methods: {
            getDisplayProfileName() {
                var e;
                return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[2-9a-bA-BeE][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test((e = this.user) == null ? void 0 : e.profileName) ? null : `@${this.user.profileName}`
            },
            infoSuccess(t) {
                this.showPersonal = !1,
                this.messageSuccess.show = !0,
                this.messageSuccess.nickName = t
            },
            callAuth(t) {
                this.v10 || this.$refs.popover.hide(),
                this.orderPayment = this.user.isFreeCreator ? null : t,
                this.messageSuccess.show = !1,
                this.showDetails = !0,
                this.showPersonal = !1
            },
            backProfile() {
                this.orderPayment = null,
                this.messageSuccess.show = !1,
                this.showDetails = !1,
                this.showPersonal = !1
            },
            recoveryPassword(t) {
                this.authView = t,
                this.callAuth("1")
            },
            share() {
                if (this.v10)
                    return;
                this.$refs.popover.hide();
                const t = C(this.appSettings.PRIVACY_URL, `/@${this.user.profileName}`);
                navigator.share({
                    url: t
                })
            },
            openConfirmEmail() {
                const t = new URLSearchParams(window.location.search)
                  , e = t.get("orderpayment");
                t.get("route") === "recovery-password-confirmation" && (this.isRecoveryConfirmation = !0,
                this.callAuth("1")),
                e && (this.authView = "email-confirmation",
                this.callAuth(e))
            }
        }
    }
      , rl = {
        class: "page-checkout"
    }
      , al = {
        class: "options-container"
    }
      , ll = {
        key: 0,
        class: "actions"
    }
      , cl = {
        class: "d-flex align-items-center"
    }
      , dl = {
        class: "d-flex align-items-center"
    }
      , ml = {
        class: "user-info"
    }
      , pl = {
        class: "user-name"
    }
      , ul = {
        class: "profile-name"
    }
      , hl = {
        key: 0
    }
      , fl = {
        key: 0,
        class: "location"
    };
    function gl(t, e, i, n, s, r) {
        var y;
        const a = o.resolveComponent("background")
          , l = o.resolveComponent("avatar")
          , c = o.resolveComponent("icon-button")
          , d = o.resolveComponent("el-popover")
          , m = o.resolveComponent("font-awesome-icon")
          , g = o.resolveComponent("bio")
          , p = o.resolveComponent("social-media-list")
          , h = o.resolveComponent("Subscribe")
          , M = o.resolveComponent("Auth")
          , D = o.resolveComponent("PersonalData")
          , f = o.resolveComponent("MessageSuccess")
          , u = o.resolveComponent("UserContent");
        return o.openBlock(),
        o.createElementBlock(o.Fragment, null, [o.createElementVNode("div", rl, [o.createVNode(a, {
            user: i.user,
            v10: i.v10,
            "show-followers": i.showFollowers,
            "show-back-button": s.showDetails,
            "back-to-profile": s.showDetails,
            onBackProfile: r.backProfile
        }, null, 8, ["user", "v10", "show-followers", "show-back-button", "back-to-profile", "onBackProfile"]), o.createElementVNode("div", al, [o.createVNode(l, {
            "expand-image-functionality": !0,
            "expand-image-date-functionality": i.user.expandImageDateFunctionality,
            image: i.user.avatar,
            "user-name": i.user.name
        }, null, 8, ["expand-image-date-functionality", "image", "user-name"]), i.v10 ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createElementBlock("div", ll, [o.createVNode(d, {
            ref: "popover",
            trigger: "click",
            placement: "left-start",
            width: "fit-content",
            teleported: !1
        }, {
            reference: o.withCtx( () => [o.createVNode(c, {
                icon: n.faBars
            }, null, 8, ["icon"])]),
            default: o.withCtx( () => [o.createElementVNode("div", {
                class: "popover-item",
                onClick: e[0] || (e[0] = z => r.callAuth("1"))
            }, [o.createElementVNode("div", cl, [o.createElementVNode("span", null, o.toDisplayString(n.t("SUBSCRIBE_OPTION")), 1)])]), o.createElementVNode("div", {
                class: "popover-item",
                onClick: e[1] || (e[1] = (...z) => r.share && r.share(...z))
            }, [o.createElementVNode("div", dl, [o.createElementVNode("span", null, o.toDisplayString(n.t("SHARE")), 1)])])]),
            _: 1
        }, 512)]))]), o.createElementVNode("div", ml, [o.createElementVNode("div", pl, [o.createElementVNode("span", null, o.toDisplayString(i.user.name), 1), i.user.verified ? (o.openBlock(),
        o.createBlock(m, {
            key: 0,
            icon: n.faBadgeCheck
        }, null, 8, ["icon"])) : o.createCommentVNode("", !0)]), o.createElementVNode("div", ul, [i.user.profileName ? (o.openBlock(),
        o.createElementBlock("span", hl, o.toDisplayString(r.getDisplayProfileName()), 1)) : o.createCommentVNode("", !0)]), o.createVNode(g, {
            description: i.user.bio
        }, null, 8, ["description"]), i.user.location ? (o.openBlock(),
        o.createElementBlock("div", fl, [o.createVNode(m, {
            icon: n.faMapMarkerAlt
        }, null, 8, ["icon"]), o.createElementVNode("span", null, o.toDisplayString(i.user.location), 1)])) : o.createCommentVNode("", !0)]), i.user.isFreeCreator ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createBlock(p, {
            key: 0,
            user: i.user,
            "is-my-profile": t.isMyProfile,
            view: n.VIEWS.CHECKOUT,
            onOpenAuth: r.callAuth
        }, null, 8, ["user", "is-my-profile", "view", "onOpenAuth"])), s.showDetails ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createBlock(h, {
            key: 1,
            view: n.VIEWS.CHECKOUT,
            user: i.user,
            v10: i.v10,
            onCallAuth: r.callAuth
        }, null, 8, ["view", "user", "v10", "onCallAuth"]))]), r.showAuth ? (o.openBlock(),
        o.createBlock(M, {
            key: 0,
            onFormPaid: e[2] || (e[2] = z => s.showPersonal = !0),
            user: i.user,
            authView: s.authView,
            orderPayment: s.orderPayment,
            "is-recovery-confirmation": s.isRecoveryConfirmation
        }, null, 8, ["user", "authView", "orderPayment", "is-recovery-confirmation"])) : o.createCommentVNode("", !0), s.showPersonal ? (o.openBlock(),
        o.createBlock(D, {
            key: 1,
            "profile-name": (y = i.user) == null ? void 0 : y.profileName,
            "default-country": i.defaultCountry,
            orderPayment: s.orderPayment,
            onRegisterSuccess: r.infoSuccess,
            onCallRecoveryPassword: r.recoveryPassword
        }, null, 8, ["profile-name", "default-country", "orderPayment", "onRegisterSuccess", "onCallRecoveryPassword"])) : o.createCommentVNode("", !0), s.messageSuccess.show ? (o.openBlock(),
        o.createBlock(f, {
            key: 2,
            nickName: s.messageSuccess.nickName,
            onCallAuth: r.callAuth
        }, null, 8, ["nickName", "onCallAuth"])) : o.createCommentVNode("", !0), s.showDetails ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createBlock(u, {
            key: 3,
            "show-followers": i.showFollowers,
            user: i.user,
            v10: i.v10,
            view: n.VIEWS.CHECKOUT,
            onOpenAuth: r.callAuth
        }, null, 8, ["show-followers", "user", "v10", "view", "onOpenAuth"]))], 64)
    }
    const Lt = w(sl, [["render", gl], ["styles", [nl]]])
      , yl = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Lt
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , vc = ""
      , Ml = {
        inject: ["appSettings"],
        emits: ["unfollow-profile", "enable-renewal", "report-profile", "toggle-mute", "toggle-friend", "request-verification"],
        props: {
            v10: Boolean,
            user: Object,
            isMyProfile: Boolean,
            isPrivacyProfile: Boolean,
            view: String
        },
        components: {
            IconButton: ne,
            ElPopover: I.ElPopover,
            ElDivider: I.ElDivider
        },
        setup() {
            const {t} = O();
            return {
                t,
                faUser: me,
                faCalendarLines: Ki,
                faBoxArchive: Bi,
                faGear: Yi,
                faEllipsisVertical: Et,
                faBars: ot,
                faMessageLines: we,
                faShareNodes: Zi,
                faHeartCircleXmark: Fi,
                faHeartCirclePlus: _i,
                faCircleExclamation: Ri,
                faVolumeOff: Hi,
                faVolumeXmark: Gi,
                faCircleMinus: Pi,
                faCirclePlus: qi,
                faBadgeCheck: he,
                regularIcons: _
            }
        },
        computed: {
            existsSubscriptionEndDate() {
                return !Rt.isEmpty(this.user.subscriptionEndDate)
            }
        },
        methods: {
            getOptionsForMyProfile(t) {
                const e = [{
                    icon: this.faUser,
                    label: this.t("MY_PROFILE"),
                    function: this.goToMyProfile
                }, {
                    icon: this.faCalendarLines,
                    label: this.t("SCHEDULED_POSTS"),
                    function: this.goToScheduledPosts
                }, {
                    icon: this.faBoxArchive,
                    label: this.t("ARCHIVED"),
                    function: this.goToArchived
                }, {
                    icon: this.faGear,
                    label: this.t("EDIT_PROFILE"),
                    function: this.goToEditProfile
                }, {
                    icon: this.faBadgeCheck,
                    label: this.t("REQUEST_VERIFICATION"),
                    function: this.requestVerification
                }]
                  , n = {
                    profile: [1, 2, 3, ...this.user.verified ? [] : [4]],
                    scheduled: [0, 2, 3],
                    archived: [0, 1, 3]
                }[t];
                return n ? n.map(s => e[s]) : []
            },
            formatDate(t) {
                return new Date(t).toLocaleDateString()
            },
            goToMyProfile() {
                window.location.href = `/profile/${this.user.profileName}`
            },
            goToScheduledPosts() {
                window.location.href = "/agendado"
            },
            goToArchived() {
                window.location.href = "/postsarquivados"
            },
            goToEditProfile() {
                window.location.href = "/settings/creator"
            },
            goToChat() {
                window.location.href = `/chat/${this.user.userId}`
            },
            share() {
                const t = C(this.appSettings.PRIVACY_URL, `/@${this.user.profileName}`);
                navigator.share({
                    url: t
                })
            },
            unfollowProfile() {
                this.$emit("unfollow-profile", {
                    userId: this.user.userId
                })
            },
            enableRenewal() {
                this.$emit("enable-renewal", {
                    clientId: this.user.clientId
                })
            },
            reportProfile() {
                this.$emit("report-profile", {
                    reportedProfileId: this.user.clientId
                })
            },
            toggleMuteProfile() {
                this.$emit("toggle-mute", {
                    clientId: this.user.clientId,
                    isMuted: this.user.isMuted
                })
            },
            toggleFriend() {
                this.$emit("toggle-friend", {
                    userId: this.user.userId,
                    isFriend: this.user.isFriend
                })
            },
            requestVerification() {
                this.$emit("request-verification", {
                    profileName: this.user.profileName
                })
            }
        }
    }
      , Nl = ["onClick"]
      , zl = {
        class: "d-flex align-items-center"
    }
      , bl = {
        class: "icon-container"
    }
      , xl = {
        key: 0,
        class: "popover-title"
    }
      , Dl = {
        key: 1,
        class: "popover-title"
    }
      , El = {
        class: "d-flex align-items-center"
    }
      , wl = {
        class: "icon-container"
    }
      , Tl = {
        class: "d-flex align-items-center"
    }
      , Sl = {
        class: "icon-container"
    }
      , Il = {
        class: "d-flex align-items-center"
    }
      , Al = {
        class: "icon-container"
    }
      , Cl = {
        class: "d-flex align-items-center"
    }
      , Ll = {
        class: "icon-container"
    }
      , vl = {
        class: "d-flex align-items-center"
    }
      , kl = {
        class: "icon-container"
    }
      , jl = {
        class: "d-flex align-items-center"
    }
      , Ol = {
        class: "icon-container"
    }
      , Pl = {
        class: "d-flex align-items-center"
    }
      , Vl = {
        class: "icon-container"
    }
      , Bl = {
        class: "d-flex align-items-center"
    }
      , Rl = {
        class: "icon-container"
    };
    function Zl(t, e, i, n, s, r) {
        const a = o.resolveComponent("icon-button")
          , l = o.resolveComponent("font-awesome-icon")
          , c = o.resolveComponent("el-divider")
          , d = o.resolveComponent("el-popover");
        return o.openBlock(),
        o.createElementBlock("div", null, [o.createVNode(d, {
            trigger: "click",
            placement: "left-start",
            teleported: !1,
            width: "fit-content"
        }, {
            reference: o.withCtx( () => [o.createVNode(a, {
                class: "icon-option",
                icon: i.v10 ? n.faEllipsisVertical : n.faBars
            }, null, 8, ["icon"])]),
            default: o.withCtx( () => {
                var m, g;
                return [i.isMyProfile ? (o.openBlock(!0),
                o.createElementBlock(o.Fragment, {
                    key: 0
                }, o.renderList(r.getOptionsForMyProfile(i.view), p => (o.openBlock(),
                o.createElementBlock("div", {
                    key: p.label,
                    onClick: p.function,
                    class: "popover-item"
                }, [o.createElementVNode("div", zl, [o.createElementVNode("div", bl, [o.createVNode(l, {
                    icon: p.icon
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(p.label), 1)])], 8, Nl))), 128)) : (o.openBlock(),
                o.createElementBlock(o.Fragment, {
                    key: 1
                }, [i.user.isFreeCreator ? (o.openBlock(),
                o.createElementBlock("div", xl, o.toDisplayString(n.t("FREE_SUBSCRIPTION")), 1)) : r.existsSubscriptionEndDate ? (o.openBlock(),
                o.createElementBlock("div", Dl, o.toDisplayString(n.t("ACCESS_UNTIL")) + " " + o.toDisplayString(r.formatDate(i.user.subscriptionEndDate)), 1)) : o.createCommentVNode("", !0), i.user.isFreeCreator || r.existsSubscriptionEndDate ? (o.openBlock(),
                o.createBlock(c, {
                    key: 2
                })) : o.createCommentVNode("", !0), i.user.imFollowing || r.existsSubscriptionEndDate ? (o.openBlock(),
                o.createElementBlock("div", {
                    key: 3,
                    onClick: e[0] || (e[0] = (...p) => r.goToChat && r.goToChat(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", El, [o.createElementVNode("div", wl, [o.createVNode(l, {
                    icon: i.v10 ? n.regularIcons.fak.chat : n.faMessageLines
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(n.t("CHAT")), 1)])])) : o.createCommentVNode("", !0), o.createElementVNode("div", {
                    onClick: e[1] || (e[1] = (...p) => r.share && r.share(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", Tl, [o.createElementVNode("div", Sl, [o.createVNode(l, {
                    icon: n.faShareNodes
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(n.t("SHARE")), 1)])]), i.user.imFollowing && ((g = (m = i.user) == null ? void 0 : m.prices) == null ? void 0 : g.Monthly) == 0 ? (o.openBlock(),
                o.createElementBlock("div", {
                    key: 4,
                    onClick: e[2] || (e[2] = (...p) => r.unfollowProfile && r.unfollowProfile(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", Il, [o.createElementVNode("div", Al, [o.createVNode(l, {
                    icon: n.faHeartCircleXmark
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(n.t("UNFOLLOW")), 1)])])) : i.user.imFollowing && i.user.isRecurrency ? (o.openBlock(),
                o.createElementBlock("div", {
                    key: 5,
                    onClick: e[3] || (e[3] = (...p) => r.unfollowProfile && r.unfollowProfile(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", Cl, [o.createElementVNode("div", Ll, [o.createVNode(l, {
                    icon: n.faHeartCircleXmark
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(n.t("DISABLE_RENEWAL")), 1)])])) : r.existsSubscriptionEndDate ? (o.openBlock(),
                o.createElementBlock("div", {
                    key: 6,
                    onClick: e[4] || (e[4] = (...p) => r.enableRenewal && r.enableRenewal(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", vl, [o.createElementVNode("div", kl, [o.createVNode(l, {
                    icon: n.faHeartCirclePlus
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(n.t("ENABLE_RENEWAL")), 1)])])) : o.createCommentVNode("", !0), o.createElementVNode("div", {
                    onClick: e[5] || (e[5] = (...p) => r.reportProfile && r.reportProfile(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", jl, [o.createElementVNode("div", Ol, [o.createVNode(l, {
                    icon: n.faCircleExclamation
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(n.t("REPORT_PROFILE")), 1)])]), (i.user.imFollowing || r.existsSubscriptionEndDate) && !i.isPrivacyProfile ? (o.openBlock(),
                o.createElementBlock("div", {
                    key: 7,
                    onClick: e[6] || (e[6] = (...p) => r.toggleMuteProfile && r.toggleMuteProfile(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", Pl, [o.createElementVNode("div", Vl, [o.createVNode(l, {
                    icon: i.user.isMuted ? n.faVolumeOff : n.faVolumeXmark
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(i.user.isMuted ? n.t("UNMUTE_PROFILE") : n.t("MUTE_PROFILE")), 1)])])) : o.createCommentVNode("", !0), i.user.isContentCreator ? (o.openBlock(),
                o.createElementBlock("div", {
                    key: 8,
                    onClick: e[7] || (e[7] = (...p) => r.toggleFriend && r.toggleFriend(...p)),
                    class: "popover-item"
                }, [o.createElementVNode("div", Bl, [o.createElementVNode("div", Rl, [o.createVNode(l, {
                    icon: i.user.isFriend ? n.faCircleMinus : n.faCirclePlus
                }, null, 8, ["icon"])]), o.createElementVNode("span", null, o.toDisplayString(i.user.isFriend ? n.t("REMOVE_FRIEND") : n.t("ADD_FRIEND")), 1)])])) : o.createCommentVNode("", !0)], 64))]
            }
            ),
            _: 1
        })])
    }
    const vt = w(Ml, [["render", Zl]])
      , _l = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: vt
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Ul = `.v10 .header-profile{justify-content:space-between;align-items:center;display:flex;margin:20px 15px 20px 20px}.v10 .icon-arrow-left{color:var(--btn-privacy-color-3);width:20px;height:20px}.v10 .my-profile-title{color:var(--btn-privacy-color-3)}.v10 .page-profile{background-color:var(--card-bg-1);border:.5px solid var(--bs-border-color);border-radius:24px;margin:0 16px 16px;padding-bottom:24px}.v10 .page-profile .interactions-container{display:flex;justify-content:space-between;padding:0 12px;margin-top:16px}.v10 .page-profile .interactions-container .btn-interactions{display:flex;justify-content:center;align-items:center;width:100%;height:44px;border-radius:16px;margin-left:4px;margin-right:4px;background-color:var(--btn-privacy-bg-2);border:.5px solid var(--bs-border-color)!important;border:none;color:var(--btn-privacy-color-1);text-decoration:none;outline:none;cursor:pointer}.v10 .page-profile .interactions-container .btn-interactions:hover,.v10 .page-profile .interactions-container .btn-interactions:focus{text-decoration:none;outline:none;color:var(--btn-privacy-color-1)}
`
      , Fl = {
        inject: ["appSettings"],
        emits: ["unfollow-profile", "enable-renewal", "report-profile", "send-tip", "toggle-mute", "toggle-friend", "request-verification", "open-payment-modal"],
        components: {
            Background: Oe,
            Bio: Ie,
            Avatar: ge,
            Popover: vt,
            UserContent: Pe,
            IconButton: ne,
            SocialMediaList: Ve,
            Subscribe: ke
        },
        props: {
            v10: Boolean,
            user: {
                type: Object,
                required: !0
            },
            showTipButton: {
                type: Boolean,
                default: !1
            },
            showChatButton: {
                type: Boolean,
                default: !1
            },
            showCallButton: {
                type: Boolean,
                default: !1
            },
            isMyProfile: {
                type: Boolean,
                default: !1
            },
            isPrivacyProfile: {
                type: Boolean,
                default: !1
            },
            isOnboarding: {
                type: Boolean,
                default: !1
            },
            showFollowers: {
                type: Boolean,
                default: !1
            },
            defaultCountry: String,
            currencyCode: String,
            view: String
        },
        setup() {
            const {t} = O();
            return {
                faBadgeCheck: he,
                faMapMarkerAlt: Se,
                faCircleDollar: Te,
                faMessageLines: we,
                faPhone: Qi,
                t,
                faArrowLeft: Dr,
                regularIcons: _
            }
        },
        computed: {
            showSocialMedia() {
                return !this.user.isFreeCreator || this.user.imFollowing || this.isMyProfile
            },
            rulesShowContent() {
                return !this.isMyProfile && !this.user.imFollowing && this.expiredDate && this.user.isContentCreator
            },
            showActionButton() {
                return !this.isMyProfile && this.user.imFollowing && this.expiredDate && this.user.isContentCreator
            },
            routeSettings() {
                return C(this.appSettings.PRIVACY_URL, "settings")
            },
            titleCreator() {
                return this.isMyProfile ? this.t("TITLE.MY_PROFILE") : this.user.name
            }
        },
        mounted() {
            this.validateSubscription()
        },
        data() {
            return {
                expiredDate: !1,
                actionsList: [{
                    icon: this.faPhone,
                    show: this.showCallButton,
                    function: this.goToCall
                }, {
                    icon: this.faCircleDollar,
                    show: this.showTipButton,
                    function: this.sendTip
                }, {
                    icon: this.faMessageLines,
                    show: this.showChatButton,
                    function: this.goToChat
                }]
            }
        },
        methods: {
            getDisplayProfileName() {
                var e;
                return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[2-9a-bA-BeE][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test((e = this.user) == null ? void 0 : e.profileName) ? null : `@${this.user.profileName}`
            },
            goToChat() {
                window.location.href = `/chat/${this.user.userId}`
            },
            goToCall() {
                window.location.href = `/chat/${this.user.userId}&message=meeting`
            },
            sendTip() {
                this.$emit("send-tip", {
                    profileUserName: this.user.name,
                    profileName: this.user.profileName,
                    profileUserImageUrl: this.user.avatar,
                    profileId: this.user.clientId,
                    currencyCode: this.currencyCode,
                    currencySymbol: this.user.prices.CurrencySymbol,
                    spreadFee: this.user.prices.SpreadFee
                })
            },
            back() {
                document.referrer ? window.history.back() : window.location.href = "/board"
            },
            validateSubscription() {
                var t;
                (t = this.user) != null && t.subscriptionEndDate ? this.expiredDate = R(this.user.subscriptionEndDate).isSameOrBefore(R()) : this.expiredDate = !0
            }
        }
    }
      , Ql = {
        key: 0,
        class: "header-profile"
    }
      , Hl = {
        class: "text-base font-medium my-profile-title"
    }
      , Yl = {
        class: "page-profile"
    }
      , Wl = {
        class: "options-container"
    }
      , Gl = {
        key: 0,
        class: "actions"
    }
      , ql = {
        class: "user-info"
    }
      , Kl = {
        class: "user-name"
    }
      , Jl = {
        class: "font-semibold text-lg"
    }
      , Xl = {
        class: "profile-name"
    }
      , $l = {
        key: 0,
        class: "text-sm font-normal"
    }
      , ec = {
        key: 0,
        class: "location"
    }
      , tc = {
        key: 1,
        class: "edit-profile"
    }
      , ic = ["href"]
      , oc = {
        class: "text-sm font-medium"
    }
      , nc = {
        key: 2,
        class: "interactions-container"
    }
      , sc = {
        class: "text-sm font-medium"
    }
      , rc = {
        class: "text-sm font-medium"
    };
    function ac(t, e, i, n, s, r) {
        var D;
        const a = o.resolveComponent("font-awesome-icon")
          , l = o.resolveComponent("popover")
          , c = o.resolveComponent("background")
          , d = o.resolveComponent("avatar")
          , m = o.resolveComponent("icon-button")
          , g = o.resolveComponent("bio")
          , p = o.resolveComponent("social-media-list")
          , h = o.resolveComponent("Subscribe")
          , M = o.resolveComponent("UserContent");
        return o.openBlock(),
        o.createElementBlock(o.Fragment, null, [i.v10 && !i.isOnboarding ? (o.openBlock(),
        o.createElementBlock("div", Ql, [o.createVNode(a, {
            class: "icon-arrow-left",
            icon: n.faArrowLeft,
            onClick: r.back
        }, null, 8, ["icon", "onClick"]), o.createElementVNode("span", Hl, o.toDisplayString(r.titleCreator), 1), o.createVNode(l, {
            user: i.user,
            "is-my-profile": i.isMyProfile,
            "is-privacy-profile": i.isPrivacyProfile,
            view: i.view,
            v10: i.v10,
            onUnfollowProfile: e[0] || (e[0] = f => t.$emit("unfollow-profile", f)),
            onEnableRenewal: e[1] || (e[1] = f => t.$emit("enable-renewal", f)),
            onReportProfile: e[2] || (e[2] = f => t.$emit("report-profile", f)),
            onToggleMute: e[3] || (e[3] = f => t.$emit("toggle-mute", f)),
            onToggleFriend: e[4] || (e[4] = f => t.$emit("toggle-friend", f)),
            onRequestVerification: e[5] || (e[5] = f => t.$emit("request-verification", f))
        }, null, 8, ["user", "is-my-profile", "is-privacy-profile", "view", "v10"])])) : o.createCommentVNode("", !0), o.createElementVNode("div", Yl, [o.createVNode(c, {
            user: i.user,
            v10: i.v10,
            "show-back-button": !i.isOnboarding,
            "show-followers": i.showFollowers,
            "is-onboarding": i.isOnboarding
        }, null, 8, ["user", "v10", "show-back-button", "show-followers", "is-onboarding"]), o.createElementVNode("div", Wl, [o.createVNode(d, {
            "expand-image-functionality": !0,
            "expand-image-date-functionality": i.user.expandImageDateFunctionality,
            image: i.user.avatar,
            "user-name": i.user.name,
            "is-online": i.user.isOnline
        }, null, 8, ["expand-image-date-functionality", "image", "user-name", "is-online"]), !i.isOnboarding && !i.v10 ? (o.openBlock(),
        o.createElementBlock("div", Gl, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(s.actionsList, (f, u) => (o.openBlock(),
        o.createElementBlock(o.Fragment, {
            key: u
        }, [f.show ? (o.openBlock(),
        o.createBlock(m, {
            key: 0,
            icon: f.icon,
            onClick: f.function
        }, null, 8, ["icon", "onClick"])) : o.createCommentVNode("", !0)], 64))), 128)), o.createVNode(l, {
            user: i.user,
            "is-my-profile": i.isMyProfile,
            "is-privacy-profile": i.isPrivacyProfile,
            view: i.view,
            v10: i.v10,
            onUnfollowProfile: e[6] || (e[6] = f => t.$emit("unfollow-profile", f)),
            onEnableRenewal: e[7] || (e[7] = f => t.$emit("enable-renewal", f)),
            onReportProfile: e[8] || (e[8] = f => t.$emit("report-profile", f)),
            onToggleMute: e[9] || (e[9] = f => t.$emit("toggle-mute", f)),
            onToggleFriend: e[10] || (e[10] = f => t.$emit("toggle-friend", f)),
            onRequestVerification: e[11] || (e[11] = f => t.$emit("request-verification", f))
        }, null, 8, ["user", "is-my-profile", "is-privacy-profile", "view", "v10"])])) : o.createCommentVNode("", !0)]), o.createElementVNode("div", ql, [o.createElementVNode("div", Kl, [o.createElementVNode("span", Jl, o.toDisplayString(i.user.name), 1), i.user.verified ? (o.openBlock(),
        o.createBlock(a, {
            key: 0,
            style: {
                "margin-left": "2px"
            },
            icon: n.faBadgeCheck
        }, null, 8, ["icon"])) : o.createCommentVNode("", !0)]), o.createElementVNode("div", Xl, [i.user.profileName ? (o.openBlock(),
        o.createElementBlock("span", $l, o.toDisplayString(r.getDisplayProfileName()), 1)) : o.createCommentVNode("", !0)]), o.createVNode(g, {
            description: i.user.bio,
            location: (D = i.user) == null ? void 0 : D.location,
            v10: i.v10
        }, null, 8, ["description", "location", "v10"]), i.user.location && !i.v10 ? (o.openBlock(),
        o.createElementBlock("div", ec, [o.createVNode(a, {
            icon: n.faMapMarkerAlt
        }, null, 8, ["icon"]), o.createElementVNode("span", null, o.toDisplayString(i.user.location || "Miami FL"), 1)])) : o.createCommentVNode("", !0)]), r.showSocialMedia ? (o.openBlock(),
        o.createBlock(p, {
            key: 0,
            class: "social-media",
            user: i.user,
            v10: i.v10,
            "is-my-profile": i.isMyProfile,
            rulesShowContent: r.rulesShowContent,
            "currency-code": i.currencyCode,
            onOpenPaymentModal: e[12] || (e[12] = f => t.$emit("open-payment-modal", f))
        }, null, 8, ["user", "v10", "is-my-profile", "rulesShowContent", "currency-code"])) : o.createCommentVNode("", !0), i.v10 && i.isMyProfile && !i.isOnboarding ? (o.openBlock(),
        o.createElementBlock("div", tc, [o.createElementVNode("a", {
            class: "btn-edit-profile",
            href: r.routeSettings
        }, [o.createElementVNode("span", oc, o.toDisplayString(n.t("EDIT_PROFILE")), 1)], 8, ic)])) : o.createCommentVNode("", !0), i.v10 && r.showActionButton ? (o.openBlock(),
        o.createElementBlock("div", nc, [i.showTipButton ? (o.openBlock(),
        o.createElementBlock("a", {
            key: 0,
            class: "btn-interactions",
            onClick: e[13] || (e[13] = f => r.sendTip())
        }, [o.createVNode(a, {
            icon: n.faCircleDollar,
            style: {
                "margin-right": "5px",
                width: "24px",
                height: "24px"
            }
        }, null, 8, ["icon"]), o.createElementVNode("span", sc, o.toDisplayString(n.t("TIP")), 1)])) : o.createCommentVNode("", !0), i.showChatButton ? (o.openBlock(),
        o.createElementBlock("a", {
            key: 1,
            class: "btn-interactions",
            onClick: e[14] || (e[14] = f => r.goToChat())
        }, [o.createVNode(a, {
            icon: n.regularIcons.fak.chat,
            style: {
                "margin-right": "5px",
                width: "24px",
                height: "24px"
            }
        }, null, 8, ["icon"]), o.createElementVNode("span", rc, o.toDisplayString(n.t("CHAT")), 1)])) : o.createCommentVNode("", !0)])) : o.createCommentVNode("", !0), r.rulesShowContent ? (o.openBlock(),
        o.createBlock(h, {
            key: 3,
            user: i.user,
            view: i.view,
            v10: i.v10,
            "currency-code": i.currencyCode,
            onOpenPaymentModal: e[15] || (e[15] = f => t.$emit("open-payment-modal", f))
        }, null, 8, ["user", "view", "v10", "currency-code"])) : o.createCommentVNode("", !0), r.rulesShowContent && !i.v10 ? (o.openBlock(),
        o.createBlock(M, {
            key: 4,
            user: i.user,
            view: i.view,
            "show-followers": i.showFollowers,
            rulesShowContent: r.rulesShowContent,
            onOpenPaymentModal: e[16] || (e[16] = f => t.$emit("open-payment-modal", f))
        }, null, 8, ["user", "view", "show-followers", "rulesShowContent"])) : o.createCommentVNode("", !0)]), r.rulesShowContent && i.v10 ? (o.openBlock(),
        o.createBlock(M, {
            key: 1,
            user: i.user,
            view: i.view,
            v10: i.v10,
            "show-followers": i.showFollowers,
            rulesShowContent: r.rulesShowContent,
            onOpenPaymentModal: e[17] || (e[17] = f => t.$emit("open-payment-modal", f))
        }, null, 8, ["user", "view", "v10", "show-followers", "rulesShowContent"])) : o.createCommentVNode("", !0)], 64)
    }
    const kt = w(Fl, [["render", ac], ["styles", [Ul]]])
      , lc = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: kt
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , cc = `.user-info-container{touch-action:pan-y!important}.media-content-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;height:100%;padding:40px!important}.media-content-wrapper .pswp-media-image{overflow:hidden;max-width:100%}.media-content-wrapper .padlock-img{position:absolute;top:48%;width:40px;height:40px}.media-content-wrapper .media-description-container{position:absolute;top:48%;margin-top:3.5rem;width:200px;height:26px;display:flex;justify-content:center;align-items:center;gap:1rem}.media-content-wrapper .media-description-container .container-counter-icon{display:flex;gap:.25rem;color:var(--el-text-color-regular)}.media-content-wrapper .media-description-container .counter-icon-image,.media-content-wrapper .media-description-container .counter-icon-video{display:flex;align-items:center;gap:.25rem}.media-content-wrapper .media-description-container .counter-icon{width:16px;height:16px}.media-content-wrapper .post-text-container{display:flex;flex-direction:column;max-width:320px;max-height:100px;position:absolute;bottom:6rem}.media-content-wrapper .post-text-container .post-text{display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden;color:var(--el-color-white)}@media (max-height: 635px){.media-content-wrapper .post-text-container .post-text{-webkit-line-clamp:2}}@media (max-height: 590px){.media-content-wrapper .post-text-container .post-text{-webkit-line-clamp:1}}@media (max-height: 750px){.media-content-wrapper .post-text-container{bottom:3rem}}@media (max-height: 545px){.media-content-wrapper .post-text-container{display:none}}.el-button.btn-subscription span{font-size:18px}.v10 .el-button.el-button--gradient{border:none!important}.v10 .el-button.el-button--gradient span{font-size:18px}
`
      , dc = {
        inject: ["appSettings", "$http", "token"],
        components: {
            PageCheckout: Lt,
            PageProfile: kt
        },
        emits: ["send-tip", "unfollow-profile", "enable-renewal", "report-profile", "toggle-mute", "toggle-friend", "request-verification", "open-payment-modal", "subscribe-free-profile", "subscribe-paid-profile"],
        props: {
            user: {
                type: Object,
                required: !0,
                default: () => ({
                    avatar: null,
                    cover: null,
                    userId: null,
                    clientId: null,
                    name: null,
                    profileName: null,
                    verified: !1,
                    bio: null,
                    site: null,
                    location: null,
                    stats: {
                        images: null,
                        videos: null,
                        likes: null
                    },
                    socialMedia: {
                        twitter: null,
                        tiktok: null,
                        instagram: null,
                        topshare: null
                    },
                    isContentCreator: !1,
                    isFreeCreator: !1,
                    imFollowing: !1,
                    isRecurrency: !1,
                    isFriend: !1,
                    isMuted: !1,
                    prices: {
                        Monthly: null,
                        Quarterly: null,
                        SemiAnnual: null
                    },
                    subscriptionEndDate: null
                })
            },
            showTipButton: {
                type: Boolean,
                default: !1
            },
            showChatButton: {
                type: Boolean,
                default: !1
            },
            showCallButton: {
                type: Boolean,
                default: !1
            },
            isMyProfile: {
                type: Boolean,
                default: !1
            },
            isPrivacyProfile: {
                type: Boolean,
                default: !1
            },
            isOnboarding: {
                type: Boolean,
                default: !1
            },
            showFollowers: {
                type: Boolean,
                default: !1
            },
            view: String,
            currencyCode: String,
            defaultCountry: String,
            v10: Boolean
        },
        computed: {
            rulescontent() {
                return !this.user.imFollowing && !this.isMyProfile && this.user.prices.Monthly > 0
            },
            attrStyle() {
                return {
                    "--height": this.height != null ? `${this.height}px` : "calc(100vh - 260px)",
                    "--width": this.width != null ? `${this.width}px` : ""
                }
            }
        },
        data() {
            return {
                checkFollowing: !1,
                expiredDate: !1
            }
        },
        mounted() {
            this.validateSubscription(),
            this.openPayment()
        },
        methods: {
            openPayment() {
                var i, n;
                const e = window.location.pathname.split("/").find(s => s.startsWith("orderpayment="));
                if (e && this.clearPaymentSegment(),
                !(this.user.imFollowing || ((n = (i = this.user) == null ? void 0 : i.prices) == null ? void 0 : n.Monthly) === 0 || this.isMyProfile || !this.expiredDate) && e) {
                    const s = e.split("=")[1];
                    if (s) {
                        const r = this.getPrice(s)
                          , a = this.getRecurrence(s);
                        this.$emit("open-payment-modal", {
                            clientId: this.user.clientId,
                            value: this.user.bumePrice ? this.user.bumePrice : r,
                            profileName: this.user.profileName,
                            cover: this.user.cover,
                            avatar: this.user.avatar,
                            currencyCode: this.currencyCode,
                            currencySymbol: this.user.prices.CurrencySymbol,
                            recurrence: a,
                            spreadFee: this.user.prices.SpreadFee,
                            nickName: this.user.name
                        })
                    }
                }
            },
            clearPaymentSegment() {
                const t = window.location.pathname.replace(/\/orderpayment=\d+/, "");
                window.history.replaceState(null, "", t)
            },
            getRecurrence(t) {
                const e = G.find(i => i.VALUE === t);
                return e ? e.TYPE : G[0].TYPE
            },
            getPrice(t) {
                var e, i, n, s, r, a, l, c;
                switch (t) {
                case "1":
                    return (i = (e = this.user) == null ? void 0 : e.prices) == null ? void 0 : i.Monthly;
                case "2":
                    return (s = (n = this.user) == null ? void 0 : n.prices) == null ? void 0 : s.Quarterly;
                case "3":
                    return (a = (r = this.user) == null ? void 0 : r.prices) == null ? void 0 : a.SemiAnnual;
                default:
                    return (c = (l = this.user) == null ? void 0 : l.prices) == null ? void 0 : c.Monthly
                }
            },
            validateSubscription() {
                var t;
                (t = this.user) != null && t.subscriptionEndDate ? this.expiredDate = R(this.user.subscriptionEndDate).isSameOrBefore(R()) : this.expiredDate = !0
            }
        }
    };
    function mc(t, e, i, n, s, r) {
        const a = o.resolveComponent("page-checkout")
          , l = o.resolveComponent("page-profile");
        return o.openBlock(),
        o.createElementBlock("div", {
            class: "user-info-container",
            style: o.normalizeStyle(r.attrStyle)
        }, [i.view === "checkout" ? (o.openBlock(),
        o.createBlock(a, {
            key: 0,
            user: i.user,
            v10: i.v10,
            "default-country": i.defaultCountry,
            "show-followers": i.showFollowers
        }, null, 8, ["user", "v10", "default-country", "show-followers"])) : i.view === "profile" ? (o.openBlock(),
        o.createBlock(l, {
            key: 1,
            user: i.user,
            view: i.view,
            "currency-code": i.currencyCode,
            "is-my-profile": i.isMyProfile,
            "is-privacy-profile": i.isPrivacyProfile,
            "is-onboarding": i.isOnboarding,
            "show-followers": i.showFollowers,
            "default-country": i.defaultCountry,
            "show-chat-button": i.showChatButton,
            "show-call-button": i.showCallButton,
            "show-tip-button": i.showTipButton,
            v10: i.v10,
            onSendTip: e[0] || (e[0] = c => t.$emit("send-tip", c)),
            onToggleMute: e[1] || (e[1] = c => t.$emit("toggle-mute", c)),
            onToggleFriend: e[2] || (e[2] = c => t.$emit("toggle-friend", c)),
            onEnableRenewal: e[3] || (e[3] = c => t.$emit("enable-renewal", c)),
            onReportProfile: e[4] || (e[4] = c => t.$emit("report-profile", c)),
            onUnfollowProfile: e[5] || (e[5] = c => t.$emit("unfollow-profile", c)),
            onOpenPaymentModal: e[6] || (e[6] = c => t.$emit("open-payment-modal", c)),
            onRequestVerification: e[7] || (e[7] = c => t.$emit("request-verification", c))
        }, null, 8, ["user", "view", "currency-code", "is-my-profile", "is-privacy-profile", "is-onboarding", "show-followers", "default-country", "show-chat-button", "show-call-button", "show-tip-button", "v10"])) : o.createCommentVNode("", !0)], 4)
    }
    const jt = w(dc, [["render", mc], ["styles", [cc]]])
      , pc = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jt
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , uc = `@charset "UTF-8";@import"https://fonts.googleapis.com/css2?family=Inter&display=swap";@import"https://fonts.googleapis.com/css2?family=Poppins&display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/element-plus/2.2.30/index.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.9/photoswipe.min.css";.parent-avatar .avatar{cursor:pointer!important}.avatar-wrapper{position:relative}.avatar-wrapper .vac-state-online{position:absolute;width:16px;height:16px;border:3px solid var(--el-color-white);border-radius:50%;bottom:12px;right:11px;background-color:#35d063;box-sizing:content-box;z-index:5}.v10 .avatar-wrapper .vac-state-online{width:10px;height:10px;bottom:0px;right:3px;top:90px;border:3px solid var(--avatar-border-color)}.avatar{width:140px;height:140px;border-radius:50%;overflow:hidden;border:4px solid var(--el-color-white);z-index:2;position:relative}.avatar img{width:100%;height:100%;object-fit:cover}.v10 .avatar{width:80px;height:80px;border:4px solid var(--avatar-border-color);top:33px}.social-media-icons{display:flex;gap:16px;margin:0 16px;overflow-x:auto}.social-media-icons .icon-button{width:fit-content;border-radius:25px;padding:12px;gap:8px}.v10 .social-media-icons{margin-left:16px}.v10 .social-media-icons .icon-button{width:32px;height:32px;border-radius:50%;background-color:var(--btn-privacy-bg-1);color:var(--btn-privacy-color-1)}.v10 .edit-profile{padding:10px 16px 20px}.v10 .btn-edit-profile{display:flex;justify-content:center;align-items:center;width:100%;height:33px;border-radius:12px;background-color:var(--btn-privacy-bg-2);border:.5px solid var(--btn-privacy-border-1);color:var(--btn-privacy-color-1);text-decoration:none;outline:none;cursor:pointer}.v10 .btn-edit-profile:hover,.v10 .btn-edit-profile:focus{text-decoration:none;outline:none;color:var(--btn-privacy-color-1)}.v10 .icon-option svg{height:25px;width:8px}.v10 .icon-button{border:none;width:30px;height:30px}@media screen and (max-width: 700px){.social-media{margin-bottom:10px!important}}.bio{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-word;margin-bottom:4px;transition:max-height .3s ease}.bio-expanded{-webkit-line-clamp:unset;max-height:none;overflow:visible}.toggle-bio-button{display:inline-block;font-size:var(--el-font-size-base);cursor:pointer;margin-bottom:16px;color:rgba(var(--color-privacy-3-rgb),1)}.v10 .area-bio{margin-bottom:45px}.v10 .bio{color:var(--accent-color)}.v10 .toggle-bio-button{margin-left:2px;color:var(--color-button-primary)}.popover-title{pointer-events:none}.popover-title:hover{background:none;color:inherit}.popover-item{display:flex;align-items:center;cursor:pointer;min-height:32px}.el-divider--horizontal{margin:8px 0}.el-popper{display:flex;flex-direction:column;gap:4px;border-radius:18px!important;padding:16px!important}.el-popover.el-popper{min-width:fit-content}.v10 .popover-title{color:var(--accent-color)}.v10 .el-popover{background-color:var(--post-background);border-color:var(--bs-border-color)}.v10 .el-popover .el-popper__arrow:before{background-color:var(--post-background);border-color:var(--bs-border-color)}.v10 .el-popover svg,.v10 .el-popover span{color:var(--accent-color)}.icon-container{display:flex;align-items:center;justify-content:center;width:24px;height:24px;margin-right:8px}.icon-container svg{font-size:var(--el-font-size-medium)}.options-container{display:flex;align-items:flex-end;justify-content:space-between;padding:0 16px;margin-top:-72px;margin-bottom:4px}.options-container .actions{display:flex;gap:8px;margin-bottom:10px}.user-name{display:flex;align-items:center}.user-name span{font-size:var(--el-font-size-extra-large);font-weight:600;line-height:20px}.user-name svg{font-size:var(--el-font-size-large);color:rgba(var(--color-privacy-3-rgb),1)}.v10 .user-name span{color:var(--accent-color)}.profile-name{display:flex;align-items:center}.profile-name .separator{font-size:var(--el-font-size-extra-small);margin:0 4px}.v10 .profile-name{margin-top:4px;margin-bottom:7px}.v10 .profile-name span{color:var(--profile-at-color)}.user-info{padding:0 16px}.user-info .location,.user-info .site{display:flex;align-items:center;font-size:var(--el-font-size-base);margin-bottom:16px;gap:4px}.user-info .location svg,.user-info .site svg{font-size:var(--el-font-size-medium)}.user-info .site{width:fit-content;color:var(--el-color-info-dark-2);cursor:pointer;text-decoration:none;transition:all .2s}.user-info .site:hover{color:rgba(var(--color-privacy-3-rgb),1)}.v10 .user-info{padding-left:16px;position:relative;top:35px}.v10 .user-info .location{margin-bottom:50px;margin-left:3px}.tab-main{--bs-nav-tabs-border-width: none !important;width:100%!important;justify-content:space-between!important;border-bottom:2px solid transparent;border-image:linear-gradient(45deg,#F58170,#F9AF77) 1}.tab-main .nav-item.main{width:50%!important}.tab-main .nav-item.main .text-tab{border-top-left-radius:14px!important;border-top-right-radius:14px!important;height:50px;display:flex;justify-content:center;align-items:center;border:none!important;font-family:Inter,sans-serif!important;font-weight:500;font-size:var(--el-font-size-large);cursor:pointer;user-select:none}@media (max-width: 375px){.tab-main .nav-item.main .text-tab,.tab-main .nav-item.main span{font-size:var(--el-font-size-base)}}.tab-main .nav-item.main .nav-link.main-item{color:#66748e;background-color:#f4f4f4}.tab-main .nav-item.main .nav-link.main-item:hover{background-color:#fafafa}.tab-main .nav-item.main .nav-link.active.main-item{color:#f58673;background-color:#fef3f1}.tab-main .nav-item.main .nav-link.active.main-item:hover{background-color:#fcf1eb}@media (max-width: 767px){.tab-main .nav-item.main .nav-link.active.main-item:hover{background-color:#fef3f1}}.v10 .tab-main{border-bottom:none;border-image:none;border-radius:16px;background-color:var(--avatar-border-color);border:.5px solid var(--bs-border-color);height:56px;align-items:center}.v10 .tab-main .nav-item.main .text-tab{border-radius:0}.v10 .tab-main .nav-item.main .nav-link.main-item{color:var(--btn-privacy-color-1);background-color:transparent}.v10 .tab-main .nav-item.main .nav-link.main-item .icon-tab-feed{width:10px;height:20px}.v10 .tab-main .nav-item.main .nav-link.main-item .icon-tab-media-play{width:18px;height:16px}.v10 .tab-main .nav-item.main .nav-link.main-item:hover{background-color:transparent}.v10 .tab-main .nav-item.main .nav-link.active.main-item{color:var(--color-privacy);border-bottom:2px solid var(--color-privacy)!important;font-weight:500}.v10 .tab-main :nth-child(1) .active.main-item{border-bottom-left-radius:14px}.v10 .tab-main :nth-child(2) .active.main-item{border-bottom-right-radius:14px!important}.tab-sub{--bs-nav-tabs-border-width: none !important;width:100%!important;list-style:none;display:flex;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:thin;justify-content:center;gap:5px;margin-bottom:19.2px!important}.tab-sub .tab-sub::-webkit-scrollbar{height:4px}.tab-sub .tab-sub::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:4px}.tab-sub .nav-item.sub .text-sub-tab{display:flex;justify-content:center;align-items:center;font-family:inherit!important;font-weight:300;font-size:var(--el-font-size-medium);white-space:nowrap;cursor:pointer;user-select:none;color:#66748e!important}.tab-sub .nav-item.sub .nav-link.sub-item{color:#66748e;background-color:#f4f4f4;border-radius:30px;max-height:32px}.tab-sub .nav-item.sub .nav-link.sub-item:hover{background-color:var(--el-fill-color-extra-light)}.tab-sub .nav-item.sub .nav-link.active.sub-item{color:#f58673!important;background-color:#fef3f1}@media (max-width: 767px){.tab-sub .nav-item.sub .nav-link.active.sub-item:hover{background-color:#fef3f1}}.v10 .tab-sub{background-color:var(--avatar-border-color);border:.5px solid var(--bs-border-color);border-bottom:none;border-top-right-radius:24px;border-top-left-radius:24px;padding:16px 12px;margin-top:16px;margin-bottom:0!important}.v10 .tab-sub .nav-link.sub-item{color:var(--btn-privacy-color-1)!important;background-color:transparent!important}.v10 .tab-sub .nav-link.sub-item:hover{background-color:transparent!important}.v10 .tab-sub .nav-link.active.sub-item{color:var(--color-privacy)!important;background-color:var(--navigation-link-bg)!important}@media (max-width: 769px){.control-sub-menu{padding:0 13px}.text-sub-tab{font-size:var(--el-font-size-extra-small)!important;padding:8px 12px}}.count-list{display:flex;align-items:center;gap:12px}.count-list .stat-display{display:flex;align-items:center;gap:4px}.count-list .stat-display:not(:last-child):after{content:"\\2022";margin-left:6px;font-size:10px}.v10 .count-list .stat-display:not(:last-child):after{display:none}
`
      , hc = {
        computed: {
            ...Gt(yi)
        },
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
        }
    }
      , fc = Object.assign(hc, {
        __name: "App.ce",
        props: {
            ready: {
                type: [Boolean, String],
                default: !0
            },
            appSettings: [Object, String],
            token: String,
            tokenV1: String,
            locale: String,
            user: [Object, String],
            showFollowers: Boolean,
            showTipButton: Boolean,
            showChatButton: Boolean,
            showCallButton: Boolean,
            isMyProfile: Boolean,
            isPrivacyProfile: Boolean,
            isOnboarding: Boolean,
            view: String,
            showBarsButton: Boolean,
            showSocialMediaList: Boolean,
            showLocation: Boolean,
            showSite: Boolean,
            showBackButton: Boolean,
            defaultCountry: String,
            currencyCode: String,
            validationsPattern: [Object, String]
        },
        emits: {
            "before-mount": null,
            mounted: null,
            ready: null,
            loaded: null,
            "send-tip": null,
            "unfollow-profile": null,
            "enable-renewal": null,
            "report-profile": null,
            "toggle-mute": null,
            "toggle-friend": null,
            "request-verification": null,
            "open-payment-modal": null,
            "subscribe-free-profile": null,
            "subscribe-paid-profile": null
        },
        setup(t, {emit: e}) {
            const i = t
              , {theme: n} = wi()
              , s = o.ref(document.documentElement.classList.contains("v10"))
              , r = o.computed( () => L(i.showTipButton))
              , a = o.computed( () => L(i.showFollowers))
              , l = o.computed( () => L(i.showChatButton))
              , c = o.computed( () => L(i.showCallButton))
              , d = o.computed( () => L(i.isMyProfile))
              , m = o.computed( () => L(i.isPrivacyProfile))
              , g = o.computed( () => L(i.isOnboarding))
              , p = o.computed( () => L(i.showBarsButton))
              , h = o.computed( () => L(i.showSocialMediaList))
              , M = o.computed( () => L(i.showLocation))
              , D = o.computed( () => L(i.showSite))
              , f = o.computed( () => L(i.showBackButton))
              , u = o.getCurrentInstance();
            Di(i),
            xi(),
            ei(i);
            const {windowLoaded: y} = Ei({
                emit: e
            });
            return We.useProvides(u),
            Ye.useProvides(u),
            o.onMounted( () => {
                Si(i.validationsPattern)
            }
            ),
            (z, N) => {
                var S;
                return o.openBlock(),
                o.createElementBlock(o.Fragment, null, [(S = z.appStore.appSettings) != null && S.PRIVACY_MODULES ? (o.openBlock(),
                o.createBlock(o.resolveDynamicComponent("style"), {
                    key: 0
                }, {
                    default: o.withCtx( () => {
                        var b;
                        return [o.createTextVNode(' @import "' + o.toDisplayString((b = z.appStore.appSettings) == null ? void 0 : b.PRIVACY_MODULES) + '/styles/privacy.components.css"; ', 1)]
                    }
                    ),
                    _: 1
                })) : o.createCommentVNode("", !0), z.appStore.ready && o.unref(y) ? (o.openBlock(),
                o.createBlock(jt, {
                    key: 1,
                    class: o.normalizeClass(["app-wc", {
                        "dark-mode": o.unref(n) === "dark",
                        v10: s.value
                    }]),
                    user: JSON.parse(t.user),
                    "show-tip-button": r.value,
                    "show-chat-button": l.value,
                    "show-call-button": c.value,
                    "show-followers": a.value,
                    "is-my-profile": d.value,
                    "is-privacy-profile": m.value,
                    "is-onboarding": g.value,
                    view: t.view,
                    defaultCountry: t.defaultCountry,
                    "show-bars-button": p.value,
                    "show-social-media-list": h.value,
                    "show-location": M.value,
                    "show-site": D.value,
                    "show-back-button": f.value,
                    "currency-code": t.currencyCode,
                    v10: s.value,
                    onSendTip: N[0] || (N[0] = b => z.$emit("send-tip", b)),
                    onUnfollowProfile: N[1] || (N[1] = b => z.$emit("unfollow-profile", b)),
                    onEnableRenewal: N[2] || (N[2] = b => z.$emit("enable-renewal", b)),
                    onReportProfile: N[3] || (N[3] = b => z.$emit("report-profile", b)),
                    onToggleMute: N[4] || (N[4] = b => z.$emit("toggle-mute", b)),
                    onToggleFriend: N[5] || (N[5] = b => z.$emit("toggle-friend", b)),
                    onRequestVerification: N[6] || (N[6] = b => z.$emit("request-verification", b)),
                    onOpenPaymentModal: N[7] || (N[7] = b => z.$emit("open-payment-modal", b)),
                    onSubscribeFreeProfile: N[8] || (N[8] = b => z.$emit("subscribe-free-profile", b)),
                    onSubscribePaidProfile: N[9] || (N[9] = b => z.$emit("subscribe-paid-profile"))
                }, null, 8, ["class", "user", "show-tip-button", "show-chat-button", "show-call-button", "show-followers", "is-my-profile", "is-privacy-profile", "is-onboarding", "view", "defaultCountry", "show-bars-button", "show-social-media-list", "show-location", "show-site", "show-back-button", "currency-code", "v10"])) : o.createCommentVNode("", !0)], 64)
            }
        }
    })
      , Be = w(fc, [["styles", [uc]]])
      , gc = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Be
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Ot = {
        name: "privacy.web.user.info",
        version: "1.0.0",
        private: !0,
        scripts: {
            dev: "vite --host",
            build: "vite build",
            "build-w": "vite build --watch",
            serve: "vite preview",
            "clean:lib": "rm -rf dist/*.js && rm -rf dist/*.map && rm -rf dist/*.css && rm -rf dist/*.html",
            lint: "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
            reset: "rm -rf node_modules && rm -rf package-lock.json && npm i",
            "reset-all": "cd demo && npm run reset-all",
            "http-server": "http-server . -c 0 --cors *"
        },
        dependencies: {
            "@awesome.me/kit-eb3b00ea6e": "1.0.46",
            "@element-plus/icons-vue": "2.1.0",
            "@fortawesome/fontawesome-svg-core": "6.4.0",
            "@fortawesome/free-brands-svg-icons": "6.4.0",
            "@fortawesome/pro-duotone-svg-icons": "6.4.0",
            "@fortawesome/pro-light-svg-icons": "6.4.0",
            "@fortawesome/pro-regular-svg-icons": "6.4.0",
            "@fortawesome/pro-solid-svg-icons": "6.4.0",
            "@fortawesome/vue-fontawesome": "3.0.3",
            axios: "1.3.3",
            "element-plus": "2.2.30",
            maska: "2.1.9",
            moment: "2.29.4",
            photoswipe: "5.3.8",
            pinia: "2.0.30",
            "socket.io-client": "4.7.2",
            "url-join": "5.0.0",
            "vue-i18n": "9.5.0",
            "vue-jwt-decode": "0.1.0",
            "vue-plugin-load-script": "2.1.1"
        },
        devDependencies: {
            "@intlify/unplugin-vue-i18n": "1.4.0",
            "@rushstack/eslint-patch": "1.2.0",
            "@vitejs/plugin-basic-ssl": "1.0.1",
            "@vitejs/plugin-vue": "4.0.0",
            "@vue/eslint-config-prettier": "7.0.0",
            "core-js": "3.29.0",
            eslint: "8.34.0",
            "eslint-plugin-vue": "9.9.0",
            "http-server": "14.1.1",
            sass: "1.59.3",
            "unplugin-auto-import": "0.15.1",
            "unplugin-element-plus": "0.7.0",
            "unplugin-vue-components": "0.24.1",
            vite: "4.1.1",
            "vite-plugin-html-env": "1.2.8",
            vue: "3.3.0"
        }
    }.name.replace(/\./g, "-")
      , yc = ({component: t=null, plugins: e=[]}={}) => o.defineCustomElement({
        emits: t.emits,
        computed: t.computed,
        props: t.props,
        styles: t.styles,
        setup(i) {
            const n = o.createApp();
            n.component("app-root", t),
            e.forEach(l => n.use(l));
            const s = o.getCurrentInstance()
              , r = Array.isArray(t.emits) ? t.emits : Object.keys(t.emits)
              , a = Object.fromEntries((r || []).map(l => [`on${l[0].toUpperCase()}${l.slice(1)}`, c => s.emit(l, c)]));
            return Object.assign(s.appContext, n._context),
            Object.assign(s.provides, n._context.provides),
            () => o.h(t, {
                ...i,
                ...a
            })
        }
    });
    (async () => {
        const t = [Xe.css(), ...await gi()];
        if (Be.styles = t,
        !customElements.get(Ot)) {
            const i = yc({
                component: Be,
                plugins: [fi, Xe, Ye, We, ze]
            });
            customElements.define(Ot, i)
        }
    }
    )()
});
