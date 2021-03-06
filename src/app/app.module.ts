import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule} from '@angular/material/sort'; // Table sorting
import { MatTableModule} from '@angular/material/table';

import { AreasComponent } from './areas/areas.component';
import { AreasListComponent } from './areas-list/areas-list.component';
import { AreasSearchComponent } from './areas-search/areas-search.component';
import { AreasListObservableComponent } from './areas-list-observable/areas-list-observable.component';
import { AreasDetailComponent } from './areas-detail/areas-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    AreasDetailComponent,
    AreasListComponent,
    AreasListObservableComponent,
    AreasSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    // FormControl,
    FormsModule,  // <input [(ngModel)]="object.property">
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
