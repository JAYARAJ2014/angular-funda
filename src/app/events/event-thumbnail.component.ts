import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {

  @Input() eventChild: any; //this event will be passed in from another component
  @Output() eventClickFromChild = new EventEmitter ();

  handleClickMe() {
    console.log('Works');
    this.eventClickFromChild.emit(this.eventChild.name);

  }
}
