const phaseinsertRequest = {
    type: "array",
    items: {
        type: "object",
        properties: {
            name: {
                type: "string",
                example: "phase1"
            },
            goal_id: {
                type: "integer",
                example: 2
            },
            start_date: {
                type: "string",
                format: "date - time",
                example: "2024-10-05 16:56:03.077425+05:30"
            },
            end_date: {
                type: "string",
                format: "date - time",
                example: "2024-10-05 16:56:03.077425+05:30"
            }
        },
        required: ["member_id", "is_owner", "is_assignee"]
    }
};
const phaseinsertResponse = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: { type: 'integer', description: 'Unique identifier' },
            name: { type: 'string', description: 'Phase name' },
            goal_id: { type: 'integer', description: 'Associated goal ID' },
            start_date: { type: 'string', format: 'date-time', description: 'Phase start date' },
            end_date: { type: 'string', format: 'date-time', description: 'Phase end date' },
            is_active: { type: 'boolean', description: 'Phase active status' },
            is_deleted: { type: 'boolean', description: 'Phase deleted status' },
            deleted_by: { type: 'string', description: 'User who deleted the phase' },
            deleted_at: { type: 'string', format: 'date-time', description: 'Deletion timestamp' },
            createdAt: { type: 'string', format: 'date-time', description: 'Creation timestamp' },
            updatedAt: { type: 'string', format: 'date-time', description: 'Last update timestamp' },
        },
        required: ['name', 'goal_id', 'start_date', 'end_date'],
    }
};
const phasegetResponse = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            goal_id: { type: 'integer' },
            start_date: { type: 'string', format: 'date-time' },
            end_date: { type: 'string', format: 'date-time' },
            is_active: { type: 'boolean' },
            is_deleted: { type: 'boolean' },
            deleted_by: { type: 'string' },
            deleted_at: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    }
};
const phasegetbyidResponse = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        goal_id: { type: 'integer' },
        start_date: { type: 'string', format: 'date-time' },
        end_date: { type: 'string', format: 'date-time' },
        is_active: { type: 'boolean' },
        is_deleted: { type: 'boolean' },
        deleted_by: { type: 'string' },
        deleted_at: { type: 'string', format: 'date-time' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
    },
    required: ['name', 'goal_id', 'start_date', 'end_date'],
};
const phasegetbygoalResponse = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            goal_id: { type: 'integer' },
            start_date: { type: 'string', format: 'date-time' },
            end_date: { type: 'string', format: 'date-time' },
            is_active: { type: 'boolean' },
            is_deleted: { type: 'boolean' },
            deleted_by: { type: 'string' },
            deleted_at: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
const phasegetbygoalResponse404 = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Phase not found for this goal_id'
        }
    },
}
const deletedphaserequest = {
    type: 'object',
    properties: {
        deleted_by: { type: 'integer' },
    },
}
const deletedphaseResponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Phase deleted successfully'
        }
    },
}
const deletedphaseResponse404 = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Phase not found'
        }
    },
}
module.exports = { phaseinsertRequest, phaseinsertResponse, phasegetResponse, phasegetbyidResponse, phasegetbygoalResponse, phasegetbygoalResponse404, deletedphaserequest, deletedphaseResponse404, deletedphaseResponse }