import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCatalog } from './log-catalog';

describe('LogCatalog', () => {
  let component: LogCatalog;
  let fixture: ComponentFixture<LogCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
