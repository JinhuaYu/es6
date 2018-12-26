// 类与对象

{
  // 基本定义和生成实例
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  let v_parent = new Parent('v')
  console.log('构造函数和实例', v_parent)
}