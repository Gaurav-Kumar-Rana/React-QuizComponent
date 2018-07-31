import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      quiz_position:quizData.quiz_questions.length - 1,
      
    }
  }
  render(){
    const isQuizEnd = false;
    var QuizConst = isQuizEnd ? <QuizEnd isQuizEnd={!isQuizEnd} /> : <QuizQuestion isQuizEnd={isQuizEnd} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
    return(
      <div>
          {QuizConst}
      </div>
      )
  }
}

export default Quiz;