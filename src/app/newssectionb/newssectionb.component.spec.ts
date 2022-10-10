import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssectionbComponent } from './newssectionb.component';

describe('NewssectionbComponent', () => {
  let component: NewssectionbComponent;
  let fixture: ComponentFixture<NewssectionbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewssectionbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewssectionbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
