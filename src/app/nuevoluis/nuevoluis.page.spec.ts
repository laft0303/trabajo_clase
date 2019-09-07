import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoluisPage } from './nuevoluis.page';

describe('NuevoluisPage', () => {
  let component: NuevoluisPage;
  let fixture: ComponentFixture<NuevoluisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoluisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoluisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
