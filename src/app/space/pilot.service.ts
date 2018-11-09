import { PilotAttrs } from './pilot-attrs';
import { Pilot } from './pilot';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PilotService {
  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>('/api/pilots').pipe(
      map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number) {
    return this.http.get<PilotAttrs>(`/api/pilots/${id}`).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  savePilot(pilotAttrs: PilotAttrs) {
    return this.updatePilot(pilotAttrs);
  }

  private createPilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.post(`/api/pilots`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  private updatePilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.put(`/api/pilots/${data.id}`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }
}
