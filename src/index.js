module.exports = function reverse (n) {
   let str = n.toString().split("");
  if (str[0] === '-') {
     result = str.slice(1).reverse().join("");
  } else{
    str = str.reverse().join("");
    result = str;
  }
  
  return result;
}
