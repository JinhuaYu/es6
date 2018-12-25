// symbol 独一无二的值
{
  // 声明
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2) // false
  let a3 = Symbol.for('a3')
  let a4 = Symbol.for('a3')
  console.log(a3 === a4) // ftrue
}

{
  // 对象中属性名相同但不一样（不冲突）
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  }
  console.log('obj', obj) // {abc: 345, c: 456, Symbol(abc): "123"}
  
  // 使用symbol的属性for,for in取不到
  for(let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value) 
    // let of abc 345 
    // let of c 456
  }

  // 取symbol属性
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]) // 123
  })

  // 
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownKeys', item, obj[item])
    // ownKeys abc 345
    // ownKeys c 456
    // ownKeys Symbol(abc) 123
  })

}