/***
 * @name 数据缓存的处理
 * @param
 * 
 * 
 * 
 * 
 * 
 *  */

import MD5 from "md5"

let cacheData = new Map()


function GetCache(key) {
    if (cacheData.get(key)) {

        return {
            data:cacheData.get(key),
            status:true
        }
    } else {
        return {
            data:null,
            status:false
        }
    }

}
function md5Key(key) {
    return MD5(key)
}
function SetCache(key, value) {
    return cacheData.set(key, value)
}

// function clearCache() {
//     return cacheData.clear()
// }

// function HasCache(key) {
//     let r = cacheData.get(key) ? cacheData.has(key) : new Error("no s earch this key, pleace check your input key")
//     return r
// }


export { md5Key, GetCache ,SetCache } 