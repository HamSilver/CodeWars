/*
You will be given a very large number 'n' as a string and a number 'm' (multiplier).
There will be no funny business with the input, 'n' will always be a number given as a string and 'm' will always be only a one digit positive number/integer from 0 to 9.
Your task is to multiply the number in the string 'n' by the multiplier 'm' and return the result as a string.
'222' * 3 returns '666' and '94972095709275027002' * 3 returns '284916287127825081006'
*/
const mult = (n, m) => {
  const addNumber = (idx,val) => {
    if (res === undefined) res = []
    let x = res[idx] + val || val
    let [h, l] = [parseInt(x/10), x % 10]
    res[idx] = l
    if (h) addNumber(idx+1,h)
  }
 
  let res
  if (m) { 
    n.split``.reverse().map(v => +(v)).forEach((e,i) => addNumber(i, e * m))
    return res.reverse().join``
  } else return '0'
}
