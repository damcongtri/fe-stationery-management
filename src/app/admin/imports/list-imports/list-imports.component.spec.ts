import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImportsComponent } from './list-imports.component';

describe('ListImportsComponent', () => {
  let component: ListImportsComponent;
  let fixture: ComponentFixture<ListImportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListImportsComponent]
    });
    fixture = TestBed.createComponent(ListImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
