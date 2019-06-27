export const SET_TICKETS = 'SET_TICKETS';

export function setTickets(data) {
  return {
    type: SET_TICKETS,
    payload: [...data],
  }
}
