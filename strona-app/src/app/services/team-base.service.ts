import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TeamBaseService {

  TEAMS = [
    new Team('1', 'Marek Michalik', 'Proboszcz parafii Ewangelickiej w Wiśle Czarnem'),
    new Team('2', 'Joanna Michalik', 'Żona proboszcza w Czarnem'),
    new Team('3', 'Kubegunda Bystra', 'Główna ławkowa siędząca z tyłu kościoła'),
    new Team('4', 'Grzegorz Brzęczyszczykiewicz', 'Zawsze śpi na naboeństwie ak kazanie jest ponad 10 minut')
  ];

  getTeams(): Observable<Array<Team>> {
    return Observable.of(this.TEAMS);
  }

  getTeamsById(id: string): Team {
    return this.TEAMS.find(e => e.id === id);
  }

}

export class Team {
  constructor(public id: string, public name: string, public details: string) {}
}
