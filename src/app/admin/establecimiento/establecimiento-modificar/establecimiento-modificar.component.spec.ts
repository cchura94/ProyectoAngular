import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecimientoModificarComponent } from './establecimiento-modificar.component';

describe('EstablecimientoModificarComponent', () => {
  let component: EstablecimientoModificarComponent;
  let fixture: ComponentFixture<EstablecimientoModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablecimientoModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecimientoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
