import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo06LianxiComponent } from './demo06-lianxi.component';

describe('Demo06LianxiComponent', () => {
  let component: Demo06LianxiComponent;
  let fixture: ComponentFixture<Demo06LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo06LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo06LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
