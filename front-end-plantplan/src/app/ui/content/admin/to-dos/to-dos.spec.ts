import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDos } from './to-dos';

describe('ToDos', () => {
  let component: ToDos;
  let fixture: ComponentFixture<ToDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
