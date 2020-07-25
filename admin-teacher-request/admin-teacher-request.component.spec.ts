import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherRequestComponent } from './admin-teacher-request.component';

describe('AdminTeacherRequestComponent', () => {
  let component: AdminTeacherRequestComponent;
  let fixture: ComponentFixture<AdminTeacherRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
