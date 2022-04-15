class Person {
  name: string = '';
  age: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log('eating');
  }
}

class Student extends Person {
  sno: number = 0;
  constructor(name: string, age: number, sno: number) {
    // super调用父类的构造器
    super(name, age);
    this.sno = sno;
  }
  studying() {
    console.log('studying');
  }
  eating() {
    console.log('eating2121');
    super.eating();
  }
}

class Teacher extends Person {
  title: string = '';

  teaching() {
    console.log('teaching');
  }
}

const stu = new Student('skye', 18, 212121);

console.log(stu.name);
console.log(stu.age);
stu.eating();
