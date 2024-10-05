const User = require('./user')
const Goal = require('./goal')
const Tag = require('./tag')
const GoalMember = require('./goalmember')
const Phase = require('./phase')
const PhaseMember = require('./phasemember')

// Goal model
Goal.belongsTo(User, { foreignKey: 'deleted_by' });
Goal.belongsTo(Tag, { foreignKey: 'tag_id' });

// GoalMember model
GoalMember.belongsTo(Goal, { foreignKey: 'goal_id' });
GoalMember.belongsTo(User, { foreignKey: 'member_id' });
GoalMember.belongsTo(User, { foreignKey: 'deleted_by' });

// Phase model
Phase.belongsTo(Goal, { foreignKey: 'goal_id' });
Phase.belongsTo(User, { foreignKey: 'deleted_by' });

// PhaseMember model
PhaseMember.belongsTo(Phase, { foreignKey: 'phase_id' });
PhaseMember.belongsTo(User, { foreignKey: 'member_id' });
PhaseMember.belongsTo(User, { foreignKey: 'deleted_by' });

// Tag model
Tag.belongsTo(User, { foreignKey: 'deleted_by' });

// User model
User.belongsTo(Role, { foreignKey: 'role' });
User.belongsTo(UserStatus, { foreignKey: 'user_status' });





