import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable() // important for services
export class EventService {

  getEvents(): any {
    const subject = new Subject(); // observable
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 3000);
    return subject;
  }
  getEvent(id: number) {
    console.log('id in service is ' + id);
    return EVENTS.find(event => event.id === id);
  }
}
const EVENTS = [
  {
    id: 1,
    name: ' Angular Connect',
    date: '9/26/2020',
    time: '8:00 am',
    price: '9.99',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Somehwere in Raleigh',
      city: 'Raleigh',
      country: 'USA'
    }
  },
  {
    id: 2,
    name: ' ngConf',
    date: '12/26/2019',
    time: '10:00 am',
    price: '29.99',
    imageUrl: '/assets/images/ng-conf.png'
  },
  {
    id: 3,
    name: ' Vegas Connect ',
    date: '01/26/2019',
    time: '9:00 am',
    price: '129.99',
    imageUrl: '/assets/images/ng-vegas.png',
    onlineUrl: 'http://ngvegas.com/connect'
  },
  {
    id: 4,
    name: ' Newzeland Connect ',
    date: '03/26/2019',
    time: '10:00 am',
    price: '329.99',
    imageUrl: '/assets/images/ng-nl.png',
    location: {
      address: 'Somehwere in NZ',
      city: 'NZ City',
      country: 'NZ'
    }
  }
];
