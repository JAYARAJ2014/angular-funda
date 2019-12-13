import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: 'simple-modal.component.html',
  styles: [`
  .modal-body{ height: 250px; overflow-y: scroll;}
  `]
})

export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer', {static: false}) containerEl: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() { }

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}

