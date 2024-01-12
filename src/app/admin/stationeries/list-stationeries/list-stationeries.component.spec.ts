import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStationeriesComponent } from './list-stationeries.component';

describe('ListStationeriesComponent', () => {
  let component: ListStationeriesComponent;
  let fixture: ComponentFixture<ListStationeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStationeriesComponent]
    });
    fixture = TestBed.createComponent(ListStationeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
