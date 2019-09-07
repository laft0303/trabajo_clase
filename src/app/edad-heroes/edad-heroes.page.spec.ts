import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdadHeroesPage } from './edad-heroes.page';

describe('EdadHeroesPage', () => {
  let component: EdadHeroesPage;
  let fixture: ComponentFixture<EdadHeroesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdadHeroesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdadHeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
