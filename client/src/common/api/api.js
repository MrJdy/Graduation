/*
 * @Author: 姜定一
 * @Date: 2019-04-04 16:11:36
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 11:06:46
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

export function queryAllCompany (data) {
  return buildPostPromise(API.queryAllCompany, data);
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

export function collectionPosition (data) {
  return buildPostPromise(API.collectionPosition, data);
}

export function queryLikePosition (data) {
  return buildPostPromise(API.queryLikePosition, data);
}

export function collectionCompany (data) {
  return buildPostPromise(API.collectionCompany, data);
}

export function queryLikeCompany (data) {
  return buildPostPromise(API.queryLikeCompany, data);
}
