/**
 * @name 缓存方法
 * 
 * 
 **/
import axios from "axios"
import { isCache } from "./../config"
import { md5Key, GetCache, SetCache } from './cacheData';

/**
 *@name 重写GET方法 
 * 
 */

let o = {
    get: function (...rest) {
        if (isCache == false) {
            return new Promise((resolve, reject) => {
                axios.get(...rest).then(value => {
                    resolve(value)
                })
                    .catch(err => {
                        reject(err)
                    })
            })
        } else if (isCache == true) {

            return new Promise((resolve, reject) => {
                // 找缓存
                // 如果能找到就返回
                let key = md5Key("get" + rest)
                let obj = GetCache(key)
                console.log(obj)
                if (obj.status == true) {
                    resolve(obj.data)
                } else {
                    // 如果不能找到
                    // 那么请求数据
                    // 请求完毕之后保存数据
                    axios.get(...rest).then(value => {
                        console.log("正常请求!")
                        SetCache(md5Key("get" + rest), value)
                        resolve(value)
                    })
                        .catch(err => {
                            reject(err)
                        })
                }

            })
        }
    }
}
let p = new Proxy(o, {
    get: function (target, key, receiver) {
        return Reflect.get(target, key, receiver)
    }
})
function isInter(is) {
    if (arguments.length == 1) {
        // 处理值
        if (is == true) {
            r = true
        } else if (is == false) {
            r = false
        } else {
            new Error("function isInter param's argument must be enum,pleace input true or false, type of boolean")
        }
    } else if (arguments.length == 0) {
        return false
    } else {
        new Error(`function isInter must be one params,and now your input${arguments.length},pleace check your input`)
    }
}

export default p 