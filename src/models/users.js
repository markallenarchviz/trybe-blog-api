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
    });
    return UsersTable;
};

module.exports = UsersSchema;