import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {

  @Input() eventChild: any; //this event will be passed in from another component


}
