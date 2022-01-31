import { createSlice } from "@reduxjs/toolkit";

const nftSlice = createSlice({
	name: "nfts",
	initialState: {
		nfts: [],
	},
	reducers: {
		setNfts: (state, action) => {
			state.nfts = [...action.payload];
		},
		createNft: (state, action) => {
			state.nfts = [...state.nfts, action.payload];
		},
		updateNft: (state, action) => {
			state.nfts = [...state.nfts, ...action.payload];
		},
		removeNft: (state, action) => {
			state.nfts = [
				...state.nfts.filter((nft) => nft.id !== action.payload.id),
			];
		},
	},
});

export const { setNfts, createNft, updateNft, removeNft } =
	nftSlice.actions;

export default nftSlice.reducer;
