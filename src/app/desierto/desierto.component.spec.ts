import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiertoComponent } from './desierto.component';

describe('DesiertoComponent', () => {
  let component: DesiertoComponent;
  let fixture: ComponentFixture<DesiertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesiertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
