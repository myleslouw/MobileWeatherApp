import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ForecastItem from './ForecastItem'
import { useContext } from 'react'
import WeatherContext from './WeatherContext'


const TodaysForecast = () => {

    const { hourlyLocationData, setHourlyLocationData } = useContext(WeatherContext)
    

    return (
        <View style={TFStyles.TodaysForecastContainer}>
            <Text style={TFStyles.Text}>Today's Forecast</Text>
            <ScrollView
                contentContainerStyle={TFStyles.ForecastScroll}
                horizontal={true}>
                    <Text>{hourlyLocationData.cnt}</Text>
                    {/* {hourlyLocationData.list.map(forecast  => {
                        return <ForecastItem key={forecast.dt} time={22} temp={Math.round(forecast.main.temp)}/>
                    })} */}
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
        borderBottomWidth: 2,
        borderColor: 'rgba(0,0,0, s0.2)'
    },
    ForecastScroll: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
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