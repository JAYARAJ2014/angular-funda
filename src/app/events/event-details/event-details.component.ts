import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px;}
  .event-image {height: 100px;}
  a {cursor: pointer}
  `]
})


export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  constructor(private eventService: EventService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log('id is ' + id);
    this.event = this.eventService.getEvent(id);
  }
  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    const nextId = maxId + 1;
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAdd() {
    this.addMode = false;
  }



}
