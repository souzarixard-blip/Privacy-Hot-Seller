function insertInitials({ userName }) {
    userName = userName.trim()
    const backgroundColor = `#F4EEE5`
    const foregroundColor = `#333333`
    let userNameBits = []
    let firstInitial = ``, secondInitial = ``

    if (userName == null || userName == '') {
        firstInitial = ``, secondInitial = ``
    } else {
        userNameBits = userName.toUpperCase().split(` `)
        firstInitial = `${userNameBits[0][0]}`
        secondInitial = userNameBits.length > 1 ? `${userNameBits[1][0]}` : `${userNameBits[0][1]}`
    }

    const svg = document.createElementNS(
        `http://www.w3.org/2000/svg`,
        `svg`
    );
    svg.setAttribute(`width`, `120`)
    svg.setAttribute(`height`, `120`)

    const rect = document.createElementNS(
        `http://www.w3.org/2000/svg`,
        `rect`
    )
    rect.setAttribute(`x`, `0`)
    rect.setAttribute(`y`, `0`)
    rect.setAttribute(`width`, `120`)
    rect.setAttribute(`height`, `120`)

    rect.setAttribute(`fill`, backgroundColor)

    const text = document.createElementNS(
        `http://www.w3.org/2000/svg`,
        `text`
    )
    text.setAttribute(`x`, `60px`)
    text.setAttribute(`y`, `64px`)
    text.setAttribute(`dominant-baseline`, `middle`)
    text.setAttribute(`text-anchor`, `middle`)
    text.setAttribute(`fill`, foregroundColor)
    text.setAttribute(`font-family`, `Helvetica`)
    text.setAttribute(`font-size`, `40px`)
    text.setAttribute(`font-weight`, `530`)
    text.textContent = `${firstInitial}${secondInitial}`

    svg.appendChild(rect)
    svg.appendChild(text)

    const svgString = new XMLSerializer().serializeToString(svg)
    const dataURL = `data:image/svg+xml, ${encodeURIComponent(svgString)}`

    return dataURL
}

function getDefaultAvatar(page) {
    if (page.photo
        && page.photo.toLowerCase() != "null"
        && page.photo != "/FotoPerfil/default-user.png"
    ) {
        if (page.element) {
            page.element.src = page.photo
        }
    } else {
        const avatar = insertInitials({ userName: page.userName })

        if (page.element) {
            page.element.src = avatar
        } else {
            return avatar
        }
    }
}
