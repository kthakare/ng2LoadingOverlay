import { Component, OnInit } from '@angular/core';

import { SpinnerService} from './spinner-service';
import { Page } from './Page';
import { Service } from './service';
import { Routes, Router, ROUTER_DIRECTIVES, NavigationEnd, ActivatedRoute  } from '@angular/router'

@Component({
  //moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  directives: [ROUTER_DIRECTIVES]
})

export class DashboardComponent implements OnInit {
  pages: Page[] = [];
  //public isRequesting: boolean;
  constructor(private objService: Service, public spinner: SpinnerService,  private router: Router) {
  }

  ngOnInit(): void {
    //this.isRequesting = true;
      this.objService.getPages()
        .then(pages => {
          this.spinner.stop();
          this.pages = pages
        });

  }

}


