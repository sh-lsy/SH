const message = "Hello World"
const flag = !!message
console.log(flag)


let msg1: string|null = "Hello World"
const msg2 = msg1 ?? "233"  // 如果msg1为null  msg2则为233
console.log(msg2)


export {}