import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientiComponent } from './form-clienti.component';

describe('FormClientiComponent', () => {
  let component: FormClientiComponent;
  let fixture: ComponentFixture<FormClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
