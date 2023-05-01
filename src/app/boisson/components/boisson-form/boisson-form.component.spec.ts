import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonFormComponent } from './boisson-form.component';

describe('BoissonFormComponent', () => {
  let component: BoissonFormComponent;
  let fixture: ComponentFixture<BoissonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
