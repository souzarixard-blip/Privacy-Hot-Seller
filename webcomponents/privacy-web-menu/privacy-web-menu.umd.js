(function(o, V) {
    typeof exports == "object" && typeof module < "u" ? V(require("vue"), require("axios"), require("vue-i18n"), require("moment"), require("moment/dist/locale/pt-br"), require("moment/dist/locale/es"), require("@fortawesome/fontawesome-svg-core"), require("element-plus"), require("element-plus/dist/locale/pt-br"), require("element-plus/dist/locale/es"), require("lodash")) : typeof define == "function" && define.amd ? define(["vue", "axios", "vue-i18n", "moment", "moment/dist/locale/pt-br", "moment/dist/locale/es", "@fortawesome/fontawesome-svg-core", "element-plus", "element-plus/dist/locale/pt-br", "element-plus/dist/locale/es", "lodash"], V) : (o = typeof globalThis < "u" ? globalThis : o || self,
    V(o.Vue, o.axios, o.VueI18n, o.moment, null, null, o["fontawesome-svg-core"], o.ElementPlus, o.ElementPlusLocalePtBr, o.ElementPlusLocaleEs, o._))
}
)(this, function(o, V, nt, je, ko, _o, O, P, ot, rt, it) {
    "use strict";
    function we(e) {
        const t = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (e) {
            for (const n in e)
                if (n !== "default") {
                    const i = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, i.get ? i : {
                        enumerable: !0,
                        get: () => e[n]
                    })
                }
        }
        return t.default = e,
        Object.freeze(t)
    }
    const J = we(nt)
      , te = we(P);
    var ct = !1;
    /*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
    let Ne;
    const $ = e => Ne = e
      , ze = Symbol();
    function ne(e) {
        return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
    }
    var H;
    (function(e) {
        e.direct = "direct",
        e.patchObject = "patch object",
        e.patchFunction = "patch function"
    }
    )(H || (H = {}));
    function at() {
        const e = o.effectScope(!0)
          , t = e.run( () => o.ref({}));
        let n = []
          , i = [];
        const r = o.markRaw({
            install(c) {
                $(r),
                r._a = c,
                c.provide(ze, r),
                c.config.globalProperties.$pinia = r,
                i.forEach(a => n.push(a)),
                i = []
            },
            use(c) {
                return !this._a && !ct ? i.push(c) : n.push(c),
                this
            },
            _p: n,
            _a: null,
            _e: e,
            _s: new Map,
            state: t
        });
        return r
    }
    const De = () => {}
    ;
    function xe(e, t, n, i=De) {
        e.push(t);
        const r = () => {
            const c = e.indexOf(t);
            c > -1 && (e.splice(c, 1),
            i())
        }
        ;
        return !n && o.getCurrentScope() && o.onScopeDispose(r),
        r
    }
    function Q(e, ...t) {
        e.slice().forEach(n => {
            n(...t)
        }
        )
    }
    function oe(e, t) {
        e instanceof Map && t instanceof Map && t.forEach( (n, i) => e.set(i, n)),
        e instanceof Set && t instanceof Set && t.forEach(e.add, e);
        for (const n in t) {
            if (!t.hasOwnProperty(n))
                continue;
            const i = t[n]
              , r = e[n];
            ne(r) && ne(i) && e.hasOwnProperty(n) && !o.isRef(i) && !o.isReactive(i) ? e[n] = oe(r, i) : e[n] = i
        }
        return e
    }
    const st = Symbol();
    function lt(e) {
        return !ne(e) || !e.hasOwnProperty(st)
    }
    const {assign: k} = Object;
    function ut(e) {
        return !!(o.isRef(e) && e.effect)
    }
    function Mt(e, t, n, i) {
        const {state: r, actions: c, getters: a} = t
          , s = n.state.value[e];
        let u;
        function l() {
            s || (n.state.value[e] = r ? r() : {});
            const M = o.toRefs(n.state.value[e]);
            return k(M, c, Object.keys(a || {}).reduce( (f, L) => (f[L] = o.markRaw(o.computed( () => {
                $(n);
                const g = n._s.get(e);
                return a[L].call(g, g)
            }
            )),
            f), {}))
        }
        return u = Ie(e, l, t, n, i, !0),
        u.$reset = function() {
            const f = r ? r() : {};
            this.$patch(L => {
                k(L, f)
            }
            )
        }
        ,
        u
    }
    function Ie(e, t, n={}, i, r, c) {
        let a;
        const s = k({
            actions: {}
        }, n)
          , u = {
            deep: !0
        };
        let l, M, f = o.markRaw([]), L = o.markRaw([]), g;
        const j = i.state.value[e];
        !c && !j && (i.state.value[e] = {}),
        o.ref({});
        let y;
        function A(w) {
            let N;
            l = M = !1,
            typeof w == "function" ? (w(i.state.value[e]),
            N = {
                type: H.patchFunction,
                storeId: e,
                events: g
            }) : (oe(i.state.value[e], w),
            N = {
                type: H.patchObject,
                payload: w,
                storeId: e,
                events: g
            });
            const h = y = Symbol();
            o.nextTick().then( () => {
                y === h && (l = !0)
            }
            ),
            M = !0,
            Q(f, N, i.state.value[e])
        }
        const d = De;
        function m() {
            a.stop(),
            f = [],
            L = [],
            i._s.delete(e)
        }
        function z(w, N) {
            return function() {
                $(i);
                const h = Array.from(arguments)
                  , _ = []
                  , v = [];
                function ee(b) {
                    _.push(b)
                }
                function ye(b) {
                    v.push(b)
                }
                Q(L, {
                    args: h,
                    name: w,
                    store: D,
                    after: ee,
                    onError: ye
                });
                let F;
                try {
                    F = N.apply(this && this.$id === e ? this : D, h)
                } catch (b) {
                    throw Q(v, b),
                    b
                }
                return F instanceof Promise ? F.then(b => (Q(_, b),
                b)).catch(b => (Q(v, b),
                Promise.reject(b))) : (Q(_, F),
                F)
            }
        }
        const I = {
            _p: i,
            $id: e,
            $onAction: xe.bind(null, L),
            $patch: A,
            $reset: d,
            $subscribe(w, N={}) {
                const h = xe(f, w, N.detached, () => _())
                  , _ = a.run( () => o.watch( () => i.state.value[e], v => {
                    (N.flush === "sync" ? M : l) && w({
                        storeId: e,
                        type: H.direct,
                        events: g
                    }, v)
                }
                , k({}, u, N)));
                return h
            },
            $dispose: m
        }
          , D = o.reactive(I);
        i._s.set(e, D);
        const x = i._e.run( () => (a = o.effectScope(),
        a.run( () => t())));
        for (const w in x) {
            const N = x[w];
            if (o.isRef(N) && !ut(N) || o.isReactive(N))
                c || (j && lt(N) && (o.isRef(N) ? N.value = j[w] : oe(N, j[w])),
                i.state.value[e][w] = N);
            else if (typeof N == "function") {
                const h = z(w, N);
                x[w] = h,
                s.actions[w] = N
            }
        }
        return k(D, x),
        k(o.toRaw(D), x),
        Object.defineProperty(D, "$state", {
            get: () => i.state.value[e],
            set: w => {
                A(N => {
                    k(N, w)
                }
                )
            }
        }),
        i._p.forEach(w => {
            k(D, a.run( () => w({
                store: D,
                app: i._a,
                pinia: i,
                options: s
            })))
        }
        ),
        j && c && n.hydrate && n.hydrate(D.$state, j),
        l = !0,
        M = !0,
        D
    }
    function he(e, t, n) {
        let i, r;
        const c = typeof t == "function";
        typeof e == "string" ? (i = e,
        r = c ? n : t) : (r = e,
        i = e.id);
        function a(s, u) {
            const l = o.getCurrentInstance();
            return s = s || l && o.inject(ze, null),
            s && $(s),
            s = Ne,
            s._s.has(i) || (c ? Ie(i, t, r, s) : Mt(i, r, s)),
            s._s.get(i)
        }
        return a.$id = i,
        a
    }
    let dt = "Store";
    function ft(...e) {
        return e.reduce( (t, n) => (t[n.$id + dt] = function() {
            return n(this.$pinia)
        }
        ,
        t), {})
    }
    const Ce = at()
      , be = {
        install(e) {
            e.use(Ce)
        },
        useProvides(e) {
            const t = () => ({
                global: {
                    instance: e,
                    ready: e.provides.ready,
                    appSettings: e.provides.appSettings,
                    token: e.provides.token,
                    $http: e.provides.$http,
                    locale: e.provides.locale
                }
            });
            Ce.use(t)
        }
    }
      , mt = {
        base: {
            search: e => {
                const {normalize: t} = e;
                return t(["Pesquise aqui"])
            }
            ,
            language: {
                "en-US": e => {
                    const {normalize: t} = e;
                    return t(["Inglês"])
                }
                ,
                "pt-BR": e => {
                    const {normalize: t} = e;
                    return t(["Português"])
                }
                ,
                "es-ES": e => {
                    const {normalize: t} = e;
                    return t(["Espanhol"])
                }
                ,
                code: e => {
                    const {normalize: t} = e;
                    return t(["pt-br"])
                }
            }
        },
        menu: {
            home: e => {
                const {normalize: t} = e;
                return t(["Página inicial"])
            }
            ,
            search: e => {
                const {normalize: t} = e;
                return t(["Pesquisar"])
            }
            ,
            publication: e => {
                const {normalize: t} = e;
                return t(["Nova Publicação"])
            }
            ,
            chat: e => {
                const {normalize: t} = e;
                return t(["Chat"])
            }
            ,
            notification: e => {
                const {normalize: t} = e;
                return t(["Notificação"])
            }
            ,
            profile: e => {
                const {normalize: t} = e;
                return t(["Perfil"])
            }
            ,
            following: e => {
                const {normalize: t} = e;
                return t(["Seguindo"])
            }
            ,
            myWallet: e => {
                const {normalize: t} = e;
                return t(["Pagamentos"])
            }
            ,
            followers: e => {
                const {normalize: t} = e;
                return t(["Seguidores"])
            }
            ,
            myCards: e => {
                const {normalize: t} = e;
                return t(["Meus Cartões"])
            }
            ,
            myBank: e => {
                const {normalize: t} = e;
                return t(["Meu Banco"])
            }
            ,
            myPrivacy: e => {
                const {normalize: t} = e;
                return t(["Meu Privacy"])
            }
            ,
            vault: e => {
                const {normalize: t} = e;
                return t(["Acervo"])
            }
            ,
            collection: e => {
                const {normalize: t} = e;
                return t(["Coleções"])
            }
            ,
            becomeCreator: e => {
                const {normalize: t} = e;
                return t(["Torne-se Criador"])
            }
            ,
            settings: e => {
                const {normalize: t} = e;
                return t(["Configurações"])
            }
            ,
            security: e => {
                const {normalize: t} = e;
                return t(["Segurança"])
            }
            ,
            privacy: e => {
                const {normalize: t} = e;
                return t(["Privacidade"])
            }
            ,
            help: e => {
                const {normalize: t} = e;
                return t(["Ajuda"])
            }
            ,
            topshare: e => {
                const {normalize: t} = e;
                return t(["topshare️"])
            }
            ,
            logout: e => {
                const {normalize: t} = e;
                return t(["Sair"])
            }
            ,
            more: e => {
                const {normalize: t} = e;
                return t(["Mais"])
            }
        }
    }
      , gt = {
        base: {
            search: e => {
                const {normalize: t} = e;
                return t(["Search here"])
            }
            ,
            language: {
                "en-US": e => {
                    const {normalize: t} = e;
                    return t(["English"])
                }
                ,
                "pt-BR": e => {
                    const {normalize: t} = e;
                    return t(["Portuguese"])
                }
                ,
                "es-ES": e => {
                    const {normalize: t} = e;
                    return t(["Spanish"])
                }
                ,
                code: e => {
                    const {normalize: t} = e;
                    return t(["en-us"])
                }
            }
        },
        menu: {
            home: e => {
                const {normalize: t} = e;
                return t(["Home"])
            }
            ,
            search: e => {
                const {normalize: t} = e;
                return t(["Search"])
            }
            ,
            publication: e => {
                const {normalize: t} = e;
                return t(["New Publication"])
            }
            ,
            chat: e => {
                const {normalize: t} = e;
                return t(["Chat"])
            }
            ,
            notification: e => {
                const {normalize: t} = e;
                return t(["Notification"])
            }
            ,
            profile: e => {
                const {normalize: t} = e;
                return t(["My profile"])
            }
            ,
            following: e => {
                const {normalize: t} = e;
                return t(["Following"])
            }
            ,
            myWallet: e => {
                const {normalize: t} = e;
                return t(["Payments"])
            }
            ,
            followers: e => {
                const {normalize: t} = e;
                return t(["Followers"])
            }
            ,
            myCards: e => {
                const {normalize: t} = e;
                return t(["My cards"])
            }
            ,
            myBank: e => {
                const {normalize: t} = e;
                return t(["My bank"])
            }
            ,
            myPrivacy: e => {
                const {normalize: t} = e;
                return t(["My Privacy"])
            }
            ,
            vault: e => {
                const {normalize: t} = e;
                return t(["Vault"])
            }
            ,
            collection: e => {
                const {normalize: t} = e;
                return t(["Collections"])
            }
            ,
            becomeCreator: e => {
                const {normalize: t} = e;
                return t(["Be a Creator"])
            }
            ,
            settings: e => {
                const {normalize: t} = e;
                return t(["Settings"])
            }
            ,
            security: e => {
                const {normalize: t} = e;
                return t(["Security"])
            }
            ,
            privacy: e => {
                const {normalize: t} = e;
                return t(["Privacy"])
            }
            ,
            help: e => {
                const {normalize: t} = e;
                return t(["Help"])
            }
            ,
            topshare: e => {
                const {normalize: t} = e;
                return t(["topshare️"])
            }
            ,
            logout: e => {
                const {normalize: t} = e;
                return t(["Logout"])
            }
            ,
            more: e => {
                const {normalize: t} = e;
                return t(["More"])
            }
        }
    }
      , pt = {
        base: {
            search: e => {
                const {normalize: t} = e;
                return t(["Buscar"])
            }
            ,
            language: {
                "en-US": e => {
                    const {normalize: t} = e;
                    return t(["Inglés"])
                }
                ,
                "pt-BR": e => {
                    const {normalize: t} = e;
                    return t(["Portugués"])
                }
                ,
                "es-ES": e => {
                    const {normalize: t} = e;
                    return t(["Español"])
                }
                ,
                code: e => {
                    const {normalize: t} = e;
                    return t(["es-es"])
                }
            }
        },
        menu: {
            home: e => {
                const {normalize: t} = e;
                return t(["Inicio"])
            }
            ,
            search: e => {
                const {normalize: t} = e;
                return t(["Buscar"])
            }
            ,
            publication: e => {
                const {normalize: t} = e;
                return t(["Nueva publicación"])
            }
            ,
            chat: e => {
                const {normalize: t} = e;
                return t(["Chat"])
            }
            ,
            notification: e => {
                const {normalize: t} = e;
                return t(["Notificación"])
            }
            ,
            profile: e => {
                const {normalize: t} = e;
                return t(["Mi perfil"])
            }
            ,
            following: e => {
                const {normalize: t} = e;
                return t(["Siguiendo"])
            }
            ,
            followers: e => {
                const {normalize: t} = e;
                return t(["Seguidores"])
            }
            ,
            myWallet: e => {
                const {normalize: t} = e;
                return t(["Pagos"])
            }
            ,
            myCards: e => {
                const {normalize: t} = e;
                return t(["Mis tarjetas"])
            }
            ,
            myBank: e => {
                const {normalize: t} = e;
                return t(["Mi banco "])
            }
            ,
            myPrivacy: e => {
                const {normalize: t} = e;
                return t(["Mi Privacy"])
            }
            ,
            vault: e => {
                const {normalize: t} = e;
                return t(["Bóveda"])
            }
            ,
            collection: e => {
                const {normalize: t} = e;
                return t(["Colecciones"])
            }
            ,
            becomeCreator: e => {
                const {normalize: t} = e;
                return t(["Ser un Creator"])
            }
            ,
            settings: e => {
                const {normalize: t} = e;
                return t(["Configuraciones"])
            }
            ,
            security: e => {
                const {normalize: t} = e;
                return t(["Seguridad"])
            }
            ,
            privacy: e => {
                const {normalize: t} = e;
                return t(["Privacudad"])
            }
            ,
            help: e => {
                const {normalize: t} = e;
                return t(["Ayuda"])
            }
            ,
            topshare: e => {
                const {normalize: t} = e;
                return t(["topshare️"])
            }
            ,
            logout: e => {
                const {normalize: t} = e;
                return t(["Cerrar sesión"])
            }
            ,
            more: e => {
                const {normalize: t} = e;
                return t(["Más"])
            }
        }
    };
    let B = null;
    const re = {
        install(e) {
            return B = J.createI18n({
                legacy: !1,
                locale: "pt",
                fallbackLocale: "pt",
                globalInjection: !1
            }),
            e.use(B),
            Lt(),
            B
        },
        get global() {
            return B.global
        }
    };
    function Lt() {
        o.inject(J.I18nInjectionKey) || o.provide(J.I18nInjectionKey, B)
    }
    function U() {
        var i, r;
        const e = o.getCurrentInstance();
        o.inject((r = (i = e == null ? void 0 : e.appContext) == null ? void 0 : i.app) == null ? void 0 : r.__VUE_I18N_SYMBOL__) || (e.isCE = !0);
        const {t: n} = J.useI18n({
            messages: {
                pt: mt,
                en: gt,
                es: pt
            }
        });
        return {
            t: n
        }
    }
    je.locale("pt-br");
    function yt(e) {
        je.locale(e)
    }
    const Y = {
        get defaultLocale() {
            return "pt"
        },
        set currentLocale(e) {
            e = e && e.split("-")[0],
            re.global.locale.value = e
        },
        get currentLocale() {
            return re.global.locale.value
        },
        setTranslate({t: e}) {
            this.t = e
        },
        getUserLocale() {
            const e = window.navigator.language || window.navigator.userLanguage || Y.defaultLocale;
            return {
                locale: e,
                localeNoRegion: e.split("-")[0]
            }
        },
        getMessage(e) {
            return this.t(e)
        },
        async switchLanguage(e) {
            Y.currentLocale = e,
            yt(e)
        }
    };
    function jt(e) {
        const {t} = U();
        Y.setTranslate({
            t
        }),
        o.watch(e.locale, n => {
            Y.switchLanguage(n || e.locale)
        }
        , {
            immediate: !0
        })
    }
    const S = {
        value: null,
        provides: null,
        emit: null
    }
      , Te = {
        install(e, t) {
            e.config.globalProperties.$http || (S.value = V.create({
                baseURL: t == null ? void 0 : t.baseUrl
            }),
            S.value.interceptors.request.use(n => (n.includeAppAuthorization != !1 && S.provides.token.value && !n.headers.Authorization && (n.apiAuth == "v1" ? n.headers.Authorization = `Bearer ${S.provides.tokenV1.value}` : n.headers.Authorization = `Bearer ${S.provides.token.value}`),
            n.headers["Accept-Language"] || (n.headers["Accept-Language"] = S.provides.locale.value || Y.defaultLocale),
            n), n => Promise.reject(n)),
            e.config.globalProperties.$http = S.value)
        },
        useProvides(e) {
            S.provides = e.provides,
            S.emit = e.emit
        }
    };
    function Se(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
    }
    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Se(Object(n), !0).forEach(function(i) {
                C(e, i, n[i])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach(function(i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
            })
        }
        return e
    }
    function X(e) {
        return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        X(e)
    }
    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function wt(e, t) {
        if (e == null)
            return {};
        var n = {}, i = Object.keys(e), r, c;
        for (c = 0; c < i.length; c++)
            r = i[c],
            !(t.indexOf(r) >= 0) && (n[r] = e[r]);
        return n
    }
    function Nt(e, t) {
        if (e == null)
            return {};
        var n = wt(e, t), i, r;
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            for (r = 0; r < c.length; r++)
                i = c[r],
                !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i])
        }
        return n
    }
    function ie(e) {
        return zt(e) || Dt(e) || xt(e) || It()
    }
    function zt(e) {
        if (Array.isArray(e))
            return ce(e)
    }
    function Dt(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
            return Array.from(e)
    }
    function xt(e, t) {
        if (e) {
            if (typeof e == "string")
                return ce(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor && (n = e.constructor.name),
            n === "Map" || n === "Set")
                return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return ce(e, t)
        }
    }
    function ce(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++)
            i[n] = e[n];
        return i
    }
    function It() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
      , Ae = {
        exports: {}
    };
    (function(e) {
        (function(t) {
            var n = function(d, m, z) {
                if (!l(m) || f(m) || L(m) || g(m) || u(m))
                    return m;
                var I, D = 0, x = 0;
                if (M(m))
                    for (I = [],
                    x = m.length; D < x; D++)
                        I.push(n(d, m[D], z));
                else {
                    I = {};
                    for (var w in m)
                        Object.prototype.hasOwnProperty.call(m, w) && (I[d(w, z)] = n(d, m[w], z))
                }
                return I
            }
              , i = function(d, m) {
                m = m || {};
                var z = m.separator || "_"
                  , I = m.split || /(?=[A-Z])/;
                return d.split(I).join(z)
            }
              , r = function(d) {
                return j(d) ? d : (d = d.replace(/[\-_\s]+(.)?/g, function(m, z) {
                    return z ? z.toUpperCase() : ""
                }),
                d.substr(0, 1).toLowerCase() + d.substr(1))
            }
              , c = function(d) {
                var m = r(d);
                return m.substr(0, 1).toUpperCase() + m.substr(1)
            }
              , a = function(d, m) {
                return i(d, m).toLowerCase()
            }
              , s = Object.prototype.toString
              , u = function(d) {
                return typeof d == "function"
            }
              , l = function(d) {
                return d === Object(d)
            }
              , M = function(d) {
                return s.call(d) == "[object Array]"
            }
              , f = function(d) {
                return s.call(d) == "[object Date]"
            }
              , L = function(d) {
                return s.call(d) == "[object RegExp]"
            }
              , g = function(d) {
                return s.call(d) == "[object Boolean]"
            }
              , j = function(d) {
                return d = d - 0,
                d === d
            }
              , y = function(d, m) {
                var z = m && "process"in m ? m.process : m;
                return typeof z != "function" ? d : function(I, D) {
                    return z(I, d, D)
                }
            }
              , A = {
                camelize: r,
                decamelize: a,
                pascalize: c,
                depascalize: a,
                camelizeKeys: function(d, m) {
                    return n(y(r, m), d)
                },
                decamelizeKeys: function(d, m) {
                    return n(y(a, m), d, m)
                },
                pascalizeKeys: function(d, m) {
                    return n(y(c, m), d)
                },
                depascalizeKeys: function() {
                    return this.decamelizeKeys.apply(this, arguments)
                }
            };
            e.exports ? e.exports = A : t.humps = A
        }
        )(ht)
    }
    )(Ae);
    var Ct = Ae.exports
      , bt = ["class", "style"];
    function Tt(e) {
        return e.split(";").map(function(t) {
            return t.trim()
        }).filter(function(t) {
            return t
        }).reduce(function(t, n) {
            var i = n.indexOf(":")
              , r = Ct.camelize(n.slice(0, i))
              , c = n.slice(i + 1).trim();
            return t[r] = c,
            t
        }, {})
    }
    function St(e) {
        return e.split(/\s+/).reduce(function(t, n) {
            return t[n] = !0,
            t
        }, {})
    }
    function ae(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (typeof e == "string")
            return e;
        var i = (e.children || []).map(function(u) {
            return ae(u)
        })
          , r = Object.keys(e.attributes || {}).reduce(function(u, l) {
            var M = e.attributes[l];
            switch (l) {
            case "class":
                u.class = St(M);
                break;
            case "style":
                u.style = Tt(M);
                break;
            default:
                u.attrs[l] = M
            }
            return u
        }, {
            attrs: {},
            class: {},
            style: {}
        });
        n.class;
        var c = n.style
          , a = c === void 0 ? {} : c
          , s = Nt(n, bt);
        return o.h(e.tag, T(T(T({}, t), {}, {
            class: r.class,
            style: T(T({}, r.style), a)
        }, r.attrs), s), i)
    }
    var Oe = !1;
    try {
        Oe = !0
    } catch {}
    function At() {
        if (!Oe && console && typeof console.error == "function") {
            var e;
            (e = console).error.apply(e, arguments)
        }
    }
    function Z(e, t) {
        return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? C({}, e, t) : {}
    }
    function Ot(e) {
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
        C(t, "fa-".concat(e.size), e.size !== null),
        C(t, "fa-rotate-".concat(e.rotation), e.rotation !== null),
        C(t, "fa-pull-".concat(e.pull), e.pull !== null),
        C(t, "fa-swap-opacity", e.swapOpacity),
        C(t, "fa-bounce", e.bounce),
        C(t, "fa-shake", e.shake),
        C(t, "fa-beat", e.beat),
        C(t, "fa-fade", e.fade),
        C(t, "fa-beat-fade", e.beatFade),
        C(t, "fa-flash", e.flash),
        C(t, "fa-spin-pulse", e.spinPulse),
        C(t, "fa-spin-reverse", e.spinReverse),
        t);
        return Object.keys(n).map(function(i) {
            return n[i] ? i : null
        }).filter(function(i) {
            return i
        })
    }
    function Ee(e) {
        if (e && X(e) === "object" && e.prefix && e.iconName && e.icon)
            return e;
        if (O.parse.icon)
            return O.parse.icon(e);
        if (e === null)
            return null;
        if (X(e) === "object" && e.prefix && e.iconName)
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
    var Et = o.defineComponent({
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
            var i = n.attrs
              , r = o.computed(function() {
                return Ee(t.icon)
            })
              , c = o.computed(function() {
                return Z("classes", Ot(t))
            })
              , a = o.computed(function() {
                return Z("transform", typeof t.transform == "string" ? O.parse.transform(t.transform) : t.transform)
            })
              , s = o.computed(function() {
                return Z("mask", Ee(t.mask))
            })
              , u = o.computed(function() {
                return O.icon(r.value, T(T(T(T({}, c.value), a.value), s.value), {}, {
                    symbol: t.symbol,
                    title: t.title
                }))
            });
            o.watch(u, function(M) {
                if (!M)
                    return At("Could not find one or more icon(s)", r.value, s.value)
            }, {
                immediate: !0
            });
            var l = o.computed(function() {
                return u.value ? ae(u.value.abstract[0], {}, i) : null
            });
            return function() {
                return l.value
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
        setup: function(t, n) {
            var i = n.slots
              , r = O.config.familyPrefix
              , c = o.computed(function() {
                return ["".concat(r, "-layers")].concat(ie(t.fixedWidth ? ["".concat(r, "-fw")] : []))
            });
            return function() {
                return o.h("div", {
                    class: c.value
                }, i.default ? i.default() : [])
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
                validator: function(t) {
                    return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1
                }
            }
        },
        setup: function(t, n) {
            var i = n.attrs
              , r = O.config.familyPrefix
              , c = o.computed(function() {
                return Z("classes", [].concat(ie(t.counter ? ["".concat(r, "-layers-counter")] : []), ie(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])))
            })
              , a = o.computed(function() {
                return Z("transform", typeof t.transform == "string" ? O.parse.transform(t.transform) : t.transform)
            })
              , s = o.computed(function() {
                var l = O.text(t.value.toString(), T(T({}, a.value), c.value))
                  , M = l.abstract;
                return t.counter && (M[0].attributes.class = M[0].attributes.class.replace("fa-layers-text", "")),
                M[0]
            })
              , u = o.computed(function() {
                return ae(s.value, {}, i)
            });
            return function() {
                return u.value
            }
        }
    });
    const ve = {
        css: O.dom.css,
        install(e) {
            e.component("font-awesome-icon", Et)
        }
    }
      , vt = {
        install(e) {
            e.directive("loading", te.vLoading);
            for (const t in te)
                t.startsWith("El") && e.component(t, te[t])
        }
    };
    o.computed( () => {
        var e, t;
        if ((e = Y.currentLocale) != null && e.startsWith("pt"))
            return ot;
        if ((t = Y.currentLocale) != null && t.startsWith("es"))
            return rt
    }
    );
    async function kt() {
        const e = Object.assign({
            "../App.ce.vue": () => Promise.resolve().then( () => Eo),
            "../components/ChatNotifier.vue": () => Promise.resolve().then( () => nn),
            "../components/Index.vue": () => Promise.resolve().then( () => To),
            "../components/LangOptions.vue": () => Promise.resolve().then( () => In),
            "../components/MenuItem.vue": () => Promise.resolve().then( () => wn),
            "../components/MenuList.vue": () => Promise.resolve().then( () => On),
            "../components/SideBar.vue": () => Promise.resolve().then( () => ho),
            "../components/UserDescription.vue": () => Promise.resolve().then( () => Jn),
            "../components/VerifiedIcon.vue": () => Promise.resolve().then( () => Yn)
        })
          , t = [];
        for (const n in e) {
            const i = await e[n]();
            t.push(i.default.styles)
        }
        return [t.flat().join("")]
    }
    const _t = he("app", {
        getters: {
            ready: e => e.global.ready,
            appSettings: e => e.global.appSettings,
            token: e => e.global.token,
            $http: e => e.global.$http,
            locale: e => e.global.locale
        }
    });
    function Yt(e) {
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
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            if (typeof r != "string")
                throw new TypeError("Url must be a string. Received " + r);
            r !== "" && (i > 0 && (r = r.replace(/^[\/]+/, "")),
            i < e.length - 1 ? r = r.replace(/[\/]+$/, "") : r = r.replace(/[\/]+$/, "/"),
            t.push(r))
        }
        var c = t.join("/");
        c = c.replace(/\/(\?|&|#[^!])/g, "$1");
        var a = c.split("?");
        return c = a.shift() + (a.length > 0 ? "?" : "") + a.join("&"),
        c
    }
    function Qt() {
        var e;
        return typeof arguments[0] == "object" ? e = arguments[0] : e = [].slice.call(arguments),
        Yt(e)
    }
    const Ut = 992;
    function ke() {
        return window.innerWidth < Ut
    }
    function _e(e) {
        return (e == null ? void 0 : e.toString().toLocaleLowerCase()) === "true" || e === !0
    }
    function Vt(e) {
        return e ? typeof e == "object" ? e : JSON.parse(e) : {}
    }
    function Pt(e) {
        const t = e ? atob(e) : void 0;
        return Vt(t)
    }
    function Ht(e) {
        for (const t in e)
            Bt(e[t]) && (e[t] = e[t].replace(/\?&/g, ""))
    }
    function Bt(e) {
        return e && typeof e == "string" && e.startsWith("http")
    }
    function R(e, t=!1) {
        if (t) {
            window.open(e, "_blank");
            return
        }
        window.location.href = Qt(window.location.origin, e)
    }
    function Zt(e) {
        if (e >= 1e6) {
            let t = (e / 1e6).toFixed(1);
            return t.endsWith(".0") && (t = t.slice(0, -2)),
            t + "M"
        } else if (e >= 1e3) {
            let t = (e / 1e3).toFixed(1);
            return t.endsWith(".0") && (t = t.slice(0, -2)),
            t + "k"
        } else
            return e.toString()
    }
    const Rt = () => {
        const e = o.ref(ke())
          , t = new ResizeObserver( () => {
            e.value = ke()
        }
        );
        o.onMounted( () => {
            t.observe(document.body),
            o.provide("isSmallDevice", e)
        }
        ),
        o.onBeforeUnmount( () => {
            t && (t.unobserve(document.body),
            t.disconnect(document.body))
        }
        )
    }
      , Wt = e => {
        o.provide("ready", o.computed( () => e.ready == null ? !0 : _e(e.ready))),
        o.provide("enabledNotification", o.computed( () => e.enabledNotification == null ? !1 : _e(e.enabledNotification))),
        o.provide("appSettings", o.computed( () => {
            const t = Pt(e.appSettings);
            return Ht(t),
            t
        }
        )),
        o.provide("userSettings", o.computed( () => JSON.parse(e.userSettings))),
        o.provide("token", o.computed( () => e.token)),
        o.provide("$http", o.computed( () => S.value)),
        o.provide("locale", o.computed( () => e.locale))
    }
      , Gt = ({emit: e}) => {
        const t = o.ref(!1);
        return o.onMounted( () => {
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
      , Ft = () => {
        const e = o.ref(document.documentElement.getAttribute("data-theme") || "light")
          , t = o.computed( () => e.value)
          , n = i => {
            var r;
            (r = i.detail) != null && r.theme && (e.value = i.detail.theme)
        }
        ;
        return o.onMounted( () => {
            document.addEventListener("theme-changed", n)
        }
        ),
        o.onBeforeUnmount( () => {
            document.removeEventListener("theme-changed", n)
        }
        ),
        {
            theme: t
        }
    }
      , Jt = {
        run(e) {
            return window.WC_AUTO_LOADER.run(e)
        }
    };
    var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function Xt(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var se = {}
      , Kt = {
        get exports() {
            return se
        },
        set exports(e) {
            se = e
        }
    };
    (function(e, t) {
        (function(n, i) {
            e.exports = i()
        }
        )($t, function() {
            return function(n) {
                function i(c) {
                    if (r[c])
                        return r[c].exports;
                    var a = r[c] = {
                        i: c,
                        l: !1,
                        exports: {}
                    };
                    return n[c].call(a.exports, a, a.exports, i),
                    a.l = !0,
                    a.exports
                }
                var r = {};
                return i.m = n,
                i.c = r,
                i.i = function(c) {
                    return c
                }
                ,
                i.d = function(c, a, s) {
                    i.o(c, a) || Object.defineProperty(c, a, {
                        configurable: !1,
                        enumerable: !0,
                        get: s
                    })
                }
                ,
                i.n = function(c) {
                    var a = c && c.__esModule ? function() {
                        return c.default
                    }
                    : function() {
                        return c
                    }
                    ;
                    return i.d(a, "a", a),
                    a
                }
                ,
                i.o = function(c, a) {
                    return Object.prototype.hasOwnProperty.call(c, a)
                }
                ,
                i.p = "/vue-jwt-decode/dist",
                i(i.s = 10)
            }([function(n, i, r) {
                n.exports = !r(1)(function() {
                    return Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a != 7
                })
            }
            , function(n, i) {
                n.exports = function(r) {
                    try {
                        return !!r()
                    } catch {
                        return !0
                    }
                }
            }
            , function(n, i) {
                var r = n.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
                typeof __g == "number" && (__g = r)
            }
            , function(n, i) {
                n.exports = function(r) {
                    return typeof r == "object" ? r !== null : typeof r == "function"
                }
            }
            , function(n, i) {
                var r = n.exports = {
                    version: "2.5.3"
                };
                typeof __e == "number" && (__e = r)
            }
            , function(n, i) {
                n.exports = function(r) {
                    if (r == null)
                        throw TypeError("Can't call method on  " + r);
                    return r
                }
            }
            , function(n, i, r) {
                var c = r(16);
                n.exports = Object("z").propertyIsEnumerable(0) ? Object : function(a) {
                    return c(a) == "String" ? a.split("") : Object(a)
                }
            }
            , function(n, i) {
                var r = Math.ceil
                  , c = Math.floor;
                n.exports = function(a) {
                    return isNaN(a = +a) ? 0 : (a > 0 ? c : r)(a)
                }
            }
            , function(n, i, r) {
                var c = r(6)
                  , a = r(5);
                n.exports = function(s) {
                    return c(a(s))
                }
            }
            , function(n, i, r) {
                var c = r(11)
                  , a = r.n(c);
                i.a = {
                    install: function(s) {
                        s.prototype.$jwtDec = this,
                        s.jwtDec = this
                    },
                    decode: function(s) {
                        if (typeof s != "string" & !s instanceof String)
                            return null;
                        var u = s.split(".");
                        if (u.length < 2)
                            return null;
                        var l = JSON.parse(atob(u[0]))
                          , M = JSON.parse(atob(u[1]));
                        return a()({}, l, M)
                    }
                }
            }
            , function(n, i, r) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var c = r(9);
                i.default = c.a
            }
            , function(n, i, r) {
                n.exports = {
                    default: r(12),
                    __esModule: !0
                }
            }
            , function(n, i, r) {
                r(38),
                n.exports = r(4).Object.assign
            }
            , function(n, i) {
                n.exports = function(r) {
                    if (typeof r != "function")
                        throw TypeError(r + " is not a function!");
                    return r
                }
            }
            , function(n, i, r) {
                var c = r(3);
                n.exports = function(a) {
                    if (!c(a))
                        throw TypeError(a + " is not an object!");
                    return a
                }
            }
            , function(n, i, r) {
                var c = r(8)
                  , a = r(34)
                  , s = r(33);
                n.exports = function(u) {
                    return function(l, M, f) {
                        var L, g = c(l), j = a(g.length), y = s(f, j);
                        if (u && M != M) {
                            for (; j > y; )
                                if ((L = g[y++]) != L)
                                    return !0
                        } else
                            for (; j > y; y++)
                                if ((u || y in g) && g[y] === M)
                                    return u || y || 0;
                        return !u && -1
                    }
                }
            }
            , function(n, i) {
                var r = {}.toString;
                n.exports = function(c) {
                    return r.call(c).slice(8, -1)
                }
            }
            , function(n, i, r) {
                var c = r(13);
                n.exports = function(a, s, u) {
                    if (c(a),
                    s === void 0)
                        return a;
                    switch (u) {
                    case 1:
                        return function(l) {
                            return a.call(s, l)
                        }
                        ;
                    case 2:
                        return function(l, M) {
                            return a.call(s, l, M)
                        }
                        ;
                    case 3:
                        return function(l, M, f) {
                            return a.call(s, l, M, f)
                        }
                    }
                    return function() {
                        return a.apply(s, arguments)
                    }
                }
            }
            , function(n, i, r) {
                var c = r(3)
                  , a = r(2).document
                  , s = c(a) && c(a.createElement);
                n.exports = function(u) {
                    return s ? a.createElement(u) : {}
                }
            }
            , function(n, i) {
                n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            }
            , function(n, i, r) {
                var c = r(2)
                  , a = r(4)
                  , s = r(17)
                  , u = r(22)
                  , l = function(M, f, L) {
                    var g, j, y, A = M & l.F, d = M & l.G, m = M & l.S, z = M & l.P, I = M & l.B, D = M & l.W, x = d ? a : a[f] || (a[f] = {}), w = x.prototype, N = d ? c : m ? c[f] : (c[f] || {}).prototype;
                    d && (L = f);
                    for (g in L)
                        (j = !A && N && N[g] !== void 0) && g in x || (y = j ? N[g] : L[g],
                        x[g] = d && typeof N[g] != "function" ? L[g] : I && j ? s(y, c) : D && N[g] == y ? function(h) {
                            var _ = function(v, ee, ye) {
                                if (this instanceof h) {
                                    switch (arguments.length) {
                                    case 0:
                                        return new h;
                                    case 1:
                                        return new h(v);
                                    case 2:
                                        return new h(v,ee)
                                    }
                                    return new h(v,ee,ye)
                                }
                                return h.apply(this, arguments)
                            };
                            return _.prototype = h.prototype,
                            _
                        }(y) : z && typeof y == "function" ? s(Function.call, y) : y,
                        z && ((x.virtual || (x.virtual = {}))[g] = y,
                        M & l.R && w && !w[g] && u(w, g, y)))
                };
                l.F = 1,
                l.G = 2,
                l.S = 4,
                l.P = 8,
                l.B = 16,
                l.W = 32,
                l.U = 64,
                l.R = 128,
                n.exports = l
            }
            , function(n, i) {
                var r = {}.hasOwnProperty;
                n.exports = function(c, a) {
                    return r.call(c, a)
                }
            }
            , function(n, i, r) {
                var c = r(25)
                  , a = r(30);
                n.exports = r(0) ? function(s, u, l) {
                    return c.f(s, u, a(1, l))
                }
                : function(s, u, l) {
                    return s[u] = l,
                    s
                }
            }
            , function(n, i, r) {
                n.exports = !r(0) && !r(1)(function() {
                    return Object.defineProperty(r(18)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a != 7
                })
            }
            , function(n, i, r) {
                var c = r(28)
                  , a = r(26)
                  , s = r(29)
                  , u = r(35)
                  , l = r(6)
                  , M = Object.assign;
                n.exports = !M || r(1)(function() {
                    var f = {}
                      , L = {}
                      , g = Symbol()
                      , j = "abcdefghijklmnopqrst";
                    return f[g] = 7,
                    j.split("").forEach(function(y) {
                        L[y] = y
                    }),
                    M({}, f)[g] != 7 || Object.keys(M({}, L)).join("") != j
                }) ? function(f, L) {
                    for (var g = u(f), j = arguments.length, y = 1, A = a.f, d = s.f; j > y; )
                        for (var m, z = l(arguments[y++]), I = A ? c(z).concat(A(z)) : c(z), D = I.length, x = 0; D > x; )
                            d.call(z, m = I[x++]) && (g[m] = z[m]);
                    return g
                }
                : M
            }
            , function(n, i, r) {
                var c = r(14)
                  , a = r(23)
                  , s = r(36)
                  , u = Object.defineProperty;
                i.f = r(0) ? Object.defineProperty : function(l, M, f) {
                    if (c(l),
                    M = s(M, !0),
                    c(f),
                    a)
                        try {
                            return u(l, M, f)
                        } catch {}
                    if ("get"in f || "set"in f)
                        throw TypeError("Accessors not supported!");
                    return "value"in f && (l[M] = f.value),
                    l
                }
            }
            , function(n, i) {
                i.f = Object.getOwnPropertySymbols
            }
            , function(n, i, r) {
                var c = r(21)
                  , a = r(8)
                  , s = r(15)(!1)
                  , u = r(31)("IE_PROTO");
                n.exports = function(l, M) {
                    var f, L = a(l), g = 0, j = [];
                    for (f in L)
                        f != u && c(L, f) && j.push(f);
                    for (; M.length > g; )
                        c(L, f = M[g++]) && (~s(j, f) || j.push(f));
                    return j
                }
            }
            , function(n, i, r) {
                var c = r(27)
                  , a = r(19);
                n.exports = Object.keys || function(s) {
                    return c(s, a)
                }
            }
            , function(n, i) {
                i.f = {}.propertyIsEnumerable
            }
            , function(n, i) {
                n.exports = function(r, c) {
                    return {
                        enumerable: !(1 & r),
                        configurable: !(2 & r),
                        writable: !(4 & r),
                        value: c
                    }
                }
            }
            , function(n, i, r) {
                var c = r(32)("keys")
                  , a = r(37);
                n.exports = function(s) {
                    return c[s] || (c[s] = a(s))
                }
            }
            , function(n, i, r) {
                var c = r(2)
                  , a = c["__core-js_shared__"] || (c["__core-js_shared__"] = {});
                n.exports = function(s) {
                    return a[s] || (a[s] = {})
                }
            }
            , function(n, i, r) {
                var c = r(7)
                  , a = Math.max
                  , s = Math.min;
                n.exports = function(u, l) {
                    return u = c(u),
                    u < 0 ? a(u + l, 0) : s(u, l)
                }
            }
            , function(n, i, r) {
                var c = r(7)
                  , a = Math.min;
                n.exports = function(s) {
                    return s > 0 ? a(c(s), 9007199254740991) : 0
                }
            }
            , function(n, i, r) {
                var c = r(5);
                n.exports = function(a) {
                    return Object(c(a))
                }
            }
            , function(n, i, r) {
                var c = r(3);
                n.exports = function(a, s) {
                    if (!c(a))
                        return a;
                    var u, l;
                    if (s && typeof (u = a.toString) == "function" && !c(l = u.call(a)) || typeof (u = a.valueOf) == "function" && !c(l = u.call(a)) || !s && typeof (u = a.toString) == "function" && !c(l = u.call(a)))
                        return l;
                    throw TypeError("Can't convert object to primitive value")
                }
            }
            , function(n, i) {
                var r = 0
                  , c = Math.random();
                n.exports = function(a) {
                    return "Symbol(".concat(a === void 0 ? "" : a, ")_", (++r + c).toString(36))
                }
            }
            , function(n, i, r) {
                var c = r(20);
                c(c.S + c.F, "Object", {
                    assign: r(24)
                })
            }
            ])
        })
    }
    )(Kt);
    const qt = Xt(se)
      , le = he("auth", {
        state: () => ({}),
        getters: {
            jwt: e => qt.decode(e.global.token),
            roles() {
                var e;
                return it.castArray((e = this.jwt) == null ? void 0 : e.role).filter(t => t)
            },
            isCreator() {
                return this.roles.includes("Creator") && this.claims.includes("HasTraditionalBankAccount")
            },
            claims() {
                var t, n, i, r;
                return ((t = this.jwt) != null && t.claim && Array.isArray((n = this.jwt) == null ? void 0 : n.claim) ? (i = this.jwt) == null ? void 0 : i.claim : [(r = this.jwt) == null ? void 0 : r.claim]).filter(c => c)
            }
        }
    })
      , E = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [i,r] of t)
            n[i] = r;
        return n
    }
      , en = {
        inject: ["appSettings", "locale", "token", "enabledNotification"],
        setup() {
            const {t: e} = U()
              , t = le();
            return {
                t: e,
                authStore: t
            }
        },
        data() {
            return {
                wcChatNotifier: {
                    name: "privacy-web-chatnotifier",
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
        async beforeMount() {
            await this.loadWebComponents()
        },
        methods: {
            async loadWebComponents() {
                try {
                    const e = await Jt.run({
                        urlBase: this.appSettings.PRIVACY_MODULES + "/webcomponents",
                        componentName: this.wcChatNotifier.name
                    });
                    this.wcChatNotifier.loaded = e.loaded,
                    this.wcChatNotifier.error = e.error
                } catch {
                    this.wcChatNotifier.error = !0
                }
            }
        }
    };
    function tn(e, t, n, i, r, c) {
        const a = o.resolveComponent("privacy-web-chatnotifier");
        return o.openBlock(),
        o.createElementBlock("div", null, [o.createVNode(a, {
            "app-settings": c.appSettingsEncripted,
            "enabled-push-notification": c.enabledNotification,
            token: c.token,
            "icon-size": 24,
            width: 22,
            height: 16,
            "alert-width": 16,
            "alert-height": 15,
            "alert-position-top": -8,
            "alert-position-right": -8,
            "stop-connection-if-hidden": !0
        }, null, 8, ["app-settings", "enabled-push-notification", "token"])])
    }
    const Ye = E(en, [["render", tn]])
      , nn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ye
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , p = {
        COMMON: 1,
        CREATOR: 2,
        CREATOR_NOT_ACCOUNT: 3
    }
      , K = {
        home: "/",
        search: "/Search",
        publication: "/publication",
        chat: "/Chat",
        notification: "/notificacao",
        profile: "/profile/{PROFILE_NAME}",
        followers: "/Follow?Type=Followers",
        following: "/Follow?Type=Following",
        myCards: "/MyCards",
        myWallet: "/MyWallet",
        myBank: "/Banco",
        myPrivacy: "/MyPrivacy",
        vault: "/Vault",
        collection: "/colecoes",
        becomeCreator: "/becomeCreator",
        settings: "/Settings",
        security: "/settings/security",
        privacy: "/settings/privacy",
        help: "/Faq",
        topshare: "https://www.topshare.com.br/",
        logout: "/Strangler/Logout"
    };
    var ue = {
        prefix: "fal",
        iconName: "box-archive",
        icon: [512, 512, ["archive"], "f187", "M480 64H32v64H64 448h32V64zm0 96H448 64 32c-17.7 0-32-14.3-32-32V64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32zM160 240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm288-48h32V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192H64V416c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V192z"]
    }
      , Qe = {
        prefix: "fal",
        iconName: "arrow-right-from-bracket",
        icon: [512, 512, ["sign-out"], "f08b", "M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 176 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L356.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l96 0z"]
    }
      , Ue = {
        prefix: "fal",
        iconName: "lock",
        icon: [448, 512, [128274], "f023", "M128 128v64H320V128c0-53-43-96-96-96s-96 43-96 96zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h16c44.2 0 80 35.8 80 80V432c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-44.2 35.8-80 80-80H96zM32 272V432c0 26.5 21.5 48 48 48H368c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48z"]
    }
      , Me = {
        prefix: "fal",
        iconName: "bookmark",
        icon: [384, 512, [128278, 61591], "f02e", "M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V489.9c0 12.2-9.9 22.1-22.1 22.1c-4.4 0-8.6-1.3-12.3-3.7L192 403.2 34.4 508.3c-3.6 2.4-7.9 3.7-12.3 3.7C9.9 512 0 502.1 0 489.9V48zM48 32c-8.8 0-16 7.2-16 16V471.4L183.1 370.7c5.4-3.6 12.4-3.6 17.8 0L352 471.4V48c0-8.8-7.2-16-16-16H48z"]
    }
      , de = {
        prefix: "fal",
        iconName: "credit-card-blank",
        icon: [576, 512, [], "f389", "M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM96 368c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm128 0c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"]
    }
      , Ve = {
        prefix: "fal",
        iconName: "user",
        icon: [448, 512, [128100, 62144], "f007", "M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]
    }
      , on = {
        prefix: "fal",
        iconName: "globe",
        icon: [512, 512, [127760], "f0ac", "M256 480c16.7 0 40.4-14.4 61.9-57.3c9.9-19.8 18.2-43.7 24.1-70.7H170c5.9 27 14.2 50.9 24.1 70.7C215.6 465.6 239.3 480 256 480zM164.3 320H347.7c2.8-20.2 4.3-41.7 4.3-64s-1.5-43.8-4.3-64H164.3c-2.8 20.2-4.3 41.7-4.3 64s1.5 43.8 4.3 64zM170 160H342c-5.9-27-14.2-50.9-24.1-70.7C296.4 46.4 272.7 32 256 32s-40.4 14.4-61.9 57.3C184.2 109.1 175.9 133 170 160zm210 32c2.6 20.5 4 41.9 4 64s-1.4 43.5-4 64h90.8c6-20.3 9.3-41.8 9.3-64s-3.2-43.7-9.3-64H380zm78.5-32c-25.9-54.5-73.1-96.9-130.9-116.3c21 28.3 37.6 68.8 47.2 116.3h83.8zm-321.1 0c9.6-47.6 26.2-88 47.2-116.3C126.7 63.1 79.4 105.5 53.6 160h83.7zm-96 32c-6 20.3-9.3 41.8-9.3 64s3.2 43.7 9.3 64H132c-2.6-20.5-4-41.9-4-64s1.4-43.5 4-64H41.3zM327.5 468.3c57.8-19.5 105-61.8 130.9-116.3H374.7c-9.6 47.6-26.2 88-47.2 116.3zm-143 0c-21-28.3-37.5-68.8-47.2-116.3H53.6c25.9 54.5 73.1 96.9 130.9 116.3zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z"]
    }
      , Pe = {
        prefix: "fal",
        iconName: "user-group",
        icon: [640, 512, [128101, "user-friends"], "f500", "M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM269.7 336c80 0 145 64.3 146.3 144H32c1.2-79.7 66.2-144 146.3-144h91.4zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3zm431 208c17 0 30.7-13.8 30.7-30.7C640 392.2 567.8 320 478.7 320H417.3c-4.4 0-8.8 .2-13.2 .5c11.3 9.4 21.6 19.9 30.7 31.5h43.9c71 0 128.6 57.2 129.3 128H480c0 .8 0 1.5 0 2.3c0 10.8-2.8 20.9-7.6 29.7H609.3zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7c5.2 9.8 9.3 20.3 12.4 31.2C392.3 71.9 411.2 64 432 64c44.2 0 80 35.8 80 80s-35.8 80-80 80c-25.2 0-47.6-11.6-62.3-29.8c-4.7 10.3-10.4 19.9-17 28.9C373 243.4 401 256 432 256z"]
    }
      , fe = {
        prefix: "fal",
        iconName: "heart-circle-plus",
        icon: [576, 512, [], "e500", "M244 130.6l-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8c-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8 .7 1.9 1.2 3 1.2s2.2-.4 3-1.2l10.9-10.2c4.3 10.2 9.6 20 15.7 29.1l-4.9 4.5c-.8 .8-1.7 1.5-2.6 2.2c-6.3 4.9-14.1 7.5-22.1 7.5c-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4c6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1c1.8-1.5 3.6-3 5.4-4.5C311 48.4 352.7 37.7 393.7 45.1C462.2 57.6 512 117.3 512 186.9v3.5c0 6.8-.5 13.5-1.4 20.1c-9.8-4.9-20.2-8.9-30.9-12c.2-2.7 .3-5.4 .3-8.1v-3.5c0-54.2-38.7-100.6-92-110.3c-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-64v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]
    }
      , He = {
        prefix: "fal",
        iconName: "message-lines",
        icon: [512, 512, ["comment-alt-lines"], "f4a6", "M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464V416zM64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h64 32v32 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm80 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H144zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H272c8.8 0 16-7.2 16-16s-7.2-16-16-16H144z"]
    }
      , rn = {
        prefix: "fal",
        iconName: "money-bills",
        icon: [640, 512, [], "e1f3", "M576 64c17.7 0 32 14.3 32 32v32c-35.3 0-64-28.7-64-64h32zM224 64H512c0 53 43 96 96 96v96c-53 0-96 43-96 96H224c0-53-43-96-96-96V160c53 0 96-43 96-96zM128 288c35.3 0 64 28.7 64 64H160c-17.7 0-32-14.3-32-32V288zm416 64c0-35.3 28.7-64 64-64v32c0 17.7-14.3 32-32 32H544zM192 64c0 35.3-28.7 64-64 64V96c0-17.7 14.3-32 32-32h32zM160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM368 272a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 61.9 50.1 112 112 112H528c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-44.2 0-80-35.8-80-80V112z"]
    }
      , W = {
        prefix: "fal",
        iconName: "wallet",
        icon: [512, 512, [], "f555", "M80 32C35.8 32 0 67.8 0 112V400c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H112c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c26.5 0 48 21.5 48 48V400c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48H464c8.8 0 16-7.2 16-16s-7.2-16-16-16H80zM384 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
    }
      , Be = {
        prefix: "fal",
        iconName: "circle-question",
        icon: [512, 512, [62108, "question-circle"], "f059", "M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168.7-86.2c6.5-24.6 28.7-41.8 54.2-41.8H280c35.5 0 64 29 64 64.3c0 24-13.4 46.2-34.9 57.2L272 268.3V288c0 8.8-7.2 16-16 16s-16-7.2-16-16V258.5c0-6 3.4-11.5 8.7-14.3l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7c0-17.8-14.4-32.3-32-32.3H222.9c-10.9 0-20.5 7.4-23.2 17.9l-.2 .7c-2.2 8.5-11 13.7-19.5 11.4s-13.7-11-11.4-19.5l.2-.7zM232 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
    }
      , cn = {
        prefix: "fal",
        iconName: "circle-r",
        icon: [512, 512, [], "e120", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 128c-17.7 0-32 14.3-32 32V272v96c0 8.8 7.2 16 16 16s16-7.2 16-16V288h71.4l59.3 88.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-50.5-75.7c31-11 53.2-40.6 53.2-75.4c0-44.2-35.8-80-80-80H192zm80 128H192V160h80c26.5 0 48 21.5 48 48s-21.5 48-48 48z"]
    }
      , Ze = {
        prefix: "fal",
        iconName: "gear",
        icon: [512, 512, [9881, "cog"], "f013", "M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.1-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.1-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"]
    }
      , me = {
        prefix: "fal",
        iconName: "house",
        icon: [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V235l37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432V206.7L288 37.3 480 206.7V432c0 26.5-21.5 48-48 48H368V320c0-17.7-14.3-32-32-32H240c-17.7 0-32 14.3-32 32V480H144c-26.5 0-48-21.5-48-48zm144 48V320h96V480H240z"]
    }
      , Re = {
        prefix: "fal",
        iconName: "bell",
        icon: [448, 512, [128276, 61602], "f0f3", "M208 16c0-8.8 7.2-16 16-16s16 7.2 16 16V32.8c80.9 8 144 76.2 144 159.2v29.1c0 43.7 17.4 85.6 48.3 116.6l2.8 2.8c8.3 8.3 13 19.6 13 31.3c0 24.5-19.8 44.3-44.3 44.3H44.3C19.8 416 0 396.2 0 371.7c0-11.7 4.7-23 13-31.3l2.8-2.8C46.6 306.7 64 264.8 64 221.1V192c0-83 63.1-151.2 144-159.2V16zm16 48C153.3 64 96 121.3 96 192v29.1c0 52.2-20.7 102.3-57.7 139.2L35.6 363c-2.3 2.3-3.6 5.4-3.6 8.7c0 6.8 5.5 12.3 12.3 12.3H403.7c6.8 0 12.3-5.5 12.3-12.3c0-3.3-1.3-6.4-3.6-8.7l-2.8-2.8c-36.9-36.9-57.7-87-57.7-139.2V192c0-70.7-57.3-128-128-128zM193.8 458.7c4.4 12.4 16.3 21.3 30.2 21.3s25.8-8.9 30.2-21.3c2.9-8.3 12.1-12.7 20.4-9.8s12.7 12.1 9.8 20.4C275.6 494.2 251.9 512 224 512s-51.6-17.8-60.4-42.7c-2.9-8.3 1.4-17.5 9.8-20.4s17.5 1.4 20.4 9.8z"]
    }
      , an = {
        prefix: "fal",
        iconName: "magnifying-glass",
        icon: [512, 512, [128269, "search"], "f002", "M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z"]
    }
      , We = {
        prefix: "fal",
        iconName: "circle-ellipsis",
        icon: [512, 512, [], "e10a", "M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM184 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"]
    }
      , sn = {
        prefix: "fal",
        iconName: "plus",
        icon: [448, 512, [10133, 61543, "add"], "2b", "M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16V240H32c-8.8 0-16 7.2-16 16s7.2 16 16 16H208V448c0 8.8 7.2 16 16 16s16-7.2 16-16V272H416c8.8 0 16-7.2 16-16s-7.2-16-16-16H240V64z"]
    }
      , ln = {
        prefix: "fal",
        iconName: "copyright",
        icon: [512, 512, [169], "f1f9", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm67.9-188.1c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8s98.3-37.5 135.8 0c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"]
    }
      , un = {
        prefix: "fal",
        iconName: "spinner",
        icon: [512, 512, [], "f110", "M256 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 480a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM64 256a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 256a48 48 0 1 1 96 0A48 48 0 1 1 0 256zm464 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM120.2 391.8A16 16 0 1 0 97.6 414.4a16 16 0 1 0 22.6-22.6zM75 437a48 48 0 1 1 67.9-67.9A48 48 0 1 1 75 437zM97.6 120.2a16 16 0 1 0 22.6-22.6A16 16 0 1 0 97.6 120.2zM142.9 75A48 48 0 1 1 75 142.9 48 48 0 1 1 142.9 75zM414.4 414.4a16 16 0 1 0 -22.6-22.6 16 16 0 1 0 22.6 22.6zm-45.3-45.3A48 48 0 1 1 437 437a48 48 0 1 1 -67.9-67.9z"]
    }
      , Ge = {
        prefix: "fal",
        iconName: "shield",
        icon: [512, 512, [128737, "shield-blank"], "f132", "M268.5 37.3c-8-3.4-17-3.4-25 0l-176.7 75C55.5 117 47.9 127.7 48 139.8c.5 94 39.3 259.8 195.4 334.5c7.9 3.8 17.2 3.8 25.1 0c156.1-74.7 195-240.4 195.5-334.5c.1-12.1-7.5-22.8-18.8-27.6l-176.7-75zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L231 7.8z"]
    }
      , ge = {
        prefix: "fal",
        iconName: "building-columns",
        icon: [512, 512, ["bank", "institution", "museum", "university"], "f19c", "M263.9 2.1C259-.7 253-.7 248.1 2.1L15.8 133.7C6 139.3 0 149.6 0 160.8C0 178 14 192 31.2 192H256 480.8c17.2 0 31.2-14 31.2-31.2c0-11.2-6-21.6-15.8-27.1L263.9 2.1zM306.6 160c3.5-7.3 5.4-15.4 5.4-24c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 8.6 1.9 16.7 5.4 24H34.3L256 34.4 477.7 160H306.6zM256 112a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM64 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H448c8.8 0 16-7.2 16-16s-7.2-16-16-16V224H416V352H336V224H304V352H208V224H176V352H96V224H64V352zM40 416c-8.8 0-16 7.2-16 16s7.2 16 16 16H472c8.8 0 16-7.2 16-16s-7.2-16-16-16H40zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H16z"]
    };
    const Mn = `.icon-copyright{--copyrigh-icon-size: 12px;color:#757a91;width:var(--copyrigh-icon-size)!important;height:var(--copyrigh-icon-size)!important;margin-left:2px;margin-bottom:1px}
`
      , dn = {
        name: "MenuItem",
        components: {
            ChatNotifier: Ye
        },
        props: {
            item: {
                type: Object,
                required: !0
            },
            v10: {
                type: Boolean,
                default: !1
            }
        },
        setup() {
            const e = le()
              , {t} = U();
            return {
                t,
                authStore: e,
                openPage: R,
                faCopyright: ln,
                faCircleR: cn
            }
        },
        methods: {
            getProfileName() {
                var e, t;
                return ((t = (e = this.authStore) == null ? void 0 : e.jwt) == null ? void 0 : t.profile_name) || ""
            },
            getLink(e) {
                return e === "profile" ? K[e].replace("{PROFILE_NAME}", this.getProfileName()) : K[e]
            },
            isImageIcon({item: e}) {
                return ["myPrivacy", "topshare", "becomeCreator"].includes(e)
            },
            getHelpUrl() {
                return `https://help.privacy.com.br/hc/${this.t("base.language.code")}`
            },
            handleClick(e) {
                if (e != null && e.function) {
                    e.function();
                    return
                }
                if ((e == null ? void 0 : e.text) === "help" && this.v10) {
                    window.open(this.getHelpUrl(), "_blank", "noopener");
                    return
                }
                this.openPage(this.getLink(e == null ? void 0 : e.text), e == null ? void 0 : e.external)
            }
        }
    }
      , fn = {
        key: 1,
        class: "sidebar-item-action"
    }
      , mn = {
        key: 0,
        class: "sidebar-icon"
    }
      , gn = ["src"]
      , pn = {
        key: 2,
        class: "sidebar-badge"
    }
      , Ln = {
        key: 2,
        class: "sidebar-text"
    }
      , yn = {
        class: "sidebar-copyright"
    };
    function jn(e, t, n, i, r, c) {
        var u, l, M, f, L, g, j;
        const a = o.resolveComponent("chat-notifier")
          , s = o.resolveComponent("font-awesome-icon");
        return o.openBlock(),
        o.createElementBlock("a", {
            class: "sidebar-item mb-2",
            onClick: t[0] || (t[0] = o.withModifiers(y => c.handleClick(n.item), ["prevent"]))
        }, [((u = n.item) == null ? void 0 : u.text) === "chat" ? (o.openBlock(),
        o.createBlock(a, {
            key: 0,
            style: {
                "margin-left": "1px"
            },
            class: "sidebar-item-action"
        })) : (o.openBlock(),
        o.createElementBlock("div", fn, [c.isImageIcon({
            item: (l = n.item) == null ? void 0 : l.text
        }) ? (o.openBlock(),
        o.createElementBlock("div", mn, [o.createElementVNode("img", {
            src: (M = n.item) == null ? void 0 : M.icon,
            alt: "icon",
            style: o.normalizeStyle({
                width: n.item.widthIcon,
                height: n.item.heightIcon
            })
        }, null, 12, gn)])) : (o.openBlock(),
        o.createBlock(s, {
            key: 1,
            class: "sidebar-icon",
            icon: (f = n.item) == null ? void 0 : f.icon
        }, null, 8, ["icon"])), (L = n.item) != null && L.badge ? (o.openBlock(),
        o.createElementBlock("span", pn)) : o.createCommentVNode("", !0)])), (g = n.item) != null && g.text ? (o.openBlock(),
        o.createElementBlock("span", Ln, [o.createTextVNode(o.toDisplayString(i.t(`menu.${n.item.text}`)) + " ", 1), o.createElementVNode("span", yn, [(j = n.item) != null && j.copyright ? (o.openBlock(),
        o.createBlock(s, {
            key: 0,
            icon: i.faCircleR,
            class: "icon-copyright"
        }, null, 8, ["icon"])) : o.createCommentVNode("", !0)])])) : o.createCommentVNode("", !0)])
    }
    const Fe = E(dn, [["render", jn], ["styles", [Mn]]])
      , wn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fe
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Vo = ""
      , Po = ""
      , Ho = ""
      , Bo = ""
      , Zo = ""
      , Ro = ""
      , Wo = ""
      , Go = ""
      , Fo = ""
      , Nn = {
        name: "LangOptions",
        shadow: !0,
        inject: ["appSettings", "userSettings", "ready", "locale"],
        emits: ["change-language"],
        components: {
            ElDropdown: P.ElDropdown,
            ElDropdownMenu: P.ElDropdownMenu,
            ElDropdownItem: P.ElDropdownItem
        },
        setup() {
            const {t: e} = U()
              , t = o.ref(null)
              , n = o.ref(!1);
            return {
                faSpinner: un,
                faGlobe: on,
                t: e,
                dropdownRefLanguage: t,
                openDropdown: () => {
                    var c;
                    (c = t.value) == null || c.handleOpen()
                }
                ,
                closeDropdown: () => {
                    var c;
                    (c = t.value) == null || c.handleClose()
                }
                ,
                isLoading: n
            }
        },
        computed: {
            languages() {
                var e;
                return (e = this.userSettings) == null ? void 0 : e.OptionsLang
            }
        },
        methods: {
            async changeLang(e) {
                this.isLoading = !0,
                this.$emit("change-language", e),
                this.closeDropdown()
            },
            openLang() {
                this.openDropdown()
            },
            onDropdownVisibleChange(e) {
                e && this.$nextTick( () => {
                    this.applyStyleToItems()
                }
                )
            },
            applyStyleToItems() {
                const e = this.$refs.dropMenu.$el;
                e && e.querySelectorAll(".el-dropdown-menu__item").forEach(n => {
                    n.style.cursor = "pointer",
                    n.style.fontSize = "16px",
                    n.style.color = "#656565",
                    n.addEventListener("mouseover", () => {
                        n.style.background = "#fe754f1a"
                    }
                    ),
                    n.addEventListener("mouseout", () => {
                        n.style.background = ""
                    }
                    )
                }
                )
            }
        }
    }
      , zn = {
        class: "sidebar-item-action"
    }
      , Dn = {
        class: "sidebar-text"
    };
    function xn(e, t, n, i, r, c) {
        const a = o.resolveComponent("el-dropdown-item")
          , s = o.resolveComponent("el-dropdown-menu")
          , u = o.resolveComponent("font-awesome-icon")
          , l = o.resolveComponent("el-dropdown");
        return o.openBlock(),
        o.createElementBlock("div", {
            class: "sidebar-item language-dropdown",
            onClick: t[0] || (t[0] = M => c.openLang())
        }, [o.createVNode(l, {
            ref: "dropdownRefLanguage",
            trigger: "click",
            placement: "top",
            onVisibleChange: c.onDropdownVisibleChange
        }, {
            dropdown: o.withCtx( () => [o.createVNode(s, {
                ref: "dropMenu"
            }, {
                default: o.withCtx( () => [(o.openBlock(!0),
                o.createElementBlock(o.Fragment, null, o.renderList(c.languages, (M, f) => (o.openBlock(),
                o.createBlock(a, {
                    key: f,
                    onClick: o.withModifiers(L => c.changeLang(f), ["prevent"])
                }, {
                    default: o.withCtx( () => [o.createTextVNode(o.toDisplayString(i.t(`base.language.${f}`)), 1)]),
                    _: 2
                }, 1032, ["onClick"]))), 128))]),
                _: 1
            }, 512)]),
            default: o.withCtx( () => [o.createElementVNode("div", zn, [o.createVNode(u, {
                class: "sidebar-icon",
                icon: i.isLoading ? i.faSpinner : i.faGlobe,
                spin: i.isLoading
            }, null, 8, ["icon", "spin"]), o.createElementVNode("span", Dn, o.toDisplayString(i.t(`base.language.${c.locale}`)), 1)])]),
            _: 1
        }, 8, ["onVisibleChange"])])
    }
    const Je = E(Nn, [["render", xn]])
      , In = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Je
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , hn = {
        name: "MenuList",
        components: {
            MenuItem: Fe,
            ElDivider: P.ElDivider,
            LangOptions: Je
        },
        props: {
            expandedMenu: {
                type: Boolean,
                default: !1
            },
            menuItems: {
                type: Array,
                required: !0
            },
            userType: {
                type: String,
                required: !0
            },
            userApprovedData: {
                type: Boolean,
                default: !1
            },
            showMore: {
                type: Boolean,
                default: !0
            },
            v10: {
                type: Boolean,
                default: !1
            }
        },
        methods: {
            applyDivider(e) {
                var n;
                return ((n = ["collection", "myPrivacy", "becomeCreator", "help", "topshare"].filter(i => i.includes(e == null ? void 0 : e.text))) == null ? void 0 : n.length) > 0
            },
            validateShowItem(e) {
                var i;
                const t = ((i = e == null ? void 0 : e.visible) == null ? void 0 : i.includes(this.userType)) || !(e != null && e.visible)
                  , n = (e == null ? void 0 : e.validatePermission) !== void 0 ? e.validatePermission : !0;
                return t && n
            }
        }
    }
      , Cn = {
        class: "w-100"
    }
      , bn = {
        class: "sidebar-content-items"
    }
      , Tn = {
        key: 0,
        class: "mb-2"
    }
      , Sn = {
        key: 1
    };
    function An(e, t, n, i, r, c) {
        const a = o.resolveComponent("lang-options")
          , s = o.resolveComponent("menu-item")
          , u = o.resolveComponent("el-divider");
        return o.openBlock(),
        o.createElementBlock("div", Cn, [o.createElementVNode("ul", bn, [(o.openBlock(!0),
        o.createElementBlock(o.Fragment, null, o.renderList(n.menuItems, (l, M) => (o.openBlock(),
        o.createElementBlock("li", {
            key: M,
            class: o.normalizeClass((l == null ? void 0 : l.class) || "")
        }, [(l == null ? void 0 : l.text) === "language" && !n.v10 ? (o.openBlock(),
        o.createElementBlock("div", Tn, [o.createVNode(a, {
            class: "mx-2",
            v10: n.v10,
            onChangeLanguage: t[0] || (t[0] = f => e.$emit("change-language", f))
        }, null, 8, ["v10"])])) : c.validateShowItem(l) ? (o.openBlock(),
        o.createElementBlock("div", Sn, [o.createVNode(s, {
            class: "mx-2",
            item: l,
            v10: n.v10
        }, null, 8, ["item", "v10"]), c.applyDivider(l) && n.expandedMenu ? (o.openBlock(),
        o.createBlock(u, {
            key: 0,
            class: "m-0 mb-2"
        })) : o.createCommentVNode("", !0)])) : o.createCommentVNode("", !0)], 2))), 128))])])
    }
    const $e = E(hn, [["render", An]])
      , On = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $e
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , En = {}
      , vn = {
        class: "svg-inline--fa fa-badge-check status-icon",
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "far",
        "data-icon": "badge-check",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        color: "#ff754d"
    }
      , kn = [o.createElementVNode("path", {
        class: "",
        fill: "currentColor",
        d: "M200.3 81.5C210.9 61.5 231.9 48 256 48s45.1 13.5 55.7 33.5C317.1 91.7 329 96.6 340 93.2c21.6-6.6 46.1-1.4 63.1 15.7s22.3 41.5 15.7 63.1c-3.4 11 1.5 22.9 11.7 28.2c20 10.6 33.5 31.6 33.5 55.7s-13.5 45.1-33.5 55.7c-10.2 5.4-15.1 17.2-11.7 28.2c6.6 21.6 1.4 46.1-15.7 63.1s-41.5 22.3-63.1 15.7c-11-3.4-22.9 1.5-28.2 11.7c-10.6 20-31.6 33.5-55.7 33.5s-45.1-13.5-55.7-33.5c-5.4-10.2-17.2-15.1-28.2-11.7c-21.6 6.6-46.1 1.4-63.1-15.7S86.6 361.6 93.2 340c3.4-11-1.5-22.9-11.7-28.2C61.5 301.1 48 280.1 48 256s13.5-45.1 33.5-55.7C91.7 194.9 96.6 183 93.2 172c-6.6-21.6-1.4-46.1 15.7-63.1S150.4 86.6 172 93.2c11 3.4 22.9-1.5 28.2-11.7zM256 0c-35.9 0-67.8 17-88.1 43.4c-33-4.3-67.6 6.2-93 31.6s-35.9 60-31.6 93C17 188.2 0 220.1 0 256s17 67.8 43.4 88.1c-4.3 33 6.2 67.6 31.6 93s60 35.9 93 31.6C188.2 495 220.1 512 256 512s67.8-17 88.1-43.4c33 4.3 67.6-6.2 93-31.6s35.9-60 31.6-93C495 323.8 512 291.9 512 256s-17-67.8-43.4-88.1c4.3-33-6.2-67.6-31.6-93s-60-35.9-93-31.6C323.8 17 291.9 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
    }, null, -1)];
    function _n(e, t, n, i, r, c) {
        return o.openBlock(),
        o.createElementBlock("svg", vn, kn)
    }
    const Xe = E(En, [["render", _n]])
      , Yn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xe
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Qn = {
        name: "UserDescription",
        components: {
            VerifiedIcon: Xe
        },
        setup() {
            const {t: e} = U();
            return {
                t: e,
                openPage: R,
                formatNumber: Zt
            }
        },
        props: {
            userData: {
                type: Object,
                required: !0
            }
        },
        openFollowing() {
            R(K.following)
        },
        openFollowers() {
            R(K.followers)
        }
    }
      , Un = {
        key: 0
    }
      , Vn = {
        class: "d-flex align-items-center",
        style: {
            height: "20px"
        }
    }
      , Pn = {
        class: "fw-bold mr-1"
    }
      , Hn = {
        class: "user-limit-name"
    }
      , Bn = {
        class: "text-muted d-flex flex-coloumn text-nowrap"
    }
      , Zn = {
        class: "follow-counter"
    }
      , Rn = {
        class: "follow-text text-lowercase"
    }
      , Wn = {
        class: "follow-counter"
    }
      , Gn = {
        class: "follow-text text-lowercase"
    };
    function Fn(e, t, n, i, r, c) {
        const a = o.resolveComponent("verified-icon");
        return n.userData ? (o.openBlock(),
        o.createElementBlock("div", Un, [o.createElementVNode("div", Vn, [o.createElementVNode("span", Pn, [o.createElementVNode("span", Hn, o.toDisplayString(n.userData.name), 1)]), n.userData.verified ? (o.openBlock(),
        o.createBlock(a, {
            key: 0,
            class: "px-2 mb-1"
        })) : o.createCommentVNode("", !0)]), o.createElementVNode("div", Bn, [n.userData.followers ? (o.openBlock(),
        o.createElementBlock("span", {
            key: 0,
            class: "user-follow me-1",
            onClick: t[0] || (t[0] = (...s) => e.openFollowers && e.openFollowers(...s))
        }, [o.createElementVNode("span", Zn, o.toDisplayString(i.formatNumber(n.userData.followers)), 1), o.createElementVNode("span", Rn, o.toDisplayString(i.t("menu.followers")), 1)])) : o.createCommentVNode("", !0), n.userData.following ? (o.openBlock(),
        o.createElementBlock("span", {
            key: 1,
            class: "user-follow",
            onClick: t[1] || (t[1] = (...s) => e.openFollowing && e.openFollowing(...s))
        }, [o.createElementVNode("span", Wn, o.toDisplayString(i.formatNumber(n.userData.following)), 1), o.createElementVNode("span", Gn, o.toDisplayString(i.t("menu.following")), 1)])) : o.createCommentVNode("", !0)])])) : o.createCommentVNode("", !0)
    }
    const Ke = E(Qn, [["render", Fn]])
      , Jn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ke
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var $n = {
        prefix: "fak",
        iconName: "bell",
        icon: [461, 512, [], "e001", "M214 16c0-8.8 7.4-16 16.5-16s16.5 7.2 16.5 16V32.8C330.1 40.8 395 109 395 192v29.1c0 43.7 17.9 85.6 49.7 116.6l2.9 2.8c8.5 8.3 13.4 19.6 13.4 31.3c0 24.5-20.4 44.3-45.6 44.3L45.7 416C20.5 416 .1 396.2 .1 371.7c0-11.7 4.8-23 13.4-31.3l2.9-2.8C48 306.7 65.9 264.8 65.9 221.1V192c0-83 64.9-151.2 148.1-159.2V16zm16.5 48C157.7 64 98.8 121.3 98.8 192v29.1c0 52.2-21.3 102.3-59.3 139.2L36.7 363c-2.4 2.3-3.7 5.4-3.7 8.7c0 6.8 5.7 12.3 12.6 12.3H415.2c7 0 12.6-5.5 12.6-12.3c0-3.3-1.3-6.4-3.7-8.7l-2.9-2.8C383.4 323.3 362 273.2 362 221V191.9c0-70.7-58.9-128-131.6-128l.1 .1zM199.4 458.7c4.5 12.4 16.8 21.3 31.1 21.3s26.5-8.9 31.1-21.3c3-8.3 12.4-12.7 21-9.8s13.1 12.1 10.1 20.4c-9 24.9-33.4 42.7-62.1 42.7s-53.1-17.8-62.1-42.7c-3-8.3 1.4-17.5 10.1-20.4s18 1.4 21 9.8z"]
    }
      , Xn = {
        prefix: "fak",
        iconName: "chart",
        icon: [878, 512, [], "e002", "M560.8 24.4C560.8 11 571.8 0 585.2 0H853.4c13.4 0 24.4 11 24.4 24.4V292.6c0 13.4-11 24.4-24.4 24.4S829 306 829 292.6V83.2L504.9 407.3c-9.4 9.4-25 9.4-34.4 0L292.6 229.5l-251 251c-9.4 9.4-25 9.4-34.4 0s-9.4-25 0-34.4L275.4 177.8c9.4-9.4 25-9.4 34.4 0L487.7 355.7 794.6 48.8H585.2c-13.4 0-24.4-11-24.4-24.4z"]
    }
      , Kn = {
        prefix: "fak",
        iconName: "chat",
        icon: [470, 512, [], "e003", "M239.5 0c27.2 0 54 4.9 79.2 14.2C364 30.9 404 61.9 431.8 104.6c27.7 42.7 39.8 92 36.7 140.2c-3.1 48.2-21.3 95.6-54.3 134.4c-32.9 38.8-76.6 64.5-123.7 75.2c-14.3 3.3-28.9 5.2-43.6 5.7l-7.4 .1c-34.5 0-68.6-7.8-99.7-22.8l-24 39.2L110 486c-6.4 10.5-15.7 18.1-26.4 22.3C74.4 512 64 513 53.8 511l-4.4-1c-11.8-3.3-21.6-10.3-28.5-19.4c-6.1-8-9.9-17.7-10.7-28.2l-.2-4.5V230.1H10l.2-9.5C12 176.3 26.4 134.7 50.2 99.8l5.3-7.4c28.8-38.8 69.9-68.4 118.7-83C195.8 3.1 217.8 0 239.5 0zm0 32c-18.7 0-37.6 2.6-56.1 8.2c-42 12.5-77.3 38-102.1 71.4v0C56.4 144.9 42 186.1 42 230.1v32h-.1V457.8l.3 3.8c.4 2.4 1.2 4.7 2.3 6.7l1.9 2.9 .1 .1c2.8 3.7 6.7 6.5 11.7 7.9c5 1.4 9.8 1.1 13.9-.6l.1 0c4.1-1.6 7.9-4.6 10.7-9.2h0l5.7-9.4 24-39.2L127.6 396l26.1 12.6c26.8 12.9 56 19.6 85.7 19.6h0c-.1 0 .1 0 .9 0c.6 0 1.5 0 2.3 0s1.7 0 2.5 0c.3 0 .7 0 1 0c12.5-.4 25-2.1 37.1-4.9h0c40.5-9.3 78.1-31.3 106.4-64.7l0 0c28.4-33.4 44.1-74.2 46.8-115.7l.4-7.8c1-39-9.6-78.4-32-112.9C381 85.3 346.6 58.6 307.6 44.2h0c-21.7-8-44.7-12.2-68.1-12.2zM133.7 215c8.4 0 16.1 2.8 22.1 8.8c6.1 5.8 9.1 13.3 9.1 21.6s-3 15.8-8.9 21.7l-.1 .1c-6.1 5.8-13.7 8.5-22.1 8.5c-8.5 0-16.2-2.6-22.4-8.4l-.3-.3c-5.9-5.9-8.9-13.4-8.9-21.7s3-15.8 9.1-21.6l0 0c6.2-5.9 14-8.8 22.5-8.8zm103.7 0c8.4 0 16.1 2.8 22.1 8.8c6.1 5.8 9.1 13.3 9.1 21.6s-3 15.8-8.9 21.7l-.1 .1c-6.1 5.8-13.7 8.5-22.1 8.5c-8.5 0-16.2-2.6-22.4-8.4l-.3-.3c-5.9-5.9-8.9-13.4-8.9-21.7s3-15.8 9.1-21.6l0 0c6.2-5.9 14-8.8 22.5-8.8zm103.7 0c8.4 0 16.1 2.8 22.1 8.8c6.1 5.8 9.1 13.3 9.1 21.6s-3 15.8-8.9 21.7l-.1 .1c-6.1 5.8-13.7 8.5-22.1 8.5c-8.5 0-16.2-2.6-22.4-8.4l-.3-.3c-5.9-5.9-8.9-13.4-8.9-21.7s3-15.8 9.1-21.6l0 0c6.2-5.9 14-8.8 22.5-8.8z"]
    }
      , qn = {
        prefix: "fak",
        iconName: "coin",
        icon: [486, 512, [], "e009", "M258.2 148.9c12.8 .9 25.2 4.5 37.5 7.9c1.5 .4 2.9 .8 4.4 1.2c8.1 2.2 12.9 10.6 10.6 18.7c-2.2 8.1-10.6 12.8-18.7 10.5c-2.3-.6-4.5-1.2-6.8-1.9c-8-2.1-14.3-5-21.6-5.3c-18.2-2.7-34.8-.3-46.7 4.8c-12.2 5.3-17.6 12.4-18.8 18.5c-1.7 9.2 2 15.6 9.7 20.6c10.1 6.4 25.1 10.7 43.5 15.9l.2-.8c16.9 5.6 36.9 11.3 51.5 21.3c18 12.4 26.2 32.1 22.4 53.6c-3.8 20.5-18 34.1-35.9 41.3c-9.4 3.8-20 6-31.3 6.6v22.9c0 8.3-6.8 15.2-15.2 15.2s-15.2-6.8-15.2-15.2V360.3c-7.7-1.1-20.7-4.9-30.7-8c-6.5-2-13.1-4.1-20.4-6.2c-7.1-2.7-11.5-11.2-8.8-20c2.7-7.1 11.2-11.5 19.1-8.8c6.3 1.2 12.6 4.1 18.9 6c10.7 3.2 21.5 6.3 26.6 7c18.8 2.8 34.6 1.2 45.6-3.1c10.5-4.3 15.8-10.7 17.3-18.8c1.8-9.9-1.4-17.4-9.7-23.1c-11.4-7.8-25.4-11.6-38.8-15.3c-2.2-.7-4.4-1.2-6.5-2.7c-16.2-3.8-35.1-9.1-49-18.1c-7.7-4.8-14.9-11.5-19.4-20.5c-4.6-9.3-5.9-19.7-3.8-31.1c3.6-19.6 19-33.3 36.6-40.8c7.1-3 14.8-5.3 22.2-6.6V127.2c0-8.3 7.7-15.2 15.2-15.2c9.2 0 16 6.8 16 15.2v21.8zM.5 256a242.5 242.5 0 1 1 485.1 0A242.5 242.5 0 1 1 .5 256zM243 43.8a212.2 212.2 0 1 0 0 424.4 212.2 212.2 0 1 0 0-424.4z"]
    }
      , eo = {
        prefix: "fak",
        iconName: "comment",
        icon: [486, 512, [], "e008", "M243 471.6c119.1 0 215.6-96.5 215.6-215.6s-96.5-215.6-215.6-215.6S27.4 136.9 27.4 256c0 45.6 14.1 87.8 38.3 122.6c2.5 3.6 3 8.3 1.2 12.3L37.7 453.7c-4.6 8 1.2 17.9 10.4 17.9H243z"]
    }
      , to = {
        prefix: "fak",
        iconName: "comment-outline",
        icon: [486, 512, [], "e00a", "M442.4 256c0-110.1-89.3-199.4-199.4-199.4S43.6 145.9 43.6 256c0 42.2 13.1 81.2 35.4 113.4c4.9 7.1 6.5 16.2 3.9 24.7l-1.4 3.6L54.7 455.4H243c110.1 0 199.4-89.3 199.4-199.4zm32.3 0C474.7 384 371 487.7 243 487.7H48.1c-21.2 0-34.5-22.4-25-40.9H23l28.2-60.8C26 349 11.3 304.2 11.3 256C11.3 128 115 24.3 243 24.3S474.7 128 474.7 256z"]
    }
      , no = {
        prefix: "fak",
        iconName: "feed",
        icon: [307, 512, [], "e006", "M256.4 41.2H49.1C22.5 41.2 .4 62.7 .4 89.3V426.7c0 25.6 30.6 43.2 40.2 43.2H256.4c26.6 0 50.2-21.6 50.2-48.2V89.3c0-26.6-23.1-48.2-50.2-48.2zm20.1 362.9c0 18.6-1.5 35.6-20.1 35.6H50.6c-10 0-20.1-10-20.1-18.1V109.3c0-18.6 7.1-41 25.6-41H241.3c18.6 0 35.1 3 35.1 21.1V404.1zm-40.2 87.8H70.7c-5.4 0-10.1 4.7-10.1 10s4.7 10 10.1 10H236.3c5.4 0 10.1-4.7 10.1-10s-4.7-10-10.1-10zM236.3 0H70.7C65.3 0 60.6 4.7 60.6 10s4.7 10 10.1 10H236.3c5.4 0 10.1-4.7 10.1-10s-4.7-10-10.1-10z"]
    }
      , oo = {
        prefix: "fak",
        iconName: "mural",
        icon: [384, 512, [], "e005", "M269.2 6.3C273.7 2.2 279.5 0 285.5 0c16.8 0 28.6 17.1 22.9 33.3L241.7 224h108c14.6 0 26.4 12.1 26.4 27c0 7.8-3.2 15.1-8.9 20.3L106.9 505.8c-4.4 4-10.2 6.2-16.2 6.2c-16.8 0-28.6-17.1-23-33.3L134.5 288H25.3C11.4 288 0 276.4 0 262.2c0-7.4 3.1-14.4 8.5-19.3L269.2 6.3zm.5 42.4L41.2 256H156.7c5.1 0 9.9 2.5 12.8 6.8s3.6 9.7 2 14.6L106.4 463.6 336.8 256H219.4c-5.1 0-9.9-2.5-12.8-6.8s-3.6-9.7-2-14.6l65-186v.1z"]
    }
      , ro = {
        prefix: "fak",
        iconName: "pasted-svg",
        icon: [405, 512, [], "e007", "M341.5 0H89.2C54.5 0 26.2 28.7 26.2 64V495.1c0 5.8 3.1 11.2 8.2 14c5.1 2.8 11.2 2.6 16-.5l165-106.5 165 106.5c2.6 2.6 5.5 3.4 8.5 3.4c2.6 0 5.2-.7 7.6-2c5-2.8 8.2-8.2 8.2-14.9V64c0-35.3-28.3-64-63.1-64zm31.5 466.9L223.9 370.5c-3.4-1.7-5.5-2.5-8.5-2.5s-5.9 .8-8.5 2.5L57.7 466.9V64c0-17.6 14.1-32 31.5-32H341.5c17.4 0 31.5 14.4 31.5 32V466.9z"]
    }
      , io = {
        prefix: "fak",
        iconName: "plus",
        icon: [512, 512, [], "e004", "M276 19.7C276 8.9 267 0 256 0s-20 8.9-20 19.7V236.3H15.9c-11 0-20 8.9-20 19.7s9 19.7 20 19.7H236V492.3c0 10.8 9 19.7 20 19.7s20-8.9 20-19.7V275.7H496.1c11 0 20-8.9 20-19.7s-9-19.7-20-19.7H276V19.7z"]
    }
      , co = {
        prefix: "fak",
        iconName: "search",
        icon: [512, 512, [], "e000", "M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z"]
    };
    const ao = Object.freeze(Object.defineProperty({
        __proto__: null,
        faBell: $n,
        faChart: Xn,
        faChat: Kn,
        faCoin: qn,
        faComment: eo,
        faCommentOutline: to,
        faFeed: no,
        faMural: oo,
        faPastedSvg: ro,
        faPlus: io,
        faSearch: co
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var q = {
        fak: {}
    };
    function so(e) {
        Object.keys(e).forEach(function(t) {
            if (t !== "prefix") {
                var n = e[t]
                  , i = n.icon[2];
                i.forEach(function(r) {
                    typeof r == "string" && (q[n.prefix][r] = n)
                }),
                q[n.prefix][n.iconName] = n
            }
        })
    }
    so(ao);
    const lo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzc2LjUzIDkxLjIyIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImE1ZWRlNGRlLTgwZjUtNGJlOS05OWY4LWUyZmQ4N2RmNzg0OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjg3KSI+PHBhdGggZD0iTTYwLjc2LDY1Ljc3bC0xLjgyLTMtNC4xMi02LjcyYTIxLjE0LDIxLjE0LDAsMSwwLTI4LjYyLDBMMTAuNzIsODEuMzJhMS4zOSwxLjM5LDAsMCwxLS42Ni41NywxLjQ1LDEuNDUsMCwwLDEtLjksMCwxLjMsMS4zLDAsMCwxLTEtMS4zNFY0MC41MWgwYTMyLjM2LDMyLjM2LDAsMSwxLDU3LDIxLDMxLjcxLDMxLjcxLDAsMCwxLTQuNCw0LjI4bS0yMC4yNSw3YTMyLjM5LDMyLjM5LDAsMCwwLDcuMjItLjcxLDMyLjY4LDMyLjY4LDAsMCwwLDYuMDgtMmwtMS44MS0zLTYtOS44N2E0LjA3LDQuMDcsMCwwLDEsMS4zNS01LjYsMTMsMTMsMCwxLDAtMTMuNTksMCw0LjA4LDQuMDgsMCwwLDEsMS4zNiw1LjZsLTMuOTMsNi40MUwyNy44MSw2OWwtLjYsMUEzMC4xLDMwLjEsMCwwLDAsNDAuNTEsNzIuNzdaTTE4LjY5LDgzLjlsLTEsMS42NkE5LjUzLDkuNTMsMCwwLDEsMTMsODkuNDgsOS40Miw5LjQyLDAsMCwxLDcsODkuNzZhOS40Niw5LjQ2LDAsMCwxLTctOS4xOFY0MC41MUgwQTQwLjQ2LDQwLjQ2LDAsMSwxLDQxLjgyLDgxYy0uMTksMC0xLjE0LDAtMS4zMSwwYTQwLjMsNDAuMywwLDAsMS0xNy41OS00bC00LjIzLDYuOVoiIHN0eWxlPSJmaWxsOm5vbmU7Y2xpcC1ydWxlOmV2ZW5vZGQiLz48L2NsaXBQYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iZWVlOGJjZTQtMWU3MC00Njg2LTg5NTAtMzAxMWFjNWI5YmVmIiB4MT0iNDcuOTUiIHkxPSItMy45NCIgeDI9IjM0LjYxIiB5Mj0iODcuNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjhlMzgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjQ2MjkiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iYmVlOGI3Y2EtYzQwNS00ZjU5LWFkYWMtZjlmZTMwNTVjYTcxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuODcpIj48cGF0aCBkPSJNMTg1LjU2LDExLjkxYTYuNiw2LjYsMCwwLDEsMi4yOS01LjE0LDguMzIsOC4zMiwwLDAsMSw1Ljc3LTIsNi4xMiw2LjEyLDAsMCwxLDQuMjMsMS4zOCw0LjYsNC42LDAsMCwxLDEuNTQsMy42LDYuNTcsNi41NywwLDAsMS0yLjI1LDUuMSw4LjI4LDguMjgsMCwwLDEtNS43MywyLDYuMzcsNi4zNywwLDAsMS00LjMxLTEuMzQsNC40OCw0LjQ4LDAsMCwxLTEuNTQtMy41NiIgc3R5bGU9ImZpbGw6bm9uZTtjbGlwLXJ1bGU6ZXZlbm9kZCIvPjwvY2xpcFBhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJlZGYyM2Q4ZS02MTNkLTRjZmUtYWZjNC0zOGE2ODM2NGI5ZjIiIHgxPSIxOTMuMjUiIHkxPSI0Ljg5IiB4Mj0iMTkxLjgzIiB5Mj0iMTcuMjkiIHhsaW5rOmhyZWY9IiNlZWU4YmNlNC0xZTcwLTQ2ODYtODk1MC0zMDExYWM1YjliZWYiLz48L2RlZnM+PGcgaWQ9ImFkY2YxNzNlLWE4ZGItNDY0My05MTVhLWFjNmIxMmZlY2UxYiIgZGF0YS1uYW1lPSJDYW1hZGEgMiI+PGcgaWQ9ImY0ODFiYzkxLTA4N2QtNDc5OC04MDIxLTllYTE1MmUyNzZiNyIgZGF0YS1uYW1lPSJMYXllciAxIj48ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjYTVlZGU0ZGUtODBmNS00YmU5LTk5ZjgtZTJmZDg3ZGY3ODQ5KSI+PHJlY3Qgd2lkdGg9IjgxLjQ5IiBoZWlnaHQ9IjkxLjIyIiBzdHlsZT0iZmlsbDp1cmwoI2VlZThiY2U0LTFlNzAtNDY4Ni04OTUwLTMwMTFhYzViOWJlZikiLz48L2c+PHBhdGggZD0iTTEyMi4zOCw1M2ExMiwxMiwwLDAsMCw4LjIxLTMuMDksMTQuNTYsMTQuNTYsMCwwLDAsNC41MS04LjU1LDE5LjA4LDE5LjA4LDAsMCwwLC4yMi0yLjc2QTguOSw4LjksMCwwLDAsMTMzLDMyYTguOSw4LjksMCwwLDAtNi41MS0yLjMzLDEyLDEyLDAsMCwwLTguMjIsMy4xNywxNC4zNCwxNC4zNCwwLDAsMC00LjUxLDguNTRBMTcuNTgsMTcuNTgsMCwwLDAsMTEzLjUsNDRhOC44OSw4Ljg5LDAsMCwwLDIuNDQsNi42Miw4Ljc3LDguNzcsMCwwLDAsNi40NCwyLjRtOC45NC0zMi4yOXE2LjY5LDAsMTAuNjYsNC4xNHQ0LDExLjQ5YTMwLjYzLDMwLjYzLDAsMCwxLS40NCw1LDI5LDI5LDAsMCwxLTQuMjksMTEsMjEuNjYsMjEuNjYsMCwwLDEtNy42Myw3LjE2QTE5LjY3LDE5LjY3LDAsMCwxLDEyNCw2MmExMy4xOSwxMy4xOSwwLDAsMS04LjI2LTIuNDMsMTAuNDgsMTAuNDgsMCwwLDEtNC02LjUxTDEwOCw3NC40MUg5Ny43NGw5LjM2LTUzLjE4aDEwLjI2bC0xLjUzLDguMzZhMTYuODEsMTYuODEsMCwwLDEsNi4zMy02LjQ3QTE3LjY5LDE3LjY5LDAsMCwxLDEzMS4zMiwyMC43MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC44NykiIHN0eWxlPSJmaWxsOiMzMzM7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMTY0LDI4Ljk0YTIxLjU4LDIxLjU4LDAsMCwxLDctNi4wOCwxOC4xNSwxOC4xNSwwLDAsMSw4Ljc2LTIuMjFsLTIsMTFoLTNxLTExLjI4LDAtMTMuMDksMTAuNDdsLTMuNDIsMTkuNDJIMTQ4bDcuMTMtNDAuMjloMTAuMjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuODcpIiBzdHlsZT0iZmlsbDojMzMzO2ZpbGwtcnVsZTpldmVub2RkIi8+PHBvbHlnb24gcG9pbnRzPSIxOTUuNTYgMjIuMSAxODguNDQgNjIuMzkgMTc4LjE4IDYyLjM5IDE4NS4zMSAyMi4xIDE5NS41NiAyMi4xIiBzdHlsZT0iZmlsbDojMzMzO2ZpbGwtcnVsZTpldmVub2RkIi8+PGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI2JlZThiN2NhLWM0MDUtNGY1OS1hZGFjLWY5ZmUzMDU1Y2E3MSkiPjxyZWN0IHg9IjE4NS41NiIgeT0iNS41OSIgd2lkdGg9IjEzLjgzIiBoZWlnaHQ9IjEyLjEiIHN0eWxlPSJmaWxsOnVybCgjZWRmMjNkOGUtNjEzZC00Y2ZlLWFmYzQtMzhhNjgzNjRiOWYyKSIvPjwvZz48cG9seWdvbiBwb2ludHM9IjIxNS43OCA1Mi4xMyAyMzEuMjcgMjIuMSAyNDIuMTggMjIuMSAyMjAuMTQgNjIuMzkgMjA3LjY0IDYyLjM5IDE5OS45MyAyMi4xIDIxMC44NCAyMi4xIDIxNS43OCA1Mi4xMyIgc3R5bGU9ImZpbGw6IzMzMztmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yNjMuMTEsMjkuNjZhMTIsMTIsMCwwLDAtOC4yOSwzLjEzLDE0LjQyLDE0LjQyLDAsMCwwLTQuNDQsOC41OCwyNC40OCwyNC40OCwwLDAsMC0uMjksMi44NCw4LjY5LDguNjksMCwwLDAsMi4zNiw2LjQ3QTguOSw4LjksMCwwLDAsMjU5LDUzYTEyLDEyLDAsMCwwLDguMjItMy4xNywxNC4yMiwxNC4yMiwwLDAsMCw0LjUxLTguNDcsMjEsMjEsMCwwLDAsLjI5LTIuNzYsOC4zNCw4LjM0LDAsMCwwLTguODctOC45NU0yNjEsMjAuNzJhMTQuMjIsMTQuMjIsMCwwLDEsOC42MiwyLjQzLDEwLjMsMTAuMywwLDAsMSw0LjExLDYuNDRsMS41Mi04LjM2aDEwLjE4bC03LjEyLDQwLjI5SDI2OC4xM2wxLjUyLTguNDRhMTcuMjQsMTcuMjQsMCwwLDEtNi4zMiw2LjUxQTE3LjU2LDE3LjU2LDAsMCwxLDI1NC4xNiw2MnEtNi44MiwwLTEwLjc2LTQuMjFUMjM5LjQ3LDQ2LjFhMzAuNzgsMzAuNzgsMCwwLDEsLjUxLTUuNkEyNy4xOCwyNy4xOCwwLDAsMSwyNDQuMTMsMzBhMjEsMjEsMCwwLDEsNy40NS02Ljg3QTE5LjY4LDE5LjY4LDAsMCwxLDI2MSwyMC43MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC44NykiIHN0eWxlPSJmaWxsOiMzMzM7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMzExLjg1LDIwLjcycTgsMCwxMi41OCw0LjIyVDMyOSwzNi40M0gzMTguMThBNy4wNSw3LjA1LDAsMCwwLDMxNiwzMS4zN2E3Ljc4LDcuNzgsMCwwLDAtNS40OS0xLjg1LDEwLjUsMTAuNSwwLDAsMC03LjM4LDNxLTMuMjQsMy00LjI2LDguODNhMTcuODQsMTcuODQsMCwwLDAtLjI5LDMuMjdxMCw0LjIzLDIuMTUsNi40YTcuNDMsNy40MywwLDAsMCw1LjU2LDIuMTksMTAuNTYsMTAuNTYsMCwwLDAsNi4yMi0xLjg2LDEwLjY5LDEwLjY5LDAsMCwwLDMuODktNWgxMC44NEEyMi45MiwyMi45MiwwLDAsMSwzMDUsNjJxLTcuNzcsMC0xMi4zNi00LjR0LTQuNTgtMTIuMThhMjkuMSwyOS4xLDAsMCwxLC40NC00Ljk0LDI0LjUsMjQuNSwwLDAsMSw0LjQzLTEwLjU4LDIyLjI2LDIyLjI2LDAsMCwxLDguMjYtNi44NCwyNC4yOSwyNC4yOSwwLDAsMSwxMC42NS0yLjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuODcpIiBzdHlsZT0iZmlsbDojMzMzO2ZpbGwtcnVsZTpldmVub2RkIi8+PHBvbHlnb24gcG9pbnRzPSIzNDQuMDIgMjIuMSAzNTAuMiA0OS40NCAzNjUuMTggMjIuMSAzNzYuNTMgMjIuMSAzNDUgNzUuMjggMzMzLjg1IDc1LjI4IDM0Mi42NCA2MS4yMiAzMzIuNiAyMi4xIDM0NC4wMiAyMi4xIiBzdHlsZT0iZmlsbDojMzMzO2ZpbGwtcnVsZTpldmVub2RkIi8+PHBhdGggZD0iTTM2NC4zLDY3YS45NS45NSwwLDEsMSwwLDEuODloLTEuN1Y2N1ptMi40MSw0Ljc4LTEuNzgtMmExLjc1LDEuNzUsMCwwLDAsMS40OS0xLjg1LDIsMiwwLDAsMC0yLjEyLTJjLS45NCwwLTEuODcsMC0yLjgxLDB2NS45aDEuMTF2LTJoMS4wN2wxLjcyLDJoMS4zMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC44NykiIHN0eWxlPSJmaWxsOiMzMzM7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMzY3LjI4LDY1LjQ1YTQuODMsNC44MywwLDEsMCwxLjQxLDMuNDEsNC44MSw0LjgxLDAsMCwwLTEuNDEtMy40MW0tMy40MS0yLjE0QTUuNTcsNS41NywwLDEsMSwzNjAsNjQuOTQsNS41LDUuNSwwLDAsMSwzNjMuODcsNjMuMzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuODcpIiBzdHlsZT0iZmlsbDojMzMzO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvZz48L3N2Zz4="
      , uo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzNCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS4wNDA1IDI3LjIzODRMMjQuMzAwMSAyNi4wNDQ4TDIyLjYyOCAyMy4zNDU0QzIzLjU5OTkgMjIuNDYyMSAyNC4zMzk5IDIxLjM3OTggMjQuODA4NiAyMC4xOTM4QzI1LjQ3MzIgMTguNTE1OCAyNS41OTc2IDE2LjYyOTMgMjUuMDc3MSAxNC44MDM4QzI0LjU1NDggMTIuOTczOCAyMy40NTEyIDExLjQyNzQgMjEuOTk2OCAxMC4zMzkxQzIwLjU0MiA5LjI1MDQ2IDE4LjczOTUgOC42MTg2IDE2LjgyMjMgOC42MTg2QzE0LjkwNDIgOC42MTg2IDEzLjEwMTcgOS4yNTA0NiAxMS42NDczIDEwLjMzOTFDMTAuMTkzNCAxMS40Mjc0IDkuMDg4NDQgMTIuOTczOCA4LjU2NjYgMTQuODAzOEM4LjA0NTY3IDE2LjYyOTMgOC4xNzA1MyAxOC41MTU4IDguODM0NjEgMjAuMTkzOEM5LjMwMzg2IDIxLjM3OTggMTAuMDQzNCAyMi40NjIxIDExLjAxNTcgMjMuMzQ1NEw0LjczODA4IDMzLjQ3NjlDNC42NzA0IDMzLjU4NTkgNC41NzQ4MSAzMy42NjQ2IDQuNDY3NzkgMzMuNzA2N0M0LjM2MDc3IDMzLjc0NzkgNC4yMzM2MiAzMy43NTM3IDQuMTA0NjUgMzMuNzE4QzMuOTc5MzMgMzMuNjgyNyAzLjg3Njg5IDMzLjYxMzUgMy44MDc4MyAzMy41MjQ0QzMuNzQwMTQgMzMuNDM1MyAzLjcwMDggMzMuMzE3MyAzLjcwMDggMzMuMTgzNFYxNy4xMDI0SDMuNjk0ODZDMy42OTUzMiAxNC4yMzQzIDQuNjUyNTYgMTEuNTMxOSA2LjMwNzczIDkuMzM5MTFDNy45NjA2MSA3LjE0ODYzIDEwLjMwNzggNS40NzM3NyAxMy4wODcxIDQuNjU3ODJDMTUuODczMyAzLjg0MDA2IDE4Ljc2NzkgMy45Nzc1NiAyMS4zNjIgNC45MjE5NkMyMy45NTU3IDUuODY1NDYgMjYuMjQ2MSA3LjYxNDA0IDI3LjgyOTUgMTAuMDE5OEMyOS40MTQyIDEyLjQyNzkgMzAuMTAzNCAxNS4yMDk5IDI5LjkyNjkgMTcuOTM5MUMyOS43NDk0IDIwLjY2NzQgMjguNzA2NyAyMy4zMzkxIDI2LjgyNTYgMjUuNTIzN0MyNi4yNzY4IDI2LjE1OTIgMjUuNjc5OSAyNi43MzE0IDI1LjA0MDUgMjcuMjM4NFpNMTYuODI0MSAzMC4wNDUzQzE3Ljc5OTIgMzAuMDQ1MyAxOC43OTg1IDI5Ljk3NzEgMTkuNzUyNiAyOS43NjE4QzIwLjU5OTEgMjkuNTcwNCAyMS40MjYgMjkuMjk2OCAyMi4yMjE0IDI4Ljk0MzZMMjEuNDgzMiAyNy43NTI2TDE5LjAyODYgMjMuNzkxNEMxOC41NTM0IDIzLjAyMDcgMTguNzk5NSAyMi4wMTU3IDE5LjU3ODggMjEuNTQ1OEMyMC41ODEzIDIwLjkzNzQgMjEuMzIwOSAyMC4wMzQ2IDIxLjcyODggMTkuMDAyOUMyMi4xMzcyIDE3Ljk3MDggMjIuMjEzNiAxNi44MTAyIDIxLjg5MyAxNS42ODU4QzIxLjU3MzggMTQuNTY1IDIwLjg5NiAxMy42MTc0IDIwLjAwMzcgMTIuOTQ4OUMxOS4xMTE4IDEyLjI4MTggMTguMDA0MSAxMS44OTQ2IDE2LjgyMjMgMTEuODk0NkMxNS42NCAxMS44OTQ2IDE0LjUzMTkgMTIuMjgxOCAxMy42NCAxMi45NDg5QzEyLjc0NzcgMTMuNjE3NCAxMi4wNjk5IDE0LjU2NSAxMS43NTA3IDE1LjY4NThDMTEuNDI5NiAxNi44MDk3IDExLjUwNjUgMTcuOTcxMiAxMS45MTQ5IDE5LjAwMzRDMTIuMzIyOSAyMC4wMzQ2IDEzLjA2MjQgMjAuOTM3NCAxNC4wNjQ5IDIxLjU0NThDMTQuODQ0MyAyMi4wMTU3IDE1LjA5MDMgMjMuMDIwNyAxNC42MTUxIDIzLjc5MTRMMTMuMDIwMyAyNi4zNjU0TDExLjY2OTMgMjguNTQ1MUwxMS40MjkyIDI4LjkzMjJDMTMuMTE3NyAyOS43MDc1IDE0Ljk2MzIgMzAuMDg4MyAxNi44MjQxIDMwLjA0NTNaTTcuOTcxMTMgMzQuNTE0MUw3LjU1OTA1IDM1LjE3ODVDNy4xMDEyNCAzNS45MTc1IDYuNDM1NzkgMzYuNDU2MiA1LjY3MTU1IDM2Ljc1MjVDNC45MDczMSAzNy4wNDc4IDQuMDUxMTQgMzcuMDk5OSAzLjIxMTg5IDM2Ljg2NkMyLjM2OTQ0IDM2LjYzMDggMS42NjQyIDM2LjE0MjggMS4xNjg0MyAzNS40OTQ2QzAuNjcxNzQzIDM0Ljg0NjUgMC4zODgxODQgMzQuMDQ0MSAwLjM4ODE4NCAzMy4xODI5VjE3LjEwMjRIMC4zOTQ1ODdDMC4zOTUwNDQgMTMuNTAwMyAxLjU4OTY1IDEwLjExNjYgMy42NTQxNSA3LjM4MTExQzUuNzIwMDMgNC42NDM4IDguNjYyMTkgMi41NDczOSAxMi4xNTUgMS41MjI5M0MxNS42NDE0IDAuNTAwMjg3IDE5LjI1OTYgMC42NzA4MDQgMjIuNTAwOCAxLjg1MDg1QzI1Ljc0MyAzLjAzMDkgMjguNjEyNSA1LjIyMjc0IDMwLjU5ODggOC4yNDA0OEMzMi41ODMyIDExLjI1NjQgMzMuNDQ3NiAxNC43MzU5IDMzLjIyNTggMTguMTQzNkMzMy4wMDQ5IDIxLjU1MTIgMzEuNjk2OSAyNC44OTMyIDI5LjMzNTUgMjcuNjM2QzI2Ljk3NTYgMzAuMzc3MyAyMy44NDY0IDMyLjE4NzkgMjAuNDc3IDMyLjk0ODdDMTkuNDUzIDMzLjE3OTggMTguNDA3NSAzMy4zMTQxIDE3LjM1NDcgMzMuMzQ4QzE3LjI3NzggMzMuMzQ1OCAxNi44OTIzIDMzLjM1MzUgMTYuODI0MSAzMy4zNTM1QzE0LjM1MzEgMzMuMzU1NyAxMS45MTMxIDMyLjgwNTcgOS42ODY2NiAzMS43NDUxTDcuOTcxMTMgMzQuNTE0MVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMjY3XzQzKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEyNjdfNDMiIHgxPSIxOS4xNDMxIiB5MT0iMS4zNjAyNiIgeDI9IjE0LjI1NDciIHkyPSIzNS4zMjY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjhFMzgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0NjI5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
      , G = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbWFkYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTguMiAyMC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOC4yIDIwLjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZGlzcGxheTpub25lO2ZpbGw6IzY1NjU2NTt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzY1NjU2NTt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LjYsMi44bC0xLjgsMmwtMS45LTJDNC4xLDEuMSwxLjQsMC45LTAuMywyLjRsMCwwYy0yLjEsMS44LTIuMiw1LTAuMyw2LjloMGw4LjQsOC42YzAsMCwwLDAsMCwwbDAuNS0wLjYKCWMwLjIsMC41LDAuNCwwLjksMC43LDEuM2wtMC4yLDAuMmMtMC42LDAuNi0xLjUsMC42LTIsMGwtOC40LTguNkMtNC4xLDcuOC00LDMuNy0xLjMsMS4zYzIuMy0yLDUuOC0xLjYsOCwwLjVjMCwwLDAuMSwwLjEsMC4xLDAuMQoJbDAuOSwwLjlsMC44LTAuOWMwLDAsMC4xLTAuMSwwLjEtMC4xYzIuMi0yLjEsNS43LTIuNCw4LTAuNGMxLjksMS42LDIuNSw0LjEsMS45LDYuM2MtMC40LTAuMi0wLjktMC40LTEuMy0wLjUKCWMwLjQtMS43LTAuMS0zLjUtMS41LTQuOEMxNCwwLjksMTEuMywxLjEsOS42LDIuOHogTTE2LDEzLjdoMi4xYzAuNCwwLDAuNywwLjMsMC43LDAuN2MwLDAuNC0wLjMsMC43LTAuNywwLjdIMTZ2Mi4xCgljMCwwLjQtMC4zLDAuNy0wLjcsMC43Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjd2LTIuMWgtMi4xYy0wLjQsMC0wLjctMC4zLTAuNy0wLjdjMC0wLjMsMC4zLTAuNywwLjctMC43aDIuMXYtMi4xCgljMC0wLjMsMC4zLTAuNywwLjctMC43YzAuNCwwLDAuNywwLjMsMC43LDAuN1YxMy43eiBNMjEuNiwxNC41YzAsMy40LTIuOCw2LjItNi4yLDYuMnMtNi4yLTIuOC02LjItNi4yczIuOC02LjIsNi4yLTYuMgoJUzIxLjYsMTEsMjEuNiwxNC41eiBNMTUuMyw5LjdjLTIuNywwLTQuOSwyLjItNC45LDQuOHMyLjIsNC44LDQuOSw0LjhzNC45LTIuMiw0LjktNC44UzE4LDkuNywxNS4zLDkuN3oiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMC42Yy0xLjgtMC43LTMuOC0wLjctNS43LTAuMkM0LjYsMC45LDMsMi4xLDEuOCwzLjdDMC42LDUuMiwwLDcuMSwwLDkuMWwwLDAuNHY5YzAsMC40LDAuMSwwLjgsMC40LDEuMQoJYzAuMiwwLjMsMC42LDAuNiwxLDAuN2MwLjQsMC4xLDAuOCwwLjEsMS4yLTAuMWMwLjQtMC4xLDAuNy0wLjQsMC45LTAuOGwxLjQtMi4zbDAuMywwLjFjMS4yLDAuNiwyLjYsMC45LDMuOSwwLjljMCwwLDAsMCwwLDAKCWwwLjMsMGMwLjYsMCwxLjEtMC4xLDEuNy0wLjJjMS45LTAuNCwzLjYtMS41LDQuOS0zYzEuMy0xLjUsMi0zLjMsMi4yLTUuM2MwLjEtMi0wLjQtMy45LTEuNS01LjVDMTUuNiwyLjUsMTQuMSwxLjIsMTIuMiwwLjZ6CgkgTTEyLjMsMTYuM2MtMC41LDAuMi0xLDAuNC0xLjUsMC41QzEwLjMsMTYuOSw5LjgsMTcsOS4xLDE3QzksMTcsOSwxNyw4LjksMTdjLTEuMSwwLTIuMS0wLjItMy4xLTAuN2wtMC40LTAuMmwyLTMuMwoJYzAuMS0wLjEsMC4xLTAuMywwLjEtMC41UzcuNSwxMi4xLDcuMywxMmMtMC42LTAuNC0xLjEtMS0xLjQtMS42QzUuNyw5LjYsNS42LDguOSw1LjgsOC4yQzYsNy41LDYuNSw2LjgsNyw2LjQKCWMxLjItMC45LDIuOS0wLjksNC4xLDBjMC42LDAuNCwxLDEuMSwxLjIsMS44YzAuMiwwLjcsMC4yLDEuNS0wLjEsMi4xQzEyLDExLDExLjUsMTEuNiwxMC45LDEyYy0wLjEsMC4xLTAuMiwwLjItMC4zLDAuNAoJczAsMC4zLDAuMSwwLjVsMiwzLjNMMTIuMywxNi4zeiBNMTUuMSwxNC4yYy0wLjMsMC40LTAuNywwLjctMS4xLDFsLTAuMywwLjJMMTIsMTIuN2wwLjItMC4yYzAuNS0wLjUsMC45LTEuMSwxLjItMS43CgljMC40LTAuOSwwLjQtMS45LDAuMS0yLjljLTAuMy0xLTAuOC0xLjgtMS42LTIuNGMtMS42LTEuMi0zLjktMS4yLTUuNSwwQzUuNSw2LDUsNi45LDQuNyw3LjljLTAuMywxLTAuMiwyLDAuMSwyLjkKCUM1LjEsMTEuNCw1LjUsMTIsNiwxMi41bDAuMiwwLjJsLTMuOCw2LjFjLTAuMSwwLjEtMC4yLDAuMi0wLjMsMC4zYy0wLjEsMC0wLjIsMC0wLjIsMGMtMC4xLDAtMC4xLDAtMC4yLDBjLTAuMSwwLTAuMy0wLjEtMC40LTAuMgoJYy0wLjEtMC4xLTAuMS0wLjMtMC4xLTAuNGwwLTkuM2MwLTEuNywwLjUtMy4zLDEuNi00LjdDMy44LDMsNS4yLDIsNi44LDEuNWMxLjYtMC41LDMuNC0wLjQsNSwwLjJjMS42LDAuNiwzLDEuNywzLjksMy4xCgljMC45LDEuNCwxLjQsMy4xLDEuMyw0LjhDMTYuOSwxMS4zLDE2LjIsMTIuOSwxNS4xLDE0LjJ6Ii8+Cjwvc3ZnPgo="
      , pe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy43NDI3IDI0Ljg2MTlDMjQuNjY3MiAyNC45MjU3IDI1LjQxMTEgMjQuNzg3NSAyNS45OTU2IDI0LjQ0NzVDMjYuNTgwMSAyNC4xMDc0IDI2Ljk1MiAyMy43MTQyIDI3LjEzMjcgMjMuMjY3OUMyNy4zMTMzIDIyLjgyMTUgMjcuMjYwMiAyMi4zNzUyIDI2Ljk4MzkgMjEuOTM5NUMyNi43MDc2IDIxLjUwMzggMjYuMTY1NiAyMS4xOTU2IDI1LjM1OCAyMS4wMTVMMjEuMzUxNiAyMC40MTk4QzE5Ljc2ODIgMjAuMTc1NCAxOC41MDM1IDE5LjU4MDMgMTcuNTM2NSAxOC42MTMyQzE2LjU2OTQgMTcuNjQ2MiAxNi4wOTEyIDE2LjMzOTEgMTYuMDkxMiAxNC43MDI1QzE2LjA5MTIgMTMuNzk5MiAxNi4yODI1IDEyLjk4MDkgMTYuNjY1MSAxMi4yMzdDMTcuMDQ3NiAxMS40OTMxIDE3LjU3OSAxMC44NTU1IDE4LjI0ODUgMTAuMzM0OEMxOC45MTggOS44MDM0NSAxOS43MjU3IDkuMzk5NjMgMjAuNjYwOCA5LjEyMzMyQzIxLjYwNjYgOC44MzY0IDIyLjYzNzUgOC42OTgyNCAyMy43NTMzIDguNjk4MjRDMjUuMTk4NiA4LjY5ODI0IDI2LjU2OTQgOC45MDAxNiAyNy44NjU5IDkuMjkzMzZDMjkuMTYyNCA5LjY4NjU2IDMwLjMyMDggMTAuMjM5MiAzMS4zNTE2IDEwLjk0MDVMMjkuMzExMiAxNC4zMzA2QzI4LjY3MzYgMTMuODMxMSAyNy44NDQ3IDEzLjQyNzMgMjYuODI0NSAxMy4xNTFDMjUuODA0MyAxMi44NjQgMjQuNzg0MSAxMi43MjU5IDIzLjc1MzMgMTIuNzI1OUMyMi43MjI1IDEyLjcyNTkgMjEuOTg5MiAxMi44ODUzIDIxLjQ3OTEgMTMuMjA0MUMyMC45Nzk2IDEzLjUyMjkgMjAuNjgyMSAxMy44ODQyIDIwLjYwNzcgMTQuMjg4MUMyMC41MzMzIDE0LjY5MTkgMjAuNjM5NiAxNS4wNzQ1IDIwLjkzNzEgMTUuNDM1OEMyMS4yMzQ3IDE1Ljc5NzEgMjEuNjgxIDE2LjAyMDMgMjIuMjY1NSAxNi4xMDUzTDI2LjM0NjMgMTYuNzMyM0MyNy4wMDUyIDE2LjgzODUgMjcuNjY0IDE3LjA0MDUgMjguMzMzNSAxNy4zMjc0QzI5LjAwMyAxNy42MTQzIDI5LjYwODggMTcuOTk2OSAzMC4xNjE0IDE4LjQ5NjRDMzAuNzE0IDE4Ljk4NTIgMzEuMTQ5NyAxOS42MDE2IDMxLjQ4OTggMjAuMzI0MkMzMS44Mjk4IDIxLjA0NjggMzEuOTk5OSAyMS45MDc2IDMxLjk5OTkgMjIuODg1M0MzMS45OTk5IDIzLjg2MyAzMS43NzY3IDI0LjY3MDYgMzEuMzQxIDI1LjQxNDVDMzAuOTA1MyAyNi4xNTg0IDMwLjMxMDIgMjYuNzg1NCAyOS41NDUgMjcuMzA2MUMyOC43OTA1IDI3LjgxNjIgMjcuOTA4NSAyOC4yMjAxIDI2LjkwOTUgMjguNDg1N0MyNS45MTA2IDI4Ljc2MiAyNC44NTg1IDI4LjkwMDIgMjMuNzMyIDI4LjkwMDJDMjIuMTQ4NiAyOC45MDAyIDIwLjY4MjEgMjguNjk4MyAxOS4zMTEyIDI4LjMwNTFDMTcuOTQwMyAyNy45MTE5IDE2LjcyODggMjcuMzU5MyAxNS42NzY4IDI2LjY1NzlMMTcuOTUwOSAyMy4wNzY2QzE4LjY1MjMgMjMuNTc2MSAxOS41MDI1IDIzLjk5MDUgMjAuNTAxNCAyNC4zMDkzQzIxLjUwMDQgMjQuNjI4MSAyMi41NzM3IDI0LjgxOTQgMjMuNzQyNyAyNC44ODMyVjI0Ljg2MTlaIiBzdHJva2U9IiM2NTY1NjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS40MjgyOCAyMy44NDE3QzkuMTIwMSAyMy44NDE3IDguODU0NDIgMjMuNzM1NCA4LjY0MTg4IDIzLjUxMjNDOC40MTg3MiAyMy4yODkxIDguMzEyNDUgMjMuMDIzNCA4LjMxMjQ1IDIyLjY5NFYxMy4zNTI4SDExLjEwNzRWOS4yNzIwNkg4LjQxODcyVjVIMy45MTI4NlY5LjI3MjA2SDJWMTMuMzUyOEgzLjcxMDk1VjIyLjY5NEMzLjcxMDk1IDIzLjQ4MDQgMy44NTk3MyAyNC4yMTM2IDQuMTY3OTEgMjQuODkzOEM0LjQ3NjEgMjUuNTczOSA0Ljg5MDU1IDI2LjE2OSA1LjQwMDY1IDI2LjY2ODVDNS45MTA3NCAyNy4xNjggNi41MTY0OCAyNy41NzE4IDcuMjA3MjQgMjcuODY5M0M3Ljg5Nzk5IDI4LjE2NjkgOC42NDE4OCAyOC4zMTU3IDkuNDI4MjggMjguMzE1N0gxMS42NlYyMy44NDE3SDkuNDI4MjhaIiBzdHJva2U9IiM2NTY1NjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo=";
    function Mo({userName: e}) {
        e = e.trim();
        const t = "#F4EEE5"
          , n = "#333333";
        let i = ""
          , r = "";
        if (!e)
            i = "",
            r = "";
        else {
            const M = Array.from(e.toUpperCase().replace(/\s+/g, ""));
            i = M[0] || "",
            r = M[1] || ""
        }
        const c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        c.setAttribute("width", "120"),
        c.setAttribute("height", "120");
        const a = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        a.setAttribute("x", "0"),
        a.setAttribute("y", "0"),
        a.setAttribute("width", "120"),
        a.setAttribute("height", "120"),
        a.setAttribute("fill", t);
        const s = document.createElementNS("http://www.w3.org/2000/svg", "text");
        s.setAttribute("x", "60px"),
        s.setAttribute("y", "64px"),
        s.setAttribute("dominant-baseline", "middle"),
        s.setAttribute("text-anchor", "middle"),
        s.setAttribute("fill", n),
        s.setAttribute("font-family", "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, Helvetica, sans-serif"),
        s.setAttribute("font-size", "40px"),
        s.setAttribute("font-weight", "530"),
        s.textContent = `${i}${r}`,
        c.appendChild(a),
        c.appendChild(s);
        const u = new XMLSerializer().serializeToString(c);
        return `data:image/svg+xml;base64,${fo(u)}`
    }
    function fo(e) {
        const t = new TextEncoder().encode(e);
        let n = "";
        for (let i = 0; i < t.byteLength; i++)
            n += String.fromCharCode(t[i]);
        return btoa(n)
    }
    function mo({userName: e}) {
        return Mo({
            userName: e
        })
    }
    const go = `.sidebar{background-color:var(--bs-body-bg)}.sidebar .publication-text{color:var(--el-color-white)!important}
`
      , po = {
        components: {
            MenuList: $e,
            UserDescription: Ke
        },
        props: {
            user: {
                type: Object,
                required: !0
            },
            v10: {
                type: Boolean,
                default: !1
            }
        },
        inject: ["$http", "appSettings", "locale", "token", "userSettings"],
        emits: ["dialog-toggle"],
        setup() {
            const e = le()
              , {t} = U();
            return {
                openPage: R,
                authStore: e,
                t,
                faHouse: me,
                faPlus: sn,
                faUser: Ve,
                faGear: Ze,
                faBell: Re,
                faWallet: W,
                faMoneyBills: rn,
                faShield: Ge,
                faBookmark: Me,
                faLock: Ue,
                faUserGroup: Pe,
                faBoxArchive: ue,
                faMessageLines: He,
                faCircleEllipsis: We,
                faCircleQuestion: Be,
                faCreditCardBlank: de,
                faMagnifyingGlass: an,
                faHeartCirclePlus: fe,
                faArrowRightFromBracket: Qe,
                faBuildingColumns: ge,
                logoImage: lo,
                logoImageMobile: uo,
                iconMyPrivacy: G,
                iconTopShare: pe,
                regularIcons: q
            }
        },
        watch: {
            expandedMenu: {
                handler(e) {
                    this.$emit("dialog-toggle", e)
                }
            }
        },
        computed: {
            getProfileName() {
                var e, t;
                return ((t = (e = this.authStore) == null ? void 0 : e.jwt) == null ? void 0 : t.profile_name) || ""
            },
            userData() {
                var t, n, i, r, c, a, s, u, l;
                return {
                    avatar: ((t = this.userSettings) == null ? void 0 : t.Image) || this.avatarError((n = this.userSettings) == null ? void 0 : n.Name),
                    userType: ((i = this.userSettings) == null ? void 0 : i.UserType) || p.COMMON,
                    profileName: ((r = this.userSettings) == null ? void 0 : r.ProfileName) || this.getProfileName,
                    name: (c = this.userSettings) == null ? void 0 : c.Name,
                    verified: (a = this.userSettings) == null ? void 0 : a.Verified,
                    followers: (s = this.userSettings) == null ? void 0 : s.Followers,
                    following: (u = this.userSettings) == null ? void 0 : u.Following,
                    isPrivacy: (l = this.userSettings) == null ? void 0 : l.IsPrivacy
                }
            }
        },
        async mounted() {
            this.addMenuItems(),
            await this.loadNotification(),
            this.updateMenuItemNotification(),
            this.$refs.overlay.addEventListener("click", () => {
                this.expandedMenu = !1
            }
            ),
            window.addEventListener("resize", this.handleResize)
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.handleResize)
        },
        data() {
            return {
                expandedMenu: !1,
                valueSearch: null,
                menuItems: {},
                notification: !1,
                isSmallDevice: window.innerWidth < 1200,
                adsTourCompleted: !0
            }
        },
        methods: {
            addMenuItems() {
                this.menuItems = {
                    prev: [{
                        text: "home",
                        icon: me
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!1),
                        visible: [p.COMMON, p.CREATOR],
                        text: "becomeCreator",
                        icon: G
                    }, {
                        visible: [p.CREATOR],
                        text: "notification",
                        icon: Re,
                        badge: this.notification
                    }, {
                        text: "chat",
                        icon: this.v10 ? q.fak.chat : He
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!0),
                        visible: [p.CREATOR],
                        text: "vault",
                        icon: ue
                    }, {
                        visible: [p.COMMON],
                        text: "following",
                        icon: fe
                    }, {
                        visible: [p.COMMON, p.CREATOR],
                        text: "collection",
                        icon: Me
                    }, {
                        visible: this.v10 ? [] : [p.COMMON, p.CREATOR],
                        text: "myCards",
                        icon: de
                    }, {
                        visible: this.v10 ? [p.COMMON, p.CREATOR] : [],
                        text: "myWallet",
                        icon: W
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!0),
                        visible: [p.CREATOR],
                        text: "myBank",
                        icon: this.v10 ? ge : W
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!0),
                        visible: [p.CREATOR],
                        text: "myPrivacy",
                        icon: G,
                        active: !0
                    }, {
                        text: "topshare",
                        icon: pe,
                        external: !0,
                        widthIcon: "28px !important",
                        heightIcon: "28px !important",
                        copyright: !0
                    }, {
                        text: "more",
                        icon: We,
                        function: this.expandMenu
                    }],
                    all: [{
                        text: "home",
                        icon: me
                    }, {
                        visible: [p.COMMON, p.CREATOR],
                        text: "profile",
                        icon: Ve
                    }, {
                        visible: [p.COMMON],
                        text: "following",
                        icon: fe
                    }, {
                        visible: [p.CREATOR],
                        text: "followers",
                        icon: Pe
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!0),
                        visible: [p.CREATOR],
                        text: "vault",
                        icon: ue
                    }, {
                        visible: [p.COMMON, p.CREATOR],
                        text: "collection",
                        icon: Me
                    }, {
                        visible: this.v10 ? [] : [p.COMMON, p.CREATOR],
                        text: "myCards",
                        icon: de
                    }, {
                        visible: this.v10 ? [p.COMMON, p.CREATOR] : [],
                        text: "myWallet",
                        icon: W
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!0),
                        visible: [p.CREATOR],
                        text: "myBank",
                        icon: this.v10 ? ge : W
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!0),
                        visible: [p.CREATOR],
                        text: "myPrivacy",
                        icon: G,
                        active: !0
                    }, {
                        text: "topshare",
                        icon: pe,
                        external: !0,
                        widthIcon: "28px !important",
                        heightIcon: "28px !important",
                        copyright: !0
                    }, {
                        validatePermission: this.validateCreatorWithApprovedData(!1),
                        visible: [p.COMMON, p.CREATOR],
                        text: "becomeCreator",
                        icon: G
                    }, {
                        text: "settings",
                        icon: Ze
                    }, {
                        text: "security",
                        icon: Ge
                    }, {
                        text: "privacy",
                        icon: Ue
                    }, {
                        text: "language",
                        visible: this.v10 ? [] : [p.COMMON, p.CREATOR]
                    }, {
                        text: "help",
                        icon: Be
                    }, {
                        text: "logout",
                        icon: Qe
                    }]
                }
            },
            updateMenuItemNotification() {
                const e = t => {
                    const n = t.find(i => i.text === "notification");
                    n && (n.badge = this.notification)
                }
                ;
                e(this.menuItems.prev),
                e(this.menuItems.all)
            },
            handleResize() {
                this.isSmallDevice = window.innerWidth < 1200
            },
            expandMenu() {
                this.expandedMenu = !0
            },
            topSearchField() {
                const e = this.valueSearch;
                this.openPage(e ? "/Search?term=" + e : "/Search")
            },
            validateCreatorWithApprovedData(e) {
                var t;
                return e == ((t = this.authStore) == null ? void 0 : t.isCreator)
            },
            showProfileName() {
                return [p.CREATOR, p.CREATOR_NOT_ACCOUNT].includes(this.userData.userType)
            },
            avatarError(e) {
                return mo({
                    userName: e
                })
            },
            async loadNotification() {
                var e;
                try {
                    const t = await this.$http.get("/Notification/GetNotificationAlert");
                    this.notification = parseInt((e = t == null ? void 0 : t.data) == null ? void 0 : e.count) > 0
                } catch (t) {
                    console.error(t)
                }
            }
        }
    }
      , Lo = {
        class: "menu-header mb-2"
    }
      , yo = {
        key: 0,
        class: "d-flex flex-column px-3"
    }
      , jo = {
        key: 1
    }
      , wo = {
        class: "user-avatar"
    }
      , No = {
        class: "d-flex flex-column align-items-center"
    }
      , zo = {
        key: 0,
        href: "/Publication",
        class: "action-new-publication mx-2"
    }
      , Do = {
        class: "sidebar-text publication-text mx-1"
    }
      , xo = {
        class: "my-overlay",
        ref: "overlay"
    };
    function Io(e, t, n, i, r, c) {
        var l;
        const a = o.resolveComponent("UserDescription")
          , s = o.resolveComponent("menu-list")
          , u = o.resolveComponent("font-awesome-icon");
        return o.openBlock(),
        o.createElementBlock(o.Fragment, null, [o.createElementVNode("div", {
            class: o.normalizeClass(["sidebar d-none d-md-block d-lg-block d-xl-block", {
                expanded: r.expandedMenu,
                "is-creator": (l = i.authStore) == null ? void 0 : l.isCreator
            }])
        }, [o.createElementVNode("div", Lo, [r.expandedMenu ? (o.openBlock(),
        o.createElementBlock("div", yo, [o.createElementVNode("div", {
            class: "w-25 user-avatar",
            onClick: t[0] || (t[0] = M => i.openPage(`/@${c.userData.profileName}`))
        }, [o.createElementVNode("div", {
            style: o.normalizeStyle({
                backgroundImage: `url(${c.userData.avatar})`
            }),
            class: "circle-avatar-img rounded-circle"
        }, null, 4)]), o.createVNode(a, {
            class: "mt-3",
            userData: c.userData
        }, null, 8, ["userData"])])) : (o.openBlock(),
        o.createElementBlock("div", jo, [o.createElementVNode("div", wo, [o.createElementVNode("div", {
            onClick: t[1] || (t[1] = M => i.openPage(`/@${c.userData.profileName}`))
        }, [o.createElementVNode("div", {
            style: o.normalizeStyle({
                backgroundImage: `url(${c.userData.avatar})`
            }),
            class: "circle-avatar-img rounded-circle"
        }, null, 4)]), o.createVNode(a, {
            class: "hide-user-description mt-3",
            userData: c.userData
        }, null, 8, ["userData"])])]))]), o.createElementVNode("div", No, [o.createVNode(s, {
            menuItems: r.expandedMenu ? r.menuItems.all : r.menuItems.prev,
            expandedMenu: r.expandedMenu,
            userType: c.userData.userType,
            showMore: !0,
            v10: n.v10,
            onChangeLanguage: t[2] || (t[2] = M => e.$emit("change-language", M))
        }, null, 8, ["menuItems", "expandedMenu", "userType", "v10"]), r.expandedMenu ? o.createCommentVNode("", !0) : (o.openBlock(),
        o.createElementBlock("a", zo, [o.createVNode(u, {
            class: "icon-new-publication",
            icon: i.faPlus
        }, null, 8, ["icon"]), o.createElementVNode("span", Do, o.toDisplayString(i.t("menu.publication")), 1)]))])], 2), o.createVNode(o.Transition, {
            name: "fade"
        }, {
            default: o.withCtx( () => [o.withDirectives(o.createElementVNode("div", xo, null, 512), [[o.vShow, r.expandedMenu]])]),
            _: 1
        })], 64)
    }
    const qe = E(po, [["render", Io], ["styles", [go]]])
      , ho = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: qe
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , Co = {
        emits: ["dialog-toggle", "change-language"],
        props: {
            v10: {
                type: Boolean,
                default: !1
            }
        },
        components: {
            Sidebar: qe
        }
    };
    function bo(e, t, n, i, r, c) {
        const a = o.resolveComponent("Sidebar");
        return o.openBlock(),
        o.createElementBlock("div", null, [o.createVNode(a, {
            v10: n.v10,
            onDialogToggle: t[0] || (t[0] = s => e.$emit("dialog-toggle", s)),
            onChangeLanguage: t[1] || (t[1] = s => e.$emit("change-language", s))
        }, null, 8, ["v10"])])
    }
    const et = E(Co, [["render", bo]])
      , To = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: et
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , So = `@import"https://fonts.googleapis.com/css2?family=Inter&display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/element-plus/2.2.30/index.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css";.sidebar{width:100%;-ms-overflow-style:none;scrollbar-width:none}.sidebar:not(.expanded){max-height:100vh;overflow-y:auto;padding-bottom:16px}.sidebar .user-follow .follow-text{font-size:var(--el-font-size-small);margin-left:2px}.sidebar .user-follow .follow-counter{font-size:var(--el-font-size-extra-small);font-weight:600}.sidebar:not(.expanded) .user-avatar{padding:0 16px}.sidebar::-webkit-scrollbar{display:none}.sidebar.expanded{position:relative;z-index:1000;background:var(--bs-body-bg);border-radius:12px;height:auto;max-height:calc(100vh - 32px);overflow-y:auto}.dark-mode .sidebar.expanded{background:var(--color-bg-dark-2)!important}.sidebar .user-limit-name{display:inline-block;max-width:24ch;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--bs-text-color)}.sidebar .action-new-publication{width:90%;height:44px;display:flex;flex-direction:row;padding:10px 10px 10px 12px;flex-wrap:nowrap;align-items:center;gap:8px;text-decoration:none;color:#fff;background:linear-gradient(45deg,#F58170,#F9AF77);border-radius:30px;justify-content:center}.sidebar .action-new-publication .icon-new-publication{font-size:1.4rem}.sidebar .action-new-publication .sidebar-text{color:#fff;font-size:var(--el-font-size-medium)}.sidebar .action-new-publication:hover{background:linear-gradient(45deg,#FFA08A,#FFC09A)}.sidebar .circle-avatar-img{width:36px;height:36px;object-fit:cover;background-position:center;background-size:cover;background-repeat:no-repeat;cursor:pointer}.sidebar .sidebar-content-items{padding:0;margin:0;display:flex;flex-direction:column}.sidebar .sidebar-content-items li{list-style-type:none}.sidebar .sidebar-item{min-height:44px;padding:10px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;cursor:pointer;text-decoration:none}.sidebar .sidebar-item svg,.sidebar .sidebar-item img{width:24px;height:24px}.sidebar .sidebar-item:hover{background:var(--el-color-info-light-9);border-radius:25px}.dark-mode .sidebar .sidebar-item:hover{background:var(--color-bg-dark)!important}.sidebar .sidebar-text{font-size:var(--el-font-size-large);color:#757a91;margin-left:16px;line-height:20px;text-wrap:nowrap}.dark-mode .sidebar .sidebar-text{color:var(--el-text-color-secondary)}.sidebar .sidebar-item-action{display:flex;align-items:center;position:relative}.sidebar .sidebar-icon{color:#656565;display:flex;align-items:center}.dark-mode .sidebar .sidebar-icon{color:var(--el-text-color-secondary)}.sidebar .sidebar-badge{position:absolute;right:-6px;top:-2px;font-size:10px;font-weight:700;text-align:center;z-index:1;color:#4a4a4a;border-radius:50%;padding-left:1px;padding-right:1px;min-width:16px;height:15px;background-color:#f68d3d;box-shadow:0 3px 8px #0000001a;display:flex;align-items:center;justify-content:center}@media screen and (min-width: 768px){.sidebar{padding-top:16px}}@media (max-height: 520px){.sidebar:not(.expanded){max-height:100vh;overflow-y:auto}}@media (max-height: 674px){.sidebar.is-creator:not(.expanded){max-height:100vh;overflow-y:auto}}@media (max-width: 1200px){.sidebar .action-new-publication{width:45px;height:44px;border-radius:50%}.sidebar .action-new-publication .icon-new-publication{font-size:1.5rem}.sidebar:not(.expanded) .sidebar-text{display:none}.sidebar:not(.expanded) .sidebar-item{justify-content:center;width:44px;margin:.25rem 0rem!important}.sidebar:not(.expanded) .sidebar-content-items{align-items:center}.sidebar .user-avatar{display:flex;justify-content:center}.sidebar .action-new-publication{padding:0;justify-content:center}.sidebar .hide-user-description{display:none}}.my-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:999}.fade-enter-active,.fade-leave-active{transition:opacity .3s ease}.fade-enter-from,.fade-leave-to{opacity:0}.fade-enter-to,.fade-leave-from{opacity:1}
`
      , Ao = {
        computed: {
            ...ft(_t)
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
      , Oo = Object.assign(Ao, {
        __name: "App.ce",
        props: {
            ready: {
                type: [Boolean, String],
                default: !0
            },
            enabledNotification: {
                type: [Boolean, String],
                default: !1
            },
            appSettings: [Object, String],
            userSettings: [Object, String],
            token: String,
            locale: String
        },
        emits: {
            "before-mount": null,
            "dialog-toggle": null,
            "change-language": null,
            mounted: null,
            ready: null,
            loaded: null
        },
        setup(e, {emit: t}) {
            const n = e
              , {theme: i} = Ft()
              , r = o.ref(document.documentElement.classList.contains("v10"))
              , c = o.getCurrentInstance();
            Wt(n),
            Rt(),
            jt(n);
            const {windowLoaded: a} = Gt({
                emit: t
            });
            return Te.useProvides(c),
            be.useProvides(c),
            (s, u) => {
                var l;
                return o.openBlock(),
                o.createElementBlock(o.Fragment, null, [(l = s.appStore.appSettings) != null && l.PRIVACY_MODULES ? (o.openBlock(),
                o.createBlock(o.resolveDynamicComponent("style"), {
                    key: 0
                }, {
                    default: o.withCtx( () => {
                        var M;
                        return [o.createTextVNode(' @import "' + o.toDisplayString((M = s.appStore.appSettings) == null ? void 0 : M.PRIVACY_MODULES) + '/styles/privacy.components.css"; ', 1)]
                    }
                    ),
                    _: 1
                })) : o.createCommentVNode("", !0), s.appStore.ready && o.unref(a) ? (o.openBlock(),
                o.createBlock(et, {
                    key: 1,
                    class: o.normalizeClass(["app-wc", {
                        "dark-mode": o.unref(i) === "dark"
                    }, {
                        v10: r.value
                    }]),
                    v10: r.value,
                    onDialogToggle: u[0] || (u[0] = M => s.$emit("dialog-toggle", M)),
                    onChangeLanguage: u[1] || (u[1] = M => s.$emit("change-language", M))
                }, null, 8, ["class", "v10"])) : o.createCommentVNode("", !0)], 64)
            }
        }
    })
      , Le = E(Oo, [["styles", [So]]])
      , Eo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Le
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , tt = {
        name: "privacy.web.menu",
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
            "@awesome.me/kit-eb3b00ea6e": "1.0.28",
            "@fortawesome/fontawesome-svg-core": "6.4.0",
            "@fortawesome/pro-light-svg-icons": "6.4.0",
            "@fortawesome/pro-regular-svg-icons": "6.4.0",
            "@fortawesome/pro-solid-svg-icons": "6.4.0",
            "@fortawesome/vue-fontawesome": "3.0.3",
            axios: "1.3.3",
            "element-plus": "2.2.30",
            maska: "2.1.9",
            moment: "2.29.4",
            pinia: "2.0.30",
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
            sass: "1.59.3",
            "unplugin-auto-import": "0.15.1",
            "unplugin-element-plus": "0.7.0",
            "unplugin-vue-components": "0.24.1",
            vite: "4.1.1",
            "vite-plugin-html-env": "1.2.8",
            vue: "3.3.0"
        }
    }.name.replace(/\./g, "-")
      , vo = ({component: e=null, plugins: t=[]}={}) => o.defineCustomElement({
        emits: e.emits,
        computed: e.computed,
        props: e.props,
        styles: e.styles,
        setup(n) {
            const i = o.createApp();
            i.component("app-root", e),
            t.forEach(s => i.use(s));
            const r = o.getCurrentInstance()
              , c = Array.isArray(e.emits) ? e.emits : Object.keys(e.emits)
              , a = Object.fromEntries((c || []).map(s => [`on${s[0].toUpperCase()}${s.slice(1)}`, u => r.emit(s, u)]));
            return Object.assign(r.appContext, i._context),
            Object.assign(r.provides, i._context.provides),
            () => o.h(e, {
                ...n,
                ...a
            })
        }
    });
    (async () => {
        const e = [ve.css(), ...await kt()];
        if (Le.styles = e,
        !customElements.get(tt)) {
            const n = vo({
                component: Le,
                plugins: [vt, ve, be, Te, re]
            });
            customElements.define(tt, n)
        }
    }
    )()
});
