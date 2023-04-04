import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditForLoanComponent } from './edit-for-loan.component';

describe('EditForLoanComponent', () => {
  let component: EditForLoanComponent;
  let fixture: ComponentFixture<EditForLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditForLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditForLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
