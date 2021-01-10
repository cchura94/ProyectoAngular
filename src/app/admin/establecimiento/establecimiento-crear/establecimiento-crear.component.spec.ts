import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientoCrearComponent } from './establecimiento-crear.component';

describe('EstablecimientoCrearComponent', () => {
  let component: EstablecimientoCrearComponent;
  let fixture: ComponentFixture<EstablecimientoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablecimientoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecimientoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
