module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tags', [
        {
          name: 'Full Stack',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tags', null, {});
    },
  };