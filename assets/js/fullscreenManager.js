class FullscreenManager {
    constructor() {
        this.eventStack = new Set();
        this.fullscreenClass = 'fullscreen-active';
        this.init();
    }

    init() {
        document.addEventListener('fullscreen:add', (event) => {
            this.addFullscreen(event.detail.id);
        });

        document.addEventListener('fullscreen:remove', (event) => {
            this.removeFullscreen(event.detail.id);
        });

        document.addEventListener('fullscreen:clear', () => {
            this.clearAll();
        });
    }

    addFullscreen(id) {
        if (!id) {
            console.warn('FullscreenManager: ID não fornecido para adicionar fullscreen');
            return;
        }

        this.eventStack.add(id);
        this.updateFullscreenState();
    }

    removeFullscreen(id) {
        if (!id) {
            console.warn('FullscreenManager: ID não fornecido para remover fullscreen');
            return;
        }

        const componentMatch = id.match(/^(.+)-\d+$/);
        if (!componentMatch) {
            console.warn('FullscreenManager: ID não segue o padrão esperado (component-timestamp)');
            return;
        }

        const componentName = componentMatch[1];

        const stackArray = Array.from(this.eventStack);
        const matchingItems = stackArray.filter(stackId => stackId.startsWith(componentName + '-'));

        if (matchingItems.length === 0) {
            console.debug(`FullscreenManager: Nenhum item encontrado para o componente '${componentName}'`);
            return;
        }

        const lastItem = matchingItems[matchingItems.length - 1];
        const removed = this.eventStack.delete(lastItem);
        
        if (removed) {
            this.updateFullscreenState();
        }
    }

    clearAll() {
        this.eventStack.clear();
        this.updateFullscreenState();
    }

    updateFullscreenState() {
        const htmlElement = document.documentElement;
        
        if (this.eventStack.size > 0) {
            if (!htmlElement.classList.contains(this.fullscreenClass)) {
                htmlElement.classList.add(this.fullscreenClass);
            }
        } else {
            if (htmlElement.classList.contains(this.fullscreenClass)) {
                htmlElement.classList.remove(this.fullscreenClass);
            }
        }
    }

    getStackSize() {
        return this.eventStack.size;
    }

    getStackIds() {
        return Array.from(this.eventStack);
    }

    hasId(id) {
        return this.eventStack.has(id);
    }

    isFullscreenActive() {
        return this.eventStack.size > 0;
    }
}

const fullscreenManager = new FullscreenManager();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FullscreenManager;
}