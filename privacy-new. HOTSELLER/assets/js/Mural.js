var agendado = false;
var arquivado = false;
var position = $(window).scrollTop();

let mosaicPage = 0;
let mosaicTake = 10;
let mosaicIsLoading = false;
let mosaicCurrentFilter = null;
let mosaicCarregaScroll = true;

$(function () {
    var carregaScrollPosts = true;

    $('.hr-profile-menu[data-view="posts"]').addClass('hr-profile-menu-selected');

    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll > position) {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;
            let distanceOfBottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0);
            let url, nomePerfil, filterMosaico;

            let bodyPostsExists = $('#bodyPosts').length ?? false;

            const isMosaicVisible = $('#bodyPostsMosaico').is(':visible');
            const isPostsVisible = $('#bodyPosts').is(':visible');
            const isNewTimelineView = $('#bodyPosts').find("privacy-web-timeline")?.length > 0;

            if (distanceOfBottom < 300) {
                if (isMosaicVisible && mosaicCarregaScroll && !mosaicIsLoading) {
                    mosaicCarregaScroll = false;
                    mosaicPage++;
                    loadMosaicContent();
                } else if (isPostsVisible && carregaScrollPosts && bodyPostsExists && !isNewTimelineView) {
                    carregaScrollPosts = false;
                    qtdAtual = $(".card.is-post").length;
                    url = "/Index?handler=PartialPosts";
                    nomePerfil = $("#nomePerfil").val() || null;

                    $.ajax({
                        url: url,
                        data: { skip: qtdAtual, take: 10, nomePerfil: nomePerfil, agendado: agendado, arquivado: arquivado },
                        cache: false,
                        async: true,
                        type: "GET",
                        success: function (data) {
                            $("#bodyPosts").append(data);
                            carregaScrollPosts = true;
                        }
                    });
                }
            }
        }

        position = scroll;
    });

    initializeMosaic();
});

function isVisible($el) {
    var winTop = $(window).scrollTop();
    var elTop = $el.offset().top;
    var elHeigth = $el.height();
    var displayHeigth = $(window).height();
    return (((elTop + elHeigth) >= winTop)) && (((elTop - displayHeigth) < winTop));
}


// Função responsável por obter somente o valor numérico de sumTipsElement
function extractNumericValue(text) {
    const matches = text.match(/(\d+(?:,\d{1,2})?)/);

    if (matches && matches.length > 0) {
        return matches[0];
    }

    return "0,00";
}

function toggleImageLike(btnLike, idPost) {
    const countElement = findElement("#countLikes" + idPost);
    let currentValue = parseInt(countElement.html()) || 0;
    let currentSrc = btnLike.attr("src");
    let newSrc = '';
    if (currentSrc === '/assets/img/icons/feed/Vectorheartbg.svg') {
        newSrc = '/assets/img/icons/feed/Vectorheart.svg';
        currentValue -= 1;
    } else if (currentSrc === '/assets/img/icons/feed/Vectorheart.svg') {
        newSrc = '/assets/img/icons/feed/Vectorheartbg.svg';
        currentValue += 1;
    }

    if (newSrc !== '') {
        btnLike.attr("src", newSrc);
    }

    countElement.html(currentValue.toString());

    let sumComments = parseInt(findElement("#countComment" + idPost).html()) || 0;

    let sumTipsElement = findElement("#sumTips" + idPost);
    let sumTipsValue = extractNumericValue(sumTipsElement.html().trim());

    if (parseFloat(sumTipsValue.replace(',', '.')) > 0) {
        if (sumComments > 0 || currentValue > 0) {
            findElement("#separeSumTips" + idPost).removeClass("d-none");
            findElement("#sumTips" + idPost).removeClass("d-none");
        } else {
            findElement("#separeSumTips" + idPost).addClass("d-none");
            findElement("#sumTips" + idPost).addClass("d-none");
        }
    } else {
        // #sumTips não é maior que zero, manter oculto o separador e o sumTips
        findElement("#separeSumTips" + idPost).addClass("d-none");
        findElement("#sumTips" + idPost).addClass("d-none");
    }

    if (currentValue == 1) {
        findElement("#textcountLikes" + idPost).addClass("d-none");
        findElement("#countLikes" + idPost).removeClass('d-none');
        findElement("#textcountLike" + idPost).removeClass("d-none");

        if (sumComments > 0) {
            findElement("#separeCountComment" + idPost).removeClass("d-none");
        } else {
            findElement("#separeCountComment" + idPost).addClass("d-none");
        }
    } else if (currentValue > 1) {
        findElement("#textcountLike" + idPost).addClass("d-none");
        findElement("#textcountLikes" + idPost).removeClass("d-none");
        findElement("#countLikes" + idPost).removeClass("d-none");

        if (sumComments > 0) {
            findElement("#separeCountComment" + idPost).removeClass("d-none");
        } else {
            findElement("#separeCountComment" + idPost).addClass("d-none");
        }
    } else {
        findElement("#textcountLike" + idPost).addClass("d-none");
        findElement("#countLikes" + idPost).addClass('d-none');
        findElement("#textcountLikes" + idPost).addClass("d-none");
        findElement("#separeCountComment" + idPost).addClass("d-none");
    }
}

