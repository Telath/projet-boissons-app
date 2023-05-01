import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouteilleDetailsComponent } from './bouteille-details.component';

describe('BouteilleDetailsComponent', () => {
  let component: BouteilleDetailsComponent;
  let fixture: ComponentFixture<BouteilleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouteilleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouteilleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
