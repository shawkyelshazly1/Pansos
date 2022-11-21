import React from "react";

export default function MessageCardLeft() {
	return (
		<div className="flex flex-row gap-4 items-end lg:max-w-[40%] max-w-[70%]">
			<img
				className="w-8 rounded-full"
				src="https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp"
				alt=""
			/>

			<h1 className="px-6 py-4 rounded-3xl bg-bgColor rounded-bl-none">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita
				assumenda, commodi aliquid necessitatibus consequatur asperiores vitae?
				Illum, sed veniam inventore, perferendis enim culpa iure voluptatem
				neque iusto aut perspiciatis.
			</h1>
		</div>
	);
}
