import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuardService } from "./_guards/auth-guard.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { JwtInterceptor } from "./_interceptors/jwt.interceptor";
import { RicercaClientiComponent } from "./ricerca-clienti/ricerca-clienti.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RicercaClientiService } from "./_services/ricerca-clienti.service";
import { UserformComponent } from "./userform/userform.component";
import { UserTableComponent } from "./user-table/user-table.component";
import { ModalConfirmedComponent } from "./modal-confirmed/modal-confirmed.component";
import { ModalUncofirmedComponent } from "./modal-uncofirmed/modal-uncofirmed.component";
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RicercaClientiComponent,
    NavbarComponent,
    UserformComponent,
    UserTableComponent,
    ModalConfirmedComponent,
    ModalUncofirmedComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    { provide: RicercaClientiService, useClass: RicercaClientiService },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
