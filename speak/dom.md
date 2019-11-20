### 什么是事件委托？

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
    
### 事件流模型都有什么
事件捕捉，目标阶段，事件冒泡

### 手写阻止事件冒泡
```
event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
```

### 手写阻止默认事件
```
event.preventDefault ? event.preventDefault() : (event.returnValue = fasle);
```

###  手写 添加 删除 替换 插入到某个接点的方法
```javascript
// 创建新节点
document.createElement()
document.creataTextNode()

// 添加 删除 替换 插入
parentNode.append(...nodes);
parentNode.prepend(...nodes);
child = parentNode.appendChild(child) 
oldChild = parentNode.removeChild(child);
replacedNode = parentNode.replaceChild(newChild, oldChild);
insertedNode = parentNode.insertBefore(newNode, referenceNode);

// 查询
el.getElementsByTagName()
el.getElementsByName()
el.getElementById()
el.getElementsByClassName()
el.querySelector()
el.querySelectorAll()


// 更多api 参考 https://developer.mozilla.org/zh-CN/docs/Web/API/Element
```




### document load 和document ready的区别
- document.onload 是在结构和样式,外部js以及图片加载完才执行js
- document.ready是dom树创建完成就执行的方法
    在执行这句判断之前的

> document.ready实现方法

1. document.readyState == 'complete' 表示dom树创建完成
2. document.addEventListener( "DOMContentLoaded", function completed(){ /* dom树创建完成*/});


### 如何给一个按钮添加事件
```js
but.onclick = function(){}
but.addEventListener('click', function(){})
<button onclick="xxx()">按钮</button>
```


### 获取非行间样式的方法
```js
return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el, false)[attr]
```