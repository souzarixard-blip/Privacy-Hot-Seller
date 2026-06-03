(function () {
    function getElementWrapper() {
        return document.getElementById("app-teleport")
    }
    function createElementSpace() {
        const divSpace = document.createElement('div')
        divSpace.id = "teleport-space"
        return divSpace
    }
    function generateId() {
        return Date.now()
    }
    function setIdentification(teleportId, elements) {
        if (!elements) return

        for (const el of elements) {
            el.setAttribute('data-teleport-id', teleportId)
        }
    }
    function replicateStyle(elSource, elSpace, elWrapper) {
        const height = elSource.offsetHeight
        const rect = elSource.getBoundingClientRect()

        elSpace.style.height = height + 'px'
        elWrapper.style.display = 'block';
        elWrapper.style.position = 'fixed';
        elWrapper.style.zIndex = 9999;
        elWrapper.style.top = rect.top + 'px';
        elWrapper.style.left = rect.left + 'px';
        elWrapper.style.width = rect.width + 'px';
        elWrapper.style.height = rect.height + 'px';
    }
    function getTeleportId(element) {
        return element.getAttribute('data-teleport-id')
    }

    let self = null

    self = {
        move(elementToTeleport) {
            const teleportId = generateId()

            const elParent = elementToTeleport.parentNode
            const elWrapper = getElementWrapper()
            const elSpace = createElementSpace()

            setIdentification(teleportId, [elSpace, elementToTeleport])
            replicateStyle(elementToTeleport, elSpace, elWrapper)

            elParent.append(elSpace)
            elWrapper.append(elementToTeleport)

            elementToTeleport._teleport = {
                back: () => self.back(elementToTeleport)
            }
        },
        back(elementToMove) {
            const teleportId = getTeleportId(elementToMove)
            const elementWrapper = getElementWrapper()

            if (teleportId) {
                const divSpace = findElement(`#teleport-space[data-teleport-id=${teleportId}]`)[0]
                divSpace.replaceWith(elementToMove)

                elementWrapper.style.display = 'none';
            }
        }
    }

    window.teleport = self
})();
