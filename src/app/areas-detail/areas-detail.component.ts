import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Area } from '../area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-areas-detail',
  templateUrl: './areas-detail.component.html',
  styleUrls: ['./areas-detail.component.scss']
})
export class AreasDetailComponent implements OnInit {

  id: number;
  detailArea: Area;
  addUpdateButton: string;

  constructor(
    private areaService: AreaService,
    private route: ActivatedRoute,
    private location: Location
  ) {
     this.detailArea = new Area(); // Avoid error on *ngIf
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');


    if (this.id && this.id > 0) {
      this.getAreaDetail();
      this.addUpdateButton = 'Updated';
    } else {
      this.detailArea = new Area();
      this.addUpdateButton = 'Add';
    }
  }

  getAreaDetail(): void {
    this.areaService.getArea(this.id)
      .subscribe(data => this.detailArea = data);
      // .subscribe((data) => {
      //   console.table(data);
      //   this.detailArea = data;
      // });
  }

  addUpdateArea(): void {
    if (this.detailArea.id) { // Updated Area
      this.areaService.updateArea(this.detailArea)
      .subscribe(response => {
        this.goBack();
        // this.router.navigate(['areas']);
      });
    } else {  // New Area
      this.areaService.addArea(this.detailArea)
      .subscribe(response => {
        this.goBack();
        // this.router.navigate(['areas']);
      });
    }
  }

  deleteArea(): void {
    this.areaService.deleteArea(this.id)
      .subscribe(response => {
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
