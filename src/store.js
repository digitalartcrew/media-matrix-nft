import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./reducers/nftSlice";

export default configureStore({
	reducer: nftReducer,
});
