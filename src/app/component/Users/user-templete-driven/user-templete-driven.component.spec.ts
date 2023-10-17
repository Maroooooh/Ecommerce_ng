import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTempleteDrivenComponent } from './user-templete-driven.component';

describe('UserTempleteDrivenComponent', () => {
  let component: UserTempleteDrivenComponent;
  let fixture: ComponentFixture<UserTempleteDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTempleteDrivenComponent]
    });
    fixture = TestBed.createComponent(UserTempleteDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
