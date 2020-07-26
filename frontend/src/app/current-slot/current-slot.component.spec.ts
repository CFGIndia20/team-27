import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSlotComponent } from './current-slot.component';

describe('CurrentSlotComponent', () => {
  let component: CurrentSlotComponent;
  let fixture: ComponentFixture<CurrentSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
