import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey/survey.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-surveys-save',
  templateUrl: './surveys-save.component.html',
  styleUrls: ['./surveys-save.component.scss']
})
export class SurveysSaveComponent {
  //Data
  id = null
  title = ""
  questions = []

  //Errors management
  errors: any = {
    title: "",
    questions: []
  }
  errorQuestion = false

  route = {
    undo: () => `/surveys`
  }

  constructor(private surveyService: SurveyService, private router: Router, private snackBar: MatSnackBar, private currentRoute: ActivatedRoute) {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];

      if(this.id) {
        const {title, questions} = this.surveyService.getSurvey(this.id)
        this.title = title 
        this.questions = questions
      }
    });
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

  onChangeQuestionType(question):void {
    if(question.type === 'single') {
      question.correctAnswer = question.correctAnswer.sort().filter((q, i) => i === 0)
    }
  }

  setCorrectAnswer(question, index: number): void {
    if(question.correctAnswer.includes(index)) {
      question.correctAnswer = question.correctAnswer.filter(option => option !== index)
    } else {
      if(question.type === 'single') {
        question.correctAnswer = []
      }
      question.correctAnswer.push(index)
    }
  }

  checkInsert(item: any): boolean {
    const result = item?.length > 0
    if(!result) this.errorQuestion = true
    return result
  }

  onSave(): void {
    this.errorQuestion = false
    this.errors = {
      title: "",
      questions: []
    }

    if(this.title.length === 0) {
      this.errors.title = "Title is required"
      return
    }
    
    if(this.questions.length === 0) {
      this.errors.title = "Survey doesn't have any questions, please create at least one question"
      return
    }

    this.errors.questions = this.questions.map((question) => ({
      title: this.checkInsert(question.title) ? '' : 'Title is required',
      options: question.options.map((option) => ({
        title: this.checkInsert(option.title) ?'' : 'Option is required'
      }))
    }))
    if(this.errorQuestion) {
      return 
    }

    this.surveyService.saveSurvey({
      id: this.id || this.surveyService.generateKey(),
      title: this.title,
      questions: this.questions
    })

    this.snackBar.open('Survey saved!');
    this.router.navigateByUrl(this.route.undo())
  }

}
