import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonComponent } from './boisson.component';
import { BoissonDetailsComponent } from './pages/boisson-details/boisson-details.component';

const routes: Routes = [
  {
    path: '',
    component: BoissonComponent
  },
  {
    path: ':id',
    component: BoissonDetailsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoissonRoutingModule { }
