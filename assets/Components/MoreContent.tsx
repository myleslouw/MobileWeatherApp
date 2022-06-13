import { View, Text, StyleSheet, Pressable, useWindowDimensions, Dimensions } from 'react-native'
import React, { useContext, useState, useRef } from 'react'
import TodaysForecast from './TodaysForecast'
import MiscItems from './MiscItems'
import WeatherContext from './WeatherContext'
import { ConvertExactTime, ToKPH } from './Formatters'
import Animated, { event, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'



const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const MoreContent = () => {

    const { locationData } = useContext(WeatherContext)
    const translateY = useSharedValue(0)
    const MAX_TRANSLATE_Y = -380;
    const MIN_TRANSLATE_Y = 0;
    const SNAP_SPOT = -150;

    const PrevLocation = useSharedValue({y: 0})
    const gesture = Gesture.Pan()
    .onStart(()=> {                                 //on start it sets it to the prev location
        PrevLocation.value = {y: translateY.value}
    })
    .onUpdate((event) => {                          //updates it 
        translateY.value = event.translationY + PrevLocation.value.y
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
        translateY.value = Math.min(translateY.value, MIN_TRANSLATE_Y)
    })
    .onEnd(() => {
        if(translateY.value > SNAP_SPOT) {
            translateY.value = withSpring(MIN_TRANSLATE_Y, {damping: 50})
        } else if (translateY.value < SNAP_SPOT) {
            translateY.value = withSpring(MAX_TRANSLATE_Y, {damping: 50})
        }
    })

    const BottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        }
    })

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[ContentStyles.container, BottomSheetStyle]}>

                <View style={ContentStyles.Line}></View>

                <View style={ContentStyles.Content}>
                    <TodaysForecast />
                    <View style={ContentStyles.MiscContainer}>
                        <MiscItems itemTitle='SUNRISE' itemValue={ConvertExactTime(locationData.sys.sunrise)} additional={''} />
                        <MiscItems itemTitle='SUNSET' itemValue={ConvertExactTime(locationData.sys.sunset)} additional={''} />
                        <MiscItems itemTitle='HUMIDITY' itemValue={50} additional={'%'} />
                        <MiscItems itemTitle='WIND' itemValue={Math.round(ToKPH(locationData.wind.speed))} additional={'kmh'} />
                        <MiscItems itemTitle='MAX' itemValue={Math.round(locationData.main.temp_max)} additional={'°'} />
                        <MiscItems itemTitle='MIN' itemValue={Math.round(locationData.main.temp_min)} additional={'°'} />
                    </View>
                    <View>
                        <Text style={ContentStyles.Text}>New Headline</Text>
                    </View>
                </View>

            </Animated.View>
        </GestureDetector>

    )
}

const ContentStyles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        position: 'absolute',
        top: 300,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: 'flex',
        alignItems: 'center',

    },
    Line: {
        width: 75,
        height: 4,
        alignSelf: 'center',
        backgroundColor: 'gray',
        marginTop: 15,
        borderRadius: 2
    },
    Content: {
        marginTop: 15,
        width: '100%',
        alignItems: 'center',
    },
    MiscContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Text: {
        paddingVertical: 10,
        paddingHorizontal: 100,
        color: 'black'
    }
})

export default MoreContent