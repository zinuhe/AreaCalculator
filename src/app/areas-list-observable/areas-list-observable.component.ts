import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Area } from '../area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-areas-list-observable',
  templateUrl: './areas-list-observable.component.html',
  styleUrls: ['./areas-list-observable.component.scss']
})
export class AreasListObservableComponent implements OnInit {

  areas$: Observable<Area[]>;
  columnsOrder: string[] = ['id', 'name', 'width', 'length'];

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.areas$ = this.areaService.getAreas();
  }

}
