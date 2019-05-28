/*
 * @Author: 姜定一
 * @Date: 2019-04-07 10:40:25
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-05-28 09:24:52
 */

'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const ctx = this.ctx;
    const result = await ctx.service.login.login(ctx.request.body);
    ctx.body = {
      status: result,
      code: 0,
    };
  }
}
module.exports = LoginController;
