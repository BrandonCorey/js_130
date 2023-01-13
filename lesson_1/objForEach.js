function objForEach(obj, callback) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) callback(prop, obj[prop])
  }
}

let obj = { foo: 'bar', whiskey: 'beer' };

objForEach(obj,  (prop, val) => {
  console.log(`The value of ${prop} is ${val}`)
});