import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo09ListComponent } from './demo09-list.component';

describe('Demo09ListComponent', () => {
  let component: Demo09ListComponent;
  let fixture: ComponentFixture<Demo09ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo09ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo09ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
