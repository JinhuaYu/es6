// 数组扩展
/**
 * 数组新增特性
 * Array.from
 * Array.of
 * copyWithin
 * find\findIndex
 * fill
 * entries\keys\values
 * includes
 */

{
  let arr = Array.of(3,4,7,9,11)
  console.log('arr=', arr)

  let empty = Array.of()
  console.log('empty', empty)
}

{
  console.log('fill-7', [1, 'a', undefined].fill(7)) // [7, 7, 7]
  console.log('fill, props', ['a', 'b', 'c'].fill(7, 1, 3)) // ["a", 7, 7]
}

{
  for (let index of ['1','c','ks'].keys()) {
    console.log('keys', index)
  }

  for (let value of ['1','c','ks'].values()) {
    console.log('values', value)
  }

  for (let [index, value] of ['1','c','ks'].entries()) {
    console.log('values', index,value)
  }
}

{
  // 从0开始替换，从3
  console.log([1,2,3,4,5].copyWithin(0,1,3))  // 2,3,3,4,5
}

// find\findIndex
{
  console.log([1,2,3,4,5,6].find((item) => {
    return item>3
  })) // 4

  console.log([1,2,3,4,5,6].findIndex((item) => {
    return item>3
  })) // 3
}

{
  console.log('number', [1,2,NaN].includes(1)) // true
  console.log('number', [1,2,NaN].includes(NaN)) // true
}