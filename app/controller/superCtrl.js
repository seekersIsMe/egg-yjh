const Controller = require('egg').Controller;
class superCtrl extends Controller {
  async success(data) {
    const { ctx } = this
    ctx.status = 200;
    ctx.body = {
      code: 0,
      data,
      msg: '请求成功'
    }
  }
  async error(msg, code = -1) {
    const { ctx } = this
    ctx.body = {
      code,
      msg
    }
  }
  async message(msg) {
    const { ctx } = this
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg
    }
  }
}
module.exports = superCtrl;
