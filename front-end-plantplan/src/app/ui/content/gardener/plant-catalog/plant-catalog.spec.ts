import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCatalog } from './plant-catalog';

describe('PlantCatalog', () => {
  let component: PlantCatalog;
  let fixture: ComponentFixture<PlantCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
