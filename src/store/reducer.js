import { combineReducers } from "redux";
import initialStore from "./initialStore";
import {
  LOADING_CARDS,
  TOGGLE_IS_LOADING,
  GET_IMAGE,
  GET_RACE,
  GET_INFO_FORM,
  ADD_RACE,
  CHANGE_NAME,
  DELETE_ITEM
} from "./actions";

const cardsReducer = (cardsFromStore = initialStore.items, action) => {
  switch (action.type) {
    case LOADING_CARDS:
      return action.payload;
    case GET_INFO_FORM:
      return [...cardsFromStore, action.payload];
    case CHANGE_NAME:
      return [...cardsFromStore.filter(card => card.id !== action.payload.id), action.payload];
    case DELETE_ITEM:
      return [...cardsFromStore.filter(card => card.id !== action.payload)];
    default:
      return cardsFromStore;
  }
};
const statusLoadingReducer = (statusLoadingFromStore = initialStore.isLoading, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOADING:
      return action.payload;

    default:
      return statusLoadingFromStore;
  }
};

const getImageReducer = (ImageFromStore = initialStore.images, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return action.payload;
    default:
      return ImageFromStore;
  }
};
const getRaceReducer = (getRaceStore = initialStore.race, action) => {
  switch (action.type) {
    case GET_RACE:
      return action.payload;
    case ADD_RACE:
      return ((!getRaceStore.find(race => race === action.payload)) ?
        [...getRaceStore, action.payload] : getRaceStore);
    default:
      return getRaceStore;
  }
};

export default combineReducers({
  items: cardsReducer,
  isLoading: statusLoadingReducer,
  images: getImageReducer,
  race: getRaceReducer
});
