/*
 * @Author: 姜定一
 * @Date: 2019-04-06 11:32:57
 * @Last Modified by:   姜定一
 * @Last Modified time: 2019-04-06 11:32:57
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
