'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primatyKey: true,
        references: {
          model: 'BlogPost',
          key: 'id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        primatyKey: true,
        primatyKey: true,
        references: {
          model: 'Category',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};