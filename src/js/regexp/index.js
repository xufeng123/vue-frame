/**
 * 常用的正则
 */
let emoji = /[\ud800-\udbff][\udc00-\udfff]|[\u2600-\u27ff]/; // emoji表情
let email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; // email邮箱
let mobile = /^0?1[3|4|5|7|8]\d{9}$/; // 手机号
let tel = /^0\d{2,3}-?\d{7,8}$/; // 座机号码,0开头2~3位区号，可以加-（也可不加），加上7~8位数字
let text = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;   // 不允许输入特殊符号
let number = /\d/g; // 只能输入数字
let chinese = /^[\u4e00-\u9fa5]{2,4}$/; // 只能输入2-4个汉字

export {
    emoji,
    email,
    mobile,
    tel,
    text,
    number,
    chinese
};
