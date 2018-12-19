// 数值扩展

{
  console.log(0b111110111) // 二进制
  console.log(0o767) // 八进制
}

// 判断是否整数
{
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25.0))
  console.log('25.1', Number.isInteger(25.1))
  console.log('25.1', Number.isInteger('25'))
}

{
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  console.log('10', Number.isSafeInteger(10)); 
}

{
  console.log(4.1 ,Math.trunc(4.1)) // 4
  console.log(4.9, Math.trunc(4.9)) // 4
}

{
  console.log('-5', Math.sign(-5)) // -1
  console.log('0', Math.sign(0)) // 0
  console.log('5', Math.sign(5)) // 1
  console.log('50', Math.sign('50')) // 1
  console.log('foo', Math.sign('foo')) // NaN
}

// 立方根
{
  console.log('-1', Math.cbrt(-1)) // -1
  console.log('8', Math.cbrt(8)) // 2
}

{
  
}