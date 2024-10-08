module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tags', [
      {
        name: 'Full Stack',
        is_active: true,
        is_deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tags', null, {});
  },
};