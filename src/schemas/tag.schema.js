const getalltagsresponse = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1
        },
        name: {
            type: 'string',
            example: 'Full Stack'
        },
        is_active: {
            type: 'boolean',
            example: true
        },
        is_deleted: {
            type: 'boolean',
            example: false
        },
        deleted_by: {
            type: ['null', 'integer'],
            example: null
        },
        deleted_at: {
            type: ['null', 'string'],
            format: 'date-time',
            example: null
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.881Z'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-05T12:17:32.881Z'
        }
    }
};
const createtagrequestschema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            example: 'hello'
        }
    }
};
const createtagresponseschema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 2
        },
        name: {
            type: 'string',
            example: 'hello'
        },
        is_active: {
            type: 'boolean',
            example: true
        },
        is_deleted: {
            type: 'boolean',
            example: false
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-07T09:42:07.642Z'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            example: '2024-10-07T09:42:07.642Z'
        },
        deleted_by: {
            anyOf: [
                { type: 'null' },
                { type: 'integer' }
            ],
            example: null
        },
        deleted_at: {
            anyOf: [
                { type: 'null' },
                { type: 'string', format: 'date-time' }
            ],
            example: null
        }
    }
};
module.exports = { getalltagsresponse, createtagrequestschema, createtagresponseschema }