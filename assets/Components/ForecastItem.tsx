import { StyleSheet, Text, View, Image } from 'react-native'


interface Props {
  time: number
  temp: number
}


const ForecastItem = (props: Props) => {
  return (
    <View style={ForecastStyles.Container}>
      <Text>{props.time}</Text>
      <Image 
        source={require('../Icons/Dark/cloud.png')}
        style={ForecastStyles.Image}/>
        <Text style={ForecastStyles.Text}>{props.temp}°</Text>
    </View>
  )
}

export default ForecastItem

const ForecastStyles = StyleSheet.create({
    Container: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'orange'
    },
    Image: {
        resizeMode: 'contain',
        width: '100%',
        height: '40%',
    },
    Text: {
        alignSelf: 'center'
    }
})