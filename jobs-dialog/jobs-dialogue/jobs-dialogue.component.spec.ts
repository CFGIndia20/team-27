import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDialogueComponent } from './jobs-dialogue.component';

describe('JobsDialogueComponent', () => {
  let component: JobsDialogueComponent;
  let fixture: ComponentFixture<JobsDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
