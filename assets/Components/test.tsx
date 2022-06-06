import { createContext } from "react";
import { HourlyData, WeatherData } from "./APIcalls"




export const startLocationData: WeatherData = 
{
    "coord": {
        "lon": 18.4232,
        "lat": -33.9258
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 16.74,
        "feels_like": 16.19,
        "temp_min": 15.51,
        "temp_max": 17.93,
        "pressure": 1031,
        "humidity": 66
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.66,
        "deg": 320
    },
    "clouds": {
        "all": 40
    },
    "dt": 1653992166,
    "sys": {
        "type": 2,
        "id": 2073005,
        "country": "ZA",
        "sunrise": 1653975745,
        "sunset": 1654011951
    },
    "timezone": 7200,
    "id": 3369157,
    "name": "Cape Town",
    "cod": 200
}




export const startHourlyData: HourlyData = 
{
    "cod": "200",
    "message": 0,
    "cnt": 8,
    "list": [
        {
            "dt": 1654538400,
            "main": {
                "temp": 19.57,
                "feels_like": 18.55,
                "temp_min": 19.54,
                "temp_max": 19.57,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1021,
                "humidity": 37,
                "temp_kf": 0.03
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.5,
                "deg": 119,
                "gust": 2.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-06-06 18:00:00"
        },
        {
            "dt": 1654549200,
            "main": {
                "temp": 19.46,
                "feels_like": 18.43,
                "temp_min": 19.23,
                "temp_max": 19.46,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1021,
                "humidity": 37,
                "temp_kf": 0.23
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 2.55,
                "deg": 88,
                "gust": 2.49
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-06-06 21:00:00"
        },
        {
            "dt": 1654560000,
            "main": {
                "temp": 19.16,
                "feels_like": 18.07,
                "temp_min": 18.95,
                "temp_max": 19.16,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1020,
                "humidity": 36,
                "temp_kf": 0.21
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 29
            },
            "wind": {
                "speed": 1.85,
                "deg": 72,
                "gust": 1.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-06-07 00:00:00"
        },
        {
            "dt": 1654570800,
            "main": {
                "temp": 18.6,
                "feels_like": 17.4,
                "temp_min": 18.6,
                "temp_max": 18.6,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1020,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 2.61,
                "deg": 62,
                "gust": 2.67
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-06-07 03:00:00"
        },
        {
            "dt": 1654581600,
            "main": {
                "temp": 18.22,
                "feels_like": 16.99,
                "temp_min": 18.22,
                "temp_max": 18.22,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1020,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 2.85,
                "deg": 52,
                "gust": 2.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-06-07 06:00:00"
        },
        {
            "dt": 1654592400,
            "main": {
                "temp": 22.48,
                "feels_like": 21.57,
                "temp_min": 22.48,
                "temp_max": 22.48,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1020,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.35,
                "deg": 27,
                "gust": 3.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-06-07 09:00:00"
        },
        {
            "dt": 1654603200,
            "main": {
                "temp": 24.97,
                "feels_like": 24.31,
                "temp_min": 24.97,
                "temp_max": 24.97,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1019,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.86,
                "deg": 347,
                "gust": 4.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-06-07 12:00:00"
        },
        {
            "dt": 1654614000,
            "main": {
                "temp": 22.12,
                "feels_like": 21.46,
                "temp_min": 22.12,
                "temp_max": 22.12,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1019,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.58,
                "deg": 177,
                "gust": 2.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-06-07 15:00:00"
        }
    ],
    "city": {
        "id": 3369157,
        "name": "Cape Town",
        "coord": {
            "lat": -33.9258,
            "lon": 18.4232
        },
        "country": "ZA",
        "population": 3433441,
        "timezone": 7200,
        "sunrise": 1654494346,
        "sunset": 1654530266
    }
}
    
