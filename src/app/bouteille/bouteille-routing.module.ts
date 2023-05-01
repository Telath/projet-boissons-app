import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BouteilleComponent } from './bouteille.component';
import { BouteilleDetailsComponent } from './pages/bouteille-details/bouteille-details.component';

const routes: Routes = [
  {
    path: '',
    component: BouteilleComponent
  },
  {
    path: ':id',
    component: BouteilleDetailsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BouteilleRoutingModule { }
