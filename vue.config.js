const PORT = process.env.VUE_APP_PORT
module.exports = {
	publicPath: "/taxi_effective/",
	devServer: {
		port: PORT ? PORT : 1235,
	},
};
