function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loops`);
  }
  return arr;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    --n;
  }
  return 'done';
}

function doWhileLoop(arr) {
  do {
    arr.shift();
  } while (arr.length > 0 && maybeTrue());

  return arr;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
