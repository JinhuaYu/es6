// Promise
/**
 * 什么是异步
 * Promise的作用
 * Promise的基本用法
 */

{
  let ajax = function(callback){
    console.log('执行')
    setTimeout(function () {
      callback && callback.call()
    }, 1000)
  }

  ajax(function(){
    console.log('timeout1')
  })
}

{
  let ajax = function () {
    console.log('执行2')
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 1000)
    })
  }

  ajax().then(function(){ // 第一个function对应resolve, 第二对应reject
    console.log('promise','timeout2')
  })
}

{
  let ajax = function () {
    console.log('执行3')
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve()
      }, 1000)
    })
  }

  ajax()
    .then(function(){
      return new Promise(function(resoleve, reject){
        setTimeout(function(){
          resoleve()
        }, 2000)
      })
    })
    .then(function(){
      console.log('timeout3')
    })
}

{
  let ajax = function (num) {
    console.log('执行4')
    return new Promise(function(resolve, reject){
      if (num > 5) {
        resolve()
      } else {
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log', 6)
  }).catch(function(err){
    console.log('catch', err)
  })

  ajax(3).then(function(){
    console.log('log', 3)    
  }).catch(function(err){
    console.log('catch', err)
  })
}


{
  // 所有图片加载完再添加到页面
  function loadimg(src){
    return new Promise((resoleve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = function () {
        resoleve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }

  function showimg (imgs) {
    imgs.forEach(img => {
      document.body.appendChild(img)
    });
  }

  Promise.all([
    loadimg('http://p99.pstatp.com/large/pgc-image/6945909a759545c890591f837f8c8a5e'),
    loadimg('http://p3.pstatp.com/large/pgc-image/1e23d8326f8e44b6851e60a6236b4e51'),
    loadimg('http://p99.pstatp.com/large/pgc-image/9c3fdd9d63794361883cbc038c9237b0')
  ]).then(showimg)
}

{
  // 有一个图片加载完就添加到页面
  function loadimg(src){
    return new Promise((resoleve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = function () {
        resoleve(img)
      }
      img.onerror = function(err){
        reject(err)
      }
    })
  }

  function showimg(img){
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }

  Promise.race([
    loadimg('http://p99.pstatp.com/large/pgc-image/67c42347831a4beaaf74eee4cecdf719'),
    loadimg('http://p99.pstatp.com/large/pgc-image/a08922b97ed14571b0d1a8aaeac69eaa'),
    loadimg('http://p3.pstatp.com/large/pgc-image/d18e6550898842bfb2e8e3453a34c2e5')
  ]).then(showimg)
}