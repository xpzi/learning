### ajax请求的时候get 和post方式的区别

- 区别
    - get是使用更便捷的请求方法，post的使用相对复杂一点。
    - get可携带数据量不如post
    - get主要关心url中的信息， post主要关心请求体（body）中的数据。
    - post请求之前可能会发送服务器校验请求，以确保后续请求正常执行。
    - 本质区别，用不同的名字标识此次请求的作用，预计可能携带的数据量，以及服务器的运算量

- 相同
    - 他们都是http请求，可使用http请求的所有功能

- 相关问题
    - 跨域方法
    - http是什么
    - https是什么
    - cookie
    - 怎么封装请求工具
    - http请求工具
        - fetch
        - xhr
        - jquery.ajax
        - axios
        - node中的请求方法

### [x]ajax请求时，如何解析json数据

提示：1. 字符串的处理方法， 2. 数据类型说明

### 解释jsonp的原理，以及为什么不是真正的ajax

- jsonp的原理：
    - 利用 script, link, img, video, audio等标签发起httpget请求获取数据的原理。
    - jsonp则是利用 script标签获得到内容后，里面以js代码形式运行获取到的内容。因此实现获取到数据后，立即执行。所以不是真正的ajax

- ajax是什么
    - ajax全称Ajax的全称Asynchronous JavaScript + XML(异步JavaScript和XML)。
    - 使用浏览器提供的XMLHttpRequest对象，可以发出HTTP请求与接收HTTP响应。实现了在页面不刷新的情况下和服务器进行数据交互。

> 相关问题
- 怎么发送一个ajax请求
- fetch