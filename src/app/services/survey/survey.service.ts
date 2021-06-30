import { Injectable } from '@angular/core';
import { Survey } from 'src/app/interfaces/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }

  getSurveys(): Array<Survey> {
    try {
      let result = JSON.parse(localStorage.getItem('surveys'))
      return result?.length > 0 ? result : []
    } catch(e) {
      console.log(`[SurveyService Error] =>`, e)
      return []
    }
  }

  getSurvey(id): Survey {
    const surveys = this.getSurveys()
    return surveys.find(s => s.id === id)
  }

  saveSurvey(survey:Survey): void {
    let surveys = this.getSurveys()
    const find = surveys.find(s => s.id === survey.id)
    if(find) {
      surveys = surveys.map(s => s.id === survey.id ? survey : s)
    } else {
      surveys.push(survey)
    }

    localStorage.setItem('surveys', JSON.stringify(surveys))
  }

  deleteSurvey(id) {
    let surveys = this.getSurveys()
    surveys = surveys.filter(s => s.id !== id)
    localStorage.setItem('surveys', JSON.stringify(surveys))
  }

  generateKey() {
    const length = 20;
    var ret = "";
    while (ret.length < length) {
      ret += Math.random().toString(16).substring(2);
    }
    return ret.substring(0,length);
  }
}
