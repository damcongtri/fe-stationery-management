import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequetsComponent } from './create-requets.component';

describe('CreateRequetsComponent', () => {
  let component: CreateRequetsComponent;
  let fixture: ComponentFixture<CreateRequetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRequetsComponent]
    });
    fixture = TestBed.createComponent(CreateRequetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
