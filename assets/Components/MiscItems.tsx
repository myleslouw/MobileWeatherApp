import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type Props = {
    itemTitle: string
    itemValue: number | string
    additional: string
}

const MiscItems = (props: Props) => {
    return (
        <View style={MiscStyles.Container}>
            <Text style={MiscStyles.Title}>{props.itemTitle}</Text>
            <View style={MiscStyles.ValueContainer}>
                <Text style={MiscStyles.Value}>{props.itemValue}</Text>
                <Text style={MiscStyles.Additional}>{props.additional}</Text>
            </View>
        </View>
    )
}

export default MiscItems

const MiscStyles = StyleSheet.create({
    Container: {
        borderBottomWidth: 0.5,
        width: '50%',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    Title: {
        fontSize: 12,
        fontWeight: '300'
    },
    ValueContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Value: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Additional: {
        margin: 3,
        fontWeight: '300'
    }
})