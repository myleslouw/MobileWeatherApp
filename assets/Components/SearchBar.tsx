import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import WeatherContext from './WeatherContext'

interface Props {
    Search: () => void
}

const SearchBar = (props: Props) => {

    const {location, setLocation} = useContext(WeatherContext)

    return (
        <View>
            <TextInput
                style={styles.textInput}
                onChangeText={setLocation}
                value={location}
                placeholder="placeholder" />

            <Button title='button' onPress={props.Search}/>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        margin: 10,
        color: 'white',
        fontSize: 15,
        padding: 10,
        textAlignVertical: 'center',
        maxWidth: 400,
    }
})