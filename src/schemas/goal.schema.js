const goalResponseallSchema = {
    type: 'object',
    properties: {
        message: { type: 'string' },
        success: { type: 'boolean' },
        data: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    description: { type: 'string' },
                    start_date: { type: 'string', format: 'date-time' },
                    end_date: { type: 'string', format: 'date-time' },
                    roadmap_id: { type: 'integer' },
                    tag_id: { type: 'integer' },
                    is_active: { type: 'boolean' },
                    is_deleted: { type: 'boolean' },
                    deleted_by: { type: ['integer', 'null'] },
                    deleted_at: { type: ['string', 'null'], format: 'date-time' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                },
            },
        },
    },
};

const createGoalRequestSchema = {
    type: 'object',
    properties: {
      goal: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          start_date: { type: 'string', format: 'date-time' },
          end_date: { type: 'string', format: 'date-time' },
          roadmap_id: { type: 'integer' },
          tag_id: { type: 'integer' },
        },
        required: ['name', 'description', 'start_date', 'end_date', 'roadmap_id', 'tag_id']
      },
      goalmembers: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            member_id: { type: 'integer' },
            is_owner: { type: 'boolean' },
            is_assignee: { type: 'boolean' },
          },
          required: ['member_id', 'is_owner', 'is_assignee']
        }
      },
      phasesData: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            goal_id: { type: 'integer' },
            start_date: { type: 'string', format: 'date-time' },
            end_date: { type: 'string', format: 'date-time' },
            members: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  member_id: { type: 'integer' }
                },
                required: ['member_id']
              }
            }
          },
          required: ['name', 'goal_id', 'start_date', 'end_date', 'members']
        }
      }
    },
    required: ['goal', 'goalmembers', 'phasesData']
  };
  

const goaldeleterequest = {
    type: 'object',
    properties: {
        goalID: { type: 'integer' },
        userID: { type: 'integer' },
    },
    required: ['goalID', 'userID'],
};

const goaldeleteresponse = {
    type: 'object',
    properties: {
        message: { type: 'string', example: 'Goal deleted successfully' },
        success: { type: 'boolean', example: true },
    },
};

const goaldeleteresponse404 = {
    type: 'object',
    properties: {
        message: { type: 'string', example: 'Goal already deleted or Error while deleting Goal' },
        success: { type: 'boolean', example: false },
    },
};

const goalupdaterequest = {
    type: 'object',
    properties: {
        goalID: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        start_date: { type: 'string', format: 'date-time' },
        end_date: { type: 'string', format: 'date-time' },
        roadmap_id: { type: 'integer' },
        tag_id: { type: 'integer' },
    },
    required: ['goalID'],
};

const goaladdresponse = {

}

const goaladd404 = {
    
}

const goalupdateresponse = {
    type: 'object',
    properties: {
        message: { type: 'string', example: 'Goal updated successfully' },
        success: { type: 'boolean', example: true },
    },
};

const goalupdateresponse404 = {
    type: 'object',
    properties: {
        message: { type: 'string', example: 'Error while updating Goal or Goal already deleted' },
        success: { type: 'boolean', example: false },
    },
};

module.exports = {
    goalResponseallSchema,
    createGoalRequestSchema,
    goaldeleterequest,
    goaldeleteresponse,
    goaldeleteresponse404,
    goalupdaterequest,
    goalupdaterequest,
    goalupdateresponse,
    goalupdateresponse404,
    goaladdresponse,
    goaladd404
}