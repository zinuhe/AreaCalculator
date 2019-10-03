import { Component, OnInit } from '@angular/core';
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
export class AreasSearchComponent implements OnInit {

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


  // ---Third approach (autocomplete with filter server side)-----------------
  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;

  areas: Area[];

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.areaService.searchAreas(value.toString()))
      )
      .subscribe(data => {
          this.filteredMovies = data;
          console.log(this.filteredMovies);
      });


    /*
    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = '';
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get("http://www.omdbapi.com/?apikey=[YOUR_KEY_HERE]=" + value)
          .pipe(
            finalize(() => {
              this.isLoading = false;
            }),
          )
        )
      )
      .subscribe(data => {
        // if (data['Search'] === undefined) {
        //   this.errorMsg = data['Error'];
        //   this.filteredMovies = [];
        // } else {
        //   this.errorMsg = '';
        //   this.filteredMovies = data['Search'];
        // }
        if (data === undefined) {
          this.errorMsg = data;
          this.filteredMovies = [];
        } else {
          this.errorMsg = '';
          this.filteredMovies = data;
        }

        console.log(this.filteredMovies);
      });
    */
  }
  // -------------------------------------------------------------------------
}
