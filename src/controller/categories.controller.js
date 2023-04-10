const categoriesService = require('../services/categories.service');

const addCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newCategory = await categoriesService.addCategory(name);
        return res.status(201).json(newCategory);
    } catch (err) {
       next(err);
    }
};

module.exports = {
    addCategory,
};