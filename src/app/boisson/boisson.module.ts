import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoissonRoutingModule } from './boisson-routing.module';
import { BoissonComponent } from './boisson.component';
import { BoissonListComponent } from './pages/boisson-list/boisson-list.component';
import { BoissonService } from './services/boisson.service';
import { SharedModule } from '../shared/shared.module';
import { BoissonFormComponent } from './components/boisson-form/boisson-form.component';


@NgModule({
  declarations: [
    BoissonComponent,
    BoissonListComponent,
    BoissonFormComponent
  ],
  imports: [
    CommonModule,
    BoissonRoutingModule,
    SharedModule
  ],
  providers: [BoissonService],
})
export class BoissonModule { }
