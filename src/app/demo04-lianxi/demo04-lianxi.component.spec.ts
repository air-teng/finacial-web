import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo04LianxiComponent } from './demo04-lianxi.component';

describe('Demo04LianxiComponent', () => {
  let component: Demo04LianxiComponent;
  let fixture: ComponentFixture<Demo04LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo04LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo04LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
