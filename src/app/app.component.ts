import { Component, OnInit } from '@angular/core';
import { ThreeModelsComponent } from './threemodels/threemodels.component';
import { Router, RouterEvent , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isHomepage = true;
  appTitle = 'Double Cube';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        const location = event.url;
        this.isHomepage = location === '/' || location === '/index' ? true : false;
      }
    });
  }
}
