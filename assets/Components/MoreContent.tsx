import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native'
import React, { useContext, useState, useRef } from 'react'
import TodaysForecast from './TodaysForecast'
import MiscItems from './MiscItems'
import WeatherContext from './WeatherContext'
import { ConvertExactTime, ToKPH } from './Formatters'
import { Animated } from 'react-native'

interface Props {
    Top: Animated.AnimatedSubtraction
}

const MoreContent = (props: Props) => {

    const [expanded, setExpanded] = useState(true)

    const HandleExpand = () => {
        setExpanded(currentState => !currentState)
    }

    const { locationData } = useContext(WeatherContext)

    //gesture handling
    const touch = useRef(
        new Animated.ValueXY({ x: 0, y: 0 })
    ).current;

    const dimensions = useWindowDimensions();

    return (
        <Animated.View
            style={[ContentStyles.container, { top: props.Top }]}
            onResponderStart={() => true}
            onResponderMove={(event) => {
                console.log("content responder")
                touch.setValue({
                    x: event.nativeEvent.pageX,
                    y: event.nativeEvent.pageY
                })
            }}
            onResponderRelease={() => {
                Animated.spring(touch, {
                    toValue: {
                        x: dimensions.width - 500,
                        y: dimensions.height - 500,
                    },
                    useNativeDriver: false
                }).start();
            }}
            onResponderTerminationRequest={() => true}
            onResponderTerminate={() => {
                Animated.spring(touch, {
                    toValue: {
                        x: dimensions.width - 500,
                        y: dimensions.height - 500,
                    },
                    useNativeDriver: false
                }).start();
            }}>

            <Pressable onPress={HandleExpand}>
            </Pressable>
            {expanded ?
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
                </View> : null}

        </Animated.View>
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