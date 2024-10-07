'use strict';
const {
  Model,
  Sequelize
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
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID
    },
    name: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.UUID,
      references:{
        model:'master_user_roles',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    user_status: {
      type: Sequelize.UUID,
      references:{
        model:'master_user_statuses',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue:true
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return User;
};