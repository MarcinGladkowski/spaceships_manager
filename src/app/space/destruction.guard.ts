import { SpaceShipService } from './space-ship.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard implements CanActivate {

  constructor(private spaceShipService: SpaceShipService,
    private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;
      if (!hasSpaceShips) {
        alert('Nie ma statków w hangarze!');
        this.router.navigateByUrl('/');
      }
      return hasSpaceShips;
    }
}
