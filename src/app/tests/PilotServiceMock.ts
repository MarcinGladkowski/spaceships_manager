import { PilotService } from '../space/pilot.service';

export class PilotServiceMock extends PilotService {
    constructor() {
      super(null);
    }
}
