import axios from "axios";

export default axios.create({
	baseURL: "https://api.imgbb.com/1/upload",
	headers: {},
});
