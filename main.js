import axiosCache, { setConfig } from "./index"

document.getElementById("ok").onclick = function () {
    setConfig(true)
    init()
}
document.getElementById("no").onclick = function () {
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
