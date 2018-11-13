import { HttpClient } from '@angular/common/http';

export class HttpClientMock extends HttpClient {
    constructor() {
      super(null);
    }
}
