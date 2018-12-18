// 解构赋值

{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest);
}

{
  let a, b;
  ({a, b} = {a:1, b:2});
  console.log(a, b);
}

{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2]; // 默认值
  console.log(a, b, c);
}

// 变量的交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b);
}

{
  function f(){
    return [1, 2]
  }
  let a, b;
  [a, b] = f();
  console.log(a, b);
}

// 忽略某些返回值，只关心想要的
{
  function f() {
    return [1, 2, 3, 4, 5];    
  }
  let a, b, c;
  [a, , , b] = f();
  console.log(a,b);
}

// 只关心第一个，其它赋值在一个数组
{
  function f() {
    return [1, 2, 3, 4, 5];    
  }
  let a, b, c;
  [a, ...b] = f();
  console.log(a,b);
}

// 对象解构赋值
{
  let o = {p:42, q:true};
  let {p,q} = o; // {key:value}
  console.log(p,q);
}

// 默认值处理
{
  let {a =10, b=5} = {a:3}; 
  console.log(a, b);
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]      
  }
  let {title: fistTitle, test:[{title: secTitle}]} = metaData;
  console.log(fistTitle, secTitle);
}