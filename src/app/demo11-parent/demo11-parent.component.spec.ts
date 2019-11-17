import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo11ParentComponent } from './demo11-parent.component';

describe('Demo11ParentComponent', () => {
  let component: Demo11ParentComponent;
  let fixture: ComponentFixture<Demo11ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo11ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo11ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
