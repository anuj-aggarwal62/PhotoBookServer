import express from 'express';
import {getPosts, createPosts ,updatePost} from '../controllers/posts.js';
const router = express.Router();


// first parameter address at which get request will be after local host
// second parameter is callback function to handle request and response
// this will be accessed with below URL as set in index.js
// http://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost)


export default router;