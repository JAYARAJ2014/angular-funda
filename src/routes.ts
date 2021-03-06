import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver,
  CreateSessionComponent
} from './app/events/index';


import { Error404Component } from './app/errors/404.component';

export const appRoutes: Routes = [
    {
      path: 'events/new', component: CreateEventComponent,
      canDeactivate: ['canDeactivateCreateEvent']
    },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    {
      path: 'events/:id', component: EventDetailsComponent,
      canActivate: [EventRouteActivator]
    },
    {path: 'events/session/new', component: CreateSessionComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    {path: 'user', loadChildren: './user/user.module#UserModule'}
  ];

