const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

const checks = (title, content, categoryIds) => {
    const msg = { status: 400, message: 'Some required fields are missing' };
    const msg2 = { status: 400, message: 'one or more "categoryIds" not found' };
    if (!title || !content || categoryIds.length === 0) throw msg;
    categoryIds.forEach((el) => {
        if (el > 2) throw msg2;
    });
};

const addPost = async (title, content, categoryIds, userId) => {
    checks(title, content, categoryIds);
    const newPost = await BlogPost.create({ 
        title,
        content,
        userId,
        published: date,
        updated: date,
    });
    const postId = await BlogPost.findOne({ where: { title } });
    categoryIds.forEach(async (el) => {
        await PostCategory.create({
            postId: postId.dataValues.id,
            categoryId: el,
        });
    });
    return newPost;
};

module.exports = {
    addPost,
};