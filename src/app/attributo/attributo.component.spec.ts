import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributoComponent } from './attributo.component';

describe('AttributoComponent', () => {
  let component: AttributoComponent;
  let fixture: ComponentFixture<AttributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
