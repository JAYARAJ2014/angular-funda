import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './event-list.component.html'
})
export class EventsListComponent {

  eventParent = {
      id: 1,
      name : ' Angular Connect',
      date: '9/26/2020',
      time : '10:00 am',
      price : '9.99',
      imageUrl : '/assets/images/angularconnect-shield.png',
      location: {
        address : 'Somehwere in Raleigh',
        city: 'Raleigh',
        country: 'USA'
      }
  };

  handleEventClicked(data) {
    console.log('Received' + data);
  }
}
