import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from './areas/areas.component';
import { AreasDetailComponent } from './areas-detail/areas-detail.component';
import { AreasSearchComponent } from './areas-search/areas-search.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/areas', pathMatch: 'full' },
  { path: 'areas', component: AreasComponent },             // Main page
  { path: 'areasDetail', component: AreasDetailComponent }, // Detail Area page
  { path: 'areasSearch', component: AreasSearchComponent }  // Search Area page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
