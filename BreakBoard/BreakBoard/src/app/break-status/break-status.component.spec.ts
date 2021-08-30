import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakStatusComponent } from './break-status.component';

describe('BreakStatusComponent', () => {
  let component: BreakStatusComponent;
  let fixture: ComponentFixture<BreakStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
