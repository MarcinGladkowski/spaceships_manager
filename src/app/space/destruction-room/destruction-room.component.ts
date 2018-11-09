import { DestructionFormValue } from './../destruction-form-value';
import { SpaceShipService } from './../space-ship.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css']
})
export class DestructionRoomComponent implements OnInit {

  spaceShips = this.spaceShipService.hangarShips;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {}

  orderDestruction(formValue: DestructionFormValue) {
    this.spaceShipService.removeShip(formValue);
  }

}
