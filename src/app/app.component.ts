import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AreaCalculator';

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  // Links menu array
  links = [
    { name: 'Areas',            url: 'areas',       icon: 'home' },
    { name: 'Search my rooms',  url: 'areasSearch', icon: 'search' }
  ];
}
