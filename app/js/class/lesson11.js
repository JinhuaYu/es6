// Proxy 和 Reflect

/**
 * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
 * Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
 * 
 * */

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value){
      if(key === 'name'){
        return target[key] = value
      } else {
        return target[key]
      }
    },
    // 拦截key in object操作
    has(target, key){
      if (key === 'name') {
        return target[key]
      } else {
        return false
      }
    },
    // 拦截delete
    deleteProperty(target, key){
      if (key.indexOf('_')>-1) {
        delete target[key];
        return true
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item => item != 'time')
    }
  })

  console.log('get',monitor.time)

  monitor.time = '2018'
  monitor.name = 'mukoo'
  console.log('set', monitor.time, monitor)

  console.log('has', 'name' in monitor, 'time' in monitor)

  // delete monitor.time
  // console.log('delete', monitor)
  // delete monitor._r
  // console.log('delete', monitor)
  console.log('ownKeys', Object.keys(monitor))
}


// Reflect
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  console.log('Reflect get', Reflect.get(obj, 'time'))
  Reflect.set(obj, 'name', 'mukoo')
  console.log(obj)
  console.log('has', Reflect.has(obj, 'name'))
}

// 例子
{
  function validator(target, validator){
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key]
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val){
      return typeof val === 'string'
    },
    age(val){
      return typeof val === 'number' && val > 18
    }
  }

  class Person{
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidators)
    }
  }

  const person = new Person('lili', 30)
  console.info(person)
  person.name = 'sdsdsdsd'
  console.info(person)
}