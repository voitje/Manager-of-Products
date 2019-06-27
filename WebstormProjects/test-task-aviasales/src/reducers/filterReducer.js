import { SET_CURRENCY, SET_TRANSFER } from "../actions/filterActions";


const initialState = {
  currency: 'RUB',
  transfer: [false,false,false,false,false]
};

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return {...state, currency: action.payload};
    case SET_TRANSFER:
      return {...state, transfer: [...action.payload]};
    default:
      return state;
  }
}


