// cookie

export function setCookie (name,value) {
    let Days = 30,
        exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

export function getCookie(name){
    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

export function delCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+ cval +";expires="+ exp.toGMTString();
}

// setCookie("name","hayden");
// alert(getCookie("name"));
