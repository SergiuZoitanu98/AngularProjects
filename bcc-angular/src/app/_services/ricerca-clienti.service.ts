import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RicercaClientiService {
  url = environment.baseUrl;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }
  get token() {
    return sessionStorage.getItem("token");
  }
  cerca(data) {
    let url = this.url + "/api/v1/customer-search";
    return this.http.get<any>(url, {
      params: data,
    });
  }

  getClients(clients) {
    return console.log("clients", clients);
  }

  getFiliali() {
    let url = this.url + "/api/v1/branch-search";
    return this.http.get<any>(url);
  }
  conferma(id, email, telefono, p1, p2, p3, p4, p5, p6, firma) {
    let data = {
      id: id,
      telefono: !!telefono,
      email: !!email,
      p1: p1,
      p2: p2,
      p3: p3,
      p4: p4,
      p5: p5,
      p6: p6,
      firma: firma,
    };
    let url = this.url + "/api/v1/customer-mark-as-edited";
    return this.http.post<any>(url, data, {
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}
