import { Pilot } from './../pilot';
import { OrderFormValue } from './../order-form-value';
import { SpaceShipType } from './../space-ship-type.enum';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SpaceShipService } from '../space-ship.service';
import { SpaceShip } from '../space-ship';
import { map } from 'rxjs/operators';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  spaceShipTypes: ShipType[] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ];

  private isProducing: boolean;

  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }

  onSubmit(formValue: OrderFormValue) {
    this.orderSpaceShips(formValue);
  }

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
        .subscribe({
          complete: () => this.isProducing = false
    });
  }

}
