import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface Props {
  CityName: string,
  Temp: number,
}

const MainTemp = (props: Props) => {
  return (
    <View style={MainTempStyles.MainTempContainer}>
      <Text
        style={[MainTempStyles.text, { fontSize: 20 }]}
      >{props.CityName}</Text>
      <Image
        source={require('../Icons/Light/cloud.png')}
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
    backgroundColor: 'black',
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