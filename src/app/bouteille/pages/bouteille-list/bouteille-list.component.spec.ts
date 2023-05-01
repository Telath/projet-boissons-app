import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouteilleListComponent } from './bouteille-list.component';

describe('BouteilleListComponent', () => {
  let component: BouteilleListComponent;
  let fixture: ComponentFixture<BouteilleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouteilleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouteilleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
