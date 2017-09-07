# YC-WebViewBridge
为 Native 和 H5 项目提供双向订阅发布功能

## 注意
此项目无法单独在浏览器下运行，需要运行在 native 下的 webview 中
编码风格使用 [standard](https://standardjs.com/readme-zhcn.html)，请对应 IDE 安装插件

## 使用
```
npm i yc-webviewbridge
import YCWebViewBridge from 'yc-webviewbridge'
```
或者
```
git clone https://github.com/guanghetv/YC-WebViewBridge
npm install
npm run build

<script type="text/javascript" src="dist/YCWebviewBridge.js">
```

## 测试
```
$ npm run test

YCEvent
    #nameSpance
      ✓ create and get
    #on
      ✓ can register event
    #off
      ✓ can remove register
    #one
      ✓ can register only
    #emit
      ✓ dispatch register callback
    #once
      ✓ dispatch register and remove register callback

  validation
    #string type
      ✓ string type validation be ok
    #array type
      ✓ array type validation be ok


  8 passing (86ms)
```

## 使用
1. 使用 new 初始化一个 bridge 对象，可以传递传递一个字符串参数做命名空间，不同命名空间的事件不共享。
```
var bridge = new YCWebViewBridge('namespance')

let cb = (data, responseCallback) => {
  console.log(data)
  responseCallback({ok: true, data: {message: 'hello'}})
}

bridge.on('hello', cb)
bridge.one('hello', cb)
bridge.once('hello', cb)
bridge.off('hello', cb)
bridge.off('hello')
bridge.callNative('native', { msg: 'hello' }, function (data) {
  console.log(data)
})
```

# YCWebViewBridge API

### constructor([namespance: string])
在一个命名空间下创建一个 bridge 对象，如果不传递 namespance 参数，则会使用默认的 `_global_` 作为命名空间
```
var bridge = new YCWebViewBridge('namespance')
```

### on(eventName, callback: function(data: jsonString, responseCallback: function) )
订阅一个 native 事件，并提供回调功能。
- eventName: 事件名称
- callback: 回调函数
  - data: native 发布事件时携带的参数
  - responseCallback: 签名为 responseCallback(data: string), 用来通知 native 执行结果

### one(eventName, callback: function(data: jsonString, responseCallback: function) )
和 `on` 类似，但是会先删除掉所有同类事件，然后添加订阅

### once(eventName, callback: function(data: jsonString, responseCallback: function) )
和 `on` 类似，但是会订阅一个一次性事件，执行一次后，就会被删除

### off(eventName: string [, callback: function])
取消订阅一个事件
- eventName: 事件名称
- callback: 取消订阅的回调，如果不传递这个参数，则会取消掉所有的同类事件

### callNative(eventName, data, callback: function(data))
向 native 发布一个事件
- eventName: 事件名称
- data: 发布事件所携带的参数, 没有参数时可以不传递
- callback: 事件回调, data 为 native 回调的数据结果



