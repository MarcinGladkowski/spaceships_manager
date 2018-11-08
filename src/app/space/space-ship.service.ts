import { DestructionFormValue } from './destruction-form-value';
import { SpaceShipType } from './space-ship-type.enum';
import { Injectable } from '@angular/core';
import { OrderFormValue } from './order-form-value';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { SpaceShip } from './space-ship';
import { FighterShip } from './fighter-ship';
import { BomberShip } from './bomber-ship';
import { map, take, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

  static shipProductionTime = 2000;
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  constructor() { }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;

    return interval(SpaceShipService.shipProductionTime).pipe(
    map(() => new shipClass()),
    take(formValues.shipCount),
    tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );
  }

  removeShip(destructionformValue: DestructionFormValue) {
    // @TODO Exercise 13 this.hangarShips.pipe();
  }
}
