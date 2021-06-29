import { SurveysSaveComponent } from './pages/surveys/save/surveys-save.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveysComponent } from './pages/surveys/list/surveys.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: 'surveys/create', component: SurveysSaveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
