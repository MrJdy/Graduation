/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:32:49
 * @Last Modified by:   姜定一
 * @Last Modified time: 2019-04-06 11:32:49
 */
'use strict';

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有异常都在app上触发一个error事件，框架会记录一条错误信息
      ctx.app.emit('error', err, ctx);
      const status = err.status || 500;
      // 生产环境时 500 错误的详细信息不回返给客户端，可能会包含敏感信息
      const error =
        status === 500 && ctx.app.config.env === 'prod'
          ? 'Internal Server Error'
          : err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
    }
  };
};
