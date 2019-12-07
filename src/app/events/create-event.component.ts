import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from './shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10px;}
  .error input {background-color:#ffcccc;}
`]
})
export class CreateEventComponent implements OnInit {

  newEvent: IEvent;
  isDirty = true;
  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
  }
  saveEvent(formValues) {
    console.log(formValues);
    this.isDirty = false;
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);

  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
