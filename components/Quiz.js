import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { red, black, grayPlus, white, gray, green } from '../utils/colors'
import CorrectIncorrect from './CorrectIncorrect'

export default class Quiz extends React.Component {

    state = {
        questionControl: 0,
        correctAnswers: 0,
        shouldShowAnswer: false,
        isQuestionAvailable: true
    };

    getAnswer = () => {
        this.setState({ shouldShowAnswer: !this.state.shouldShowAnswer });
    };

    correctAnswer = () => {
        const { questionControl, correctAnswers, isQuestionAvailable } = this.state;
        const { questions } = this.props.navigation.state.params;
 

        this.setState({
            questionControl: questionControl + 1,
            correctAnswers: correctAnswers + 1,
            shouldShowAnswer: false,
            isQuestionAvailable:  (questions.length > (questionControl + 1))
        });
    };

    incorrectAnswer = () => {
        const { questionControl, isQuestionAvailable } = this.state;
        const { questions } = this.props.navigation.state.params;

        this.setState({
            questionControl: this.state.questionControl + 1,
            shouldShowAnswer: false,
            isQuestionAvailable:  (questions.length > (questionControl + 1))
        });
    };

    startQuiz = () => {
        this.setState({ questionControl: 0, correctAnswers: 0, shouldShowAnswer: false });
    };

    backToCards = () => {
        this.props.navigation.goBack();
    }


    render() {
        const { questionControl, correctAnswers, shouldShowAnswer, isQuestionAvailable } = this.state;
        const { questions } = this.props.navigation.state.params;
    
        return (
            <View style={{ flex: 1 }}>
                {isQuestionAvailable ? (
                    <View style={styles.container}>

                        <View style={[styles.group, { justifyContent: 'flex-start', flex: 1 }]}>
                            <View>
                                <Text>{questionControl + 1} / {questions.length}</Text>
                            </View>
                        </View>

                        <View style={[styles.group, { flex: 4 }]}>
                            <View>
                                {shouldShowAnswer ? (
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 36 }}>{questions[questionControl].answer}</Text>

                                        <TouchableOpacity onPress={this.getAnswer}>
                                            <Text style={{ fontSize: 18, color: green }}>Question</Text>
                                        </TouchableOpacity>

                                    </View>) : (
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ fontSize: 36 }}>{questions[questionControl].question}</Text>

                                            <TouchableOpacity onPress={this.getAnswer}>
                                                <Text style={{ fontSize: 18, color: red }}>Answer</Text>
                                            </TouchableOpacity>

                                        </View>
                                    )}
                            </View>
                        </View>


                        <CorrectIncorrect showButtos={shouldShowAnswer} correctAnswer={this.correctAnswer} incorrectAnswer={this.incorrectAnswer} ></CorrectIncorrect>
                    </View>

                ) : (
                        <View style={styles.container}>
                            <Text>Score: {correctAnswers}</Text>

                            <View style={{ alignItems: 'center', justifyContent: 'space-around', flex: 2 }}>
                                <View style={styles.container}>

                                    <TouchableOpacity
                                        onPress={this.backToDeck}
                                        style={styles.startQuiz}>
                                        <Text style={styles.quizTitle}>Start Quiz</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.backToCards}>
                                        <Text style={styles.basckCard}> <Text style={styles.backCardTitle}>Back to Card</Text></Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    basckCard: {
        backgroundColor: grayPlus,
        margin: 24,
        padding: 10,
        borderRadius: 7,
        height: 45,
    },
    startQuiz: {
        backgroundColor: red,
        margin: 24,
        padding: 10,
        height: 45,
        borderRadius: 7,
    },
    backCardTitle: {
        color: black,
        fontSize: 22,
        textAlign: 'center',
    },
    quizTitle: {
        color: black,
        fontSize: 22,
        textAlign: 'center',
    }
});
