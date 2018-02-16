import React from 'react';
import { connect } from 'react-redux';
import { red, black, grayPlus, white, gray } from '../utils/colors'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { addQuestionInCard } from '../utils/api'
import { addQuestion } from '../actions/index'


class NewQuestion extends React.Component {

    state = {
        question: '',
        answer: ''
    };



    prepareQuestion = () => {

        const { question, answer } = this.state;
        const { title, questions } = this.props.navigation.state.params;
        const { addQuestion } = this.props;

        if (question === '') {
            Alert.alert('Attention', 'Please, you need to insert your qusetion');
            return;
        }
        if (answer === '') {
            Alert.alert('Attention', 'Please, you need to insert your answer');
            return;
        }

        const card = { title, questions, question, answer };

        addQuestion(card);

        addQuestionInCard({
            card: { question, answer },
            cardName: title
        }).then(
            Alert.alert('Successful', 'Your question was successfully add',
                [
                    {
                        text: 'OK', onPress: () =>
                            this.props.navigation.goBack()
                    }
                ], )
        );


    };

    render() {
        const { question, answer } = this.state;

        return (
            <View style={style.container}>
                <Text>Question is </Text>
                <TextInput
                    defaultValue="Question"
                    value={question}
                    style={style.input}
                    onChangeText={question => this.setState({ question })} />
                <Text>Answer is </Text>
                <TextInput
                    defaultValue="Answer"
                    value={answer}
                    style={style.input}
                    onChangeText={answer => this.setState({ answer })} />

                <TouchableOpacity
                    onPress={this.prepareQuestion}
                    style={style.sendQuestionButton}>
                    <Text style={style.sendQuestionText}>Send Question</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    input: {
        width: 300,
        height: 56,
        padding: 12,
        borderWidth: 1,
        borderColor: gray,
        margin: 16
    },
    sendQuestionButton: {
        backgroundColor: red,
        padding: 12,
        height: 44,
        borderRadius: 7
    },
    sendQuestionText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
});

function mapStateToProps(state) {
    return {
        cards: state,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (card) => dispatch(addQuestion(card)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);