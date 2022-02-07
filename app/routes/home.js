const Router =require('koa-router')

const router =new Router({prefix:'/'}) // prefix

const home =require('../controllers/home')

router.get("/",home.getHomeList)

