const Koa = require("koa")

const Router = require("koa-router")
const cors = require('koa2-cors')
const static = require("koa-static")
const path = require("path")
const app = new Koa()
const testRouter = new Router()

testRouter.get("/", (ctx) => {
    ctx.body = {
        errno: 0,
        errmsg: "测试成功!"
    }
})
const router = new Router();
router.use(testRouter.routes(), testRouter.allowedMethods())
app

    .use(cors())
    .use(router.routes())
    // .use(static(path.resolve(__dirname,"./")))
    .listen(3002, (err) => {
        console.log(`server is running at prot 3002`)
    })

 





