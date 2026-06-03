/*! global.js | Friendkit | © Css Ninja. 2019-2020 */

/* ==========================================================================
Project wide reusable functions
========================================================================== */
"use strict"; //The following functions help trigger the autocompletes dropdowns

function initPageloader() {
    if ($('.pageloader').length) {
        $('.pageloader').toggleClass('is-active');
        $(window).on('load', function () {
            var pageloaderTimeout = setTimeout(function () {
                $('.pageloader').toggleClass('is-active');
                $('.infraloader').toggleClass('is-active');
                clearTimeout(pageloaderTimeout);
            }, 700); //Placeloaders

            if ($('#main-feed').length) {
                var shadowDomTimeout = setTimeout(function () {
                    $('#shadow-dom').remove();
                    $('.true-dom').removeClass('is-hidden');
                    clearTimeout(shadowDomTimeout);
                }, 2500);
            }
        });
    }
}

; //Init navbar

function initNavbar() {
    $(window).on('scroll', function () {
        var height = $(window).scrollTop();

        if (height > 65) {
            if ($('.options-nav').length) {
                $(".navbar").addClass('no-shadow');
                $('.options-nav').removeClass('no-shadow');
            } else {
                $(".navbar").removeClass('no-shadow');

                if ($('.navbar.is-landing').length) {
                    $(".navbar").removeClass('no-background');
                }
            }
        } else {
            if ($('.options-nav').length) {
                $(".navbar").addClass('no-shadow');
                $('.options-nav').addClass('no-shadow');
            } else {
                $(".navbar").addClass('no-shadow');

                if ($('.navbar.is-landing').length) {
                    $(".navbar").addClass('no-background');
                }
            }
        }
    }); //Clear navbar search input
}

; //Init navbar dropdowns

function initNavDropdowns() {
    $('.account-item-submenu').click(function (e) {
        e.preventDefault()
    })

    $('.drop-trigger').click(function (e) {
        if (e.isDefaultPrevented()) return

        const overlay = $(document).find('#nav-drop-overlay');
        const html = $(document).find('html');

        if (overlay) {
            if (overlay.hasClass('is-active')) {
                overlay.removeClass('is-active');
            } else {
                overlay.addClass('is-active');
            }
        }

        if (html) {
            if (html.hasClass('no-scroll')) {
                html.removeClass('no-scroll')
            } else {
                html.addClass('no-scroll')
            }
        }

        if ($(this).find('.nav-drop').hasClass('is-active')) {
            $(this).find('.nav-drop').removeClass('is-active');
            $(this).removeClass('is-active');
        } else {
            $(this).find('.nav-drop').addClass('is-active');

            if ($(this).hasClass('is-account')) {
                $(this).addClass('is-opened');
            }
        }
    });

    $(document).click(function (e) {
        var target = e.target;
        
        if (!$(target).is('.nav-drop') && !$(target).parents().is('.drop-trigger')) {
            $('#nav-drop-overlay').removeClass('is-active');
            $('.nav-drop').removeClass('is-active');
            $('.is-account').removeClass('is-opened');

            const html = $(document).find('html');
            html.removeClass('no-scroll')
        }
    });
}

function initDropdowns() {
    $('.dropdown-trigger').click(function () {
        $('.dropdown-trigger').removeClass('is-active');
        $(this).addClass('is-active');
    });
    $(document).click(function (e) {
        var target = e.target;

        if (!$(target).is('.dropdown-trigger img') && !$(target).parents().is('.dropdown-trigger')) {
            $('.dropdown-trigger').removeClass('is-active');
        }
    });

    const elements = findElement('.bs-dropdown-trigger')
    
    for (const el of elements) {
        const $el = $(el)
        const isAttachedInHtml = $el.closest('html').length > 0 

        if(!isAttachedInHtml){
            $el.off('click')
            $el.on('click', function (event) {
                event.preventDefault();

                $el.dropdown('toggle')
        
                const fnCloseDropdown = function (eventClickoutside) {
                    if (eventClickoutside.timeStamp == event.timeStamp) return
                    
                    const dropdownMenu = $el.parent().find('.dropdown-menu')[0]
                    
                    if (!dropdownMenu) return
                    
                    eventClickoutside.preventDefault();
                    eventClickoutside.stopPropagation();
                    
                    $el.dropdown('hide')
        
                    document.removeEventListener('click', fnCloseDropdown)
                }
            
                document.addEventListener('click', fnCloseDropdown);
            })
        } 
    }
}

function initModals() {
    let modals = findElement('.modal-trigger')
    
    if (modals.length) {
        modals.off("click");
        modals.on('click', function () {
            const modalID = $(this).attr('data-modal');
            $('#' + modalID).toggleClass('is-active');
        });

        findElement('.modal-close, .close-modal').on('click', function () {
            $('.modal.is-active').removeClass('is-active');
        });
    }
}

function findElement(querySelector){
    let elements = $(querySelector)

    if (!elements.length) {
        const wc = $('privacy-web-feed')[0]?.shadowRoot

        if (wc) {
            elements = $(wc).find(querySelector)
        }
    }

    if (!elements.length) {
        const wc = $('privacy-web-timeline')[0]?.shadowRoot

        if (wc) {
            elements = $(wc).find(querySelector)
        }
    }

    return elements
}