/**
 * @name 缓存方法
 * 
 * 
 **/
import axios from "axios"
import { isCache } from "./../config"
import cacheData from './cacheData';

/**
 *@name 重写GET方法 
 * 
 * 
 * 
 * 
 */


let o = {
    get: function () {
        return new Promise((resolve, rejects) => {
            
            if (isCache) {
                resolve("1")
            } else {
                rejects()
            }
        })
    }
}
// let p = new Proxy(o, {
//     get: function (target, key, receiver) {
//         console.log("使用了o.get")
//         return Reflect.get(target, key, receiver)
//     }
// })
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

export default o