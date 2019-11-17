import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05PipeComponent } from './demo05-pipe.component';

describe('Demo05PipeComponent', () => {
  let component: Demo05PipeComponent;
  let fixture: ComponentFixture<Demo05PipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo05PipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo05PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
