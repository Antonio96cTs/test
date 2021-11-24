import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitadoDatosUserComponent } from './litado-datos-user.component';

describe('LitadoDatosUserComponent', () => {
  let component: LitadoDatosUserComponent;
  let fixture: ComponentFixture<LitadoDatosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitadoDatosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitadoDatosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
