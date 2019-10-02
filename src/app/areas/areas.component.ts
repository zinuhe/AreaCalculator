import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newArea(): void {
    this.router.navigate(['areasDetail']);
  }

}
