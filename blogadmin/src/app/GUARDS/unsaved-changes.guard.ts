import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentLeave{
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave) {
    if(component.canLeave) {
      return component.canLeave();
    } 
    return true;
  }
  
}
