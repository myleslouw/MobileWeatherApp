import { DrawerLayoutAndroidBase } from "react-native"
import WeatherContext from "./WeatherContext";

const apiKey = 'de6a32c46a5b665fad2644b271c0fe11'
export const NumForecasts = 8


//used to layout data fields
export type WeatherData = {


    "coord": {
        "lon": number;
        "lat": number;
    }
    "weather": [
        {
            "id": number;
            "main": string;
            "description": string;
            "icon": string
        }
    ]
    "base": "stations"
    "main": {
        "temp": number;
        "feels_like": number;
        "temp_min": number;
        "temp_max": number;
        "pressure": number;
        "humidity": number
    }
    "visibility": number;
    "wind": {
        "speed": number;
        "deg": number
    }
    "clouds": {
        "all": number
    }
    "dt": number;
    "sys": {
        "type": number;
        "id": number;
        "country": string;
        "sunrise": number;
        "sunset": number
    }
    "timezone": number;
    "id": number;
    "name": string;
    "cod": number;
};

/* export type HourlyData = {
    "cod": string,
    "message": number,
    "cnt": number,
    "list": [
        {
            "dt": number,
            "main": {
                "temp": number,
                "feels_like": number,
                "temp_min": number,
                "temp_max": number,
                "pressure": number,
                "sea_level": number,
                "grnd_level": number,
                "humidity": number,
                "temp_kf": number
            },
            "weather": [
                {
                    "id": number,
                    "main": string,
                    "description": string,
                    "icon": string
                }
            ],
            "clouds": {
                "all": number
            },
            "wind": {
                "speed": number,
                "deg": number,
                "gust": number
            },
            "visibility": number,
            "pop": number,
            "sys": {
                "pod": string
            },
            "dt_txt": string
        },
        {
            "dt": number,
            "main": {
                "temp": number,
                "feels_like": number,
                "temp_min": number,
                "temp_max": number,
                "pressure": number,
                "sea_level": number,
                "grnd_level": number,
                "humidity": number,
                "temp_kf": number
            },
            "weather": [
                {
                    "id": number,
                    "main": string,
                    "description": string,
                    "icon": string
                }
            ],
            "clouds": {
                "all": number
            },
            "wind": {
                "speed": number,
                "deg": number,
                "gust": number
            },
            "visibility": number,
            "pop": number,
            "sys": {
                "pod": string
            },
            "dt_txt": string
        },
        {
            "dt": number,
            "main": {
                "temp": number,
                "feels_like": number,
                "temp_min": number,
                "temp_max": number,
                "pressure": number,
                "sea_level": number,
                "grnd_level": number,
                "humidity": number,
                "temp_kf": number
            },
            "weather": [
                {
                    "id": number,
                    "main": string,
                    "description": string,
                    "icon": string
                }
            ],
            "clouds": {
                "all": number
            },
            "wind": {
                "speed": number,
                "deg": number,
                "gust": number
            },
            "visibility": number,
            "pop": number,
            "sys": {
                "pod": string
            },
            "dt_txt": string
        },
        {
            "dt": number,
            "main": {
                "temp": number,
                "feels_like": number,
                "temp_min": number,
                "temp_max": number,
                "pressure": number,
                "sea_level": number,
                "grnd_level": number,
                "humidity": number,
                "temp_kf": number
            },
            "weather": [
                {
                    "id": number,
                    "main": string,
                    "description": string,
                    "icon": string
                }
            ],
            "clouds": {
                "all": number
            },
            "wind": {
                "speed": number,
                "deg": number,
                "gust": number
            },
            "visibility": number,
            "pop": number,
            "sys": {
                "pod": string
            },
            "dt_txt": string
        },
        {
            "dt": number,
            "main": {
                "temp": number,
                "feels_like": number,
                "temp_min": number,
                "temp_max": number,
                "pressure": number,
                "sea_level": number,
                "grnd_level": number,
                "humidity": number,
                "temp_kf": number
            },
            "weather": [
                {
                    "id": number,
                    "main": string,
                    "description": string,
                    "icon": string
                }
            ],
            "clouds": {
                "all": number
            },
            "wind": {
                "speed": number,
                "deg": number,
                "gust": number
            },
            "visibility": number,
            "pop": number,
            "sys": {
                "pod": string
            },
            "dt_txt": string
        },
        {
            "dt": number,
            "main": {
                "temp": number,
                "feels_like": number,
                "temp_min": number,
                "temp_max": number,
                "pressure": number,
                "sea_level": number,
                "grnd_level": number,
                "humidity": number,
                "temp_kf": number
            },
            "weather": [
                {
                    "id": number,
                    "main": string,
                    "description": string,
                    "icon": string
                }
            ],
            "clouds": {
                "all": number
            },
            "wind": {
                "speed": number,
                "deg": number,
                "gust": number
            },
            "visibility": number,
            "pop": number,
            "sys": {
                "pod": string
            },
            "dt_txt": string
        }
    ],
    "city": {
        "id": number,
        "name": string,
        "coord": {
            "lat": number,
            "lon": number
        },
        "country": string,
        "population": number,
        "timezone": number,
        "sunrise": number,
        "sunset": number
    }
} */

export type HourlyData = {
    "city": {
        "coord": {
            "lat": number,
            "lon": number,
        },
        "country": string,
        "id": number,
        "name": string,
        "population": number,
        "sunrise": number,
        "sunset": number,
        "timezone": number,
    },
    "cnt": number,
    "cod": string,
    "list": [
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
        {
            "clouds": {
                "all": number,
            },
            "dt": number,
            "dt_txt": string,
            "main": {
                "feels_like": number,
                "grnd_level": number,
                "humidity": number,
                "pressure": number,
                "sea_level": number,
                "temp": number,
                "temp_kf": number,
                "temp_max": number,
                "temp_min": number,
            },
            "pop": number,
            "sys": {
                "pod": string,
            },
            "visibility": number,
            "weather": [
                {
                    "description": string,
                    "icon": string,
                    "id": number,
                    "main": string,
                },
            ],
            "wind": {
                "deg": number,
                "gust": number,
                "speed": number,
            },
        },
    ],
    "message": 0,
}




//API calls


//call for getting the location 
export async function getLocationData<T>(city: string): Promise<WeatherData> {
    const DEFAULT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    return fetch(DEFAULT_URL)
        .then(response => { return response.json() as Promise<WeatherData> })
        .catch(err => err.message)
}



//call for getting the 3 hour dates
export async function getHourlyData(city: string): Promise<HourlyData> {
    const HOURLY_URL = `api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&cnt=${NumForecasts}`
    console.log(HOURLY_URL)
    return fetch(HOURLY_URL)
        .then(response => { return response.json() as Promise<HourlyData> })
        .catch(err => err.message)
}

export const testCall = () => {
    return 3
}
