const jwt = require('jsonwebtoken');
const postsService = require('../services/post.service');

const addPost = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const userId = jwt.decode(authorization).id;
        const { title, content, categoryIds } = req.body;
        const newPost = await postsService.addPost(title, content, categoryIds, userId);

        return res.status(201).json(newPost);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addPost,
};