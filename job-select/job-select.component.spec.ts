import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSelectComponent } from './job-select.component';

describe('JobSelectComponent', () => {
  let component: JobSelectComponent;
  let fixture: ComponentFixture<JobSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
