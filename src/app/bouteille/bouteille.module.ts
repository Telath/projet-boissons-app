import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BouteilleRoutingModule } from './bouteille-routing.module';
import { BouteilleComponent } from './bouteille.component';
import { BouteilleListComponent } from './pages/bouteille-list/bouteille-list.component';
import { BouteilleService } from './services/bouteille.service';
import { SharedModule } from '../shared/shared.module';
import { BouteilleFormComponent } from './components/bouteille-form/bouteille-form.component';
import { BouteilleDetailsComponent } from './pages/bouteille-details/bouteille-details.component';
import { BouteilleCardComponent } from './components/bouteille-card/bouteille-card.component';
import { BoissonService } from '../boisson/services/boisson.service';


@NgModule({
  declarations: [
    BouteilleComponent,
    BouteilleListComponent,
    BouteilleFormComponent,
    BouteilleDetailsComponent,
    BouteilleCardComponent
  ],
  imports: [
    CommonModule,
    BouteilleRoutingModule,
    SharedModule
  ],
  providers: [
    BouteilleService
  ],
})
export class BouteilleModule { }
