/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2022-02-17 22:11:40
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2022-02-17 22:13:14
 * @Description:
 */
const Router = require("koa-router");

const router = new Router({ prefix: "/" }); // prefix

const home = require("../controllers/home");

router.get("/", home.getHomeList);

module.exports = router;
