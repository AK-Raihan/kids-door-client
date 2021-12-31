import { ActionType } from "../ActionTypes/enrollment-types";

const initialState = {
  allProducts: [],
  order: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS: {
      const newState = { ...state, allProducts: [...payload] };
      return newState;
    }
    case ActionType.SET_ORDER: {
      const newState = { ...state, allProducts: [...payload] };
      return newState;
    }
    
    default: {
      return state;
    }
  }
};