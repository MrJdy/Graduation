/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:31:59
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 11:09:45
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/login', controller.login.login);
  router.post('/api/user-info', controller.userInfo.userInfo);
  router.post('/api/hr/edit-position', controller.editInfo.editPosition);
  router.post('/api/hr/edit-company', controller.editInfo.editCompany);
  router.post('/api/hr/query-company-info', controller.queryInfo.queryCompany);
  router.post('/api/query-company', controller.queryInfo.queryAllCompany);
  router.post(
    '/api/hr/query-position-info',
    controller.queryInfo.queryPosition
  );
  router.post('/api/query-position', controller.queryInfo.queryAllPosition);
  router.post('/api/edit/user-info', controller.editInfo.editUserInfo);
  router.post('/api/edit-resume', controller.editInfo.editResume);
  router.post('/api/query-resume', controller.queryInfo.queryResume);
  router.post(
    '/api/Collection-position',
    controller.editCollection.editCollectionPosition
  );
  router.post(
    '/api/query-like-position',
    controller.queryInfo.queryLikePosition
  );
  router.post('/api/collection-company', controller.editCollection.editCollectionCompany);
  router.post('/api/query-like-company', controller.queryInfo.queryLikeCompany);
};
