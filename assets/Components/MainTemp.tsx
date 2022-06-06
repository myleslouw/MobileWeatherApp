import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    CityName: string,
    Temp: number,
}

const MainTemp = (props: Props) => {
  return (
    <View style={MainTempStyles.MainTempContainer}>
      <Text 
        style={[MainTempStyles.text, {fontSize: 20}]}
        >{props.CityName}</Text>
      <Text style={[MainTempStyles.text, {fontSize: 60}]}> {props.Temp}°</Text>
    </View>
  )
}

export default MainTemp

const MainTempStyles = StyleSheet.create({
    MainTempContainer: {
        width: '40%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
    text: {
        color: 'white',
    }
})