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

export const StoreName = payload => ({type: STORE_NAME, payload});
export const StoreAddress = payload => ({type: STORE_ADDRESS, payload});
export const StoreMenu = payload => ({type: STORE_MENU, payload});
export const StoreService = payload => ({type: STORE_SERVICE, payload});
export const StorePrice = payload => ({type: STORE_PRICE, payload});
export const StoreMessage = payload => ({type: STORE_MESSAGE, payload});
export const StoreImage = payload => ({type: STORE_IMAGE, payload});
export const MapImage = payload => ({type: MAP_IMAGE, payload});
