const postsService = require('../services/post.service');

const addPost = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        const newPost = await postsService.addPost(title, content, categoryIds);
        return res.status(201).json(newPost);
    } catch (err) {
       next(err);
    }
};

const getAllPosts = async (_req, res, next) => {
    try {
        const allCategories = await categoriesService.getAllCategories();
        return res.status(200).json(allCategories);
    } catch (err) {
       next(err);
    }
};

module.exports = {
    addPost,
};