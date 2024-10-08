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
    example: {
        message: 'All Goals fetched successfully',
        success: true,
        data: [
            {
                id: 7,
                name: 'Fire',
                description: 'a project to caryon',
                start_date: '2024-10-05T07:20:08.768Z',
                end_date: '2024-10-05T07:20:08.768Z',
                roadmap_id: 1,
                tag_id: 1,
                is_active: true,
                is_deleted: false,
                deleted_by: null,
                deleted_at: null,
                createdAt: '2024-10-05T17:14:30.437Z',
                updatedAt: '2024-10-05T17:14:30.437Z',
            },
        ],
    },
};
const goalResponsebyidSchema = {
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
    example: {
        message: 'Goal fetched by Id successfully',
        success: true,
        data:
        {
            id: 7,
            name: 'Fire',
            description: 'a project to caryon',
            start_date: '2024-10-05T07:20:08.768Z',
            end_date: '2024-10-05T07:20:08.768Z',
            roadmap_id: 1,
            tag_id: 1,
            is_active: true,
            is_deleted: false,
            deleted_by: null,
            deleted_at: null,
            createdAt: '2024-10-05T17:14:30.437Z',
            updatedAt: '2024-10-05T17:14:30.437Z',
        },

    },
};
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
    example: {
        name: 'crayon bit',
        description: 'workshop',
        start_date: '2024-10-05T07:20:08.768Z',
        end_date: '2024-10-05T07:20:08.768Z',
        roadmap_id: 1,
        tag_id: 1,
    },
};
const goaladd404 = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Field should not be empty or Goal name already exists or Something went wrong'
        },
        success: {
            type: 'boolean',
            example: false
        }
    },
};
const goaladdresponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Goal created successfully'
        },
        success: {
            type: 'boolean',
            example: true
        }
    },
};

const goaldeleterequest = {
    type: 'object',
    properties: {
        goalID: {
            type: 'integer',
            example: 2
        },
        userID: {
            type: 'integer',
            example: 1
        }
    },
    required: ['goalID', 'userID']
};
const goaldeleteresponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Goal deleted  successfully'
        },
        success: {
            type: 'boolean',
            example: true
        }
    },
};
const goaldeleteresponse404 = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Goal already deleted or Error while deleting Goal'
        },
        success: {
            type: 'boolean',
            example: false
        }
    },
};
const goalupdaterequest = {
    type: 'object',
    properties: {
        goalID: {
            type: 'integer',
            example: 8
        },
        roadmap_id: {
            type: 'any',
            example: null
        }
    },
    required: ['goalID', 'roadmap_id']
};
const goalupdateresponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Goal updated successfully'
        },
        success: {
            type: 'boolean',
            example: true
        }
    },
};
const goalupdateresponse404 = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'Error while updating Goal or field should not be empty or Goal already deleted'
        },
        success: {
            type: 'boolean',
            example: false
        }
    },
};
module.exports = {
    goalResponseallSchema,
    goalResponsebyidSchema,
    createGoalRequestSchema,
    goaladd404,
    goaladdresponse,
    goaldeleterequest,
    goaldeleteresponse,
    goaldeleteresponse404,
    goalupdaterequest,
    goalupdateresponse,
    goalupdateresponse404
}