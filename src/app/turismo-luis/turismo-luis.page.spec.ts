import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoLuisPage } from './turismo-luis.page';

describe('TurismoLuisPage', () => {
  let component: TurismoLuisPage;
  let fixture: ComponentFixture<TurismoLuisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurismoLuisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoLuisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
