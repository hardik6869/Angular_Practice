import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabiitItemComponent } from './habiit-item.component';

describe('HabiitItemComponent', () => {
  let component: HabiitItemComponent;
  let fixture: ComponentFixture<HabiitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabiitItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabiitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
