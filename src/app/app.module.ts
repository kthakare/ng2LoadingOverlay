//import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from './angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { AboutComponent }      from './about.component';
import { ContactComponent }  from './contact.component';
import { DetailComponent }  from './details.component';
import { SpinnerService} from './spinner-service';
import { SpinnerComponent }  from './spinner.component';
import { Service }          from './service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    DetailComponent,
    SpinnerComponent
  ],

  providers: [Service, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
