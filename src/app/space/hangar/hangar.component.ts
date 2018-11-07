import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new BomberShip(new Pilot('Elon Musk')));
    this.spaceShips.push(new FighterShip());
  }

}
