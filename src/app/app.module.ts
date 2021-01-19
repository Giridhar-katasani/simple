import { RouterModule } from '@angular/router';

import { CoursesComponent } from './courses-rendereing/courses.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { componentFactoryName } from '@angular/compiler';
import { IndUserComponent } from './ind-user/ind-user.component';
import { NavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import {PersonComponent} from './person/person.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    SignupFormComponent,
    CoursesComponent,
    FormArrayComponent,
    UserComponent,
    NavbarComponent,
    IndUserComponent,
    NavbarBrandComponent,
    PersonComponent, 
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      {
        path:'heroForm',
        component:HeroFormComponent
      },
      {
        path:'user/:id/:title',
        component:IndUserComponent
      },
      {
        path:'user',
        component:UserComponent
      }
    ])
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
