import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

export default class Anchor {
    constructor() {
        this.DOM = {}
        this.DOM.links = document.querySelectorAll('a')

        this.init()
    }
    init() {
        this.onClick = e => this._onClick(e)

        for (const links of this.DOM.links) {
            if (/^#[a-z]+/.test(links.getAttribute('href'))) {
                links.addEventListener('click', this.onClick)
                // links.addEventListener('touchstart', this.onClick)
            }
        }
    }
    _onClick(e) {
        e.preventDefault()

        gsap.to(window, {
            duration: 0.4,
            scrollTo: {
                y: e.currentTarget.getAttribute('href'),
            },
        })
    }
    destroy() {
        for (const links of this.DOM.links) {
            if (/^#[a-z]+/.test(links.getAttribute('href'))) {
                links.removeEventListener('click', this.onClick)
                // links.removeEventListener('touchstart', this.onClick)
            }
        }
    }
}
