import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo03BindingsComponent } from './demo03-bindings.component';

describe('Demo03BindingsComponent', () => {
  let component: Demo03BindingsComponent;
  let fixture: ComponentFixture<Demo03BindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo03BindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo03BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
