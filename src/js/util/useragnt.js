import * as UAParser from 'ua-parser-js'

/**
 * ユーザーエージェントをクラス名として付与する
 */
class Useragnt {
  constructor() {
    this.$body = document.getElementsByTagName('body')[0]
    this.uaparser = new UAParser()
  }
  init() {
    this.ua = this.uaparser.getResult()
    if (this.ua.device.type) {
      let name = this.ua.device.type.toLowerCase().replace(' ', '-')
      this.$body.classList.add(`is-${name}`)
    }
    if (this.ua.os.name) {
      let name = this.ua.os.name.toLowerCase().replace(' ', '-')
      this.$body.classList.add(`is-${name}`)
    }
    if (this.ua.browser.name) {
      let name = this.ua.browser.name.toLowerCase().replace(' ', '-')
      this.$body.classList.add(`is-${name}`)
    }
  }
}

let useragnt = new Useragnt()
useragnt.init()

export default useragnt.ua
