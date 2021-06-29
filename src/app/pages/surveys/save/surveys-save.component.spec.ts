import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysSaveComponent } from './surveys-save.component';

describe('SurveysSaveComponent', () => {
  let component: SurveysSaveComponent;
  let fixture: ComponentFixture<SurveysSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
