// 处理数字显示
const FormateNum = num => {
  if (num >= 0) {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w'
    } else if (num >= 1000) {
      let count = (num / 1000).toFixed(1)
      if (count < 10) {
        return count + 'k'
      } else {
        return (count / 10).toFixed(1) + 'w'
      }
    } else {
      return num
    }
  } else {
    return 0
  }
}

Number.prototype.toFixed = function (d) {
  let s = this + ''
  if (!d) d = 0
  if (s.indexOf('.') === -1) s += '.'
  s += new Array(d + 1).join('0')
  if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(s)) {
    let s = '0' + RegExp.$2,
      pm = RegExp.$1,
      a = RegExp.$3.length,
      b = true
    if (a === d + 2) {
      a = s.match(/\d/g)
      if (parseInt(a[a.length - 1]) > 4) {
        for (let i = a.length - 2; i >= 0; i--) {
          a[i] = parseInt(a[i]) + 1
          if (a[i] === 10) {
            a[i] = 0
            b = i !== 1
          } else break
        }
      }
      s = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2')
    }
    if (b) s = s.substr(1)
    return (pm + s).replace(/\.$/, '')
  }
  return this + ''
}

const replaceEmTag = str => {
  if (!str) return ''
  return str.replaceAll('<em>', '').replaceAll('</em>', '')
}

export { FormateNum, replaceEmTag }
