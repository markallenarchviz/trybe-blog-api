const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false
    });

PostCategoryTable.associate = ({ BlogPost, Category }) => {
  BlogPost.belongsToMany(Category, {
    as: 'categories',
    foreignKey: 'postId',
    otherKey: 'categoryId',
    through: PostCategoryTable
  });

  Category.belongsToMany(BlogPost, {
    as: 'posts',
    foreignKey: 'categoryId',
    otherKey: 'postId',
    through: PostCategoryTable
  });
}

    return PostCategoryTable;
};

module.exports = PostCategorySchema;