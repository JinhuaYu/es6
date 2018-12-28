// decorator 修饰器

{
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
  }

  class Test {
    @readonly
    time(){
      return '2018-12-28'
    }
  }

  let test = new Test()

  // test.time = function(){
  //   console.log('reset time')
  // }

  console.log(test.time())

}