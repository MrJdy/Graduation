/*
 * @Author: 姜定一
 * @Date: 2019-04-10 14:01:52
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-10 14:03:26
 */

'use strict';
const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async userInfo() {
    const ctx = this.ctx;
    const result = await ctx.service.userInfo.userInfo(ctx.request.body);
    ctx.body = {
      status: result.status,
      data: result.data,
      code: 0,
    };
  }
}
module.exports = UserInfoController;
