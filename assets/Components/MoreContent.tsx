import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useState, useRef, useCallback } from 'react'
import TodaysForecast from './TodaysForecast'
import MiscItems from './MiscItems'
import WeatherContext from './WeatherContext'
import { ConvertExactTime, ToKPH } from './Formatters'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'



const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const MoreContent = () => {

    const { locationData } = useContext(WeatherContext)
    const translateY = useSharedValue(0)
    const MAX_TRANSLATE_Y = -360;
    const MIN_TRANSLATE_Y = 0;
    const CLOSE_SNAP_SPOT = -200;
    const OPEN_SNAP_SPOT = 0;
    const PrevLocation = useSharedValue({ y: 0 })


    const ScrollTo = useCallback((destination: number) => {                 //Snaps to top or bottom
        'worklet';                                                          //runs on UI thread
        translateY.value = withSpring(destination, { damping: 50 })
    }, [])

    const gesture = Gesture.Pan()
        .onStart(() => {                                 //on start it sets it to the prev location
            PrevLocation.value = { y: translateY.value }
        })
        .onUpdate((event) => {                          //updates it 
            translateY.value = event.translationY + PrevLocation.value.y
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
            translateY.value = Math.min(translateY.value, MIN_TRANSLATE_Y)
        })
        .onEnd(() => {
            if (translateY.value < CLOSE_SNAP_SPOT) {        //closes if moved down 10 units
                ScrollTo(MIN_TRANSLATE_Y)

            } else if (translateY.value < OPEN_SNAP_SPOT) { //opens if moved up 10 units
                ScrollTo(MAX_TRANSLATE_Y)

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
                        <MiscItems itemTitle='SUNRISE' itemValue={ConvertExactTime(locationData.sys.sunrise, locationData.timezone)} additional={''} />
                        <MiscItems itemTitle='SUNSET' itemValue={ConvertExactTime(locationData.sys.sunset, locationData.timezone)} additional={''} />
                        <MiscItems itemTitle='HUMIDITY' itemValue={locationData.main.humidity} additional={'%'} />
                        <MiscItems itemTitle='WIND' itemValue={Math.round(ToKPH(locationData.wind.speed))} additional={'kmh'} />
                        <MiscItems itemTitle='MAX' itemValue={Math.round(locationData.main.temp_max)} additional={'°'} />
                        <MiscItems itemTitle='MIN' itemValue={Math.round(locationData.main.temp_min)} additional={'°'} />
                    </View>

                </View>

            </Animated.View>
        </GestureDetector>

    )
}

const ContentStyles = StyleSheet.create({
    Line: {
        width: 75,
        height: 4,
        alignSelf: 'center',
        backgroundColor: 'gray',
        marginTop: 15,
        borderRadius: 2
    },
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
    Content: {
        marginTop: 15,
        width: '100%',
        alignItems: 'center',
        display: 'flex'
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