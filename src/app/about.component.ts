import { Component, OnInit } from '@angular/core';

import { Page }        from './Page';
import { Service } from './service';
import { SpinnerService} from './spinner-service';

@Component({
  //moduleId: module.id,
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
})

export class AboutComponent implements OnInit {
  pages: Page[] = [];

  constructor(private objService: Service,  public spinner: SpinnerService) { }

  ngOnInit(): void {
    this.objService.getInfo()
      .then(pages => {
        this.spinner.stop();
        this.pages = pages
      });
  }

}


