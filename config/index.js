const { Sequelize } = require("sequelize");
const dbConfig = require("./config.json");

const sequelize = new Sequelize("colabo", "postgres", "suresh", {
  dialect: "postgres",
  host: "localhost",
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;