import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './event-list.component.html'
})
export class EventsListComponent implements OnInit{

  constructor(private eventService: EventService, private toastr: ToastrService) {
  }
  events: any;

  handleClick(data) {
    this.toastr.success(data);
  }
  ngOnInit() {
     this.eventService.getEvents().subscribe(events => {this.events = events; } );
  }
}
