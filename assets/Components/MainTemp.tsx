import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Images, ImageManager} from './Formatters'

interface Props {
  CityName: string,
  Temp: number,
  Image: string
}

const MainTemp = (props: Props) => {
  return (
    <View style={MainTempStyles.MainTempContainer}>
      <Text
        style={[MainTempStyles.text, { fontSize: 20 }]}
      >{props.CityName}</Text>
      <Image
        source={ImageManager(props.Image)}
        style={MainTempStyles.Image} />
      <Text style={[MainTempStyles.text, { fontSize: 60 }]}> {props.Temp}°</Text>
    </View>
  )
}

export default MainTemp

const MainTempStyles = StyleSheet.create({
  MainTempContainer: {
    marginTop: 60,
    width: '40%',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Image: {
    marginTop: 10,
    resizeMode: 'contain',
    width: '100%',
    height: '40%',
  },
  text: {
    color: 'white',
  }
})