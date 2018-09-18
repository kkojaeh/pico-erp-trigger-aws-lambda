const clearAttachments = require('./clear-attachments')
const expireItemLots = require('./expire-item-lots')
const expireQuotations = require('./expire-quotations')
const generateWorkDays = require('./generate-work-days')

exports.clearAttachments = clearAttachments.execute
exports.expireItemLots = expireItemLots.execute
exports.expireQuotations = expireQuotations.execute
exports.generateWorkDays = generateWorkDays.execute