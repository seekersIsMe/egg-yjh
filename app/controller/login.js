const Controller = require('./superCtrl');
const md5 = require('md5')
class User extends Controller {
  async getCode() {
    const { ctx } = this
    const captcha = await ctx.service.tools.captcha()
    ctx.session.captcha = captcha.text
    ctx.response.type = 'image/svg+xml'
    ctx.body = captcha.data
  }
  async register () {
    // console.log('测试',ctx1)
    let { ctx } = this
    let { email, name, psw , code, emailCode} = ctx.request.body
    console.log('请求体',ctx.request.body)
    if(code.toLowerCase() !== ctx.session.captcha.toLowerCase()) {
      this.message('验证码不对')
      return
    }
    if(emailCode !== ctx.session.emailCode) {
      this.message('邮箱验证码不对')
      return
    }
    let isInName = await ctx.model.User.findOne({
      name
    })
    let isInEmail = await ctx.model.User.findOne({
      email
    })
    if(isInName) {
      this.message('该用户名已被占用')
      return
    }
    // if (isInEmail) {
    //   this.message('该邮箱已经注册')
    //   return
    // }
  
    let ret = await ctx.model.User.create({ 
      email, 
      name,
      psw:md5(psw)
    })
    if(ret._id){
      this.success('注册成功')
    }
  }
  async index() {
    const { ctx, app } = this;
    let {name, psw, code} = ctx.request.body
    let ishasName = await ctx.model.User.findOne({name})
    if(!ishasName) {
        ctx.body = {
            code: 1,
            msg: '用户名错误'
        }
        return
    }
    let ishasPsw = await ctx.model.User.findOne({name, psw: md5(psw)})
    if(!ishasPsw) {
        ctx.body = {
            code: 1,
            msg: '密码错误'
        }
        return
    }
    if(code.toLocaleLowerCase() !== ctx.session.captcha) {
        ctx.body = {
            code: 1,
            msg: '验证码错误'
        }
        return
    }
    // 生成token
    let token = app.jwt.sign({
        name,
        id: ishasPsw._id
    }, app.config.jwt.secret,
    {
        expiresIn: '60s'
    })
    ctx.body = {
        code: 0,
        msg: '登录成功',
        data: {
            token
        }
    }
}
module.exports = User;
