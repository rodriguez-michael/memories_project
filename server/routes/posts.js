import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//http://localhost:4000/posts
router.get('/', getPosts);
router.get('/', createPost);

export default router;