import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabiitDetailComponent } from './habiit-detail.component';

describe('HabiitDetailComponent', () => {
  let component: HabiitDetailComponent;
  let fixture: ComponentFixture<HabiitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabiitDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabiitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
