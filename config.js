/**
 * @name 配置信息
 *
 */
let isCache = true
function setConfig(boolean) {
    if ((typeof boolean) == "boolean") {
        isCache = boolean
    } else {
        throw new Error("function setConfig's argument must be type boolean")
    }
}

export {
    setConfig,
    isCache
};