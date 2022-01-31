import EntityRow from "../entity/Row";
import EntityCard from "../entity/Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNfts } from "../../api/nft-api";
import { setNfts } from "../../reducers/nftSlice";

const NftsPages = () => {
	const nfts = useSelector((state) => state.nfts);
	const dispatch = useDispatch();

	let positionCount = 0;

	const columnCount = 4;

	const rowCount = Math.ceil(nfts.length / columnCount);

	useEffect(() => {
		getNfts()
			.then((response) => response.json())
			.then((nfts) => dispatch(setNfts(nfts)));
	}, [dispatch]);

	return (
		<div className="nft-page-container">
			{Array.from(Array(rowCount)).map((x, index) => {
				const newCollection = [
					...nfts.slice(positionCount, positionCount + columnCount),
				];

				positionCount = positionCount + columnCount;

				return (
					<EntityRow
						key={index}
						columnCount={columnCount}
						collection={newCollection}
					>
						<>
							{[...newCollection].map((entity, index) => (
								<EntityCard
									columnCount={columnCount}
									entity={entity}
									key={index}
									linkUrl={`/nft/${entity.id}`}
								/>
							))}
						</>
					</EntityRow>
				);
			})}
		</div>
	);
};

export default NftsPages;
