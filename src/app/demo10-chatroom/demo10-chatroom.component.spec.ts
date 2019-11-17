import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10ChatroomComponent } from './demo10-chatroom.component';

describe('Demo10ChatroomComponent', () => {
  let component: Demo10ChatroomComponent;
  let fixture: ComponentFixture<Demo10ChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10ChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10ChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
