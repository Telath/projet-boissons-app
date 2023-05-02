import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoissonRoutingModule } from './boisson-routing.module';
import { BoissonComponent } from './boisson.component';
import { BoissonListComponent } from './pages/boisson-list/boisson-list.component';
import { BoissonService } from './services/boisson.service';
import { SharedModule } from '../shared/shared.module';
import { BoissonFormComponent } from './components/boisson-form/boisson-form.component';
import { BoissonDetailsComponent } from './pages/boisson-details/boisson-details.component';
import { BouteilleService } from '../bouteille/services/bouteille.service';


@NgModule({
  declarations: [
    BoissonComponent,
    BoissonListComponent,
    BoissonFormComponent,
    BoissonDetailsComponent,
  ],
  imports: [
    CommonModule,
    BoissonRoutingModule,
    SharedModule
  ],
  providers: [
    BoissonService,
    BouteilleService
  ],
})
export class BoissonModule { }
