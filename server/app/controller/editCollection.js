/*
 * @Author: 姜定一
 * @Date: 2019-04-16 23:21:51
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 10:14:04
 */

'use strict';
const Controller = require('egg').Controller;

class EditCollectionController extends Controller {
  async editCollectionPosition() {
    const ctx = this.ctx;
    const result = await ctx.service.editCollection.editCollectionPosition(
      ctx.request.body
    );
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

  async editCollectionCompany() {
    const ctx = this.ctx;
    const result = await ctx.service.editCollection.editCollectionCompany(
      ctx.request.body
    );
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
module.exports = EditCollectionController;
