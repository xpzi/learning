> 题目来源 https://www.jianshu.com/p/f1f39d5b2a2e



### javascript的typeof返回哪些数据类型.
```
string, boolean, number, undefined, function, object, symbol
```
- string:  'str', String('fn str')
- boolean: true, false, Boolean('false')
- number: 123, 0x456, 034, NaN, Infinity, Number(5656), parseInt('中文')
- undefined: undefined, val a 中的a; var o = {}中的 o.a
- function: 所有指向函数的变量名、函数返回的函数、表达式中的函数
- object: null, {}, 所有通过new操作符的返回值
- symbol: Symbol('Symbol')

> 相关问题
- 如何准确检测数据更准确的数据类型


### 列举，强制类型转换和隐式类型转换

类型转换存在于不能类型之间的运算过程中，强制类型转换，其实就是程序员通过api方法进行的数据类型转换

隐式类型主要有： 对非数字类型进行数学运算 、 非字符串类型的字符串运算、不同类型的比较运算

```javascript
// 强制类型转换
parseInt(), parseFloat(), Number()

// 隐式类型转换
false == 'a'
true == 'a'
'123' + 456
'123' * 456
// ...
```

### split(), join()的区别
    - 功能不同：
        split： 将字符串拆分成数组， join: 将数组合并成字符串
    - 原型对象不同：
        split是 String.prototype 上的方法， join是Array.prototype上的方法
    - 相关问题
        - 字符串对象有哪些方法
        - 数组对象有哪些方法

### 数组方法都有哪些
> Array静态方法
- from()
- isArray()
- of()

> 数组原型方法
- 操作数组自身
    - pop()
    - push()
    - unshift()
    - shift()
    - copyWithin()
    - fill()
    - reverse()
    - sort()
    - splice()

- 返回新数组
    - concat() 
    - flat()
    - flatMap()
    - map()
    - slice()

- 遍历方法
    - fliter()
    - flatMap()
    - forEach()
    - map()
    - reduce()
    - reduceRight()

- 可提前结束的遍历方法
    - every()
    - find()
    - findIndex()
    - some()
    
- 查询方法
    - includes()
    - every()
    - find()
    - findIndex()
    - indexOf()
    - lasetIndexOf()

- 其它方法
    - entries()
    - join()
    - keys()
    - values()
    - [Symbol.iterator]()
    - toLocaleString()
    - [x]toSource()
    - toString()
    - [Symbol.species]()




### call() 、apply() 的异同
    - 相同
        - 都是普通函数的原型方法，所有普通函数都具有该方法
        - 都是改变原函数内部的this指向，并运行原函数
    
    - 不同
        - 参数传入方式不同： call使用正常的参数传递模式， apply则使用第二个参数以数组形式进行参数传递
    
    - 与bind的区别
        - bind返回一个不可修改this的新函数，相对原函数已经记录了部分参数的， 他们去世立即执行原函数




10. 闭包是什么，有什么特性，对页面有什么影响

- 我自己对闭包的理解:   

闭包是: 在函数作用域内访问定义函数地方的作用域链上面的变量的一种方法。
形成原因：由于函数作用域需要访问到定义位置的作用域链，当该函数的引用被定义作用域外的位置引用时，也就是该函数不会被销毁时，定义作用域里被使用到的变量也不会被销毁，因此可以在函数作用域内进行访问。

    - 特性：
        1. 闭包变量只能通过定义函数数，函数作用域链内包含该变量的函数才能访问。
        2. 闭包变量只要还处于某个未被销毁的函数作用域链式，就不会被销毁
    
    - 应用：
        1. 形成局部变量，防止全局变量物资
        2. 用在含有异步操作是，纪录某时刻的变量值
     
    - 缺点：由于不能销毁当大量使用时，可能造成内存泄露

> 相关问题
- 什么是内存泄露
- 垃圾回收机制是什么
- 作用域链式什么
- 变量是什么
- 函数式什么


### 函数声明与函数表达式的区别？
在Javscript中，解析器在向执行环境中加载数据时，对函数声明和函数表达式并非是一视同仁的，解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问），至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解析执行。

- 什么是函数声明
```js
// eg1
function func(){}
```

- 什么是函数表达式
```js
//eg
(function(){})
```


### null和undefined的区别？
null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

当声明的变量还未被初始化时，变量的默认值为undefined。 null用来表示尚未存在的对象

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

（1）变量被声明了，但没有赋值时，就等于undefined。

（2）调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。

null表示"没有对象"，即该处不应该有值。典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。



### new操作符具体干了什么呢?
1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2、属性和方法被加入到 this 引用的对象中。
3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。


### js延迟加载的方式有哪些？
defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）、按需异步载入js


### 写一个function，清除字符串前后的空格。
```js
String.prototype.trim= function(){
    return this.replace(/^\s+/,"").replace(/\s+$/,"");
}
```

### 对作用域上下文和this的理解
- 作用域上下文

- this




