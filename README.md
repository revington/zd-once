[![Build Status](https://travis-ci.org/revington/zd-once.svg?branch=master)](https://travis-ci.org/revington/zd-once)
[![Known Vulnerabilities](https://snyk.io/test/github/revington/zd-once/badge.svg?targetFile=package.json)](https://snyk.io/test/github/revington/zd-once?targetFile=package.json)
[![Coverage Status](https://coveralls.io/repos/github/revington/zd-once/badge.svg?branch=master)](https://coveralls.io/github/revington/zd-once?branch=master)
# zd-once
Ensure a function is only called once. Zero deps and simple codebase.

## Usage 

```
const {
    once
} = require('zd-once');

function sum(a, b) {
    return a + b;
}
let sumOnce = once(sum);
console.log(sumOnce(1, 2)); // prints 3
console.log(sumOnce(1, 2)); // prints nothing
```

## API
* `once(fn)` ensures a function is called only once.
* `onceStrict(fn)` similar to `once(fn)`. It will throw an error if called more than once.
