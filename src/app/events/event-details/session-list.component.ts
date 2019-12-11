import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {


  constructor() { }

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
