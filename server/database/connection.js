const mongoose = require("mongoose"),
	consola = require("consola");
const { seedDB } = require("../utils/seedDB");

module.exports = async () => {
	try {
		mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		consola.success("💾 Pansos DB connected!");
		await seedDB();
	} catch (error) {
		consola.error("🪲 Pansos DB failed to connect!");
		consola.error("🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲");
		consola.error(error);
	}
};
