'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action_time_variance_reasons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.master_time_variance_reasons,{foreignKey:"variance_reason_id" })
      this.hasMany(models.actions,{foreignKey:"action_id"})
      this.hasMany(models.users,{foreignKey:"deleted_by"})
      
    }
  }
  action_time_variance_reasons.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    variance_reason_id: {
      type: Sequelize.UUID,
      references: {
        model: "master_time_variance_reasons",
        key: "id",
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    action_id: {
      type: Sequelize.UUID,
      references: {
        model: "actions",
        key: "id",
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    reason_for_variance: {
      type: Sequelize.STRING,
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    deleted_by: {
      type: Sequelize.UUID,
      references: {
        model: "users",
        key: "id",
      },
      defaultValue:null,
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    deleted_at: {
      type: Sequelize.DATE,
    },
    created_by: {
      type: Sequelize.UUID,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue:true
    },  
  }, {
    sequelize,
    modelName: 'action_time_variance_reasons',
  });
  return action_time_variance_reasons;
};