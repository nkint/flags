import _ from 'lodash'

export const samples = (arr, num = 1) =>
  _.range(num).map(() => _.sample(arr))
