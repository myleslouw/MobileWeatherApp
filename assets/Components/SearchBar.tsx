import { Text, Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import WeatherContext from './WeatherContext'

interface Props {
    Search: () => void
}

const SearchBar = (props: Props) => {

    const { location, setLocation } = useContext(WeatherContext)

    return (
        <View style={styles.SearchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={setLocation}
                value={location}
                placeholder="Enter a city..."
                placeholderTextColor='white' />

            <Pressable 
                style={styles.Button}
                onPress={props.Search}>
                <Text style={styles.ButtonText}>Go</Text>
            </Pressable>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    SearchContainer: {
        height: "10%",
        backgroundColor:'black',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        minHeight: 30,
        width: '80%',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'white',
        margin: 10,
        color: 'white',
        fontSize: 15,
        paddingLeft: 20,
        padding: 5,
        textAlignVertical: 'center',
    },
    Button: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        height: '55%',
        width: "12%",
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        color: 'white',
    }
})