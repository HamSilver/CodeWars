/*
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/

const multiply = (a, b) => {
  const deZero = s => s.replace(/^0*/,'')

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
  let [one,two] = [a,b].map(e => deZero(e)).sort((a,b) => b.length - a.length)
  if (one === '' || two === '') return '0'
  t = [one,two].map(e => e.split``.reverse().map(v => +(v)))
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
  return res.reverse().join``
}
