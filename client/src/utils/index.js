import api from "./api";
const toBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () =>
			resolve(
				reader.result
					.toString()
					.substr(reader.result.toString().indexOf(",") + 1)
			);
		reader.onerror = (error) => reject(error);
	});
};

export const getUploadaedMediaUrls = async (mediaFiles) => {
	return Promise.all(mediaFiles.map(uploadMedia));
};

const uploadMedia = async (file) => {
	let base64File = await toBase64(file.file);
	let body = new FormData();
	body.set("key", "b73739646c48f600cda9ad71aaeb17dd");
	body.append("image", base64File);
	return api.post(``, body).then((res) => {
		return res.data.data.display_url;
	});
};