let currentAjaxRequest = null;

function Like(idPost, e) {
    e?.preventDefault();

    //findElement("#btnlike" + idPost).css("pointer-events", "none");

    var span = findElement("#countLikes" + idPost);
    var btnLike = findElement("#btnlike" + idPost);

    toggleImageLike(btnLike, idPost);

    var actionLike = btnLike.attr("data-like").toLowerCase() === "true";

    var newState = !actionLike;

    var token = $("*").filter(function () {
        return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
    })[0]?.token;

    var url = newState ? `${window.timelineActionApi}/post/${idPost}/like` : `${window.timelineActionApi}/post/${idPost}/unlike`;

    if (currentAjaxRequest && currentAjaxRequest.readyState !== 4) {
        currentAjaxRequest.abort();

    }

    btnLike.attr("data-like", (newState).toString());

    currentAjaxRequest = $.ajax({
        url: url,
        data: { IdPost: idPost, TotalLike: span.val() },
        cache: false,
        async: true,
        type: "POST",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {
            //span.html(data.likeCount);
            //btnLike.attr("src", (newState) ? "/assets/img/icons/feed/Vectorheartbg.svg" : "/assets/img/icons/feed/Vectorheart.svg");

            //if (newState) {
            //    findElement("#btnlike" + idPost).addClass("was-liked");
            //} else {
            //    findElement("#btnlike" + idPost).removeClass("was-liked");
            //}

            //findElement("#btnlike" + idPost).css("pointer-events", "");

            //btnLike.attr("data-like", (newState).toString());

            return true;

        },
        error: function (reponse) {
            findElement("#btnlike" + idPost).css("pointer-events", "");
            return false;
        }
    });
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function Comentar(idPost, idUsuario, idComentario) {
    findElement("#btnComentar_" + idPost + idUsuario).prop('disabled', true);
    findElement("#btnComentar_" + idPost + idUsuario).css("pointer-events", "none");

    var textoComentario = findElement("#comentario_" + idPost + "")[0].value;

    const urlGIF = getUrlPreviewGif(idPost)
    if (urlGIF) textoComentario += "[GIF:" + urlGIF + "]"

    findElement(".textBtncommentsLoader").removeClass("d-none");
    findElement(".textBtncomments").addClass("d-none");

    var url = `${window.timelineActionApi}/post/${idPost}/comment`;

    var token = $("*").filter(function () {
        return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
    })[0]?.token;

    $.ajax({
        url: url,
        data: JSON.stringify({ text: textoComentario, commentId: idComentario }),
        cache: false,
        async: true,
        type: "POST",
        contentType: "application/json",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {
            ObterComentarios(idPost, false);
            findElement(".textBtncomments").removeClass("d-none");
            findElement(".textBtncommentsLoader").addClass("d-none");

            findElement("#btnComentar_" + idPost + idUsuario).prop('disabled', false);
            findElement("#btnComentar_" + idPost + idUsuario).css("pointer-events", "");
            findElement("#comentario_" + idPost).val('');
        },
        error: function (reponse) {
            findElement(".textBtncomments").removeClass("d-none");
            findElement(".textBtncommentsLoader").addClass("d-none");

            findElement("#btnComentar_" + idPost + idUsuario).prop('disabled', false);
            findElement("#btnComentar_" + idPost + idUsuario).css("pointer-events", "");
        }
    });
}

function OcultarMostrarComentario(idComentario) {
    var url = "/Index?handler=OcultarMostrarComentario";
    $.ajax({
        url: url,
        data: { IdComentario: idComentario },
        cache: false,
        async: true,
        type: "GET",
        success: function (data) {
            if (!data.OK) {
                span.innerHTML = data.Likes;
                return false;
            }
            else {
                location.reload();
                return true;
            }
        }
    });
}

function OpenCloseComments(post, btnComment) {
    post.addClass('is-active').closest('.card').find('.comments-wrap').toggleClass('is-hidden');

    if (post.closest('.card').find('.comments-wrap').hasClass('is-hidden')) {
        btnComment.attr("src", "/assets/img/icons/feed/Vectorcomment.svg");
    } else {
        btnComment.attr("src", "/assets/img/icons/feed/Vectorcomment2.svg");
        
        scrollToBottomComments(post);
    }
}

function scrollToBottomComments(post, blockValue = 'end') {
    const commentsBody = post.closest('.card').find('.comments-body');
    
    if (commentsBody.length) {
        commentsBody.scrollTop(commentsBody[0].scrollHeight);
        commentsBody[0].scrollIntoView({ behavior: 'smooth', block: blockValue });
    }
}

function getUrlPreviewGif(idPost) {
    return findElement("#gif-preview-container_" + idPost + " img.preview-gif").attr("src")
}
function RemovePreviewGif(idPost) {
    var partialDiv = findElement("#partialFor" + idPost);
    var partialDivJQuery = $(partialDiv);
    var comentario = partialDivJQuery.find('[id^="comentario_"]');
    if (comentario.val()?.trim().length < 1) {
        partialDivJQuery.find('[id^="tooltipBtnComentar_"]').tooltip("enable");
        partialDivJQuery.find('[id^="btnComentar_"]').prop('disabled', true).css("pointer-events", "none");
    }

    findElement('#gif-preview-container_' + idPost).html("")
}

function ObterComentarios(idPost, open = true) {
    var btnComment = findElement("#commentbtnpost" + idPost);
    var partialDiv = findElement("#partialFor" + idPost);

    var url = "/Index?handler=PartialComments";
    $.ajax({
        url: url,
        data: { PostId: idPost },
        cache: false,
        async: true,
        type: "GET",
        success: function (data) {
            partialDiv.html(data);
            if (open)
                OpenCloseComments(partialDiv, btnComment);

            var partialDivJQuery = $(partialDiv);
            var commentTooltip = partialDivJQuery.find('[id^="tooltipBtnComentar_"]');
            var commentButton = partialDivJQuery.find('[id^="btnComentar_"]');
            var comentario = partialDivJQuery.find('[id^="comentario_"]');

            var wcEmojiGif = partialDivJQuery.find('[id^="privacy-web-contentpicker_"]');
            var previewGif = partialDivJQuery.find('[id^="gif-preview-container_"]');

            var alertValidate = partialDivJQuery.find('[id^="alert-comment-container_"]');

            wcEmojiGif.on("add-emoji", event => {
                const emoji = event?.detail[0];
                InsertTextEmoji(comentario, emoji)
                unlockButton();
            });

            wcEmojiGif.on("send-gif", event => {
                const urlGif = event?.detail[0];
                if (urlGif) {
                    RemovePreviewGif(idPost);
                    const closeButton = `<i onclick="RemovePreviewGif('${idPost}')" class='preview-gif-close fa-times fal'></i>`;
                    const gifImage = `<img class='preview-gif' src='${urlGif}' />`;
                    previewGif.append(closeButton + gifImage);
                    scrollToBottomComments(partialDiv, 'center');
                }

                unlockButton();
            });

            function lockButton() {
                commentButton.prop('disabled', true);
                commentButton.css("pointer-events", "none");
                commentTooltip.tooltip("enable");
            }
            function unlockButton() {
                commentTooltip.tooltip("disable").tooltip("hide");
                commentButton.prop('disabled', false);
                commentButton.css("pointer-events", "");
            }

            function commentWithValue() {
                return comentario.val()?.trim().length > 0;
            }

            commentTooltip.tooltip(); 

            comentario.keyup(function (ev) {
                var thereIsGif = getUrlPreviewGif(idPost);

                if (!commentWithValue() && thereIsGif?.length > 0) {
                    unlockButton();
                } else if (commentWithValue() && validateIsNotBadWords(comentario.val())) {
                    unlockButton();
                    alertValidate.hide();
                } else {
                    lockButton();
                    if(commentWithValue() && !validateIsNotBadWords(comentario.val())) alertValidate.show();
                }
            });

            setTimeout(function () {
                var qtdPosts = partialDiv.find(".comments-body").length;
                findElement("#countComment" + idPost).html(qtdPosts);

                let sumPosts = parseInt(findElement("#countLikes" + idPost).html()) || 0;

                if (qtdPosts == 1) {
                    findElement("#textcountComments" + idPost).addClass("d-none");
                    findElement("#countComment" + idPost).removeClass('d-none');
                    findElement("#textcountComment" + idPost).removeClass("d-none");

                    if (sumPosts > 0) {
                        findElement("#separeCountComment" + idPost).removeClass("d-none");
                    } else {
                        findElement("#separeCountComment" + idPost).addClass("d-none");
                    }
                } else if (qtdPosts > 1) {
                    findElement("#textcountComment" + idPost).addClass("d-none");
                    findElement("#textcountComments" + idPost).removeClass("d-none");
                    findElement("#countComments" + idPost).removeClass("d-none");

                    if (sumPosts > 0) {
                        findElement("#separeCountComment" + idPost).removeClass("d-none");
                    } else {
                        findElement("#separeCountComment" + idPost).addClass("d-none");
                    }
                } else {
                    findElement("#textcountComment" + idPost).addClass("d-none");;
                    findElement("#countComment" + idPost).addClass('d-none');
                    findElement("#textcountComments" + idPost).addClass("d-none");
                    findElement("#separeCountComment" + idPost).addClass("d-none");
                } 

            }, 200);

            

            return true;
        }
    });
}

function RemoverPostagem(postId, title, text, btnCancel, btnConfirm) {
    swal({
        title: title,
        text: text,
        icon: "",
        buttons: {
            cancel: {
                text: btnCancel,
                value: false,
                visible: true,
                className: "privacy-swal-button",
                closeModal: true
            },
            confirm: {
                text: btnConfirm,
                value: true,
                visible: true,
                className: "privacy-swal-button",
                closeModal: true
            }
        }
    }).then(function (okay) {

        if (okay) {
            initPageloader();

            var token = $("*").filter(function () {
                return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
            })[0]?.token;

            var url = `${window.timelineActionApi}/post/${postId}`;
            $.ajax({
                url: url,
                data: { PostId: postId },
                cache: false,
                async: true,
                type: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token
                },

                success: function (data) {
                    //alert(data.message);
                    window.location.reload();
                    return true;
                }, 

                error: function (data) {
                    $('.pageloader').toggleClass('is-active');
                    swal({
                        title: $i18nShared.post.removePost,
                        text: data.message,
                        icon: "warning",
                        buttons: {
                            confirm: {
                                text: "Ok",
                                value: true,
                                visible: true,
                                className: "",
                                closeModal: true
                            }
                        }
                    });
                }
            });
        }
    });
}

