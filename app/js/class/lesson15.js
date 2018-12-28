// Generator
{
  // 基本定义
  let tell = function* (){
    yield 'a'
    yield 'b'
    return 'c'
  }

  let k = tell()

  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())

  // {value: "a", done: false}
  // {value: "b", done: false}
  // {value: "c", done: true}
  // {value: undefined, done: true}
}

{
  let obj = {}
  obj[Symbol.iterator] = function* (){
    yield 1
    yield 2
    yield 3
  }
  for (let value of obj) {
    console.log('value', value)
    // value 1
    // value 2
    // value 3
  }
}

{
  let state = function* () {
    while (1) {
      yield 'a'
      yield 'b'
      yield 'c'
    }
  }
  let status = state()
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())

  // {value: "a", done: false}
  // {value: "b", done: false}
  // {value: "c", done: false}
  // {value: "a", done: false}
  // {value: "b", done: false}
}

{
  let draw = function(count){
    // 具体抽奖逻辑
    console.log(`剩余${count}次`)
  }

  let residue = function* (count){
    while (count>0) {
      count --
      yield draw(count)
    }
  }

  let start = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener('click', function(){
    start.next()
  }, false)
}


{
  // 长轮询
  let ajax = function* (){
    yield new Promise(function(resolve, reject){
      setTimeout(() => {
        resolve({code: 0})
      }, 200);
    })
  }
  let pull = function () {
    let generator = ajax()
    let step = generator.next()
    step.value.then(function(d){
      if (d.code!=0) {
        setTimeout(() => {
          console.info('waiting')
          pull()
        }, 1000);   
      } else {
        console.info(d)
      }
    })
  }

  pull()
}
