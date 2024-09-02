import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuedetailComponent } from './revenuedetail.component';

describe('RevenuedetailComponent', () => {
  let component: RevenuedetailComponent;
  let fixture: ComponentFixture<RevenuedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
