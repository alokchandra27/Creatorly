const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema(
    {
        action: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        userType: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
            required: true,
        },
        performedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        timestamp: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
);

const auditLog = mongoose.model('AuditLog', auditLogSchema);

module.exports = auditLog;