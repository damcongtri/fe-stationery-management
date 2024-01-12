import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResquestDetailsComponent } from './list-resquest-details.component';

describe('ListResquestDetailsComponent', () => {
  let component: ListResquestDetailsComponent;
  let fixture: ComponentFixture<ListResquestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListResquestDetailsComponent]
    });
    fixture = TestBed.createComponent(ListResquestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
