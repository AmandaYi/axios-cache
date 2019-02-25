`axios-caches`是一款基于commonjs的库,用于解决get请求自动缓存的问题,
当设置了 `setConfig(true)`,那么只会执行一次get,第二次会从内存中获取,同样都是自动的,无须写其他代码
当设置了 `setConfig(false)`,那么和axios的get是一样的,每次都会请求实时的数据
## 方法
axiosCache.get(url, {
    ...这里的全部参数和axios保持一致
})
## 安装
`npm install --save axios-caches`
## 说明
setConfig是设置应不应该把数据存起来,
axiosCache继承axios的get方法,
get方法一般使用来获取数据的,因此get方法上面设置缓存是最好的
## 使用方法
```javascript
import axiosCache, { setConfig } from "./index"

document.getElementById("ok").onclick = function () {
     // 设置get方法进行缓存,
    setConfig(true)
    init()
}
document.getElementById("no").onclick = function () {

    // 设置get方法不进行缓存,
    setConfig(false)
    init()
}
function init() {

    axiosCache.get("http://localhost:3002/")
        .then(r => {
            console.log("s")
            console.log(r)
            console.log("e")
        });
}

```
## 计划清单
每一个调用get方法都有单独的配置,
post处理
indexdb存储兼容引入
web storage存储兼容引入
整体优化
## 源码
[https://github.com/AmandaYi/axios-caches](https://github.com/AmandaYi/axios-caches)

