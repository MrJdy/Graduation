/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:39:32
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 10:44:33
 */

'use strict';
const Controller = require('egg').Controller;

class EditInfoController extends Controller {
  async editPosition() {
    const ctx = this.ctx;
    const result = await ctx.service.editInfo.editPosition(ctx.request.body);
    ctx.body = {
      status: result,
      code: 0,
    };
  }

  async editCompany() {
    const ctx = this.ctx;
    const result = await ctx.service.editInfo.editCompany(ctx.request.body);
    if (result) {
      ctx.body = {
        status: result,
        code: 0,
      };
    } else {
      ctx.body = {
        status: result,
        code: 500,
      };
    }
  }
}
module.exports = EditInfoController;
