const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

let date = new Date();
date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);

const checks = (title, content, categoryIds) => {
    const msg = { status: 400, message: 'Some required fields are missing' };
    const msg2 = { status: 400, message: 'one or more \"categoryIds\" not found' };
    if (!title || !content || categoryIds.length === 0) throw msg;
    categoryIds.forEach((el) => {
        if (el > 2) throw msg2;
    })
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
