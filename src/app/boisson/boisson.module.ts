import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoissonRoutingModule } from './boisson-routing.module';
import { BoissonComponent } from './boisson.component';
import { BoissonListComponent } from './pages/boisson-list/boisson-list.component';
import { BoissonService } from './services/boisson.service';


@NgModule({
  declarations: [
    BoissonComponent,
    BoissonListComponent
  ],
  imports: [
    CommonModule,
    BoissonRoutingModule
  ],
  providers: [BoissonService],
})
export class BoissonModule { }
