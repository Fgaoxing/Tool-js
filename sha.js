/* jshint esversion: 6 */
/*   
 *   A   JavaScript   implementation   of   the   Secure   Hash   Algorithm,   SHA-1,   as   defined   
 *   in   FIPS   PUB   180-1   
 *   Version   2.1-BETA   Copyright   Paul   Johnston   2000   -   2002.   
 *   Other   contributors:   Greg   Holt,   Andrew   Kepert,   Ydnar,   Lostinet   
 *   Distributed   under   the   BSD   License   
 *   See   http://pajhome.org.uk/crypt/md5   for   details.   
 */
 
/**
 * 配置变量，可根据服务端要求调整
 */
const hexcase = 0;  /*   hex输出格式。0 - 小写; 1 - 大写                 */
const b64pad = "";  /*   base-64填充字符。"="表示严格遵守RFC规范       */
const chrsz = 8;    /*   每个输入字符的位数。8 - ASCII; 16 - Unicode   */

/*   
 *   常用函数接口
 *   接受字符串参数，返回十六进制或base-64编码字符串   
 */
 
/**
 * 计算字符串的SHA-1哈希值，返回十六进制字符串
 * @param {string} s - 输入字符串
 * @returns {string} 十六进制哈希值
 */
function hex_sha1(s) {
    return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
}
 
/**
 * 计算字符串的SHA-1哈希值，返回base-64字符串
 * @param {string} s - 输入字符串
 * @returns {string} base-64哈希值
 */
function b64_sha1(s) {
    return binb2b64(core_sha1(str2binb(s), s.length * chrsz));
}
 
/**
 * 计算字符串的SHA-1哈希值，返回字符串
 * @param {string} s - 输入字符串
 * @returns {string} 哈希值字符串
 */
function str_sha1(s) {
    return binb2str(core_sha1(str2binb(s), s.length * chrsz));
}
 
/**
 * 计算密钥和数据的HMAC-SHA1值，返回十六进制字符串
 * @param {string} key - 密钥
 * @param {string} data - 数据
 * @returns {string} 十六进制HMAC-SHA1值
 */
function hex_hmac_sha1(key, data) {
    return binb2hex(core_hmac_sha1(key, data));
}
 
/**
 * 计算密钥和数据的HMAC-SHA1值，返回base-64字符串
 * @param {string} key - 密钥
 * @param {string} data - 数据
 * @returns {string} base-64HMAC-SHA1值
 */
function b64_hmac_sha1(key, data) {
    return binb2b64(core_hmac_sha1(key, data));
}
 
/**
 * 计算密钥和数据的HMAC-SHA1值，返回字符串
 * @param {string} key - 密钥
 * @param {string} data - 数据
 * @returns {string} HMAC-SHA1值字符串
 */
function str_hmac_sha1(key, data) {
    return binb2str(core_hmac_sha1(key, data));
}
 
/*   
 *   简单自检函数，验证虚拟机是否正常工作   
 */
function sha1_vm_test() {
    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}
 
/*   
 *   计算一个大端序字数组的SHA-1值及位长度   
 */
function core_sha1(x, len) {
    /*   添加填充位   */
    x[len >> 5] |= 0x80 << (24 - len % 32);
    x[((len + 64 >> 9) << 4) + 15] = len;
 
    const w = Array(80);
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;
 
    for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        const olde = e;
 
        for (let j = 0; j < 80; j++) {
            if (j < 16) w[j] = x[i + j];
            else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            const t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = rol(b, 30);
            b = a;
            a = t;
        }
 
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
 
}
 
/*   
 *   根据当前迭代执行适当的三元组合函数   
 */
function sha1_ft(t, b, c, d) {
    if (t < 20) return (b & c) | ((~b) & d);
    if (t < 40) return b ^ c ^ d;
    if (t < 60) return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
}
 
/*   
 *   确定当前迭代的加法常数   
 */
function sha1_kt(t) {
    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
}
 
/*   
 *   计算密钥和数据的HMAC-SHA1值   
 */
function core_hmac_sha1(key, data) {
    let bkey = str2binb(key);
    if (bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);
 
    const ipad = Array(16);
    const opad = Array(16);
    for (let i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
 
    const hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
    return core_sha1(opad.concat(hash), 512 + 160);
}
 
/*   
 *   整数相加，2^32处环绕。使用16位运算解决某些JS解释器的bug。   
 */
function safe_add(x, y) {
    const lsw = (x & 0xFFFF) + (y & 0xFFFF);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}
 
/*   
 *   32位数字向左循环移位。   
 */
function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
 
/*   
 *   将8位或16位字符串转换为大端序字数组   
 *   8位函数中，>255的字符会被忽略高字节。   
 */
function str2binb(str) {
    const bin = Array();
    const mask = (1 << chrsz) - 1;
    for (let i = 0; i < str.length * chrsz; i += chrsz)
    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
    return bin;
}
 
/*   
 *   将大端序字数组转换为字符串   
 */
function binb2str(bin) {
    let str = "";
    const mask = (1 << chrsz) - 1;
    for (let i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i >> 5] >>> (24 - i % 32)) & mask);
    return str;
}
 
/*   
 *   将大端序字数组转换为十六进制字符串。   
 */
function binb2hex(binarray) {
    const hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    let str = "";
    for (let i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
    }
    return str;
}
 
/*   
 *   将大端序字数组转换为base-64字符串   
 */
function binb2b64(binarray) {
    const tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let str = "";
    for (let i = 0; i < binarray.length * 4; i += 3) {
        const triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
        for (let j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
            else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
        }
    }
    return str;
}