class Delegate {
    constructor(parents, event, tagName) {
        this.DOM = {}
        this.event = event
        this.tagName = tagName
        this.DOM.parents = document.querySelector(parents)
        this.fire = e => this._fire(e)
        this.DOM.parents.addEventListener(event, this.fire)
    }
    _fire(e) {
        let el = e.target
        if (el.tagName === this.tagName) {
            this.on(el, e)
        }
        while (el.parentNode) {
            if (el.parentNode.tagName === this.tagName) {
                this.on(el.parentNode, e)
                return true
            } else {
                el = el.parentNode
            }
        }
        return false
    }
    remove() {
        this.DOM.parents.removeEventListener(this.event, this.fire)
    }
}

export default Delegate
