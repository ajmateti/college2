import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './home/images/images.component';
import { FacultyComponent } from './faculty/faculty.component';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DepartmentComponent } from './department/department.component';

const appRoutes: Routes =
  [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'faculty', component: FacultyComponent
    },
    {
      path: 'dept/:id', component: DepartmentComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImagesComponent,
    FacultyComponent,
    PrincipalComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
