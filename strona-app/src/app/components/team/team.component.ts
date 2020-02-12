import { Component, OnInit } from '@angular/core';
import { TeamBaseService, Team } from 'src/app/services/team-base.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Array<Team>;
  constructor(private dbService: TeamBaseService) { }

  ngOnInit() {
    this.dbService.getTeams().subscribe(List => {
      this.teams = List;
    });
  }

}
