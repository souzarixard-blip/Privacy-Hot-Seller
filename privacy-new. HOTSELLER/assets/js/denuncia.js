function AbrirModalDenuncia({ reportedPostId = '', reportedProfileId = '' }) {
    const wc = document.getElementById('privacy-web-antifraud-report');
    
    wc.setAttribute('reported-post-id', reportedPostId);
    wc.setAttribute('reported-profile-id', reportedProfileId);
    wc.setAttribute('show-dialog', true);

    wc.addEventListener('close-dialog', () => {
        wc.setAttribute('show-dialog', false);
    })
}