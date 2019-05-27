import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './home/images/images.component';
import { FacultyComponent } from './faculty/faculty.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =
  [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'faculty', component: FacultyComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImagesComponent,
    FacultyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
