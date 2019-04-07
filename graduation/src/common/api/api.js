/*
 * @Author: 姜定一
 * @Date: 2019-04-04 16:11:36
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-07 10:51:28
 */
import CONSTANT from '../constant/constant';
import { buildPostPromise } from '../lib/fetch';

const API = CONSTANT.API;
export function test (data) {
  return buildPostPromise(API.test, data);
}

export function login (data) {
  return buildPostPromise(API.login, data);
}
