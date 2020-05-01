import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../firebaseAuth/auth.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SecureInnerpageGuard implements CanActivate {
constructor (
  public authservice : AuthService,
  public router : Router
) {

}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authservice.isLoggedIn) {
      window.alert("You are not allowed to access this URL!");
       this.router.navigate(['dashboard'])
    }
    return true;
  }
}
