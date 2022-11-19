const mongoose = require("mongoose"),
	consola = require("consola");

module.exports = () => {
	try {
		mongoose.connect(process.env.MONGODB_URI_DEV, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		consola.success("💾 Pansos DB connected!");
	} catch (error) {
		consola.error("🪲 Pansos DB failed to connect!");
		consola.error("🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲");
		consola.error(error);
	}
};
