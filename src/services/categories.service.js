const { Category } = require('../models');

const addCategory = async (name) => {
    const msg = { status: 400, message: '"name" is required' };
    if (!name) throw msg;

    const newCategory = await Category.create({ name });

    return {
        id: newCategory.null,
        name: newCategory.name,
    };
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();

    return allCategories;
};

module.exports = {
    addCategory,
    getAllCategories,
};
