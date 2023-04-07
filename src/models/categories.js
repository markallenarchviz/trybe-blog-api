const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.difine('Categories', {
    name: DataTypes.STRING,
  },
    {
      tableName: 'categories',
      underscored: true,
    });
    return CategoriesTable;
};

module.exports = CategoriesSchema;