const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    displayName: DataTypes.STRING,
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
  UsersTable.hasMany(model.BlogPost, {
    foreignKey: 'userId',
    as: 'blog_post'
  })
}

    return UsersTable;
};

module.exports = UsersSchema;