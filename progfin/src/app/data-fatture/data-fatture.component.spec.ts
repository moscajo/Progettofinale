import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFattureComponent } from './data-fatture.component';

describe('DataFattureComponent', () => {
  let component: DataFattureComponent;
  let fixture: ComponentFixture<DataFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
