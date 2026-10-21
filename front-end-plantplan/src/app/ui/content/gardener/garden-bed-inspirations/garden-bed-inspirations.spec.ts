import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenBedInspirations } from './garden-bed-inspirations';

describe('GardenBedInspirations', () => {
  let component: GardenBedInspirations;
  let fixture: ComponentFixture<GardenBedInspirations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenBedInspirations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenBedInspirations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
