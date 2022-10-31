import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HormigaComponent } from './hormiga.component';

describe('HormigaComponent', () => {
  let component: HormigaComponent;
  let fixture: ComponentFixture<HormigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HormigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HormigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
