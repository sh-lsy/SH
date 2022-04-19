class Person {
  protected name: string = 'skye';
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const stu = new Student();
// console.log(stu.name);
console.log(stu.getName());

export {};
