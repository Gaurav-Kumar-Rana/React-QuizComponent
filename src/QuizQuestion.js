import  React, { Component } from "react"

import QuizQuestionButton from './QuizQuestionButton.js'


class QuizQuestion extends Component{
    constructor(props){
        super(props);
        this.props = {
            quiz_question:{}
        }
    }
    render(){
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <QuizQuestionButton button_text={this.props.quiz_question.answer_options}/>
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion
