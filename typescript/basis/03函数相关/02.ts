type Point = {
  x:number,
  y:number,
  z?:number
}


function printPoint(point: Point) {
  console.log(point.x);
  console.log(point.y)
  console.log(point.z)
}


printPoint({x: 123, y: 321})
printPoint({x: 123, y: 32, z: 11})

export {}