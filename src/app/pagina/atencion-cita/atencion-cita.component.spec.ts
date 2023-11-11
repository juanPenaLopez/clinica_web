import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionCitaComponent } from './atencion-cita.component';

describe('AtencionCitaComponent', () => {
  let component: AtencionCitaComponent;
  let fixture: ComponentFixture<AtencionCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtencionCitaComponent]
    });
    fixture = TestBed.createComponent(AtencionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
