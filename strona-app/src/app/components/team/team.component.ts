import { Component, OnInit } from '@angular/core';
import { TeamBaseService, Item } from 'src/app/services/team-base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams$: Observable<Array<Item>>;

  constructor(private dbService: TeamBaseService) { }

  ngOnInit() {
    this.teams$ = this.dbService.getTeams();
  }

}
