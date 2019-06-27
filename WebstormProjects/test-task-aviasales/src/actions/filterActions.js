export const SET_CURRENCY = 'SET_CURRENCY';

export const SET_TRANSFER = 'SET_TRANSFER';

export function setCurrency(currency) {
  return {
    type: SET_CURRENCY,
    payload: currency,
  }
}

export function setTransfer(transfer) {
  return {
    type: SET_TRANSFER,
    payload: [...transfer]
  }
}