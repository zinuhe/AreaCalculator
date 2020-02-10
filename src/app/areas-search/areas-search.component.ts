import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators'; // For Third approach

import { Area } from '../area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-areas-search',
  templateUrl: './areas-search.component.html',
  styleUrls: ['./areas-search.component.scss']
})
export class AreasSearchComponent implements OnInit, OnDestroy {

  // ---First approach (normal autocomplete)----------------------------------
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];

  // constructor() { }
  // ngOnInit() { }
  // -------------------------------------------------------------------------

  // ---Second approach (autocomplete with filter)----------------------------
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions: Observable<string[]>;

  // constructor() { }

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges
  //   .pipe(
  //     startWith(''),
  //     map(value => this._filter(value))
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
  // -------------------------------------------------------------------------


  // ---Third approach (autocomplete with filter server side and debouncing)-----------------
  searchAreasCtrl = new FormControl();
  filteredAreas: any;
  isLoading = false;
  errorMsg: string;

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.searchAreasCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap( // implement side effects on the susbcribe
          () => {
            this.errorMsg = '';
            this.filteredAreas = [];
            // this.isLoading = true;
          }
        ),
        // switchMap(value => this.areaService.searchAreas(value.toString()))
        switchMap(
          value => this.areaService.searchAreas(value.toString())
        )
      )
      .subscribe(
        result => {
          if (result) {
            this.filteredAreas = result;
            console.table(this.filteredAreas);
          } else {
              // No data found message
          }
        },
        error => {
          console.log('EE:', error);
        }
      );
  }

  ngOnDestroy() {
    // un-suscribe from observable
  }

  // -------------------------------------------------------------------------
}
