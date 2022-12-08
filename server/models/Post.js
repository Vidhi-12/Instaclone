const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const postSchema = new Schema({
    name: String, 
    location: String,
    likes: {type:Number, default:0}, 
    description: String,
    postImage: {
      url:String,
      filename:String
   }, 
    date: {type: Date, default: Date.now}
 })

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;