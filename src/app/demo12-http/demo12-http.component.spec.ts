import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo12HttpComponent } from './demo12-http.component';

describe('Demo12HttpComponent', () => {
  let component: Demo12HttpComponent;
  let fixture: ComponentFixture<Demo12HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo12HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
