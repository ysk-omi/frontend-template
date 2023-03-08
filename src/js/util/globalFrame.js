/**
 * RequestAnimationFrameを全体管理するモジュール
 */
class GlobalFrame {
    constructor() {
        this.handlers = []
        this.update = () => this._update()
        this.isStop = true
        this.start()
    }
    /**
     * イベントの追加
     * @param {function} f - 実行する関数 
     */
    addEvent(f) {
        let func = {
            isStop: false,
            handler: f,
        }
        this.removeEvent(func)
        this.handlers.push(func)
    }
    /**
     * イベントの追加
     * @param {function} f - 実行する関数 
     */
    removeEvent(f) {
        for (let i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i].handler === f) {
                this.handlers.splice(i, 1)
            }
        }
    }
    start() {
        this.isStop = false
        this.update()
    }
    stop() {
        this.isStop = true
    }
    _update() {
        for (let i = 0; i < this.handlers.length; i++) {
            this.handlers[i].handler()
        }
        requestAnimationFrame(this.update)
    }
}

export default new GlobalFrame()
