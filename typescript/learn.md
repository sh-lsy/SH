# typescript

## 运行环境

### tsc

- 通过tsc编译TypeScript到JavaScript代码
- 在浏览器或者Node环境下运行JavaScript代码

### ts-node

- 安装ts-node  ```npm install ts-node -g```
- ts-node需要依赖 tslib 和 @types/node 两个包  ```npm install tslib @types/node -g```
- 直接通过 ts-node 来运行TypeScript的代码  ```ts-node 01_ts.ts```

### webpack

- ```npm init```
- ``` npm install webpack webpack-cli -D```
- 安装 typescript ts-loader
  - ```npm install ts-loader typescript -D```
- 配置tsconfig.json
  - ```tsc --init```
- 安装本地服务
  - ```npm install webpack-dev-server -D```
- html模板配置
  - ```npm install html-webpack-plugin -D```

## ts基础

### 变量的声明

- 声明了类型后TypeScript就会进行类型检测，声明的类型可以称之为类型注解```let msg:string = "hello world"```
- 这里的string是小写的，和String是有区别的
  - string是TypeScript中定义的字符串类型，String是ECMAScript中定义的一个类

### 声明变量的关键字

TypeScript定义变量（标识符）和ES6之后一致，可以使用**var**、**let**、**const**来定义

注意： 不建议使用var关键字

### 类型推导

默认情况下进行赋值时, 会将赋值的值的类型, 作为前面标识符的类型。这个过程称之为类型推导/推断

### 数据类型(js)

#### number

- TypeScript和JavaScript一样，不区分整数类型（int）和浮点型 （double），统一为number类型

- ES6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十 六进制的表示

  - ```typescript
    let num1: number = 100 
    let num2: number = 0b100  // 二进制
    let num3: number = 0o100  // 八进制
    let num4: number = 0x100  // 16进制
    ```

#### boolean类型

boolean类型只有两个取值：true和false

#### string

- string类型是字符串类型，可以使用单引号或者双引号表示
- 支持ES6的模板字符串来拼接变量和字符串

#### Array

```typescript
const arr1: Array<string> = []
const arr2: string[] = []  // 建议使用这一种
```

#### object

注意： object对象类型可以用于描述一个对象  但是不能从定义的变量获取数据，也不能设置数据

#### symbol

在对象中添加相同的属性名称

```typescript
const title1 = Symbol("title")
const title2 = Symbol('title')

const info = {
  [title1]: "程序员",
  [title2]: "老师"
}

export {}
```

#### null和undefined

```typescript
let n1: null = null  // 不加null 默认会认为是any类型
let n2: undefined = undefined
```

### 数据类型(ts)

#### any

- 可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法(类似js)

#### unknown

- unknown类型只能赋值给any和unknown类型

#### void

void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型

#### never

- never 表示永远不会发生值的类型，比如一个函数是一个死循环或者抛出一个异常

#### tuple(y元组)

应用

```typescript
function useState<T>(state: T) {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)
const [title, setTitle] = useState("aaa")
```

### 函数的参数类型

- 在开发中,通常情况下可以不写返回值的类型(自动推导)

#### 匿名函数的参数

- 当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时, 该函数的参数会自动指定类型

#### 函数中对象类型

限定一个函数接受的参数是一个对象，使用对象类型

##### 对象类型

- 对象类型可选类型

  - 在属性的后面添加一个?：

- 联合类型  | 

  - ```typescript
    function printId(id: number | string) {
      console.log(id)
    }
    printId(233)
    printId("111")
    ```

### 类型别名(type)

我们可以给对象类型起一个别名,使用关键字type

```typescript
type Point = {
  x:number,
  y:number,
  z?:number
}
//使用
const point:Point = {
  x: 111,
  y: 222
}
```

### 类型断言as

有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言

```typescript
const el = document.getElementById("why") as HTMLImageElement
el.src = "url地址"
```

### 非空类型断言!

非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在**编译阶段**对它的检测 

### 可选链的使用?.

- 是ES11（ES2020）中增加的特性
  - 可选链使用可选链操作符 ?.
  - 它的作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行

### ??和!!的作用

- !!操作符
  - 将一个其他类型转换成boolean类型
  - 类似于Boolean(变量)的方式
- ??操作符
  - ES11增加的新特性
  - 空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数， 否则返回左侧操作数

### 字面量类型

```typescript
type Dir = "left" | "right" | "top" | "bottom"
let movedir: Dir = "left"
movedir = "top"
```

### 类型缩小

什么是类型缩小呢？

- 类型缩小的英文是 Type Narrowing
- 我们可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径
- 在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为缩小
- 而我们编写的 typeof padding === "number 可以称之为 类型保护（type guards）

常见的类型保护有如下几种

- typeof
- 平等缩小（比如===、!==)
- instanceof
- in

### 剩余参数

剩余参数语法允许我们将一个不定数量的参数放到一个数组中

```typescript
function sum(initalNum: number, ...nums: number[]) {
  let total = initalNum
  for (const num of nums) {
    total += num
  }
  return total
}

console.log(sum(20, 30))
console.log(sum(20, 30, 40))
```



### 函数重载

- 通过联合类型实现功能
  - 进行很多的逻辑判断(类型缩小)
  - 返回值的类型依然是不能确定
- 函数重载
  - 数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
  - 在函数的重载中, 实现函数是不能直接被调用的

### 类 class

- 使用class关键字来定义一个类
- 我们可以声明一些类的属性：在类的内部声明类的属性以及对应的类型
  - 如果类型没有声明，那么它们默认是any的
  - 我们也可以给属性设置初始化值
- 类可以有自己的构造函数constructor，当我们通过new关键字创建一个 实例时，构造函数会被调用
  - 构造函数不需要返回任何值，默认返回当前创建出来的实例
- 类中可以有自己的函数，定义的函数称之为方法

#### 类的继承

- 使用extends关键字来实现继承，子类中使用super来访问父类

#### 类的成员修饰符

- public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的
- private 修饰的是仅在同一类中可见、私有的属性或方法
- protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法
- public是默认的修饰符，也是可以直接访问的
