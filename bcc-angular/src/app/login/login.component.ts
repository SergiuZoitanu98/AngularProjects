import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginError: boolean;
  loginErrorMessage: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  credentials: {
    password;
    username;
  };

  ngOnInit() {
    this.credentials = { password: "", username: "" };
  }

  login() {
    if (
      this.credentials.password != "admin" &&
      this.credentials.username != "admin" &&
      this.credentials.password != "user" &&
      this.credentials.username != "user"
    ) {
      this.loginError = true;
      this.loginErrorMessage = "Credenziali sbagliate";
    } else {
      this.loginError = false;

      this.authService.login(this.credentials).subscribe((valid) => {
        if (valid) {
          let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
          this.router.navigate([returnUrl || "/home"]);
        }
      });
    }
  }
}
