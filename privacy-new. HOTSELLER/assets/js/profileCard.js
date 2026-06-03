
function watchActionsProfileCard() {
    $(document).ready(function () {
        document.addEventListener('execute-profile-card-action', function (event) {
            const handle = event?.detail?.[0];
            const action = handle?.action || false;
            const command = handle?.command;
            const data = handle?.data;
            
            if (command === 'report' && action && data) {
                AbrirModalDenuncia({ reportedProfileId: data });
            }
        });
    });      
}