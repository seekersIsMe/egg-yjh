'use strict';
const Controller = require('egg').Controller;
class Category extends Controller {
  async index() {
    const { ctx } = this;
    const data = await ctx.service.category.get();
    ctx.body = {
      data,
    };
    ctx.status = 200;
  }
}
module.exports = Category;
