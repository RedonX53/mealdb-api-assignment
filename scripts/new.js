console.log("Before TimeOut");

setInterval(() => {
  console.log("Interval");
}, 5000);

console.log("After TimeOut");

setTimeout(() => {
  console.log("TimeOut");
}, 5000);

function goFunc(x) {
  console.log("Custom", x);
}

setTimeout(goFunc(10), 5000);
