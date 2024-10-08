module.exports = {
    PhaseMember: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                description: 'Unique identifier for the phase member'
            },
            phase_id: {
                type: 'integer',
                description: 'ID of the phase associated with the member'
            },
            member_id: {
                type: 'integer',
                description: 'ID of the member'
            },
            is_active: {
                type: 'boolean',
                description: 'Indicates whether the phase member is active or not'
            },
            is_deleted: {
                type: 'boolean',
                description: 'Indicates if the member has been soft deleted'
            },
            deleted_at: {
                type: 'string',
                format: 'date-time',
                description: 'Timestamp when the member was deleted'
            },
            deleted_by: {
                type: 'integer',
                description: 'ID of the user who performed the delete action'
            }
        },
        required: ['phase_id', 'member_id']
    },
};
