/*
 * @Author: 姜定一
 * @Date: 2019-04-10 13:49:38
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:59:00
 */
export function setCookie (name, value, days) {
  // 三个参数，一个是cookie的名子，一个是值，最后一个是天数
  let exp = new Date(); // new Date("December 31, 9998");
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`;
}

export function getCookie (name) {
  // 取cookies函数
  let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) {
    return unescape(arr[2]);
  }
  return null;
}

export function deleteCookie (name) {
  // 删除cookie并重新演示
  // 该函数检查下cookie是否设置，如果设置了则将过期时间调到过去的时间;
  // 剩下就交给操作系统适当时间清理cookie啦
  if (getCookie(name)) {
    document.cookie = name + '=' + '; expires=Thu, 01-Jan-70 00:00:01 GMT';
  }
}

// 判断是否为登录状态
export function isLogin () {
  if (getCookie('token')) {
    return true;
  }
  return false;
}

// 刷新页面
export function refresh () {
  location.reload(true);
}

// 生成uuid
export function uuid (len, radix) {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid = [];
  radix = radix || chars.length;
  if (len) {
    // Compact form
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
    // rfc4122, version 4 form
    let r;
    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}
