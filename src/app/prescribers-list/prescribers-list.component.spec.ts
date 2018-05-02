import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribersListComponent } from './prescribers-list.component';

describe('PrescribersListComponent', () => {
  let component: PrescribersListComponent;
  let fixture: ComponentFixture<PrescribersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
