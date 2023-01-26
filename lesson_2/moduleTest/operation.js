module.exports.product = array => array.reduce((a, b) => {
  return a * b;
});
// Could also just do exports.product = insted of module.exports.product =