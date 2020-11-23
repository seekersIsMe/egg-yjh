'use strict';
const Controller = require('egg').Controller;
class List extends Controller {
  async index() {
    console.log(this.ctx.query);
    const data = await this.ctx.service.list.get();
    this.ctx.body = {
      data: {
        data: data,
        pagination: {
          total: 100
        }
      }
    };
    console.log('数据', data);
    this.ctx.status = 200;
  }
}
module.exports = List;
