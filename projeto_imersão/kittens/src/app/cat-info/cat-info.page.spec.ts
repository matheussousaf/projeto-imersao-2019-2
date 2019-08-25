import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatInfoPage } from './cat-info.page';

describe('CatInfoPage', () => {
  let component: CatInfoPage;
  let fixture: ComponentFixture<CatInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
