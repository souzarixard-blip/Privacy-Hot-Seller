function AbrirModalConfirmarCancelamento(userId) {
    const wc = document.getElementById('privacy-web-generic-modal');

    if ($("#MotivoCancelamentoId").val() != "") {
        //Chama o método de inserir denuncia
        const privacyData = JSON.stringify({
            placeholder: $i18nShared.profile.unsubscription.placeholder,
            endpoint: window.location.origin + '/Profile?handler=DesseguirPerfil',
            params: {
                UserId: userId
            }
        })

        wc.setAttribute('route', 'unsubscribe');
        wc.setAttribute('data-privacy', privacyData)
        wc.setAttribute('show-dialog', true)
    } else {
        $('.invalid-feedback').addClass('d-block')
    }
}

function ReativarRecorrencia(amigoId) {
    initPageloader();
    $.ajax({
        url: "/Profile?handler=ReativarRecorrencia",
        data: {
            amigoId: amigoId
        },
        cache: false,
        async: true,
        type: "GET",
        success: function (data) {
            $('.pageloader').toggleClass('is-active');
            if (data.ok) {
                swal({
                    title: $i18nShared.profile.unsubscription.title,
                    text: data.message,
                    icon: "success",
                    buttons: {
                        confirm: {
                            text: "Ok",
                            value: true,
                            visible: true,
                            className: "",
                            closeModal: true
                        }
                    }
                }).then(function () {
                    window.location.reload();
                });
            }
            else {
                swal({
                    title: $i18nShared.profile.unsubscription.title,
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
        }
    });
}