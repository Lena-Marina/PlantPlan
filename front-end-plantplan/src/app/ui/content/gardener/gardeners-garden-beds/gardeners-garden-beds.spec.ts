import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenersGardenBeds } from './gardeners-garden-beds';

describe('GardenersGardenBeds', () => {
  let component: GardenersGardenBeds;
  let fixture: ComponentFixture<GardenersGardenBeds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenersGardenBeds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenersGardenBeds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
