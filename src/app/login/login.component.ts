import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté.";
  name: string = 'pikachu';
  password: string = 'pikachu';
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggin) {
      this.message = "Vous ete connecter";
    } else {
      this.message = "Identifiant ou mot de passe incorrect";
    }
  }

  login() {
    this.message = "Patientez ...";
    this.auth.login(this.name, this.password).subscribe((isLoggin: boolean) => {
      this.setMessage();
      if (isLoggin) {
        this.router.navigate(["/pokemons"]);
      } else {
        this.password = "";
        this.router.navigate(["/login"]);
      }
    });
  }
  logout() {
    this.auth.logout();
    this.message = "Vous etes deconnecter";
  }
}
