const api = require('./plugins/api')
const moment = require('moment')
exports.execute = async () => {
  // 3개월 전
  const fixedDate = moment().add(-3, 'months').toDate()
  await api.execute('/attachment/clear', 'DELETE', {
    fixedDate: fixedDate.toISOString()
  })

}