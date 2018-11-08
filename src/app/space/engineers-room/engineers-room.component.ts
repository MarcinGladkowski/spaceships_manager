import { Pilot } from './../pilot';
import { OrderFormValue } from './../order-form-value';
import { SpaceShipType } from './../space-ship-type.enum';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { OutgoingMessage } from 'http';
import { SpaceShipService } from '../space-ship.service';
import { SpaceShip } from '../space-ship';

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

  @Output() shipProduced = new EventEmitter<SpaceShip>();

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
          next: (ship) => this.shipProduced.emit(ship),
          complete: () => this.isProducing = false
        });
  }

}
