import { FighterShip } from './fighter-ship';
import { SpaceShipType } from './space-ship-type.enum';
import { HttpClient } from '@angular/common/http';
import { SpaceShipService } from './space-ship.service';
import { HttpClientMock } from './pilot.service.spec';
import { OrderFormValue } from './order-form-value';
import { map } from 'rxjs/operators';
import { SpaceShip } from './space-ship';


fdescribe('SpaceShipService', () => {

  let spaceShipService: SpaceShipService;
  let http: HttpClient;

  beforeEach(() => {
    http = new HttpClientMock();
    spaceShipService = new SpaceShipService();
  });

  describe('produceShips', () => {

    beforeEach(() => {
        const orderFormValue: OrderFormValue = {shipCount: 2, shipType: SpaceShipType.Fighter};
        spaceShipService.produceShips(orderFormValue);
    });

    it('should hangar has one ship', () => {
      spaceShipService.hangarShips.pipe(map((ships) =>
        expect(ships.length).toEqual(1)
        )
      );
    });

    it('should hangar has one fighter ship', () => {
      spaceShipService.hangarShips.pipe(map((ship) => {
        expect(ship instanceof SpaceShip).toBeTruthy();
        expect(ship instanceof FighterShip).toBeTruthy();
      }));
    });

  });



});
