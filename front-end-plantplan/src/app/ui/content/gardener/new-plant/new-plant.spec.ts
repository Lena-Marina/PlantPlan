import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlant } from './new-plant';

describe('NewPlant', () => {
  let component: NewPlant;
  let fixture: ComponentFixture<NewPlant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPlant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
