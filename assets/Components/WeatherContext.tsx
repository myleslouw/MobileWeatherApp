import { createContext } from "react";
import { HourlyData } from "./APIcalls";
import { startHourlyData, startLocationData } from "./test";

const WeatherContext = createContext({
    location: 'Cape Town',
    setLocation: (data: string) => {},
    locationData: startLocationData,
    hourlyLocationData: startHourlyData,
    setHourlyLocationData: (data: HourlyData) => {}
});


export default WeatherContext;