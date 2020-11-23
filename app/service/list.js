'use strict';
const Service = require('egg').Service;
class GetList extends Service {
  async get() {
    // const data = await this.ctx.db.query();
    let data = [];
    await setTimeout(() => {
      data = [];
    }, 100);
    return data;
  }
}
module.exports = GetList;
