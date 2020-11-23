module.exports = app=>{
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
  
    const TopListSchema = new Schema({
       topList: {
           type: [
               {
                name: String,
                e_name: String,
                describe: String,
                e_describe: String,
                baseInfo: String,
                e_baseInfo: String, 
                imgurl: {
                    type: Array
                },
                videos: {
                    type: Array
                },
                supperType: String,
                subType: String,
               }
           ]
       }
    }, { timestamps:true } )
  
    return mongoose.model('topList', TopListSchema)
  }