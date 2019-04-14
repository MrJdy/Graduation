/*
 * @Author: 姜定一
 * @Date: 2019-04-04 16:11:36
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 22:14:58
 */
import CONSTANT from '../constant/constant';
import { buildPostPromise } from '../lib/fetch';

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

export function queryCompany (data) {
  return buildPostPromise(API.queryCompany, data);
}

export function queryAllCompany () {
  return buildPostPromise(API.queryAllCompany);
}

export function queryPosition (data) {
  return buildPostPromise(API.queryPosition, data);
}

export function queryAllPosition (data) {
  return buildPostPromise(API.queryAllPosition, data);
}

export function editUserInfo (data) {
  return buildPostPromise(API.editUserInfo, data);
}

export function editResume (data) {
  return buildPostPromise(API.editResume, data);
}

export function queryResume (data) {
  return buildPostPromise(API.queryResume, data);
}
