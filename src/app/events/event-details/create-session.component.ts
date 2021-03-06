import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, ControlContainer } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10px;}
  .error input, .error select, .error textarea {background-color:#E3C3C5;}
`]
})

export class CreateSessionComponent implements OnInit {

  @Output() newSessionEntered = new EventEmitter();
  @Output() cancelAdd = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;


  constructor() {

  }


  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('',
      [
        Validators.required,
        Validators.maxLength(256),
        restrictedWords(['foo', 'bar'])
      ]);
    this.newSessionForm = new FormGroup({

      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }


  saveSession(formValues) {

    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    console.log(session);
    this.newSessionEntered.emit(session);
  }

  isInvalidAndDirty(control: FormControl): boolean {
    console.log('control.invalid && control.dirty: ' + control.invalid + ' && ' + control.dirty);
    return (control.invalid && control.dirty);
  }

  cancelClick() {
    this.cancelAdd.emit();
  }


}

