const express = require('express');
const path    = require('path');
const app     = express();
const port = process.env.PORT || 5000;
const host = process.env.IP || "localhost";
// app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/locations/v1/cities/autocomplete', (req, res) => {
    res.send(
            [
                {
                    Version           : 1,
                    Key               : "623",
                    Type              : "City",
                    Rank              : 20,
                    LocalizedName     : "Paris",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133785",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 10e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133786",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 11e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133787",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 12e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133788",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 13e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133789",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 14e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133790",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 15e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "2258521",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 16e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133791",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 17e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                },
                {
                    Version           : 1,
                    Key               : "133792",
                    Type              : "City",
                    Rank              : 45,
                    LocalizedName     : "Paris 18e Arrondissement",
                    Country           : {
                        ID           : "FR",
                        LocalizedName: "France"
                    },
                    AdministrativeArea: {
                        ID           : "75",
                        LocalizedName: "Ville de Paris"
                    }
                }
            ]

    );
});

app.get('/currentconditions/v1/:id', (req, res) => {
    res.send(
        [
            {
            LocalObservationDateTime: "2020-07-07T09:26:00+02:00",
            EpochTime: 1594106760,
            WeatherText: "Sunny",
            WeatherIcon: 1,
            HasPrecipitation: false,
            PrecipitationType: null,
            IsDayTime: true,
            Temperature: {
            Metric: {
            Value: 16.7,
            Unit: "C",
            UnitType: 17
            },
            Imperial: {
            Value: 62,
            Unit: "F",
            UnitType: 18
            }
            },
            MobileLink: "http://m.accuweather.com/en/fr/paris/623/current-weather/623?lang=en-us",
            Link: "http://www.accuweather.com/en/fr/paris/623/current-weather/623?lang=en-us"
            }
        ]
    )
});

app.get('/forecasts/v1/daily/5day/:id', (req, res) => {
    if(req.query.metric){
        res.send(
            {
                Headline: {
                EffectiveDate: "2020-07-11T08:00:00+03:00",
                EffectiveEpochDate: 1594443600,
                Severity: 4,
                Text: "Pleasant this weekend",
                Category: "mild",
                EndDate: null,
                EndEpochDate: null,
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
                },
                DailyForecasts: [
                {
                Date: "2020-07-07T07:00:00+03:00",
                EpochDate: 1594094400,
                Temperature: {
                Minimum: {
                Value: 22,
                Unit: "C",
                UnitType: 18
                },
                Maximum: {
                Value: 21,
                Unit: "C",
                UnitType: 18
                }
                },
                Day: {
                Icon: 1,
                IconPhrase: "Sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 33,
                IconPhrase: "Clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
                },
                {
                Date: "2020-07-08T07:00:00+03:00",
                EpochDate: 1594180800,
                Temperature: {
                Minimum: {
                Value: 22,
                Unit: "C",
                UnitType: 18
                },
                Maximum: {
                Value: 23,
                Unit: "C",
                UnitType: 18
                }
                },
                Day: {
                Icon: 1,
                IconPhrase: "Sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 34,
                IconPhrase: "Mostly clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
                },
                {
                Date: "2020-07-09T07:00:00+03:00",
                EpochDate: 1594267200,
                Temperature: {
                Minimum: {
                Value: 33,
                Unit: "C",
                UnitType: 18
                },
                Maximum: {
                Value: 34,
                Unit: "C",
                UnitType: 18
                }
                },
                Day: {
                Icon: 2,
                IconPhrase: "Mostly sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 34,
                IconPhrase: "Mostly clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
                },
                {
                Date: "2020-07-10T07:00:00+03:00",
                EpochDate: 1594353600,
                Temperature: {
                Minimum: {
                Value: 32,
                Unit: "C",
                UnitType: 18
                },
                Maximum: {
                Value: 21,
                Unit: "C",
                UnitType: 18
                }
                },
                Day: {
                Icon: 1,
                IconPhrase: "Sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 34,
                IconPhrase: "Mostly clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
                },
                {
                Date: "2020-07-11T07:00:00+03:00",
                EpochDate: 1594440000,
                Temperature: {
                Minimum: {
                Value: 23,
                Unit: "C",
                UnitType: 18
                },
                Maximum: {
                Value: 11,
                Unit: "C",
                UnitType: 18
                }
                },
                Day: {
                Icon: 2,
                IconPhrase: "Mostly sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 35,
                IconPhrase: "Partly cloudy",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
                }
                ]
                }
        )

    } else{

        res.send(
            {
                Headline: {
                EffectiveDate: "2020-07-11T08:00:00+03:00",
                EffectiveEpochDate: 1594443600,
                Severity: 4,
                Text: "Pleasant this weekend",
                Category: "mild",
                EndDate: null,
                EndEpochDate: null,
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
                },
                DailyForecasts: [
                {
                Date: "2020-07-07T07:00:00+03:00",
                EpochDate: 1594094400,
                Temperature: {
                Minimum: {
                Value: 75,
                Unit: "F",
                UnitType: 18
                },
                Maximum: {
                Value: 87,
                Unit: "F",
                UnitType: 18
                }
                },
                Day: {
                Icon: 1,
                IconPhrase: "Sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 33,
                IconPhrase: "Clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
                },
                {
                Date: "2020-07-08T07:00:00+03:00",
                EpochDate: 1594180800,
                Temperature: {
                Minimum: {
                Value: 76,
                Unit: "F",
                UnitType: 18
                },
                Maximum: {
                Value: 87,
                Unit: "F",
                UnitType: 18
                }
                },
                Day: {
                Icon: 1,
                IconPhrase: "Sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 34,
                IconPhrase: "Mostly clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
                },
                {
                Date: "2020-07-09T07:00:00+03:00",
                EpochDate: 1594267200,
                Temperature: {
                Minimum: {
                Value: 74,
                Unit: "F",
                UnitType: 18
                },
                Maximum: {
                Value: 85,
                Unit: "F",
                UnitType: 18
                }
                },
                Day: {
                Icon: 2,
                IconPhrase: "Mostly sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 34,
                IconPhrase: "Mostly clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
                },
                {
                Date: "2020-07-10T07:00:00+03:00",
                EpochDate: 1594353600,
                Temperature: {
                Minimum: {
                Value: 75,
                Unit: "F",
                UnitType: 18
                },
                Maximum: {
                Value: 86,
                Unit: "F",
                UnitType: 18
                }
                },
                Day: {
                Icon: 1,
                IconPhrase: "Sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 34,
                IconPhrase: "Mostly clear",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
                },
                {
                Date: "2020-07-11T07:00:00+03:00",
                EpochDate: 1594440000,
                Temperature: {
                Minimum: {
                Value: 79,
                Unit: "F",
                UnitType: 18
                },
                Maximum: {
                Value: 87,
                Unit: "F",
                UnitType: 18
                }
                },
                Day: {
                Icon: 2,
                IconPhrase: "Mostly sunny",
                HasPrecipitation: false
                },
                Night: {
                Icon: 35,
                IconPhrase: "Partly cloudy",
                HasPrecipitation: false
                },
                Sources: [
                "AccuWeather"
                ],
                MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
                Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
                }
                ]
                }
        )

    }
    
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });



app.listen(port, host, ()=>{
    console.log(`Server listening on ${port}`);
});