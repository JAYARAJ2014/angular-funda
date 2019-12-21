import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {


  constructor(public authService: AuthService, private voterService: VoterService) { }

  @Input() sessions: ISession[];
  @Input() vsibleSessions: ISession[] = [];
  @Input() filterBy: string;
  @Input() sortBy: string;

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.vsibleSessions.sort(sortByNameAsc) : this.vsibleSessions.sort(sortByVotesDesc)
    }
  }
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.vsibleSessions.sort(sortByVotesDesc);
    }
  }
  userHasVoted(session: ISession) {
   return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
  filterSessions(filter: string) {
    if (filter === 'all') {
      this.vsibleSessions = this.sessions.slice(0);
    } else {
      this.vsibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {

  return s2.voters.length - s1.voters.length;
}
