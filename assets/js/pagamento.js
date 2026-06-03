(() => {

    $(document).ready(function () {
        initObserverModal("tip-modal");
        initObserverModal("notification-details-modal");

        //Add Inactive Class To All Accordion Headers
        $('.accordion-header').toggleClass('inactive-header');

        //Open The First Accordion Section When Page Loads
        $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
        $('.accordion-content').first().slideDown().toggleClass('open-content');

        // The Accordion Effect
        $('.accordion-header:not(.no-action)').click(function () {
            if ($(this).is('.inactive-header')) {
                $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
                $(this).toggleClass('active-header').toggleClass('inactive-header');
                $(this).next().slideToggle().toggleClass('open-content');
            }
            else {
                $('.inactive-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
                $(this).toggleClass('active-header').toggleClass('inactive-header');
                $(this).next().slideToggle().toggleClass('open-content');
            }
        });
    });

    function initObserverModal(id) {
        const targetNode = document.getElementById(id);

        if (targetNode) {
            const observer = new MutationObserver(() => {
                const isModalOpenedByClass = targetNode.classList.contains('is-active');
                const isModalOpenedByDisplay = window.getComputedStyle(targetNode).display === 'block';

                if (isModalOpenedByClass || isModalOpenedByDisplay) {
                    blockScroll()
                } else {
                    const wcPayment = document.getElementById('privacy-web-payment')
                    const wcPaymentIsOpen = castBoolean(wcPayment.getAttribute('show-dialog'))

                    if (!wcPaymentIsOpen) {
                        unlockScroll()
                    }
                }
            });

            observer.observe(targetNode, { attributes: true, attributeFilter: ['class', 'style'] });
        }
    }

    function castBoolean(val) {
        return val === 'true' || val === true
    }

    function CarregarInfoModalTip({ postId, profileId, profileName, profileUserName, profileUserImageUrl, spreadFee }) {
        const wc = document.getElementById('privacy-web-tip');

        const setAttr = (name, value) => {
            if (value != null) {
                wc.setAttribute(name, value)
            } else {
                wc.removeAttribute(name)
            }
        }

        if (postId) {
            setAttr('post-id', postId);
        } else if (profileId) {
            setAttr('profile-id', profileId);
        }

        setAttr('show-modal', true)
        setAttr('profile-name', profileName);
        setAttr('profile-user-name', profileUserName);
        setAttr('profile-user-image-url', profileUserImageUrl);
        setAttr('spread-fee', spreadFee);

        wc.addEventListener('close-tip-modal', () => {
            wc.setAttribute('show-modal', false);
        })
    }


    async function EfetuarPagamento(clienteId, postId, valor, chatId, chatMessageId, recorrencia, page, creator, creatorNickname, coverImg, profileImg) {

            openPaymentCheckout({
                clientId: clienteId,
                value: valor,
                recurrence: recorrencia,
                postId: postId,
                page: page,
                creator: creator,
                creatorNickname: creatorNickname,
                coverImg: coverImg,
                profileImg: profileImg,
            })
    }

    function setParamsPaymentCheckout(hashParameters) {
        let base64 = atob(hashParameters)

        try {
            const bytes = Uint8Array.from(base64, char => char.charCodeAt(0));
            base64 = new TextDecoder("utf-8").decode(bytes);
        } catch (e) {
            console.error(e)
        }

        const dto = JSON.parse(base64);

        openPaymentCheckout({
            clientId: dto.buyerAid,
            currencyCode: dto.currencyCode,
            currencySymbol: dto.currencySymbol,
            value: dto.amount,
            spreadFee: dto.spreadFee,
            recurrence: dto.recurrence,
            creator: dto.creatorProfileName,
            creatorNickname: dto.creatorNickname,
            coverImg: dto.coverImg,
            profileImg: dto.profileImg,
            page: dto.page,
            postId: dto.postId,
            fundraisingId: dto.fundraisingId
        })
    }

    function openPaymentCheckout({
        clientId, currencyCode, currencySymbol, value, spreadFee, recurrence, postId, page, messageTip, creator, creatorNickname, coverImg, profileImg, fundraisingId
    }) {
        const el = document.getElementById('privacy-web-payment')

        if (el) {
            const setAttr = (name, value) => {
                if (value != null) {
                    el.setAttribute(name, value)
                } else {
                    el.removeAttribute(name)
                }
            }

            setAttr('post-id', postId)
            setAttr('currency-symbol', currencySymbol)
            setAttr('currency-code', currencyCode)
            setAttr('value', value)
            setAttr('spread-fee', spreadFee)
            setAttr('page', recurrence ? 'profile' : page)
            setAttr('client-id', clientId)
            setAttr('recurrence', recurrence)
            setAttr('tip-message', messageTip)
            setAttr('creator', creator)
            setAttr('creator-nickname', creatorNickname)
            setAttr('cover-img', coverImg)
            setAttr('profile-img', profileImg)
            setAttr('show-dialog', true)
            setAttr('fundraising-id', fundraisingId)

            blockScroll()

            el.addEventListener('close-dialog', () => {
                el.setAttribute('show-dialog', false)

                unlockScroll()
            })
        }
    }

    function blockScroll() {
        $("html").addClass('showing-modal');

    }

    function unlockScroll() {
        $("html").removeClass('showing-modal');
    }    

    // Exposed
    window.setParamsPaymentCheckout = setParamsPaymentCheckout
    window.CarregarInfoModalTip = CarregarInfoModalTip
    window.openPaymentCheckout = openPaymentCheckout

    // TODO, remover apos GO LIVE internacional
    window.EfetuarPagamento = EfetuarPagamento
})()

function addEventListenerToFundraising(modelId) {
    const wcFundraising = findElement(`#privacy-web-fundraising-${modelId}`)[0];

    if (wcFundraising && !wcFundraising.payEventListenerAdded) {
        wcFundraising.addEventListener('pay', async (event) => {
            const price = event.detail[0].value;
            const postId = event.detail[0].postId;
            const fundraisingId = event.detail[0].fundraisingId;
            const creatorId = event.detail[0].creatorId;
            const currencySymbol = event.detail[0].currencySymbol;
            const currencyCode = event.detail[0].currencyCode;
            const spreadFee = event.detail[0].spreadFee;

            openPaymentCheckout({
                value: String(price),
                page: 'fundraising',
                postId: String(postId),
                fundraisingId: String(fundraisingId),
                creator: creatorId,
                currencySymbol: currencySymbol,
                currencyCode: currencyCode,
                spreadFee: spreadFee
            })
        });

        wcFundraising.payEventListenerAdded = true;
    }
}