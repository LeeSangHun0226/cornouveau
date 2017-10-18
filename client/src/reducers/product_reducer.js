
import {
  PRODUCT_SHOW_DETAIL,
} from '../actions/types';

const INITIAL_STATE = {
  productDetail: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case PRODUCT_SHOW_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    default:
      return state;
  }
}

