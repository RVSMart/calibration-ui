import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstRegdComponent } from './inst-regd.component';

describe('InstRegdComponent', () => {
  let component: InstRegdComponent;
  let fixture: ComponentFixture<InstRegdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstRegdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstRegdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
