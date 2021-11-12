import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfatturaComponent } from './editfattura.component';

describe('EditfatturaComponent', () => {
  let component: EditfatturaComponent;
  let fixture: ComponentFixture<EditfatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
