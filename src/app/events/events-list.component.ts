import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
  templateUrl: './event-list.component.html'
})
export class EventsListComponent implements OnInit{

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }
  events: IEvent[];

  handleClick(data) {
    this.toastr.success(data);
  }
  ngOnInit() {
     this.events = this.route.snapshot.data['events'];
  }
}
