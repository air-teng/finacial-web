import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyAccountComponent } from './user-my-account.component';

describe('UserMyAccountComponent', () => {
  let component: UserMyAccountComponent;
  let fixture: ComponentFixture<UserMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
