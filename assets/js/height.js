(function () {
    let self = null

    self = {
        setWcHeight({ wc, padding }) {
            wc.setAttribute('height', `calc(100svh - ${padding}px)`)
        },

        calc({ wc, wrapper, breakpoint = 768, paddingTop = 65 }) {
            const isFeatureV10Enabled = document.documentElement.classList.contains('v10')

            if (isFeatureV10Enabled) {
                this.setWcHeight({ wc, padding: paddingTop })
                return
            }

            const isMobile = window.innerWidth < breakpoint

            if (isMobile) {
                this.setWcHeight({ wc, padding: paddingTop })
            } else {
                wrapper.style.paddingTop = 0
                this.setWcHeight({ wc, padding: 0 })
            }
        },

        init({ wc, wrapper, breakpoint, paddingTop }) {
            this.calc({ wc, wrapper, breakpoint, paddingTop })
            window.addEventListener('resize', () => this.calc({ wc, wrapper, breakpoint, paddingTop }))
        }
    }

    window.heightCalculator = self
})()
