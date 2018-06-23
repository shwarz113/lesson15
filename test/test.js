// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}

let assert = require('chai').assert;

describe("sum", function() {
	it("Проверяем сумму на тру", function() {
		assert.equal(sum(2,2), true);
	});
});

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr1 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr1[1][1];

describe("checkArr", function() {
	it("Проверяем переменную на соответствие", function() {
		assert.equal(num, 5);
	});
});

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
let arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	let newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

describe("checkFuncSqrt1", function() {
	it("Проверяем функцию на возвращаемый тип данных", function() {
		assert.typeOf(each(arr, myFunc), "array"); 
	});
});

describe("checkFuncSqrt2", function() {
	it("Проверяем функцию на соответствие ожидаемому результату", function() {
		let newArr = each(arr, myFunc);
		assert.equal(each(arr, myFunc), newArr);
	});
});

describe("checkFuncSqrt3", function() {
	it("Проверяем функцию на соответствие длины", function() {
		assert.equal(each(arr, myFunc).length, 5);
	});
});