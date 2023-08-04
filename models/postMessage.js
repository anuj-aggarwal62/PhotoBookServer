import mongoose from 'mongoose';

//creating schema
const postSchema = mongoose.Schema({
    title: String,
    message : String,
    creator: String,
    tags : [String],
    selectedFile : String,
    likeCount: {
        type : Number,
        default : 0
    },
    createdAt: {
        type : Date,
        default : new Date()
    }
});

// creating model
// name given to model in app // parameter 1 : name given to model in database
const PostMessage = mongoose.model('PostMessage',postSchema);

//exporting model
export default PostMessage;