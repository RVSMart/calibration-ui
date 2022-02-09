import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdempComponent } from './regdemp.component';

describe('RegdempComponent', () => {
  let component: RegdempComponent;
  let fixture: ComponentFixture<RegdempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
