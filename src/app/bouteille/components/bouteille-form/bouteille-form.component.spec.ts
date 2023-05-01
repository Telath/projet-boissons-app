import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouteilleFormComponent } from './bouteille-form.component';

describe('BouteilleFormComponent', () => {
  let component: BouteilleFormComponent;
  let fixture: ComponentFixture<BouteilleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouteilleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouteilleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
