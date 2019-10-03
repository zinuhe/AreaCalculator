import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { formControl } from 'ReactiveFormsModule';

@Component({
  selector: 'app-areas-search',
  templateUrl: './areas-search.component.html',
  styleUrls: ['./areas-search.component.scss']
})
export class AreasSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // const name = this.group.get('name');

    // name.valueChanges.pipe(
    //   debounceTime(300),
    //   untilDestroyed(this)
    // ).subscribe(() => name.setErrors(Validators.minLength(2)(name)))

  }

}
