const OPTION = {
    targetClass: 'js-full-video'
}

/**
 * Videoタグを画面いっぱいに表示させるクラス
 */
class FullVideo {
    constructor(option) {
        this.option = {...OPTION, ...option}
        this.$el = document.querySelector(this.option.targetClass)
        this.init()
    }
    init() {
        this.data = {
            width: this.$el[0].videoWidth,
            height: this.$el[0].videoHeight,
        }

        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        this.set()
    }
    set() {
        this.screen = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        this.screen.per = this.screen.width / this.screen.height
        this.data.per = this.data.width / this.data.height

        if (this.screen.per > this.data.per) {
            this.$el.style.width = `${this.screen.width}px`
            this.$el.style.height = `${this.screen.width * (this.data.height / this.data.width)}px`
            this.$el.style.top = `${(this.screen.height - this.$el.clientHeight) * 0.5 }px`
            this.$el.style.left = 0
        } else {
            this.$el.style.width = `${this.screen.height * (this.data.width / this.data.height)}px`
            this.$el.style.height = `${this.screen.height}px`
            this.$el.style.top = 0
            this.$el.style.left = `${(this.screen.width - this.$el.clientWidth) * 0.5}px`
        }
    }
}

export default FullVideo
