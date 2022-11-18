import React from "react";

export default function ImageCard() {
	let images = [
		"https://i.postimg.cc/RVmS7nTY/pexels-david-bartus-586687.jpg",
		"https://i.postimg.cc/sD3zQCjd/pexels-pawe-l-1245055.jpg",
		"https://i.postimg.cc/2SJgxsD5/pexels-edoardo-tommasini-2034851.jpg",
		// "https://i.postimg.cc/Kz59CVdB/pexels-craig-adderley-1727684.jpg",
		// "https://i.postimg.cc/fLMC7CJL/pexels-humeyra-demirci-7601665.jpg",
		// "https://i.postimg.cc/zXT7y3zp/pexels-tetyana-kovyrina-14186492.jpg",
		// "https://i.postimg.cc/hjwsddQZ/pexels-maria-loznevaya-13336772.jpg",
	];
	return (
		<div>
			<img
				className="max-h-[600px] w-full object-cover"
				src={images[Math.floor(Math.random() * images.length)]}
				alt=""
			/>
		</div>
	);
}
