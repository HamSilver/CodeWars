/*
This is the Part II of Multiplying numbers as strings.

TODO
Multiply two numbers! Simple!

Rules
The arguments are passed as strings.
The numbers will be very large
The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
Answer should be returned as string
The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
Zero should not be signed and "-0.0" should be simply returned as "0".
*/

// Actually this is not new solution. Modified solution of part I

const multiply = (a, b) => {
  const prep = s => {
    let r = s.replace(/^-?0*/,'')
    if (/\./.test(r)) r = r.replace(/0*$/,'')
    r = r.replace(/\.$/,'')
    return r
  }
  
  const delDot = s => s.replace(/\./,'')
  
  const addNumber = (arr,idx,val) => {
    // bug?
    if (arr === undefined) arr = []
    let x = arr[idx] + val || val
    let [h, l] = [parseInt(x/10), x % 10]
    arr[idx] = l
    if (h) arr = addNumber(arr,idx+1,h)
    return arr
  }

  let res
  const sign = [a[0],b[0]].some(e => e === '-') && (a[0] !== b[0])
  let [one,two] = [a,b].map(e => prep(e)).sort((a,b) => b.length - a.length)
  const dotPos = [one,two].reduce((c,e) => /\./.test(e) ? c + e.split`.`[1].length : c, 0)
  if (one === '' || two === '') return '0'
  t = [one,two].map(e => delDot(e).split``.reverse().map(v => +(v)))
  one = t[0]
  two = t[1]
  two.map((e,i) => {
    if (!e) return []
    let r = []
    one.forEach((v,j) => {
      r = addNumber(r, j, e * v)
    })
    return r
  }).forEach((e, i) => {
    if (e.length == 0) res = addNumber(res, i, 0)
    else e.forEach((ee, ii) => res = addNumber(res, ii + i, ee))
  })
  if (dotPos) {
    if (dotPos >= res.length) res = [...res,...new Array(dotPos - res.length + 1).fill(0)]
    res.splice(dotPos,0,'.')
  }
  let strRes = prep(res.reverse().join``)
  return strRes === '' ? '0' : `${sign ? '-' : ''}${strRes[0] === '.' ? '0' : ''}${strRes}`
}
