export const getNfts = () => {
	return fetch("/api/nfts", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
};

export const getNft = (nftId) => {
	return fetch("/data/nfts.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => res.json())
		.then((nfts) => {
			return nfts.find((nft) => nft.id === parseInt(nftId));
		});
};
