module.exports =  ({app}) => {
    return async function verify(ctx, next) {
        const token = ctx.request.header.authorization.replace('Bearer ', '')
        try {
            let ret = await app.jwt.verify(token, app.config.jwt.secret)
            ctx.state.name = ret.name
            ctx.state.userId = ret.id
            next()
        } catch (err) {
            console.log('token错误', err)
            if(err.name=="TokenExpiredError"){
                ctx.state.email = ''
                return ctx.body = {
                  code:-666,
                  message:'登录过期'
                }
            }
            console.log('错误','token过期')
        }
    } 
}