function ChangeLanguage(cultureName) {
    var token = $('input[name="__RequestVerificationToken').val();
    var returnUrl = window.location.pathname;

    $.ajax({
        url: '/Culture/Index',
        method: 'POST',
        data: {
            cultureName: cultureName,
            returnUrl: returnUrl,
            __RequestVerificationToken: token
        },
        success: function () {
            location.reload();
        }
    });
}