/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:31:59
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:41:12
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.post('/api/login', controller.login.login);
  router.post('/api/user-info', controller.userInfo.userInfo);
  router.post('/api/hr/edit-position', controller.editInfo.editPosition);
  router.post('/api/hr/edit-company', controller.editInfo.editCompany);
};
