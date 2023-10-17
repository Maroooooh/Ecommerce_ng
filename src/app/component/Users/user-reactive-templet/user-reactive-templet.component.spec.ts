import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveTempletComponent } from './user-reactive-templet.component';

describe('UserReactiveTempletComponent', () => {
  let component: UserReactiveTempletComponent;
  let fixture: ComponentFixture<UserReactiveTempletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserReactiveTempletComponent]
    });
    fixture = TestBed.createComponent(UserReactiveTempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
