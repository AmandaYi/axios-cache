import axiosCache from "./index"

 




function init() { 
    axiosCache.get("http://172.168.1.163:8085/admin/supplier/list")
        .then(r => {
            console.log(r)
        });
}
init()