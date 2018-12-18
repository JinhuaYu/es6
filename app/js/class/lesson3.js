// 正则扩展

{
  // Es5 写法
  let regex = new RegExp('xyz', 'i'); 
  let regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'), regex2.test('12xyz3'));

  // ES6 写法 
  let regex3 = new RegExp(/xyz/ig, 'i'); // 原有正则对象的修饰符是ig,它会被第二个参数i覆盖
  console.log(regex3.flags);
}

// y修饰符 叫做“粘连”（sticky）修饰符。
{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;

  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));

  console.log(a1.sticky, a2.sticky);
}

