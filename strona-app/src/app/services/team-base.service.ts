import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamBaseService {

  TEAMS = [
    new Item('1', 'Marek Michalik', 'michalikmm@gmail.com', 'Proboszcz parafii Ewangelickiej w Wiśle Czarnem'),
    new Item('2', 'Joanna Michalik', 'amichalik83@gmail.com', 'Żona proboszcza w Czarnem'),
    new Item('3', 'Kubegunda Bystra', 'kunegunda@luteranie.pl', 'Główna ławkowa siędząca z tyłu kościoła'),
    new Item('4', 'Grzegorz Brzęczyszczykiewicz', 'jarozpetalem@gmail.com', 'Zawsze śpi na naboeństwie ak kazanie jest ponad 10 minut')
  ];

  getTeams(): Observable<Array<Item>> {
    return of(this.TEAMS);
  }

  getTeamsById(id: string): Item {
    return this.TEAMS.find(e => e.id === id);
  }

}

export class Item {
  constructor(public id: string, public name: string, public email: string, public details: string) {}
}
