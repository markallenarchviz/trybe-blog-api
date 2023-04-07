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
    });
    return BlogPostsTable;
};

module.exports = BlogPostsSchema;