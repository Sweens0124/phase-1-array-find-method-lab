// code your solution here

function superbowlWin (record) {
  const year1 = record.find(record => record.result === 'W')
  return year1 ? year1.year : undefined
}
