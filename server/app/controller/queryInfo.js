/*
 * @Author: 姜定一
 * @Date: 2019-04-13 09:39:32
 * @Last Modified by: 姜定一
 * @Last Modified time: 2019-04-17 11:09:44
 */

'use strict';
const Controller = require('egg').Controller;

class QueryInfoController extends Controller {
  async queryCompany() {
    const ctx = this.ctx;
    const result = await ctx.service.queryInfo.queryCompany(ctx.request.body);
    if (result.company_id) {
      ctx.body = {
        data: result,
        code: 0,
      };
    } else {
      ctx.body = {
        result: 'no data',
        code: 1,
      };
    }
  }

  async queryAllCompany() {
    const ctx = this.ctx;
    const result = await ctx.service.queryInfo.queryAllCompany(ctx.request.body);
    ctx.body = {
      data: result,
      code: 0,
    };
  }

  async queryLikeCompany() {
    const ctx = this.ctx;
    const result = await ctx.service.queryInfo.queryLikeCompany(ctx.request.body);
    ctx.body = {
      data: result,
      code: 0,
    };
  }

  async queryPosition() {
    const ctx = this.ctx;
    const result = await ctx.service.queryInfo.queryPosition(ctx.request.body);
    const data = result.queryPosition.map(v => {
      v.company_name = result.queryCompany.company_name;
      v.company_local = result.queryCompany.company_local;
      v.user_avatar = result.queryUserInfo.user_avatar;
      v.user_name = result.queryUserInfo.user_name;
      return v;
    });
    ctx.body = {
      data,
      code: 0,
    };
  }

  async queryAllPosition() {
    const ctx = this.ctx;
    const result = await ctx.service.queryInfo.queryAllPosition(
      ctx.request.body
    );
    ctx.body = {
      data: result,
      code: 0,
    };
  }

  async queryLikePosition() {
    const ctx = this.ctx;
    const result = await ctx.service.queryInfo.queryLikePosition(
      ctx.request.body
    );
    ctx.body = {
      data: result,
      code: 0,
    };
  }

  async queryResume() {
    const ctx = this.ctx;
    const result = await ctx.service.queryInfo.queryResume(ctx.request.body);
    ctx.body = {
      data: result,
      code: 0,
    };
  }
}
module.exports = QueryInfoController;
