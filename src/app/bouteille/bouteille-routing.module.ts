import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BouteilleComponent } from './bouteille.component';

const routes: Routes = [
  {
    path: '',
    component: BouteilleComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BouteilleRoutingModule { }
