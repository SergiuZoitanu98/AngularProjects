import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class UserFormServiceService {
  url = environment.baseUrl;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  get token() {
    return sessionStorage.getItem("token");
  }
  cerca(data) {
    let url = this.url + "/api/v1/customer-search";
    return this.http.get<any>(url, {
      params: data,
    });
  }

  getFiliali() {
    let url = this.url + "/api/v1/branch-search";
    return this.http.get<any>(url);
  }
}
