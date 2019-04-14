/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:39:32
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-14 09:46:22
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
    ctx.body = {
      status: result,
      code: 0,
    };
  }
}
module.exports = EditInfoController;
