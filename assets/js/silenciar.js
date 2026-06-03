function manageProfileMute({ profileId, toSilence }) {
    const wc = document.getElementById('privacy-web-generic-modal');
    toSilence ?
        wc.setAttribute('route', 'mute') : wc.setAttribute('route', 'unmute')

    const dataPrivacy = JSON.stringify({
        endpoint: `${window.location.origin}/Index?handler=HideContent`,
        params: {
            hide: toSilence,
            type: 'profile',
            contentId: profileId
        }
    })

    wc.setAttribute('data-privacy', dataPrivacy)
    wc.setAttribute('show-dialog', true)
}
