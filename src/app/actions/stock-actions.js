import { STOCK_TIME_SERIES_DAILY, STOCK_TIME_SERIES_WEEKLY, MULTIPLES_STOCKS_SERIES_MONTHLY, MULTIPLES_STOCKS_SERIES_MONTHLY } from "./highcharts-action-types";

// The variable getDailyStocksTimeSeries is assigned a function that takes a single parameter:  symbol
// The parameter 'symbol' returns another function which takes a parameter: dispatch
// Get a response and convert it to JSON
// If Promise is rejected, get the reason and use the Promise.reject method to reject all promises

// ==========  DAILY: GET data for an individual company ========== //
export const getDailyStocksTimeSeries = (symbol) => (dispatch) => {
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=W76RX5SN17XHNO6A`)
    .then(
      (response) => response.json(), // Promise One - Fetch data object in JSON format
      (reason) => Promise.reject(reason) // Promise Two - Fetch failed
    )
    .then(
      (
        stocksData // If Promise One succeeds, use the action to request particular data
      ) =>
        dispatch({
          type: STOCK_TIME_SERIES_DAILY,
          payload: stocksData,
        }),
      (
        reason // If Promise Two fails, send a reason for it
      ) =>
        dispatch({
          type: STOCK_TIME_SERIES_DAILY,
          payload: reason,
        })
    );
};

// ==========  WEEKLY: GET data for an individual company ========== //
export const getWeeklyStocksTimeSeries = (symbol) => (dispatch) => {
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=W76RX5SN17XHNO6A`)
    .then(
      (response) => response.json(), // Promise One - Fetch data object in JSON format
      (reason) => Promise.reject(reason) // Promise Two - Fetch failed
    )
    .then(
      (
        stocksData // If Promise One succeeds, use the action to request particular data
      ) =>
        dispatch({
          type: STOCK_TIME_SERIES_WEEKLY,
          payload: stocksData,
        }),
      (
        reason // If Promise Two fails, send a reason for it
      ) =>
        dispatch({
          type: STOCK_TIME_SERIES_WEEKLY,
          payload: reason,
        })
    );
};

// ==========  MONTHLY: GET data for an individual company ========== //
export const getMonthlyStocksTimeSeries = (symbol) => (dispatch) => {
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=W76RX5SN17XHNO6A`)
    .then(
      (response) => response.json(), // Promise One - Fetch data object in JSON format
      (reason) => Promise.reject(reason) // Promise Two - Fetch failed
    )
    .then(
      (
        stocksData // If Promise One succeeds, use the action to request particular data
      ) =>
        dispatch({
          type: STOCK_TIME_SERIES_MONTHLY,
          payload: stocksData,
        }),
      (
        reason // If Promise Two fails, send a reason for it
      ) =>
        dispatch({
          type: STOCK_TIME_SERIES_MONTHLY,
          payload: reason,
        })
    );
};

// ==========  Comparison: GET data for multiple companies ========== //
export const getMonthlyStocksForComparison = (...symbols) => (dispatch) => {
  Promise.all(
    symbols.map((symbol) => {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=W76RX5SN17XHNO6A`)
        .then(
          (response) => response.json(), // Promise One - Fetch data object in JSON format
          (reason) => Promise.reject(reason) // Promise Two - Fetch failed
        )
        .then(
          (
            stocksData // If Promise One succeeds, just GET the data
          ) => stocksData,
          (
            reason // If Promise Two fails, send a reason for it
          ) =>
            dispatch({
              type: STOCK_TIME_SERIES_MONTHLY,
              payload: reason,
            })
        );
    })
  ).then(
    // Once the Promises are resolved, dispatch all the data of each company as an array to the reducer
    (stocks) =>
      dispatch({
        type: MULTIPLE_STOCKS_SERIES_MONTHLY,
        payload: stocks,
      })
  );
};
