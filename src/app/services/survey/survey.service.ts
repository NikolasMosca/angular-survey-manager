import { Injectable } from '@angular/core';
import { Survey } from 'src/app/interfaces/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }

  getSurveys(): Array<Survey> {
    return [
      {
        id: 1,
        title: "Survey",
        questions: [
          {
            title: 'First question?',
            type: "single",
            options: [
              { title: "Yes" }, 
              { title: "No" },
              { title: "Maybe" }
            ],
            correctAnswer: [1, 2]
          }
        ]
      }
    ]
  }
}
