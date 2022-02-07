const Koa = require("koa");

const cors = require("koa-cors");

const app = new Koa();

const error = require("koa-json-error");

const parameter = require("koa-parameter");

const routing = require("./routes");

/**
 * base response data structor
 * {
 *    code: 200 or other
 *    message: success or other
 *    data: any or {} or undefined
 * }
 */

// 统一错误处理
app.use(
	error({
		format: function (err) {
			return {
				code: err.status,
				message: err.message || "OK",
			};
		},
	})
);

app.use(cors());

parameter(app)

routing(app);

app.listen(3000, () => {
	console.log("app launch in port 3000");
});
