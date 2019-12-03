import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: []
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
      this.router.navigate(['/events']);
  }
}
