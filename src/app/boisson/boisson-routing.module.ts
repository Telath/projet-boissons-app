import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonComponent } from './boisson.component';

const routes: Routes = [
  {
    path: '',
    component: BoissonComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoissonRoutingModule { }
