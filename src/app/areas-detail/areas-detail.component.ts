import { Component, OnInit, Input } from '@angular/core';
import { Area } from '../area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-areas-detail',
  templateUrl: './areas-detail.component.html',
  styleUrls: ['./areas-detail.component.scss']
})
export class AreasDetailComponent implements OnInit {

  @Input() areaId: number;
  detailArea: Area;

  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.getAreaDetail(this.areaId);
  }

  getAreaDetail(id: number): void {
    this.areaService.getArea(id)
      .subscribe(data => this.detailArea = data);
      // .subscribe((data) => {
      //   console.table(data);
      //   this.detailArea = data;
      // });
  }

}
