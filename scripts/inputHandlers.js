class InputHandler {
    eventHandlerMap = {}

    constructor(eventHandlerConfig) {
        this._eventHandlerConfig = eventHandlerConfig
    }
    subscribe() {
        Object.entries(this.eventHandlerMap).forEach(([name, handler]) => {
            document.addEventListener(name, handler)
        })
    }
}

class MouseInputHandler extends InputHandler {
    buttonIndexNameMap = {
        0: "left",
        1: "middle",
        2: "right",
    }

    eventHandlerMap = {
        click: (event) => {
            const buttonName = this.buttonIndexNameMap[event.button]
            const handler = this._eventHandlerConfig[buttonName]
            if (handler) {
                handler(event)
            }
        },
    }
}