import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import {ImageManager, Images} from './Formatters'

interface Props {
  time: string
  temp: number
  Image: string
}


const ForecastItem = (props: Props) => {
  return (
    <View style={ForecastStyles.Container}>
      <Text style={ForecastStyles.TimeText}>{props.time}</Text>
      <Pressable 
        style={ForecastStyles.ImageContainer}
        onPress={() => console.log("Selected")}>
        <Image
          source={ImageManager(props.Image)}
          style={ForecastStyles.Image} />
      </Pressable>
      <Text style={ForecastStyles.TempText}>{props.temp}°</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    width: '130%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  Image: {
    resizeMode: 'contain',
    width: '100%',
    height: '60%',
  },
  TimeText: {
    marginBottom: 2,
    minWidth: 40,
    textAlign: 'center',
    alignSelf: 'center'
  },
  TempText: {
    marginTop: 2,
    alignSelf: 'center',
    fontWeight: 'bold'
  }
})