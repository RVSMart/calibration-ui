import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstUpdateComponent } from './inst-update.component';

describe('InstUpdateComponent', () => {
  let component: InstUpdateComponent;
  let fixture: ComponentFixture<InstUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
