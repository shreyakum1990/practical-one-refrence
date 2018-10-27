import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOneComponent } from './crud-one.component';

describe('CrudOneComponent', () => {
  let component: CrudOneComponent;
  let fixture: ComponentFixture<CrudOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
