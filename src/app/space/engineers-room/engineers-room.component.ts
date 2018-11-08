import { OrderFormValue } from './../order-form-value';
import { SpaceShipType } from './../space-ship-type.enum';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue: OrderFormValue) {
    console.log(formValue);
  }

}
