import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo09CartComponent } from './demo09-cart.component';

describe('Demo09CartComponent', () => {
  let component: Demo09CartComponent;
  let fixture: ComponentFixture<Demo09CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo09CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo09CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
