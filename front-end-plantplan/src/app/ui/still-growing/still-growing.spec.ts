import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillGrowing } from './still-growing';

describe('StillGrowing', () => {
  let component: StillGrowing;
  let fixture: ComponentFixture<StillGrowing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StillGrowing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StillGrowing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
