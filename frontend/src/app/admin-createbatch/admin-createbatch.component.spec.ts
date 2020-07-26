import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatebatchComponent } from './admin-createbatch.component';

describe('AdminCreatebatchComponent', () => {
  let component: AdminCreatebatchComponent;
  let fixture: ComponentFixture<AdminCreatebatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreatebatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatebatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
