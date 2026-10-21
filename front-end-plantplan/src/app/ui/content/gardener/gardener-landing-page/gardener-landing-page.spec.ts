import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenerLandingPage } from './gardener-landing-page';

describe('GardenerLandingPage', () => {
  let component: GardenerLandingPage;
  let fixture: ComponentFixture<GardenerLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenerLandingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenerLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
