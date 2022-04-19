class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  // 访问器setter/getter
  // setter
  set name(newName) {
    this._name = newName;
  }
  // getter
  get name() {
    return this._name;
  }
}

const p = new Person('skye');
p.name = 'sh';
console.log(p.name);

export {};
