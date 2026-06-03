function SeguirPerfil(ClienteId) {
    initPageloader();

    return $.ajax({
        url: "/Profile?handler=SeguirPerfil",
        data: { "ClienteId": ClienteId },
        cache: false,
        async: true,
        type: "GET",
        success: function (data) {
            if (data.ok)
                location.reload();
            else {
                $('.pageloader').toggleClass('is-active');
                alert(data.message, function () {
                    window.location.reload();
                });
            }
        }
    });
}