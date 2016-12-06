/**
 * Created by kthakare on 11/30/2016.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Page } from './page';
import { Service } from './service';

@Component({
  //moduleId: module.id,
  selector: 'my-page-detail',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.css' ]
})

export class DetailComponent implements OnInit {
  page: Page;

  constructor(
    private objService: Service,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.objService.getPage(+params['id']))
      .subscribe(page => this.page = page);
  }

  /*save(): void {
   this.heroService.update(this.hero)
   .then(() => this.goBack());
   }*/

  goBack(): void {
    this.location.back();
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
