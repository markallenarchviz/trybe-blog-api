const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.difine('Users', {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false
    });

UsersTable.associate = (model) => {
  UsersTable.hasMany(model.BlogPosts, {
    foreignKey: 'userId',
    as: 'blog_post'
  })
}

    return UsersTable;
};

module.exports = UsersSchema;