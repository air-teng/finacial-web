import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo09HeaderComponent } from './demo09-header.component';

describe('Demo09HeaderComponent', () => {
  let component: Demo09HeaderComponent;
  let fixture: ComponentFixture<Demo09HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo09HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo09HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
