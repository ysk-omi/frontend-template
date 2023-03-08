/**
 * Resizeイベントを全体管理するモジュール
 */
class GlobalResize {
    constructor() {
        this.width = document.documentElement.clientWidth
        this.height = document.documentElement.clientHeight
        this.onResize = e => this._onResize(e)
        this.handlers = []
        window.addEventListener('resize', this.onResize)
    }
    _onResize() {
        this.width = document.documentElement.clientWidth
        this.height = window.innerHeight
        for (let i = 0; i < this.handlers.length; i++) {
            this.handlers[i](this.width, this.height)
        }
    }
    /**
     * イベントの追加
     * @param {function} f - 実行する関数 
     */
    addEvent(f) {
        this.removeEvent(f)
        this.handlers.push(f)
    }
    /**
     * イベントの削除
     * @param {function} f - 削除する関数 
     */
    removeEvent(f) {
        for (let i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === f) {
                this.handlers.splice(i, 1)
            }
        }
    }
}

export default new GlobalResize()
