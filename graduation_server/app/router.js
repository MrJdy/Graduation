/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:31:59
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-07 13:58:15
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/login', controller.login.login);
};
