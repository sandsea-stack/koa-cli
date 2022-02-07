const { getHomeListModel } = require("../models/homeModel");
const { SuccessResponse } = require("../utils/Response");

class Home {
	async getHomeList(ctx) {
		ctx.verifyParams({
			name: string,
		});
		// ctx.request.query.name
		const userName = ctx.request.body.name; //
		const data = await getHomeListModel(userName);
		ctx.body = new SuccessResponse(data);
	}
}

module.exports = new Home();
