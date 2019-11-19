> 题目来源 https://www.jianshu.com/p/f1f39d5b2a2e

1. javascript的typeof返回哪些数据类型.
```
string, boolean, number, undefined, function, object, symbol
```

2. 列举，强制类型转换和隐式类型转换
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

3. split(), join()的区别
    - 功能不同：
        split： 将字符串拆分成数组， join: 将数组合并成字符串
    - 原型对象不同：
        split是 String.prototype 上的方法， join是Array.prototype上的方法

4. 数组方法都有哪些
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
        - toSource()
        - toString()
        - [Symbol.species]()


5. IE和标准下有哪些兼容性的写法
```
// 此类问题较多，主要有事件的获取与使用， ajax的配置与使用， dom查询与操作

```

6. call() 、apply() 、bind()的异同


7. 什么是事件委托？

答: 利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！

    - 什么是事件冒泡, 什么是事件捕获
        - 事件捕获，是指从父盒子开始，向子盒子逐级触发事件
        - 事件冒泡，是指从父盒子开始，向子盒子逐级触发事件
        - 事件捕获先执行，事件冒泡后执行
            - 如果在捕获阶段阻止了捕获，将不会触发冒泡
                - 如果在html上面阻止事件捕获，页面所有的对应事件都不会执行，但是并不会阻止标签的默认行为，如果在html上执行了e.preventDefault() 所有的默认行为也将阻止
            - 最低原生的冒泡事件，与事件捕获执行顺序与添加顺序一致
            - 如果在最小原生的捕获阻止，会执行自己的冒泡函数，但是不会继续向上冒泡
            - 如果在最小原生的冒泡阻止，与捕获阻止行为一致
            - 如果在冒泡过程中阻止， 会触发捕获阶段的函数
        - 无论在哪个阶段事件对象，target值都是一样的
            - 所以事件委托也可以在事件捕获过程中使用
            - 事件委托中使用事件捕获的效率更高, 但是无法在给子元素添加其它事件，因此通常事件委托使用事件冒泡处理



