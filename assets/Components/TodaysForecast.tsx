import { StyleSheet, Text, View, Dimensions } from 'react-native'
import ForecastItem from './ForecastItem'
import { useContext } from 'react'
import WeatherContext from './WeatherContext'
import { ConvertTime } from './Formatters'
import Animated, {  useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const { height: SCREEN_WIDTH } = Dimensions.get('window')

const TodaysForecast = () => {

    const { hourlyLocationData } = useContext(WeatherContext)
    
    const translateX = useSharedValue(0)
    const MAX_TRANSLATE_X = -165;
    const MIN_TRANSLATE_X = 0;
    const PrevLocation = useSharedValue({ x: 0 })
    
    const gesture = Gesture.Pan()
    .onStart(() => {
        PrevLocation.value = {x: translateX.value}
    })
    .onUpdate((event) => {
        translateX.value = event.translationX + PrevLocation.value.x
        translateX.value = Math.max(translateX.value, MAX_TRANSLATE_X)
        translateX.value = Math.min(translateX.value, MIN_TRANSLATE_X)
    })
    
    const ScrollViewStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}]
        }
    })

    return (
        <GestureDetector gesture={gesture}>
            <View style={TFStyles.TodaysForecastContainer}>
                <Text style={TFStyles.Text}>Today's Forecast</Text>
                <Animated.View
                    style={[TFStyles.ForecastScroll, ScrollViewStyle]}>

                    {hourlyLocationData.list.map(forecast => {
                        return <ForecastItem key={forecast.dt} time={ConvertTime(forecast.dt)} Image={forecast.weather[0].description} temp={Math.round(forecast.main.temp)} />
                    })}
                </Animated.View>
            </View>
        </GestureDetector>
    )
}

export default TodaysForecast

const TFStyles = StyleSheet.create({
    TodaysForecastContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 0.5, 
    },
    ForecastScroll: {
        width: SCREEN_WIDTH,
        height: 110,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    Text: {
        fontSize: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        color: 'black',
        fontWeight: 'bold',
    }
})