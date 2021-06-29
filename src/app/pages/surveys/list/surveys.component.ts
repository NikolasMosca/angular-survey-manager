import { Component, OnInit } from '@angular/core';
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
    edit: (id) => `/surveys/edit/${id}`
  }

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveys = this.surveyService.getSurveys()
  }

}
