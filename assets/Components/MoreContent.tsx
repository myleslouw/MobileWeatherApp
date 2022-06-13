import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native'
import React, { useContext, useState, useRef } from 'react'
import TodaysForecast from './TodaysForecast'
import MiscItems from './MiscItems'
import WeatherContext from './WeatherContext'
import { ConvertExactTime, ToKPH } from './Formatters'
import { Animated } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


interface Props {
    Top: Animated.AnimatedSubtraction
}

const MoreContent = (props: Props) => {

    const { locationData } = useContext(WeatherContext)
    const vertical = useSharedValue(0)

    //gesture handling
    const touch = useRef(
        new Animated.ValueXY({ x: 0, y: 0 })
    ).current;

    const dimensions = useWindowDimensions();
    const BOTTOM_PANEL_SIZE = 380;  //10

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <Animated.View
                onStartShouldSetResponder={() => true}
                onResponderMove={(event) => {
                    touch.setValue({
                        x: event.nativeEvent.pageX,
                        y: event.nativeEvent.pageY
                    })
                }}
                onResponderRelease={() => {
                    Animated.spring(touch, {
                        toValue: {
                            x: dimensions.width / 2,
                            y: dimensions.height / 2 - 70,
                        },
                        useNativeDriver: false
                    }).start();
                }}
                onResponderTerminationRequest={() => true}
                style={[ContentStyles.container, { top: Animated.subtract(touch.y, 450) }]}>

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
        </GestureHandlerRootView>

    )
}

const ContentStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: 'flex',
        alignItems: 'center',

    },
    Content: {
        marginTop: 25,
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