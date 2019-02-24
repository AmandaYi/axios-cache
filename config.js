/**
 * @name 配置信息
 *
 */

let r = true
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
-
export default r;