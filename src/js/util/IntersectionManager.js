import 'intersection-observer'

/**
 * targetClass - 対象となるクラス名
 * addClassName - 付与するクラス名
 */
const OPTION = {
    targetClassName: '.js-enter',
    addClassName: 'is-enter'
}

/**
 * 要素が画面に入った時にクラスを付与するクラス
 */
class IntersectionManager {
    constructor(option) {
        this.option = {...OPTION, ...option}
        this.init()
    }
    init() {
        this.handler = (e, o) => this._handler(e, o)
        this.target = document.querySelectorAll(this.option.targetClassName)
        this.setup()
    }
    setup() {
        this.observer = new IntersectionObserver(this.handler, {
            rootMargin: '0px',
        })
        this.listener = []
        this.delay = []
        for (let i = 0; i < this.target.length; i++) {
            this.listener[i] = this.observer.observe(this.target[i])
            this.target[i].dataset.index = i
            this.delay[i] = +this.target[i].dataset.delay || 0
        }
    }
    _handler(entries, observer) {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
                let i = +entry.target.dataset.index
                setTimeout(() => {
                    entry.target.classList.add(this.option)
                }, this.delay[i] * 1000)
            }
        }
    }
    destroy() {
        this.observer.disconnect()
    }
}

export default IntersectionManager
