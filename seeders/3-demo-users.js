module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Sabareesh',
        role: 1,
        is_active:true,
        user_status:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Girish',
        role: 2,
        is_active:true,
        user_status:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Udhaya',
        role: 3,
        is_active:true,
        user_status:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Suresh',
        role: 4,
        is_active:true,
        user_status:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};