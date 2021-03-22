import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component'; // <== add the imports!
import {Routes} from '@angular/router'

const routes : Routes = [
  {
    path: '',
    component: LoginComponent
  }, //first the path, second the component
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  } // ** means that anything in the url that doesn't match, will get a not found error

]


@NgModule({
  declarations: [
    // importing the components
    AppComponent,
    CoursesComponent,
    NotFoundComponent,
    NavbarComponent,
    FeaturesComponent,
    HomeComponent,
    ContactFormComponent,
    AboutComponent,
    LoginComponent 
  ],
  imports: [
    //here you import all the modules
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)],
  providers: [
    //importing the services
CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
