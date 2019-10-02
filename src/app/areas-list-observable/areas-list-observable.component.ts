import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Area } from '../area';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-areas-list-observable',
  templateUrl: './areas-list-observable.component.html',
  styleUrls: ['./areas-list-observable.component.scss']
})
export class AreasListObservableComponent implements OnInit {

  areas$: Observable<Area[]>;
  columnsOrder: string[] = ['id', 'name', 'width', 'length', 'options'];

  constructor(
    private areaService: AreaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.areas$ = this.areaService.getAreas();
  }

  newArea() {
    // this.areaService.addArea(this.detailArea).subscribe((response) => {
    //   this.router.navigate(['areas']);
    // });
  }

  deleteArea(areaId: number): void {
    this.areaService.deleteArea(areaId)
    .subscribe(response => {
      this.router.navigate(['areasSearch']);
      // this.router.navigate(['areas']);
    });
  }

}
