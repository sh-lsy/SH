class Person {
  private name: string = '1';

  // 封装了两个方法, 通过方法来访问name
  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

const p = new Person();
console.log(p.getName(), 111);
p.setName('skye');
// console.log(p.name);
console.log(p.getName(), 222);
export {};
