import { Component, OnInit } from '@angular/core';
import { TeamBaseService, Team } from 'src/app/services/team-base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams$: Observable<Array<Team>>;

  constructor(private dbService: TeamBaseService) { }

  ngOnInit() {
    this.teams$ = this.dbService.getTeams();
  }
}
