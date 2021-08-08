//  需要安装node  （node  promise.js)

const fs = require('fs')

//  node 方法调用
fs.readFile('./data/data1.md', (err, data) => {
  if (err) throw err
  console.log('test',data.toString())
})

//  使用Promise 封装

const p = new Promise((resolve, reject) => {
  fs.readFile('./data/data1.md', (err, data) => {
    if (err) reject(err)
    resolve(data)
  })
})

p.then(res => {
  console.log('使用Promise',res.toString())
}).catch((err) => {
  console.log('使用Promise',err)
})

//  promise链式调用

const p1 = new Promise((resolve, reject) => {
  fs.readFile('./data/data1.md', (err, data) => {
    if (err) reject(err)
    resolve(data)
  })
})

p1.then(res => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/data2.md', (err, data) => {
      if (err) reject(err)
      resolve([res, data])
    })
  })
}).then(res => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/data3.md', (err, data) => {
      if (err) reject(err)
      res.push(data)
      resolve(res)
    })
  })
}).then(res => {
  console.log('promise链式调用','\r\n', res.join('\r\n'))
})