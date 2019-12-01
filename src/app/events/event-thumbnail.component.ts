import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .pad-left {margin-left: 10px;}
  .well div {color: #bbb;}
  `]
})
export class EventThumbnailComponent {

  @Input() eventChild: any; //this event will be passed in from another component


}
