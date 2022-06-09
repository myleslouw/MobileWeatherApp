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

  const BOTTOM_PANEL_SIZE = 400;

  const dimensions = useWindowDimensions();


  const HandleSearchButton = (inputtedLocation: string) => {
    ChangeCity(inputtedLocation)
  }

  const ChangeCity = async (newLocation: string) => {
    console.log('input: ' + newLocation)

    //awaits new info and changes the state to the new info
    setLocationData(await getLocationData(newLocation))
    setHourlyLocationData(await getHourlyData(newLocation))
  }

  const counter = useRef(0)
  useEffect(() => {
    console.log("renders: " + counter.current)
    counter.current++
  })



  return (

    <WeatherContext.Provider value={{ location, setLocation, locationData, hourlyLocationData, setHourlyLocationData }}>

      <View
        onStartShouldSetResponder={() => true}
        onResponderMove={(event) => {
          console.log("main responder")
          touch.setValue({
            x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY
          })
        }}
        onResponderRelease={() => {
          Animated.spring(touch, {
            toValue: {
              x: dimensions.width / 2,
              y: dimensions.height / 2 - 70,
            },
            useNativeDriver: false
          }).start();
        }}
        onResponderTerminationRequest={() => true}
        style={styles.container}>

        <SearchBar Search={() => HandleSearchButton(location)} />

        <View style={styles.TopHalfContainer}>
          <MainTemp CityName={locationData.name} Temp={Math.round(locationData.main.temp)} />
        </View>

        <View style={styles.BottomHalfContainer}>
          <MoreContent Top={Animated.subtract(touch.y, BOTTOM_PANEL_SIZE)} />
        </View>

        <StatusBar backgroundColor='white' />
      </View>

    </WeatherContext.Provider>
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
