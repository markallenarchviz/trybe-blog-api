const CategoriesSchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.difine('Categories', {
    name: DataTypes.STRING,
  },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false
    });
    return CategoriesTable;
};

module.exports = CategoriesSchema;