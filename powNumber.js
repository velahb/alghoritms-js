function squareDigits(num){
  let result = num
    .toString()
    .split("")
    .map( num => num * num )
    .join("")
   
  return parseInt(result)
}