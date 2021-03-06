module.exports = app=>{
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    userName: {
      type: String,
      require: true
    },
    psw: {
      type: String,
      require: true,
      select: false
    }
  }, { timestamps:true } )

  return mongoose.model('User', UserSchema )
}