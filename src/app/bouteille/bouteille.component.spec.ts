import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouteilleComponent } from './bouteille.component';

describe('BouteilleComponent', () => {
  let component: BouteilleComponent;
  let fixture: ComponentFixture<BouteilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouteilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouteilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
