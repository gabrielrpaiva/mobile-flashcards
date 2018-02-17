import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { red, black, grayPlus, white, gray, green } from '../utils/colors'


const CorrectIncorrect = (props) => {

    if (props.showButtos) {

        return (
            <View style={{ alignItems: 'center', justifyContent: 'space-around', flex: 2 }}>
                <View style={styles.container}>

                    <TouchableOpacity onPress={props.correctAnswer}>
                        <Text style={[styles.answerButton, { backgroundColor: green }]}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.incorrectAnswer} style={{ paddingTop: 12 }}>
                        <Text style={[styles.answerButton, { backgroundColor: red }]}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View></View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    answerButton: {
        justifyContent: 'center',
        height: 35,
        textAlign: 'center',
        width: 250,
        borderRadius: 7
    }
});

export default CorrectIncorrect;