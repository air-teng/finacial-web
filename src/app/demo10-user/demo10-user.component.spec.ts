import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10UserComponent } from './demo10-user.component';

describe('Demo10UserComponent', () => {
  let component: Demo10UserComponent;
  let fixture: ComponentFixture<Demo10UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
