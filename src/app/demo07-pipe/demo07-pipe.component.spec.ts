import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo07PipeComponent } from './demo07-pipe.component';

describe('Demo07PipeComponent', () => {
  let component: Demo07PipeComponent;
  let fixture: ComponentFixture<Demo07PipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo07PipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo07PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
