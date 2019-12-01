import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './event-list.component.html'
})
export class EventsListComponent implements OnInit{

  constructor(private eventService: EventService) {
  }
  events: any[];

  handleEventClicked(data) {
    console.log('Received' + data);
  }
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
