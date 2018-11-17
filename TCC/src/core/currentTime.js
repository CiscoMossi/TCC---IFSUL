import moment from 'moment'

export const getCurrentTime = seconds => moment().startOf('day').seconds(seconds).format('mm:ss')