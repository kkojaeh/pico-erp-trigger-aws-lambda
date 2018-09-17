const api = require('./plugins/api')
const moment = require('moment')
exports = async () => {
  // 3개월 전
  const fixedDate = moment().add(-3, 'months').toDate()
  await api('/attachment/clear', 'DELETE', {
    fixedDate: fixedDate.toISOString()
  })

}