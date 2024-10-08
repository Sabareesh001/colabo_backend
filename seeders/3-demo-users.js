
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id:1,
        name: "Sabareesh",
        role: 1,
        is_active: true,
        user_status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:2,
        name: "Girish",
        role: 2,
        is_active: true,
        user_status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      { id:3,
        name: "Udhaya",
        role: 3,
        is_active: true,
        user_status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:4,
        name: "Suresh",
        role: 4,
        is_active: true,
        user_status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
