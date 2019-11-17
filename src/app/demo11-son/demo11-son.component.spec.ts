import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo11SonComponent } from './demo11-son.component';

describe('Demo11SonComponent', () => {
  let component: Demo11SonComponent;
  let fixture: ComponentFixture<Demo11SonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo11SonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo11SonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