function RemoverComentario(comentarioId, postId) {
    findElement("#itemComentario_" + comentarioId).hide();

    var token = $("*").filter(function () {
        return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
    })[0]?.token;

    var url = `${window.timelineActionApi}/post/${postId}/comment/${comentarioId}`;
    $.ajax({
        url: url,
        /*data: { ComentarioId: comentarioId },*/
        cache: false,
        async: true,
        type: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {
            var partialDiv = findElement("#partialFor" + postId);
            var partialDivJQuery = $(partialDiv);
            var commentTooltip = partialDivJQuery.find('[id^="tooltipBtnComentar_"]');
            commentTooltip.tooltip("disable").tooltip("hide");

            ObterComentarios(postId, false);
        },
        error: function (reponse) {
            $("#itemComentario_" + comentarioId).show();
        }
    });
}

function ArquivaDesarquivaPublicacao(postId, post) {

    var token = $("*").filter(function () {
        return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
    })[0]?.token;

    const isArchive= post.toLowerCase() === "true"

    const url = isArchive ? `${window.timelineActionApi}/post/${postId}/archive` : `${window.timelineActionApi}/post/${postId}/unarchivePost`;

    initPageloader();
    $.ajax({
        url: url,
        data: { _PostId: postId },
        cache: false,
        async: true,
        type: "POST",
        headers: {
            'Authorization': 'Bearer ' + token
        },

        success: function (data) {
            window.location.reload();
            return true;
        },

        error: function (data) {
            $('.pageloader').toggleClass('is-active');
            swal({
                title: $i18nShared.post.archive,
                text: data.responseText,
                icon: "warning",
                buttons: {
                    confirm: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "",
                        closeModal: true
                    }
                }
            });
        }
    });
}

