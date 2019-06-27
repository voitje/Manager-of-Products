import { SET_TICKETS } from "../actions/ticketActions";

const initialState = {
  ticketsList: [],
};

export function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return {...state, ticketsList: [...action.payload]};
    default:
      return state;
  }
}