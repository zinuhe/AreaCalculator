import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule} from '@angular/material/sort'; // Table sorting
import { MatTableModule} from '@angular/material/table';

import { AreasComponent } from './areas/areas.component';
import { AreasListComponent } from './areas-list/areas-list.component';
import { AreasSearchComponent } from './areas-search/areas-search.component';
import { AreasListObservableComponent } from './areas-list-observable/areas-list-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    AreasListComponent,
    AreasSearchComponent,
    AreasListObservableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
