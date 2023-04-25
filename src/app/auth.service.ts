import { Injectable } from "@angular/core";
import { Observable, delay, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggin: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const isLoggin = name == "pikachu" && password == "pikachu";

    return of(isLoggin).pipe(
      delay(1000),
      tap((isLoggin) => (this.isLoggin = isLoggin))
    );
  }

  logout() {
    this.isLoggin = false;
  }
}
