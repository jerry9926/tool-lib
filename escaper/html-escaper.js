/**
* @author      jerry9926
* @date        2020.4.7
* @description HTML转义
*/

// 对象keys和values反转
const invert = function(obj) {
    const result = {}
    const keys = Object.keys(obj)
    for (let i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i]
    }
    return result
}
    
// HTML转义字符
const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
}
// HTML转义字符（反转的）
const unescapeMap = invert(escapeMap)
    
// 转义方法
const createEscaper = function(map) {
    const escaper = function(match) {
        return map[match]
    }
    // Regexes for identifying a key that needs to be escaped.
    const source = '(?:' + Object.keys(map).join('|') + ')'
    const testRegexp = RegExp(source)
    const replaceRegexp = RegExp(source, 'g')
    return function(string) {
        string = string == null ? '' : '' + string
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string
    }
}

// html 转义
const escape = createEscaper(escapeMap)
// html 反转义
const unescape = createEscaper(unescapeMap)

export {
    escape,
    unescape
}