import { PilotRoomComponent } from './../pilot-room/pilot-room.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;

  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new FighterShip());
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

}
