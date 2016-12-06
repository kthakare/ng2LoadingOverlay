import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { AboutComponent }      from './about.component';
import { ContactComponent }  from './contact.component';
import { DetailComponent }  from './details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent   },
  { path: 'about', component: AboutComponent   },
  { path: 'contact',component: ContactComponent    },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}

