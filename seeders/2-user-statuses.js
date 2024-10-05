module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('master_user_statuses', [
        {
          name: 'Active',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('master_user_statuses', null, {});
    },
  };