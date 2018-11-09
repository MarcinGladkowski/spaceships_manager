import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';

export class PilotValidators implements Validators {

    static pilotName(formControl: FormControl) {
        return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {pilotName: true};
    }

    static pilotForbidden(formControl: FormControl) {
        if (!formControl.value) { return of(null); }
        return ajax.get(`/api/forbidden-names?name=${formControl.value}`).pipe(
          map((ajaxResponse) => ajaxResponse.response[0] ? {pilotForbidden: true} : null)
        );
      }

}
