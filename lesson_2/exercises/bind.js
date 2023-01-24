function myBind(func, context, ...args) { // hard bound args (partially applied)
  return function(...additionalArgs) { // args to pass to returned function (rest of args)
    let allArgs = additionalArgs.concat(args);
    return func.apply(context, allArgs)
  }
}


func = myBind((...args) => args.forEach(el => console.log(el)), null, 1, 2);

console.log(func());
console.log(func(5, 5));