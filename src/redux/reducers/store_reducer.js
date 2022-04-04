import {
  STORE_NAME,
  STORE_ADDRESS,
  STORE_MENU,
  STORE_SERVICE,
  STORE_PRICE,
  STORE_MESSAGE,
  STORE_IMAGE,
  MAP_IMAGE,
} from '../actions/types';

const initialize = {
  store_name: null,
  store_address: null,
  store_menu: null,
  store_service: null,
  store_price: null,
  store_message: null,
  store_image: null,
  map_image: null,
};

export default function (state = initialize, action) {
  switch (action.type) {
    case STORE_NAME:
      return {
        ...state,
        store_name: action.payload,
      };
    case STORE_ADDRESS:
      return {
        ...state,
        store_address: action.payload,
      };
    case STORE_MENU:
      return {
        ...state,
        store_menu: action.payload,
      };
    case STORE_SERVICE:
      return {
        ...state,
        store_service: action.payload,
      };
    case STORE_PRICE:
      return {
        ...state,
        store_price: action.payload,
      };
    case STORE_MESSAGE:
      return {
        ...state,
        store_message: action.payload,
      };
    case STORE_IMAGE:
      return {
        ...state,
        store_image: action.payload,
      };
    case MAP_IMAGE:
      return {
        ...state,
        map_image: action.payload,
      };
    default:
      return state;
  }
}
