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