/*
 * @Author: 姜定一
 * @Date: 2019-04-04 16:11:36
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:45:25
 */
import CONSTANT from '../constant/constant';
import {
  buildPostPromise
} from '../lib/fetch';

const API = CONSTANT.API;

export function login (data) {
  return buildPostPromise(API.login, data);
}

export function userInfo (data) {
  return buildPostPromise(API.userInfo, data);
}

export function editPosition (data) {
  return buildPostPromise(API.editPosition, data);
}

export function editCompany (data) {
  return buildPostPromise(API.editCompany, data);
}
