import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable() // important for services
export class EventService {

  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>(); // observable
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 50);
    return subject;
  }
  getEvent(id: number): IEvent {
    console.log('id in service is ' + id);
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event) {
    console.log('event service saveEvent');
    event.id = 999;
    event.session = [];
    EVENTS.push(event);
  }
}
const EVENTS: IEvent[] = [
  {
    id: 1,
    name: ' Angular Connect',
    date: new Date('9/26/2020'),
    time: '8:00 am',
    price: 9.99,
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
    date: new Date('12/26/2019'),
    time: '10:00 am',
    price: 29.99,
    imageUrl: '/assets/images/ng-conf.png'
  },
  {
    id: 3,
    name: ' Vegas Connect ',
    date: new Date('01/26/2019'),
    time: '9:00 am',
    price: 129.99,
    imageUrl: '/assets/images/ng-vegas.png',
    onlineUrl: 'http://ngvegas.com/connect'
  },
  {
    id: 4,
    name: ' Newzeland Connect ',
    date: new Date('03/26/2019'),
    time: '10:00 am',
    price: 329.99,
    imageUrl: '/assets/images/ng-nl.png',
    location: {
      address: 'Somehwere in NZ',
      city: 'NZ City',
      country: 'NZ'
    }
  }
];
