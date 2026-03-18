# Treebar


## Set Up

This setup code is intended to be used in conjunction with each of the prompts that follow afterwards.

```javascript
const Node = function(value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function(value) {
  const newChild = new Node(value)
  this.children.push(newChild);
  return newChild;
};


const one = new Node(6);

const one_one = one.addChild(8);
const one_two = one.addChild(5);
const one_three = one.addChild(7);

const one_one_one = one_one.addChild(7);
const one_three_one = one_three.addChild(2);
const one_three_two = one_three.addChild(6);
const one_three_three = one_three.addChild(0);

const one_three_three_one = one_three_three.addChild(8);
```

![diagram of the above tree's structure](https://snag.gy/zFWAOn.jpg)


## Prompts

### includes

Implement `includes()`, a function that determines whether a `node` (or its children or _any_ of its descendants) passes a test function, returning `true` or `false` as appropriate.

```javascript
console.log(includes(one, function(value) {
  return value === 7;
})); // true

console.log(includes(one, function(value) {
  return value < 6;
})); // true

console.log(includes(one, function(value) {
  return Array.isArray(value);
})); // false
```

### count

Implement `count()`, a function that returns an integer that represents how many nodes of a tree pass the test implemented by the provided function.

```javascript
console.log(count(one, function(value) {
  return value === 7;
})); // 2

console.log(count(one, function(value) {
  return value === 0;
})); // 1

console.log(count(one, function(value) {
  return 10 < value;
})); // 0

console.log(count(one, function(value) {
  return value % 2 === 0;
})); // 6
```

### filter

Implement `filter()`, a function that creates a new array with all elements that pass the test implemented by the provided function.

```javascript
console.log(filter(one, function(value) {
  return value === 7;
})); // [one_three, one_one_one]

console.log(filter(one, function(value) {
  return value === 0;
})); // [one_three_three]

console.log(filter(one, function(value) {
  return 10 < value;
})); // []

console.log(filter(one, function(value) {
  return value % 2 === 0;
})); // [one, one_one, one_three_one, one_three_two, one_three_three, one_three_three_one]
```

### values

Implement `values()`, a function that creates a new array with the values of all of the nodes.

```javascript
console.log(values(one).sort()); // [0, 2, 5, 6, 6, 7, 7, 8, 8]
```

### deepCopy

Implement `deepCopy()`, a function that takes in a `node` and outputs a "copycat" node, where the output node is a _different_ node, but has the exact same value. The output node's children (and ALL of the output node's descendants) should also be copies of the input node's children (and its descendants).

```javascript
var onePrime = deepCopy(one);

console.log(onePrime.value === one.value); // true
console.log(onePrime === one); // false
console.log(onePrime.constructor === Node); // false

console.log(onePrime.children[0].value === one.children[0].value); // true
console.log(onePrime.children[0] === one.children[0]); // false
console.log(onePrime.children[0].constructor === Node); // false

console.log(onePrime.children[2].children[2].value === one.children[2].children[2].value); // true
console.log(onePrime.children[2].children[2] === one.children[2].children[2]); // false
console.log(onePrime.children[2].children[2].constructor === Node); // true
```
