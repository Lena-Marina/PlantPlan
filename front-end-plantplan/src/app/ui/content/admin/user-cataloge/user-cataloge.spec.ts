import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCataloge } from './user-cataloge';

describe('UserCataloge', () => {
  let component: UserCataloge;
  let fixture: ComponentFixture<UserCataloge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCataloge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCataloge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
