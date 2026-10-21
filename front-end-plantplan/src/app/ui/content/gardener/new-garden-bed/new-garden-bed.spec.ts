import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGardenBed } from './new-garden-bed';

describe('NewGardenBed', () => {
  let component: NewGardenBed;
  let fixture: ComponentFixture<NewGardenBed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGardenBed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGardenBed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
