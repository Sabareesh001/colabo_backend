'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhaseMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.phases,{foreignKey:'phase_id'})
      this.belongsTo(models.users,{foreignKey:'member_id'})
      this.belongsTo(models.users,{foreignKey:'deleted_by'})
    }
  }
  PhaseMember.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID
    },
    phase_id: {
      type: Sequelize.UUID,
      references:{
        model:'phases',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    member_id: {
      type: Sequelize.UUID,
      references:{
        model:'users',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue:true
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    deleted_by: {
      type: Sequelize.UUID,
      references:{
        model:'users',
        key:'id'
      },
      defaultValue:null,
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    deleted_at: {
      type: Sequelize.DATE,
      defaultValue:null
    },
    created_by: {
      type: Sequelize.UUID,
      references:{
        model:'users',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'phase_members',
  });
  return PhaseMember;
};