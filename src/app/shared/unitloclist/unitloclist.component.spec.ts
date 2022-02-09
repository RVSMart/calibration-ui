import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitloclistComponent } from './unitloclist.component';

describe('UnitloclistComponent', () => {
  let component: UnitloclistComponent;
  let fixture: ComponentFixture<UnitloclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitloclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitloclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
