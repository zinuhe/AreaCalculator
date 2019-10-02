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

  constructor(
    private areaService: AreaService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    // this.detailArea = new Area();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getAreaDetail();
  }

  getAreaDetail(): void {
    // const id = +this.route.snapshot.paramMap.get('id');

    this.areaService.getArea(this.id)
      .subscribe(data => this.detailArea = data);
      // .subscribe((data) => {
      //   console.table(data);
      //   this.detailArea = data;
      // });
  }

  // addArea() {
  //   this.areaService.addArea(this.detailArea).subscribe((response) => {
  //     this.router.navigate(['areas']);
  //   });
  // }

  updateArea(): void {
    this.areaService.updateArea(this.detailArea)
      .subscribe(response => {
        this.location.back();
        // this.router.navigate(['areas']);
      });
  }

  deleteArea(): void {
    this.areaService.deleteArea(this.id)
      .subscribe(response => {
        this.location.back();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
