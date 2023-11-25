import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsstructuralComponent } from './esstructural.component';

describe('EsstructuralComponent', () => {
  let component: EsstructuralComponent;
  let fixture: ComponentFixture<EsstructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsstructuralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsstructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
