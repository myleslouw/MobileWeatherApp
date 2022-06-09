import { StyleSheet, Text, View, Image, Pressable } from 'react-native'


interface Props {
  time: string
  temp: number
  Image: string
}

const Images: any = {
  heavyrain: require('../Icons/Light/heavy-rain.png') as string,
  moderaterain: require('../Icons/Light/rain.png'),
  clearsky: require('../Icons/Light/sun.png'),
  lightrain: require('../Icons/Light/light-rain.png'),
  brokenclouds: require('../Icons/Light/cloud.png'),
  scatteredclouds: require('../Icons/Light/partly-cloudy-day.png'),
  overcastclouds: require('../Icons/Light/cloud.png'),
  fewclouds: require('../Icons/Light/partly-cloudy-day.png'),
}
 //returns a image for the current weather description
 const ImageManager = (description: string) => {
  description = description.replace(/\s+/g, '');          //https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
  return Images[description]
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