import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo08ServiceComponent } from './demo08-service.component';

describe('Demo08ServiceComponent', () => {
  let component: Demo08ServiceComponent;
  let fixture: ComponentFixture<Demo08ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo08ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo08ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
