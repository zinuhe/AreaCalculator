import { Component, OnInit } from '@angular/core';

import { Area } from '../area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.scss']
})
export class AreasListComponent implements OnInit {

  areas: Area[];

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.getAreas();
  }

  getAreas(): void {
    this.areaService.getAreas()
      .subscribe(areas => this.areas = areas);
  }

}
