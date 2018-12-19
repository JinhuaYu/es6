// 函数扩展
/**
 * 新增特性
 * 参数默认值
 * rest参数
 * 扩展运算符
 * 箭头函数
 * this绑定
 * 尾调用
 */

 {
   function test (x, y = 'world') {
     console.log('默认值', x, y)
   }

   test('hello') // hello world
   test('hello', 'fill') // hello fill
 }

 {
   let x = 'test'
   function test2(x, y = x) {
     console.log('作用域', x,y)
   }
   test2('kill')
 }

 {
   function test3(...arg){
     for(let v of arg){
       console.log('rest', v)
     }
   }
   test3(1,2,3,4,'a')
 }

 {
   console.log(...[1,2,4])
   console.log('a',...[1,2,4])
 }

 {
   let arrow = v => v*2
   let arrow2 = () => 5
   console.log(arrow(3), arrow2())
 }

 // 尾调用  嵌套函数时用
 // 函数最后一步是不是函数  
 {
    function tail(x) {
      console.log('tail', x)
    }

    function fx(x) {
      return tail(x)
    }
    fx(123)
 }
