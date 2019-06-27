import { ticketReducer } from "./ticketReducer";
import { filterReducer} from "./filterReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketReducer,
});