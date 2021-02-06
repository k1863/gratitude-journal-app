import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userReducer";
import phraseReducer from "./phrase/phraseReducer";
import phraseCollectionReducer from "./phrasesCollection/phraseCollectionReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["phrase", "user", "phrasesCollection"],
};

const rootReducer = combineReducers({
  user: userReducer,
  phrase: phraseReducer,
  phrasesCollection: phraseCollectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
