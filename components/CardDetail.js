import React from 'react';
import {connect} from 'react-redux';
import { red, black, grayPlus } from '../utils/colors'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


class CardDetail extends React.Component { 
    render() {
      let {title} = this.props.navigation.state.params;
      const questions = this.props.allCards[title] && this.props.allCards[title].questions;

      return (
        <View style={styles.container}>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 36}}>{title}</Text>
                    <Text style={{fontSize: 22, marginTop: 12}}>{questions.length} cards
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('NewQuestion', {
                            title,
                            questions,
                        });
                    }}
                    style={styles.addQuestion}>
                    <Text style={styles.addQuestionTitle}>Add Question</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Quiz', {
                            title,
                            questions,
                        });
                    }}
                    style={styles.startQuiz}>
                    <Text style={styles.quizTitle}>Start Quiz</Text>
                </TouchableOpacity>

            </View>
      )
  
    }
  
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    addQuestion: {
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
    addQuestionTitle: {
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


  function mapStateToProps(state) {
    return {
      allCards: state,
    };
}

export default connect(mapStateToProps)(CardDetail);