function HabilitaDesabilitaComentario(postId, e) {
    initPageloader();
    e?.preventDefault();

    const token = $("*").filter(function () {
        return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
    })[0]?.token;

    const linkElement = findElement("#btncomment" + postId);
    const isEnabled = linkElement.attr("data-enable").toLowerCase() === "true";
    const imgElement = linkElement.find("img");
    const spanText = findElement("#textcomment" + postId);
    const enableText = spanText.attr("data-postEnableCommentsText");
    const disableText = spanText.attr("data-postDisableCommentsText");
    linkElement.css("pointer-events", "none");

    const url = isEnabled
        ? `${window.timelineActionApi}/post/${postId}/disableComments`
        : `${window.timelineActionApi}/post/${postId}/enableComments`;

    $.ajax({
        url: url,
        type: "POST",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {
            imgElement.attr("src", `/assets/img/icons/feed/${isEnabled ? "Vectorcomment.svg" : "Vectordisabledcomment.svg"}`);
            spanText.text(isEnabled ? enableText : disableText);
            linkElement.attr("data-enable", (!isEnabled).toString());
            linkElement.css("pointer-events", "");
            window.location.reload();
        },
        error: function (response) {
            console.error("Erro ao habilitar/desabilitar comentário:", response);
            linkElement.css("pointer-events", "");
        }
    });
}

