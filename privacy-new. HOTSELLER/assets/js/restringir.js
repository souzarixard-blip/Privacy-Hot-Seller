function AbrirModalRestringirPerfil() {
    GetProfileRestrictions();
    $("#restringir-perfil-modal").toggleClass('is-active');
}

function CloseModal() {
    $('.modal.is-active').removeClass('is-active');
}

function RefreshScreen() {
    location.reload();
}

function GetProfileRestrictions() {
    $("#restringir-perfil-show-loading").show();
    $("#restringir-perfil").hide();
    $("#restringir-perfil-btn").hide();
    $('#searchCheckbox').prop('checked', false);
    $('#mentionCheckbox').prop('checked', false);
    $.ajax({
        url: "Profile?handler=ProfileRestrictions",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            if (data !== null) {
                setRestrictions(data);
                $("#restringir-perfil").show();
                $("#restringir-perfil-btn").show();
                $("#restringir-perfil-show-loading").hide();

            }
            else {
                $("#restringir-perfil").show();
                $("#restringir-perfil-btn").show();
                $("#restringi-perfil-show-loading").hide();
            }
            $("#restringir-perfil-show-loading").hide();
        },
        error: function (xhr, status, error) {
            $("#restringir-perfil-modal").toggleClass('is-active');
        }
    });
}

function setRestrictions(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].type === "search") {
            $('#searchCheckbox').prop('checked', data[i].active);
        } else if (data[i].type === "mention") {
            $('#mentionCheckbox').prop('checked', data[i].active);
        }
    }
}

function SalvarRestricoes() {
    $("#restringir-perfil-btn").addClass("is-disabled");
    $("#restringir-perfil-show-loading").show();
    var isSearchChecked = $('#searchCheckbox').is(':checked');
    var isMentionChecked = $('#mentionCheckbox').is(':checked');

    $.ajax({
        url: "Profile?handler=PostProfileRestrictions",
        type: "GET",
        data: {
            search: isSearchChecked,
            mention: isMentionChecked
        },
        xhrFields: {
            withCredentials: true
        },
        success: function () {
            $("#restringir-perfil-btn").removeClass("is-disabled");
            $("#restringir-perfil-show-loading").hide();
            $("#restringir-perfil-modal").toggleClass('is-active');
        }
    });
}