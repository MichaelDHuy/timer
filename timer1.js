const args = process.argv.slice(2);
const argsNew = args.sort(function(a, b) { 
  return a - b;
});
for (let i = 0; i < argsNew.length; i++) {
  let delay = 0;
  if (argsNew[i] > 0 && !isNaN(argsNew[i])) {
setTimeout (() => {
  process.stdout.write(`${argsNew[i]} seconds!!! \x07 \n`);
}, argsNew[i] * 1000);
  }
}
