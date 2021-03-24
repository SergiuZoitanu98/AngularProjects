import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./_guards/auth-guard.service";
import { RicercaClientiComponent } from "./ricerca-clienti/ricerca-clienti.component";

const routes: Routes = [
  { path: "", canActivate: [AuthGuardService], component: RicercaClientiComponent },
  { path: "ricerca-clienti", canActivate: [AuthGuardService],component:RicercaClientiComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
