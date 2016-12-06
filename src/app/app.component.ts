import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Component, OnInit } from '@angular/core';
import { Page }        from './Page';
import { Service } from './service';
import { SpinnerComponent} from './spinner-component';
import { SpinnerService} from './spinner-service';
import { Routes, Router, ROUTER_DIRECTIVES, NavigationEnd, ActivatedRoute  } from '@angular/router'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit{

  pages: Page[] = [];

  constructor(private objService: Service, public spinner: SpinnerService, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.spinner.start();
        }
      });
  }

}
