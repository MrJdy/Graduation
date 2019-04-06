/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:33:03
 * @Last Modified by:   姜定一
 * @Last Modified time: 2019-04-06 11:33:03
 */
'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  // accesstoken: 'string',
  // title: 'string',
  // tab: {
  //   type: 'enum',
  //   values: [ 'ask', 'share', 'job' ],
  //   required: false,
  // },
};

class TestController extends Controller {
  async create() {
    const { ctx } = this;
    // 校验 ‘ctx.request.body’ 是否符合我们预期格式
    // 如果参数校验未通过，会抛出一个 status=402的异常
    ctx.validate(createRule, ctx.request.body);
    // 调用 service 创建一个test
    const result = await ctx.service.test.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      res: {
        data: result.res.data.data,
        status: result.status,
      },
    };
    ctx.status = 201;
  }
}

module.exports = TestController;

// 1、调用 validate 方法对请求参数进行验证。
// 2、用验证过的参数调用 service 封装的业务逻辑来创建一个 topic。
// 3、按照接口约定的格式设置响应状态码和内容。
