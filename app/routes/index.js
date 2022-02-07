const fs = require("fs");

// 自动化读取该目录下所有路由文件并应用
module.exports = app => {
	fs.readdirSync(__dirname).forEach(file => {
		if (file === "index.js") {
			return;
		}

		const route = require(`./${file}`);
		app.use(route.routes()).use(route.allowedMethods());
	});
};
