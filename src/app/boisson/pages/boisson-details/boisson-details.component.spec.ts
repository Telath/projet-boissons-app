import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonDetailsComponent } from './boisson-details.component';

describe('BoissonDetailsComponent', () => {
  let component: BoissonDetailsComponent;
  let fixture: ComponentFixture<BoissonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
