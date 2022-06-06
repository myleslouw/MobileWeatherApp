import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import TodaysForecast from './TodaysForecast'

const MoreContent = () => {

    const [expanded, setExpanded] = useState(true)

    const HandleExpand = () => {
        setExpanded(currentState => !currentState)
    }

    return (
        <View style={ContentStyles.container}>
            <Pressable onPress={HandleExpand}>
                <Text style={ContentStyles.Text}>{expanded ? 'V' : '^'}</Text>
            </Pressable>
            {expanded ?
                <View style={ContentStyles.Content}>
                    <TodaysForecast />
                    <View>
                        <Text style={ContentStyles.Text}>New Headline</Text>
                    </View>
                </View> : null}

        </View>
    )
}

const ContentStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: 'flex',
        alignItems: 'center',

    },
    Content: {
        width: '100%',
        alignItems: 'center',
    },
    Text: {
        paddingVertical: 10,
        paddingHorizontal: 100,
        color: 'black'
    }
})

export default MoreContent