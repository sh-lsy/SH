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



