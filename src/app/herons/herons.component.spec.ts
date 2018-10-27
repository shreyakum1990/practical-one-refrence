import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeronsComponent } from './herons.component';

describe('HeronsComponent', () => {
  let component: HeronsComponent;
  let fixture: ComponentFixture<HeronsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeronsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
