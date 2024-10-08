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
      this.belongsTo(models.master_user_roles, { foreignKey: 'role' });
      this.belongsTo(models.master_user_statuses, { foreignKey: 'user_status' });
      this.hasMany(models.phases,{foreignKey:"deleted_by"});
      this.hasMany(models.phase_members,{foreignKey:"deleted_by"});
      this.hasMany(models.phase_members,{foreignKey:"member_id"});

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