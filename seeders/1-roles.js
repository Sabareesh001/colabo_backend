module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('master_user_roles', [
      {
        name: 'Product Manager',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FullStack Developer',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Frontend Developer',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Backend Developer',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('master_user_roles', null, {});
  },
};