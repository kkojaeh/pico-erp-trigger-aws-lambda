const api = require('./api')
const moment = require('moment')
module.exports.execute = async () => {
  // 3개월 전
  const fixedDate = moment().add(-3, 'months').toDate()
    await api.execute('/attachment/clear', 'DELETE', {
      fixedDate: fixedDate.toISOString()
    })
}