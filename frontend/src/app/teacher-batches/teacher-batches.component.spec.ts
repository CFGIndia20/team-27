import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBatchesComponent } from './teacher-batches.component';

describe('TeacherBatchesComponent', () => {
  let component: TeacherBatchesComponent;
  let fixture: ComponentFixture<TeacherBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
