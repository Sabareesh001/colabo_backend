'use strict';
const {
  Model
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
    phase_id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    is_active: {type:DataTypes.BOOLEAN,defaultValue:true},
    is_deleted: DataTypes.BOOLEAN,
    deleted_by: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'phase_members',
  });
  return PhaseMember;
};