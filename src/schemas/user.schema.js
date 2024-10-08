const userDataallresponse = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Sabareesh'
        },
        role: {
            type: 'integer',
            example: 1
        },
        user_status: {
            type: 'integer',
            example: 1
        },
        is_active: {
            type: 'boolean',
            example: true
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.860Z'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.860Z'
        }
    }
};
const userstatusresponseSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Active'
        },
        is_active: {
            type: 'boolean',
            example: true
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.843Z'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.843Z'
        }
    }
};
const userroleresponseSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Product Manager'
        },
        is_active: {
            type: 'boolean',
            example: true
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.803Z'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.803Z'
        }
    }
};
module.exports = { userDataallresponse, userstatusresponseSchema, userroleresponseSchema }