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

    console.log('areas-list.components.ts : 24');

    this.areaService.getAreas()
      .subscribe(data => this.areas = data);
      // .subscribe((data) => {
      //   console.log('areas-list.components.ts : 29');
      //   console.log('data: ' + data);
      //   this.areas = data;
      // });

    console.log('areas-list.components.ts : 33');
    console.log('this.areas: ' + this.areas);
  }

}
