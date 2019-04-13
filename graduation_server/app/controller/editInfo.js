
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
