import { Component } from '@angular/core';

@Component({
  selector: 'app-surveys-save',
  templateUrl: './surveys-save.component.html',
  styleUrls: ['./surveys-save.component.scss']
})
export class SurveysSaveComponent {
  title = ""
  questions = []
  options = []
  correctAnswer = []
  route = {
    undo: () => `/surveys`
  }

  addQuestion() {
    this.questions.push({
      title: "",
      type: "single",
      options: [],
      correctAnswer: []
    })
  }

  getIconOption(question, index: number): string {
    return question.correctAnswer.includes(index) ? 'check' : 'clear'
  }

  getColorOption(question, index: number): string {
    return question.correctAnswer.includes(index) ? 'primary' : 'warn'
  }

  setCorrectAnswer(question, index: number): void {
    if(question.correctAnswer.includes(index)) {
      question.correctAnswer = question.correctAnswer.filter(option => option !== index)
    } else {
      question.correctAnswer.push(index)
    }
  }

}
