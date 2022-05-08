import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private auth: FirebaseService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.auth.user$.pipe(
      take(1), map(user => user && user.roles.includes('secretariat') ? true: false),
      tap( isAdmin => {
        if( !isAdmin)
        {
          console.log('Acces denied - Admin only area')
        }
      })
    );
  }

  menuAuthenticated(role) {
    return this.auth.user$.pipe(
      take(1), map(user => user && user.roles.includes(role) ? true: false),
    );
    
  }
  
}
