import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from './events/index';
import { EventsAppComponent } from './events.app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { appRoutes } from 'src/routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventThumbnailComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  }
}
