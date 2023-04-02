import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansModuleComponent } from './loans-module.component';

describe('LoansModuleComponent', () => {
  let component: LoansModuleComponent;
  let fixture: ComponentFixture<LoansModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
