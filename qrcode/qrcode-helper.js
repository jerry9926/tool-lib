/**
 * @author      jerry9926
 * @date        2020.2.20
 * @description 二维码生成工具，依赖qrcodejs2
 */
import QRCode from 'qrcodejs2'

export const createQRCode = (box, url, width = 150, height = 150, color = '#000000') => {
    new QRCode(box, {
        width: width,
        height: height,
        text: url,
        colorDark : color,  // 颜色
    })
}