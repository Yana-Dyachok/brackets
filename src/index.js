module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false
  let stack = []
  let brConfigObj = Object.fromEntries(bracketsConfig)
 for (let i = 0; i < str.length; i++) {
  if(brConfigObj[stack[stack.length - 1]]=== str[i]) stack.pop() 
  else(stack.push(str[i]))
 }
 return  stack.length===0;
}
