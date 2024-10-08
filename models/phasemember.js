'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhaseMember extends Model {
    static associate(models) {
      this.belongsTo(models.phases,{foreignKey:'phase_id'})
      this.belongsTo(models.users,{foreignKey:'member_id'})
      this.belongsTo(models.users,{foreignKey:'deleted_by'})
      this.belongsTo(models.users,{foreignKey:'created_by'})
    }
  }
  PhaseMember.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    phase_id: {
      type: Sequelize.INTEGER,
      references:{
        model:'phases',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    member_id: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.INTEGER,
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
      type: Sequelize.INTEGER,
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