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
  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
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
