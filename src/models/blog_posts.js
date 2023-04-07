const BlogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.difine('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    });

BlogPostsTable.associate = (model) => {
  BlogPostsTable.belongsTo(model.Users, {
    foreignKey: 'userId',
    as: 'user'
  })
}

    return BlogPostsTable;
};

module.exports = BlogPostsSchema;