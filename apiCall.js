const fetch = require('node-fetch');


function d() {
    const s = fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=demo')
        .then(response => response.json())
        .then(data => {
            console.log(data) // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))
    let d = Array.from(s);
    console.log(d);
}

d();

//Data handling

testObj = {
    "Meta Data": {
        "1. Information": "Intraday (5min) open, high, low, close prices and volume",
        "2. Symbol": "MSFT",
        "3. Last Refreshed": "2018-11-08 16:00:00",
        "4. Interval": "5min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
    },
    "Time Series (5min)": {
        "2018-11-08 16:00:00": {
            "1. open": "111.5900",
            "2. high": "111.7900",
            "3. low": "111.4800",
            "4. close": "111.7900",
            "5. volume": "1191177"
        },
        "2018-11-08 15:55:00": {
            "1. open": "111.4500",
            "2. high": "111.6890",
            "3. low": "111.3950",
            "4. close": "111.5900",
            "5. volume": "471242"
        },
    }
}


getData = async () => {

    const datafromapi = await new Promise("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=2361")
        .then(response => console.log(response.json()));
    console.log(datafromapi);
    if (resolve()) {
        // let a = this.testObj["Time Series (5min)"];
        let a = datafromapi["Time Series (5min)"];


        for (let [key, value] of Object.entries(a)) {
            console.log(`The keys are ${key}:The values are ${value}`);
            let openvalues = value["1. open"]
            console.log("The open values are" + openvalues)
            // var innerkeysare = Object.keys(a).map(k => a[k]);
            // var innervaluesare = Object.values(a).map(v => a[v]);
            // console.log(`The inner keys are ${innerkeysare}:The inner values are ${innervaluesare}`)
        }
    }

}