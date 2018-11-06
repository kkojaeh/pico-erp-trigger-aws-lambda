const api = require('./api')
const moment = require('moment')
module.exports.execute = async () => {
  // 이번달 1일
  const begin = moment().date(1)
  // 3개월 뒤 마지막 날
  const end = moment().add(3, 'month').date(0)
  const response = await api.execute('/work-schedule/generate-work-schedules',
      'POST', {
        begin: begin.format('YYYY-MM-DD'),
        end: end.format('YYYY-MM-DD')
      })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
}