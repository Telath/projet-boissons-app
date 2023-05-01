import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoissonRoutingModule } from './boisson-routing.module';
import { BoissonComponent } from './boisson.component';
import { BoissonListComponent } from './pages/boisson-list/boisson-list.component';
import { BoissonService } from './services/boisson.service';
import { SharedModule } from '../shared/shared.module';
import { BoissonFormComponent } from './components/boisson-form/boisson-form.component';
import { BoissonDetailsComponent } from './pages/boisson-details/boisson-details.component';
import { BoissonCardComponent } from './components/boisson-card/boisson-card.component';


@NgModule({
  declarations: [
    BoissonComponent,
    BoissonListComponent,
    BoissonFormComponent,
    BoissonDetailsComponent,
    BoissonCardComponent
  ],
  imports: [
    CommonModule,
    BoissonRoutingModule,
    SharedModule
  ],
  providers: [BoissonService],
})
export class BoissonModule { }
