import { Component, OnInit } from '@angular/core';

import { Page }        from './Page';
import { Service } from './service';
import { SpinnerService} from './spinner-service';

@Component({
  //moduleId: module.id,
  selector: 'about',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})

export class ContactComponent implements OnInit {
  pages: Page[] = [];

  constructor(private objService: Service,  public spinner: SpinnerService) { }

  ngOnInit(): void {

    this.objService.getContact()
      .then(pages => {
        this.spinner.stop();
        this.pages = pages
      });
  }

}


