import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumacorredorComponent } from './pumacorredor.component';

describe('PumacorredorComponent', () => {
  let component: PumacorredorComponent;
  let fixture: ComponentFixture<PumacorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumacorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumacorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
