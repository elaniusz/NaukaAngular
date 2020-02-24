import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamBaseService {

  private teams: Array<Team> = [
    {id: '1', name: 'Marek Michalik', email: 'michalikmm@gmail.com', details: 'Proboszcz parafii Ewangelickiej w Wiśle Czarnem'},
    {id: '2', name: 'Joanna Michalik', email: 'michalikmm@gmail.com', details: 'Żona proboszcza w Czarnem'},
    {id: '3', name: 'Kubegunda Bystra', email: 'michalikmm@gmail.com', details: 'Główna ławkowa siędząca z tyłu kościoła'},
    // tslint:disable-next-line: max-line-length
    {id: '4', name: 'Grzegorz Brzęczyszczykiewicz', email: 'michalikmm@gmail.com', details: 'Zawsze śpi na naboeństwie ak kazanie jest ponad 10 minut'},
    // tslint:disable-next-line: max-line-length
    {id: '5', name: 'Hermenegilda Brzęczyszczykiewicz', email: 'michalikmm@gmail.com', details: 'Zawsze śpi na naboeństwie ak kazanie jest ponad 10 minut'}
  ];

  getTeams(): Observable<Array<Team>> {
    return of(this.teams);
  }

  getTeamsById(id: string): Team {
    return this.teams.find(e => e.id === id);
  }
}

export interface Team {
  id: string;
  name: string;
  email: string;
  details: string;
}
