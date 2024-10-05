'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(Role, { foreignKey: 'role' });
User.belongsTo(UserStatus, { foreignKey: 'user_status' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    role: DataTypes.INTEGER,
    user_status: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return User;
};