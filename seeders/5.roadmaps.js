
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('master_goal_roadmaps', [
        {
          name: 'Software Development',
          is_active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('master_goal_roadmaps', null, {});
    },
  };