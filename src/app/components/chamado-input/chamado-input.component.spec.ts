import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoInputComponent } from './chamado-input.component';

describe('ChamadoInputComponent', () => {
  let component: ChamadoInputComponent;
  let fixture: ComponentFixture<ChamadoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
