function addEventListenerToMosaic() {
    const mosaicLoaderSkeleton = findElement('#mosaic-skeleton-loader')[0];
    const wcMosaic = findElement('#privacy-web-mediahub-mosaic')[0];

    if (wcMosaic && !wcMosaic.mosaicReadyEventListenerAdded) {
        wcMosaic.addEventListener('mosaic-ready', () => {
            mosaicLoaderSkeleton.style.display = 'none';
            wcMosaic.style.display = 'block';
        });

        wcMosaic.mosaicReadyEventListenerAdded = true;
    }

    if (wcMosaic && !wcMosaic.payEventListenerAdded) {
        wcMosaic.addEventListener('pay', async (event) => {
            wcMosaic.setAttribute('pay-button-enabled', false)

            const paymentHash = event.detail?.[0]?.paymentHash;

            if (paymentHash) {
                setParamsPaymentCheckout(paymentHash);
            } else {
                const price = event.detail[0].value;
                const postId = event.detail[0].id;

                openPaymentCheckout({
                    value: String(price),
                    page: 'post',
                    postId: String(postId),
                })
            }

            wcMosaic.setAttribute('pay-button-enabled', true)
        });

        wcMosaic.payEventListenerAdded = true;
    }
}

function addEventListenerToCarousel(modelId, isLockedMedia, postId) {
    const wcCarousel = findElement(`#privacy-web-mediahub-carousel-${modelId}`)[0];
    const carouselSkeletonLoader = findElement(`#carousel-skeleton-loader-${modelId}`)[0];

    if (wcCarousel && !wcCarousel.carouselReadyEventListenerAdded) {
        wcCarousel.addEventListener('carousel-ready', (event) => {
            carouselSkeletonLoader.style.display = 'none';
            wcCarousel.style.display = 'block';
        });

        wcCarousel.carouselReadyEventListenerAdded = true;
    }

    if (wcCarousel && !wcCarousel.carouselOpenedEventListenerAdded) {
        wcCarousel.addEventListener('carousel-opened', () => {
            window.teleport.move(wcCarousel)
        });

        wcCarousel.addEventListener('carousel-closed', () => {
            wcCarousel._teleport?.back()
        });

        wcCarousel.carouselOpenedEventListenerAdded = true;
    }

    if (wcCarousel && !wcCarousel.payEventListenerAdded && isLockedMedia) {
        wcCarousel.addEventListener('pay', async (event) => {
            wcCarousel.setAttribute('pay-button-enabled', false)

            const paymentHash = event.detail?.[0]?.paymentHash;

            if (paymentHash) {
                setParamsPaymentCheckout(paymentHash);
            } else {
                const price = event.detail[0].value;
                const postId = event.detail[0].id;

                openPaymentCheckout({
                    value: String(price),
                    page: 'post',
                    postId: String(postId),
                })
            }

            wcCarousel.setAttribute('pay-button-enabled', true)
        });

        wcCarousel.payEventListenerAdded = true;
    }

    if (wcCarousel && !wcCarousel.doubleClickEventListenerAdded) {
        wcCarousel.addEventListener('double-click', (event) => {
            const payload = event?.detail?.[0];
            const postId = payload?.contextId;

            const { posX, posY } = payload

            const el = findElement(`#btnlike${postId}`)?.[0];
            const postHasLike = el?.classList.contains('was-liked');

            if (!postHasLike) {
                Like(postId);

                likeAnimation({ posX, posY });
            }
        });

        wcCarousel.doubleClickEventListenerAdded = true;
    }

    if (wcCarousel && !wcCarousel.customValueEventListenerAdded && isLockedMedia) {
        wcCarousel.addEventListener('fundraising-custom-value', () => {
            const wcFundraising = findElement(`#privacy-web-fundraising-${postId}`)[0];
            wcFundraising.setAttribute('show-value-dialog', true);
        });

        wcCarousel.customValueEventListenerAdded = true;
    }
}

async function likeAnimation({ posX, posY }) {
    const heartWrapper = document.getElementById('heart-wrapper');
    const lottiePlayer = document.getElementById('like-lottie-player');

    await resetAnimation({ container: heartWrapper, lottiePlayer });

    await positioningAnimation({
        container: heartWrapper,
        posX,
        posY
    });

    setTimeout(() => {
        heartWrapper.classList.add('animate');
        heartWrapper.style.opacity = '1';

        lottiePlayer.play();
    }, 10);

    setTimeout(() => {
        heartWrapper.style.opacity = '0';
    }, 1000);
}

const resetAnimation = async ({ container, lottiePlayer }) => {
    container.classList.remove('animate');
    lottiePlayer.stop();
}

const positioningAnimation = async ({ container, posX, posY }) => {
    window.requestAnimationFrame(() => {
        const centerX = 125;
        const centerY = 125;

        container.style.left = `${posX - centerX}px`;
        container.style.top = `${posY - centerY}px`;
    });
};