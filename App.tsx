//#region imports
import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import SearchBar from './assets/Components/SearchBar';
import { getLocationData, getHourlyData, WeatherData, HourlyData } from './assets/Components/APIcalls';
import { startLocationData, startHourlyData } from './assets/Components/test'
import MoreContent from './assets/Components/MoreContent';
import MainTemp from './assets/Components/MainTemp';
import WeatherContext from './assets/Components/WeatherContext';
import { Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';



//#endregion

export default function App() {

  //States
  const [location, setLocation] = useState('')
  const [locationData, setLocationData] = useState(startLocationData)
  const [hourlyLocationData, setHourlyLocationData] = useState(startHourlyData)

  //gesture handling
  const touch = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;

  const HandleSearchButton = (inputtedLocation: string) => {
    ChangeCity(inputtedLocation)
  }

  const ChangeCity = async (newLocation: string) => {
    console.log('input: ' + newLocation)

    //awaits new info and changes the state to the new info
    let newData = await getLocationData(newLocation)
    let newHourly = await getHourlyData(newLocation)


    setLocationData(newData)
    setHourlyLocationData(newHourly)

    console.log(locationData.timezone)
  }

  const counter = useRef(0)
  useEffect(() => {
    console.log("renders: " + counter.current)
    counter.current++
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <WeatherContext.Provider value={{ location, setLocation, locationData, hourlyLocationData, setHourlyLocationData }}>

        <LinearGradient 
         start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
         colors={['#11998e', '#38ef7d']}
         style={styles.container}>

          <SearchBar Search={() => HandleSearchButton(location)} />

          <View style={styles.TopHalfContainer}>
            <MainTemp CityName={locationData.name} Image={locationData.weather[0].description} Temp={Math.round(locationData.main.temp)} />
          </View>

          <View style={styles.BottomHalfContainer}>
            <MoreContent  />
          </View>

          <StatusBar backgroundColor='white' />
        </LinearGradient>
      </WeatherContext.Provider>
    </GestureHandlerRootView>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TopHalfContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  BottomHalfContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'flex-end'
  }
});
