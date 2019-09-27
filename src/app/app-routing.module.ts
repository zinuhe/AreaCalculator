import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from './areas/areas.component';
import { AreasSearchComponent } from './areas-search/areas-search.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/areas', pathMatch: 'full' },
  { path: 'areas', component: AreasComponent },
  { path: 'areasSearch', component: AreasSearchComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
