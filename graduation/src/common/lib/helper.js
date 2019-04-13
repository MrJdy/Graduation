/*
 * @Author: 姜定一
 * @Date: 2019-04-10 13:49:38
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 14:23:32
 */
export function setCookie (name, value, days) {
  // 三个参数，一个是cookie的名子，一个是值，最后一个是天数
  var exp = new Date(); // new Date("December 31, 9998");
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`;
}

export function getCookie (name) {
  // 取cookies函数
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) { return unescape(arr[2]); }
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
