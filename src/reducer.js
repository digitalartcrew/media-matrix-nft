import { combineReducers } from 'redux'
import nftsReducer from './components/forms/slices/nfts/nftSlice'


const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    nfts: nftsReducer,
  });
  

  export default rootReducer;
