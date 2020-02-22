/**
 * @author      jerry9926
 * @date        2020.2.20
 * @description DES加密解密工具，依赖crypto-js
 */
const CryptoJS = require('crypto-js')

/**
 * des加密
 * @message 需要加密的字符串
 * @key 密钥
 */
function encryptByDES(message, key) {
    const keyHex = CryptoJS.enc.Utf8.parse(key)
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
}

/**
 * des解密
 * @ciphertext 密文，ciphertext = encryptByDES(message, key)
 * @key 密钥
 */
function decryptByDES(ciphertext, key) {
    ciphertext = decodeURIComponent(ciphertext)
    const keyHex = CryptoJS.enc.Utf8.parse(key)
    const decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return decrypted.toString(CryptoJS.enc.Utf8)
}

export {
    encryptByDES,
    decryptByDES
}