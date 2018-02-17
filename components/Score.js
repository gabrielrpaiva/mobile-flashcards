import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { red, black, grayPlus, white, gray, green } from '../utils/colors'


const ScoreResult = (props) => {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 36 }}>Yours score was: {props.correctAnswers}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ScoreResult;