import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImportDetailsComponent } from './list-import-details.component';

describe('ListImportDetailsComponent', () => {
  let component: ListImportDetailsComponent;
  let fixture: ComponentFixture<ListImportDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListImportDetailsComponent]
    });
    fixture = TestBed.createComponent(ListImportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
