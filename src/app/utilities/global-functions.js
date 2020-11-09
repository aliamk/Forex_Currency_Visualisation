// An annoymous function that takes one parameter: timeSeries
// Declare two variables inside the function:  DATA and STOCK
// Loop through the parameter 'timeSeries'
// For each item of timeSeries that we want, assign it to the variable STOCK
// The items that we want are Date, open, high, low, close
// Push each of these items that are assigned to STOCK into the DATA array

export default function (timeSeries) {
    let data = [], stock
    for(let each in timeSeries) {
        stock = timeSeries[each]

        data.push([
            new Date(each).getTime(),
            parseFloat(stock["1. open"]),
            parseFloat(stock["2. high"]),
            parseFloat(stock["3. low"]),
            parseFloat(stock["4. close"])
        ])
    }
    return data.reverse()
}