import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonListComponent } from './boisson-list.component';

describe('BoissonListComponent', () => {
  let component: BoissonListComponent;
  let fixture: ComponentFixture<BoissonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoissonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
