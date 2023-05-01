import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonCardComponent } from './boisson-card.component';

describe('BoissonCardComponent', () => {
  let component: BoissonCardComponent;
  let fixture: ComponentFixture<BoissonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
