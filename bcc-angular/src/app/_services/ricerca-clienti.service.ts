import { HttpClient,HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class RicercaClientiService {
    url = environment.baseUrl;
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient, private router: Router) { }
  
    get token() {
        return sessionStorage.getItem("token");
    }
    cerca(data) {
        let url = this.url + "/api/v1/customer-search";
        return this.http
            .get<any>(url,
                {
                    params: data
                }
            )
            .subscribe(
                ((result) => {
                    console.log(result)
                })
            );
    }
    getFiliali() {
        let url = this.url + "/api/v1/branch-search"
        return this.http.get<any>(url).subscribe((result:[]) => {
            console.log(result)
        })
    }
}