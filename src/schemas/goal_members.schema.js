const goalMembersResponse = {
    type: "array",
    items: {
        type: "object",
        properties: {
            id: {
                type: "integer",
                example: 41
            },
            goal_id: {
                type: "integer",
                example: 1
            },
            member_id: {
                type: "integer",
                example: 2
            },
            is_owner: {
                type: "boolean",
                example: false
            },
            is_assignee: {
                type: "boolean",
                example: true
            },
            is_active: {
                type: "boolean",
                example: true
            },
            is_deleted: {
                type: "boolean",
                example: false
            },
            deleted_by: {
                type: ["null", "string"],
                example: null
            },
            deleted_at: {
                type: ["null", "string"],
                example: null
            },
            createdAt: {
                type: "string",
                format: "date-time",
                example: "2024-10-07T05:27:24.169Z"
            },
            updatedAt: {
                type: "string",
                format: "date-time",
                example: "2024-10-07T05:27:24.169Z"
            },
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 2
                    },
                    name: {
                        type: "string",
                        example: "Girish"
                    },
                    role: {
                        type: "integer",
                        example: 2
                    },
                    user_status: {
                        type: "integer",
                        example: 1
                    },
                    is_active: {
                        type: "boolean",
                        example: true
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2024-10-05T12:17:32.860Z"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2024-10-05T12:17:32.860Z"
                    }
                }
            }
        }
    }
};
const goalMembersRequest = {
    type: "array",
    items: {
        type: "object",
        properties: {
            member_id: {
                type: "integer",
                example: 1
            },
            is_owner: {
                type: "boolean",
                example: true
            },
            is_assignee: {
                type: "boolean",
                example: true
            }
        },
        required: ["member_id", "is_owner", "is_assignee"]
    }
};
const goalMemberResponse = {
    type: "object",
    properties: {
        Message: {
            type: "string",
            example: "Added Successfully"
        },
        data: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 40
                    },
                    member_id: {
                        type: "integer",
                        example: 1
                    },
                    is_owner: {
                        type: "boolean",
                        example: true
                    },
                    is_assignee: {
                        type: "boolean",
                        example: true
                    },
                    goal_id: {
                        type: "integer",
                        example: 1
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2024-10-07T05:27:24.169Z"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2024-10-07T05:27:24.169Z"
                    },
                    is_active: {
                        type: "boolean",
                        example: true
                    },
                    is_deleted: {
                        type: "boolean",
                        example: false
                    },
                    deleted_by: {
                        type: ["null", "string"],
                        example: null
                    },
                    deleted_at: {
                        type: ["null", "string"],
                        example: null
                    }
                }
            }
        }
    }
};
const goalupdateRequest = {
    type: 'object',
    properties: {
        member_id: {
            type: 'integer'
        },
        is_active: {
            type: 'boolean'
        },
        is_deleted: {
            type: 'boolean'
        },
        is_owner: {
            type: 'boolean'
        },
        is_assignee: {
            type: 'boolean'
        }
    },
    required: ['member_id', 'is_active', 'is_deleted', 'is_owner', 'is_assignee']
};
const goalupdateResponse = {
    type: 'object',
    properties: {
        Message: {
            type: 'string',
            example: 'Updated Successfully'
        }
    },
};
const goalremoveRequest = {
    type: 'object',
    properties: {
        member_id: {
            type: 'integer',
            description: 'ID of the member to delete'
        },
        deleted_by: {
            type: 'integer',
            description: 'ID of the user deleting the member'
        }
    },
    required: ['member_id', 'deleted_by']
};
const goalremoveResponse = {
    type: 'object',
    properties: {
        Message: {
            type: 'string',
            example: 'Removed Successfully'
        }
    },
};
module.exports = { goalMembersResponse, goalMembersRequest, goalMemberResponse, goalupdateRequest, goalupdateResponse, goalremoveRequest, goalremoveResponse }