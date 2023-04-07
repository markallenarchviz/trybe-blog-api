const PostsCategoriesSchema = (sequelize, DataTypes) => {
  const postsCategoriesTable = sequelize.difine('PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false
    });
    return postsCategoriesTable;
};

module.exports = PostsCategoriesSchema;