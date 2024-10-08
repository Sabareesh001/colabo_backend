// Updated goal response schema for fetching all goals
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

// Schema for goal creation request
const createGoalRequestSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        start_date: { type: 'string', format: 'date-time' },
        end_date: { type: 'string', format: 'date-time' },
        roadmap_id: { type: 'integer' },
        tag_id: { type: 'integer' },
    },
    required: ['name', 'description', 'start_date', 'end_date', 'roadmap_id', 'tag_id'],
};

// Schema for goal deletion request
const goaldeleterequest = {
    type: 'object',
    properties: {
        goalID: { type: 'integer' },
        userID: { type: 'integer' },
    },
    required: ['goalID', 'userID'],
};

// Success response for goal deletion
const goaldeleteresponse = {
    type: 'object',
    properties: {
        message: { type: 'string', example: 'Goal deleted successfully' },
        success: { type: 'boolean', example: true },
    },
};

// Error response for goal not found
const goaldeleteresponse404 = {
    type: 'object',
    properties: {
        message: { type: 'string', example: 'Goal already deleted or Error while deleting Goal' },
        success: { type: 'boolean', example: false },
    },
};

// Update goal request schema
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

// Success response for goal update
const goalupdateresponse = {
    type: 'object',
    properties: {
        message: { type: 'string', example: 'Goal updated successfully' },
        success: { type: 'boolean', example: true },
    },
};

// Error response for goal update failure
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
    goalupdateresponse,
    goalupdateresponse404,
};
