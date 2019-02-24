/***
 * @name 数据缓存的处理
 * @param
 * 
 * 
 * 
 * 
 * 
 *  */


let cacheData = new Map()


function GetCache(key) {

    return cacheData.get(key) ? cacheData.get(key) : new Error("no search this key, pleace check your input key")
}

function SetCache(key, value) {
    return cacheData.set(key, value)
}

function clearCache() {
    return cacheData.clear()
}

function HasCache(key) {
    let r = cacheData.get(key) ? cacheData.has(key) : new Error("no s earch this key, pleace check your input key")
    return r
}


export default cacheData