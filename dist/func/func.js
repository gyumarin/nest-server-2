"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAge = exports.createDesc = exports.createPhone = exports.createEmail = exports.what_language = void 0;
function what_language(string) {
    var c = string.charAt(0).charCodeAt(0);
    if (0x1100 <= c && c <= 0x11ff)
        return true;
    if (0x3130 <= c && c <= 0x318f)
        return true;
    if (0xac00 <= c && c <= 0xd7a3)
        return true;
    return false;
}
exports.what_language = what_language;
function createEmail() {
    const eng = 'abcdefghijklmnopqrstuvwxyz';
    var temp = '';
    for (var i = 0; i < 8; i++) {
        temp = temp + eng.charAt(Math.floor(Math.random() * 25));
    }
    console.log(temp);
    return temp + '@douzone.com';
}
exports.createEmail = createEmail;
function createPhone() {
    return ('010-' +
        Math.floor(Math.random() * (9999 - 1000) + 1000) +
        '-' +
        Math.floor(Math.random() * (9999 - 1000) + 1000));
}
exports.createPhone = createPhone;
function createDesc(name) {
    return '안녕하세요. 신규 입사자 ' + name + '입니다. 잘부탁드리겠습니다.';
}
exports.createDesc = createDesc;
function createAge() {
    return Math.floor(Math.random() * (32 - 25) + 25);
}
exports.createAge = createAge;
//# sourceMappingURL=func.js.map