function FixaDesafixaPost(postId, e) {
    e?.preventDefault();
    initPageloader();

    const token = $("*").filter(function () {
        return this.tagName.toLowerCase().startsWith("privacy-") && this.hasAttribute("token");
    })[0]?.token;

    const linkElement = findElement("#btnfix" + postId);
    const isFixed = linkElement.attr("data-fixed").toLowerCase() === "true";
    const imgElement = linkElement.find("img");
    const spanText = findElement("#textfix" + postId);
    const pinText = spanText.attr("data-postPinText");
    const unpinText = spanText.attr("data-postUnpinText");

    linkElement.css("pointer-events", "none");

    const url = !isFixed
        ? `${window.timelineActionApi}/post/${postId}/pin`
        : `${window.timelineActionApi}/post/${postId}/unpin`;

    $.ajax({
        url: url,
        type: "POST",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (data) {
            imgElement.attr("src", `/assets/img/icons/feed/${isFixed ? "Vectorpinpublication.svg" : "Vectorfixed.svg"}`);
            spanText.text(isFixed ? pinText : unpinText);
            linkElement.attr("data-fixed", (!isFixed).toString());
            linkElement.css("pointer-events", "");
            window.location.reload();
        },
        error: function (response) {
            console.error("Erro ao fixar/desafixar post:", response);
            linkElement.css("pointer-events", "");
        }
    });
}

function InsertTextEmoji(input, text) {
    const element = input[0];

    if (!element) return;

    const start = element?.selectionStart;
    const end = element?.selectionEnd;
    const value = element?.value;

    if (start == null || end == null) {
        element.value += text;
    } else {
        element.value = value.slice(0, start) + text + value.slice(end);
        element.setSelectionRange(start + text.length, start + text.length);
        element.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

const isEmptyString = str => typeof str === "string" && str.trim() === ""
const isEmptyArray = arr => Array.isArray(arr) && arr.length === 0
const isConfigEmpty = ({
    EXIST_LINKS_PATTERN = "",
    LINK_INTERNAL_PATTERN = "",
    SENSITIVE_INFOS_PATTERN = [],
    KEYS_WORDS_NOT_ALLOWED = [],
}) =>
    isEmptyString(EXIST_LINKS_PATTERN) &&
    isEmptyString(LINK_INTERNAL_PATTERN) &&
    isEmptyArray(SENSITIVE_INFOS_PATTERN) &&
    isEmptyArray(KEYS_WORDS_NOT_ALLOWED)

function validateIsNotBadWords(value) {
    const validationsPattern = getValidationsPattern()
    if(isConfigEmpty(validationsPattern)) return true

    const notLinks = !validationsPattern?.EXIST_LINKS_PATTERN.test(value)
    const notWordsNotAllowed = notHaveKeyWordAllowed(value, validationsPattern) 
    const noExternalLink = notHaveExternalLink(value, validationsPattern)
    const noHaveSensitiveInfos = notHaveSensitiveInfos(value, validationsPattern)

    return noHaveSensitiveInfos && (noExternalLink && notWordsNotAllowed || notLinks && notWordsNotAllowed)
}

function notHaveKeyWordAllowed(value, validationsPattern) {
    const keyWordsNotAllowed = new RegExp(`\\b(${validationsPattern?.KEYS_WORDS_NOT_ALLOWED.join("|")})\\b`, "gi")
    return !keyWordsNotAllowed.test(value)
}

function notHaveExternalLink(value, validationsPattern) {
    const allLinks = value.match(validationsPattern?.EXIST_LINKS_PATTERN)
    return !(allLinks?.some(link => !validationsPattern?.LINK_INTERNAL_PATTERN.test(link)))
}

function notHaveSensitiveInfos(value, validationsPattern) {
    if (!validationsPattern?.SENSITIVE_INFOS_PATTERN?.length) return true
    
    const regexPattern = validationsPattern.SENSITIVE_INFOS_PATTERN.join("|")
    const regexSensitiveInfos = new RegExp(`(${regexPattern})`, "gim")
    return !regexSensitiveInfos.test(value)
}

function initializeMosaic() {
    mosaicCurrentFilter = $("#filterMosaico").val() || "mosaico";
    setupMosaicEventListeners();
}

function setupMosaicEventListeners() {
    $('.view-switch').on('click', function() {
        const view = $(this).closest('.hr-profile-menu').data('view');
        toggleMosaicView(view);
    });

    $('.filter-button').on('click', function() {
        const filter = $(this).data('filter');
        changeMosaicFilter(filter);
    });

    let scrollTimeout;
    $(window).scroll(function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            handleMosaicScroll();
        }, 150);
    });
}

