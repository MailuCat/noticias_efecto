import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganismoComponent } from './veganismo.component';

describe('VeganismoComponent', () => {
  let component: VeganismoComponent;
  let fixture: ComponentFixture<VeganismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganismoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeganismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
