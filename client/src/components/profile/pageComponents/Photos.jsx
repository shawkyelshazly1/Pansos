import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { LOAD_USER_PHOTOS } from "../../../graphql/media/query";
import LoadingSpinner from "../../utils/LoadingSpinner";

export default function Photos() {
	const { userId } = useParams();

	const { data, loading } = useQuery(LOAD_USER_PHOTOS, {
		variables: { userId },
	});

	if (loading) return <LoadingSpinner />;
	return (
		<div className=" w-[90%] flex flex-row flex-wrap gap-1  bg-white py-6 px-4 itms justify-center  rounded-xl shadow-postCardShadow">
			{data?.getUserPhotos ? (
				data.getUserPhotos.map((photo) => (
					<img src={photo.url} className="w-60 rounded-lg object-cover" />
				))
			) : (
				<h1>Nothing to show here</h1>
			)}
		</div>
	);
}
