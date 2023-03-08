/**
 * イベントを強制的に発火させる関数
 * @param {element} element - 発火させる要素
 * @param {string} event - 実行させたいイベント名
 * @returns 
 */
function triggerEvent(element, event) {
    if (document.createEvent) {
        // IE以外
        const customEvent = new CustomEvent(event);
        return element.dispatchEvent(customEvent)
    } else {
        // IE
        let evt = document.createEventObject()
        return element.fireEvent('on' + event, evt)
    }
}

export default triggerEvent
