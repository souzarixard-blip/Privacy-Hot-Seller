function manageFriendship({ action, friendId }) {
    const actionsMap = {
        add: "/Profile?handler=AddFriendship",
        remove: "/Profile?handler=RemoveFriendship",
    };

    const url = actionsMap[action];

    $.ajax({
        url: url,
        data: { friendId },
        type: "GET",
        error: function () {
            location.reload();
        }
    });
}

function toggleFriendships() {
    var friendshipsContent = document.getElementById("profile-friendships-content");
    var friendshipsToggle = document.getElementById("friendships-toggle");
    var friendshipsTab = document.getElementById("friendships-tab");

    if (friendshipsContent.style.display === "none" || friendshipsContent.style.display === "") {
        friendshipsContent.style.display = "block";
        friendshipsToggle.classList.remove("fa-angle-down")
        friendshipsToggle.classList.add("fa-angle-up")
        friendshipsTab.classList.remove("hr-profile-menu")
        friendshipsTab.classList.add("hr-profile-menu-selected")
    } else {
        friendshipsContent.style.display = "none";
        friendshipsToggle.classList.remove("fa-angle-up")
        friendshipsToggle.classList.add("fa-angle-down")
        friendshipsTab.classList.remove("hr-profile-menu-selected")
        friendshipsTab.classList.add("hr-profile-menu")
    }
}