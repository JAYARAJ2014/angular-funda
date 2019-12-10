import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  constructor() { }

  @Input() sessions: ISession[];
  ngOnInit() {
  }

}
