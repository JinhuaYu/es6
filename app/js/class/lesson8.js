// 对象扩展
/**
 * 新增特性
 * 1、简洁表示法
 * 2、属性表达式
 * 3、扩展运算符
 * 4、Object新增方法
 */

{
  // 简洁表示法
  let o = 1
  let k = 2
  let es5 = {
    o: o,
    k: k
  }
  let es6 = {
    o,
    k
  }
  console.log(es5, es6)

  let es5_method = {
    hello:function(){
      console.log('hello')
    }
  }

  let es6_method = {
    hello(){
      console.log('hello')
    }
  }
  console.log(es5_method.hello(), es6_method.hello())
}

{
  // 属性表达式
  let a = 'b'
  let es5_obj = {
    a: 'c',
    b: 'c'
  }
  let es6_obj = {
    [a]: 'c'
  }
  console.log(es5_obj, es6_obj)
}

{
  // 新增API
  // 判断字符串是否相等
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc') // true true
  console.log('数组', Object.is([],[]), [] === []) // false false

  console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'})) // {a: "a", b: "b"}

  let test = {k:123, o:456}
  for(let [key, value] of Object.entries(test)) {
    console.log([key, value]) // ["k", 123] ["o", 456]
  }
}

{
  // 扩展运算符
  let {a, b, ...c} = {a:'a', b:'b', c:'c', d:'d'}
  
}