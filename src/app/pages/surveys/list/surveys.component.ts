import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Survey } from 'src/app/interfaces/survey';
import { SurveyService } from 'src/app/services/survey/survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  surveys: Array<Survey> = []
  route = {
    create: () => '/surveys/create',
    edit: (id) => `/surveys/edit/${id}`,
    generate: () => `/surveys/generate`
  }

  constructor(private surveyService: SurveyService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getSurveys()
  }

  getSurveys() {
    this.surveys = this.surveyService.getSurveys()
  }

  onDelete(id) {
    this.surveyService.deleteSurvey(id)
    this.getSurveys()
    this.snackBar.open('Survey deleted!', 'Undo', {
      duration: 3000
    });
  }
}
