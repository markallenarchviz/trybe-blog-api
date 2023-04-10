//const { Category } = require('../models');

const addPost = async (name) => {

    return 'heheheh'
};

const getAllPosts = async () => {
    const allCategories = await Category.findAll();

    return allCategories;
};

module.exports = {
    addPost,
};
