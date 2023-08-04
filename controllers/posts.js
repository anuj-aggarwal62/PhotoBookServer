import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => {
    try {
        // finding something inside of a model takes time
        const postMessages = await PostMessage.find();
    
        res.status(200).json(postMessages);

    } catch (error) {
        res.staus(404).json({message : error.message});
    }

}

export const createPosts = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch {
        res.status(409).json({message : error.message});
    }
}


export const updatePost = async (req,res) => {
    const { id : _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Oops! Looks like the memory you are looking does not exists.');

    const updatedPost = await PostMessage.findByAndUpdate(_id, post,{new:true});

    res.json(updatedPost);
}