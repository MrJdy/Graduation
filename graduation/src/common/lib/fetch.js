/*
 * @Author: 姜定一
 * @Date: 2019-04-04 16:10:17
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:45:40
 */
require('es6-promise').polyfill();

export function getParams (json) {
  let query;
  if (typeof URLSearchParams !== 'undefined') {
    query = new URLSearchParams();
    Object.keys(json).forEach(key => {
      query.append(key, json[key]);
    });
  } else {
    query = '';
    Object.keys(json).forEach(key => {
      query = `${query + key}=${json[key]}&`;
    });
    if (query.length > 1) {
      query = query.slice(0, query.length - 1);
    }
  }
  return query;
}

export function buildFormDataPostPromise (url, data) {
  let URL = `${url}?${getParams(data)}`;
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'nox-ajax': 1
    },
    credentials: 'same-origin',
    cache: 'no-cache'
  }).then(res => res.json());
}

export function buildPostPromise (url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'nox-ajax': 1
    },
    credentials: 'same-origin',
    cache: 'no-cache',
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function buildGetPromise (url, data) {
  let URL = `${url}?${getParams(data)}`;
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'nox-ajax': 1
    },
    credentials: 'same-origin',
    cache: 'no-cache'
  }).then(res => res.json());
}

export function buildPutPromise (url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'nox-ajax': 1
    },
    credentials: 'same-origin',
    cache: 'no-cache',
    body: JSON.stringify(data)
  }).then(res => res.json());
}
