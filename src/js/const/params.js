import GUI from 'lil-gui'
import { DEBUG_MODE } from './config'

/**
 * lil-guiを使ってパラメータ調整できる値を管理する
 */
class Param {
  constructor() {
    this.params = {
      x: { value: 0, min: -100, max: 100 },
    }
    if (!DEBUG_MODE) return
    this.init()
  }
  init() {
    this.gui = new GUI()
    //↓ここにフォルダ分けしたい値を記述する
    this.addGUI(this.params, 'params')
    document.querySelector('.dg').style.zIndex = 9999
  }
  addGUI(param, folderName) {
    const folder = this.gui.addFolder(folderName)
    for (let key in param) {
      let val = param[key]
      let g
      if (/Color/.test(key)) {
        g = folder.addColor(val, 'value').name(key)
      } else {
        if (val.list) {
          g = folder.add(val, 'value', val.list).name(key)
        } else {
          g = folder.add(val, 'value', val.min, val.max).name(key)
        }
      }
      val.gui = g
    }
  }
}

export default new Param()