function toggleMosaicView(view) {
    $('.hr-profile-menu').removeClass('hr-profile-menu-selected');
    $(`.hr-profile-menu[data-view="${view}"]`).addClass('hr-profile-menu-selected');
    
    if(view === 'mosaic') {
        $('#bodyPosts').hide();
        $('#bodyPostsMosaico').show();
        resetMosaicScroll();
        loadMosaicContent();
    } else {
        $('#bodyPosts').show();
        $('#bodyPostsMosaico').hide();
        resetPostsScroll();
    }
}

function changeMosaicFilter(filter) {
    mosaicCurrentFilter = filter;
    $('.filter-button').removeClass('selected');
    $(`.filter-button[data-filter="${filter}"]`).addClass('selected');
    $('#bodyPosts').hide();
    
    $('#mosaic-skeleton-loader').show();
    $('#privacy-web-mediahub-mosaic').hide();
    
    resetMosaicScroll();
    loadMosaicContent();
}

function resetPostsScroll() {
    carregaScrollPosts = true;
    qtdAtual = 0;
}

function resetMosaicScroll() {
    mosaicCarregaScroll = true;
    mosaicPage = 0;
}

function loadMosaicContent() {
    if (mosaicIsLoading) return;

    const nomePerfil = $("#nomePerfil").val();

    if (!nomePerfil) return

    mosaicIsLoading = true;

    $.ajax({
        url: "/Profile?handler=PartialPosts",
        data: { 
            skip: mosaicPage * mosaicTake, 
            take: mosaicTake, 
            nomePerfil: nomePerfil, 
            filter: mosaicCurrentFilter 
        },
        cache: false,
        async: true,
        type: "GET",
        success: function (response) {
            if (response) {
                const mediaHubElement = document.getElementById('privacy-web-mediahub-mosaic');
                let currentMosaicItems = mediaHubElement.getAttribute('mosaic-items');
                currentMosaicItems = JSON.parse(currentMosaicItems);

                let newData = Array.isArray(response) ? response : response.mosaicItems;

                if (mosaicPage === 0) {
                    mediaHubElement.setAttribute('mosaic-items', JSON.stringify(newData));
                } else {
                    let updatedMosaicItems = currentMosaicItems.concat(newData);
                    mediaHubElement.setAttribute('mosaic-items', JSON.stringify(updatedMosaicItems));
                }

                $('#mosaic-skeleton-loader').hide();
                $('#privacy-web-mediahub-mosaic').show();

                if (!newData || newData.length === 0 || newData.length < mosaicTake) {
                    mosaicCarregaScroll = false;
                } else {
                    mosaicCarregaScroll = true;
                }
            } else {
                mosaicCarregaScroll = false;
            }
        },
        complete: function() {
            mosaicIsLoading = false;
        }
    });
}

function handleMosaicScroll() {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    const documentHeight = $(document).height();
    const scrollPosition = scroll + windowHeight;

    if (documentHeight - scrollPosition < 300 && 
        mosaicCarregaScroll && 
        $('#bodyPostsMosaico').is(':visible') && 
        !mosaicIsLoading) {
        mosaicCarregaScroll = false;
        mosaicPage++;
        loadMosaicContent();
    }
}