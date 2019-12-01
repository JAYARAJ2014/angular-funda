import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .thumbnail {min-height: 210px;}
  .pad-left {margin-left: 10px;}
  .well div {color: #bbb;}
  .green { color: #003300 !important;}
  .bold { font-weight: bold;}
  `]
})
export class EventThumbnailComponent {

  @Input() eventChild: any; //this event will be passed in from another component

  getStartTimeClass() {
    const isEarlyStart = this.eventChild &&  this.eventChild.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }

}
