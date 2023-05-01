import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouteilleCardComponent } from './bouteille-card.component';

describe('BouteilleCardComponent', () => {
  let component: BouteilleCardComponent;
  let fixture: ComponentFixture<BouteilleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouteilleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouteilleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
