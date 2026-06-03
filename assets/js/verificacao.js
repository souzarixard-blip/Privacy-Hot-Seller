function AbrirModalSolicitarVerificacao(profileName) {
    $("#profile-name").val(profileName);
    $("#verification-request-exists").toggleClass('is-active')
    GetVerificationRequest();
    $("#solicitar-verificacao-modal").toggleClass('is-active');
}

function CloseModal() {
    $('.modal.is-active').removeClass('is-active');
}

function RefreshScreen() {
    location.reload();
}

function GetVerificationRequest() {
    $("#verificationRequest-show-loading").show();
    $.ajax({
        url: "Profile?handler=VerificationRequest",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            if (data !== null) {
                setDateAndStatus(data);
                $("#verification-request-exists").show();
                $("#verificationRequest-show-loading").hide();
            }
            else {
                $("#verification-request-btn").show();
                $("#verification-request-exists").hide();
                $("#verificationRequest-show-loading").hide();
            }
        },
        error: function (xhr, status, error) {
            $("#verification-request-btn").hide();
            $("#verification-request-exists").hide();
            $("#verificationRequest-show-loading").hide();
        }
    });
}

function setDateAndStatus(data) {
    switch (data.status) {
        case 'SENT':
            $("#verification-request-approved").show();
            $("#verification-request-verified").hide();
            $("#verification-request-pending").hide();
            $("#verification-request-expired").hide();
            $("#verification-request-btn").hide();
            break;
        case 'VERIFIED':
            $("#verification-request-approved").hide();
            $("#verification-request-verified").show();
            $("#verification-request-pending").hide();
            $("#verification-request-expired").hide();
            $("#verification-request-btn").hide();
            break;
        case 'EXPIRED':
            $("#verification-request-approved").hide();
            $("#verification-request-verified").hide();
            $("#verification-request-pending").hide();
            $("#verification-request-expired").show();
             $("#verification-request-btn").show();
            break;
        default:
            $("#verification-request-approved").hide();
            $("#verification-request-verified").hide();
            $("#verification-request-pending").show();
            $("#verification-request-expired").hide();
            $("#verification-request-btn").hide();
    }
    $("#DataSolicitacao").text(formatDate(new Date(data.createdDate)));
}

function formatDate(data) {
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function PostVerificationRequest() {
    $("#verification-request-btn").addClass("is-disabled");
    $("#verificationRequest-show-loading").show();
    $.ajax({
        url: "Profile?handler=PostVerificationRequest",
        type: "GET",
        data: {
            profileName: $('#profile-name').val(),
        },
        xhrFields: {
            withCredentials: true
        },
        success: function () {
            GetVerificationRequest();
        }
    });
}

function PostVerificationRequestToken() {
    $("#verificationRequest-show-loading").show();
    $("#verify-token-btn").addClass("is-disabled");
    $.ajax({
        url: "Profile?handler=TokenVerification",
        type: "GET",
        data: {
            profileName: $('#profile-name').val(),
            verificationRequestToken: $("#verification-token-input").val(),
        },
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            if (response === true) {
                GetVerificationRequest();
            } else {
                $("#verificationRequest-show-loading").hide();
                $("#verify-token-btn").removeClass("is-disabled");
                $("#verification-token-error").show();
            }
        },
        error: function (xhr, status, error) {
            $("#verificationRequest-show-loading").hide();
            $("#verify-token-btn").removeClass("is-disabled");
            $("#verification-token-error").show();
        }
    });
}

$(document).ready(function () {
    $('#verification-token-input').on('input', function () {
        var inputLength = $(this).val().length;
        if (inputLength === 6) {
            $('#verify-token-btn').removeClass("is-disabled");
        } else {
            $('#verify-token-btn').addClass("is-disabled");
        }
    });
});