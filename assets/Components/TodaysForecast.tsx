import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ForecastItem from './ForecastItem'
import { useContext } from 'react'
import WeatherContext from './WeatherContext'
import { ConvertTime } from './Formatters'


const TodaysForecast = () => {

    const { hourlyLocationData, setHourlyLocationData } = useContext(WeatherContext)

    
    return (
        <View style={TFStyles.TodaysForecastContainer}>
            <Text style={TFStyles.Text}>Today's Forecast</Text>
            <ScrollView
                decelerationRate='fast'
                contentContainerStyle={TFStyles.ForecastScroll}
                horizontal={true}>
                    {hourlyLocationData.list.map(forecast  => {
                        return <ForecastItem key={forecast.dt} time={ConvertTime(forecast.dt)} Image={forecast.weather[0].description} temp={Math.round(forecast.main.temp)}/>
                    })}
            </ScrollView>
        </View>
    )
}

export default TodaysForecast

const TFStyles = StyleSheet.create({
    TodaysForecastContainer: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        borderBottomWidth: 0.5
    },
    ForecastScroll: {
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