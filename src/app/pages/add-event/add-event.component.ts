import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  private stepper: Stepper;
  title = 'Add Events';

  constructor() {
  }

  next(title) {
    this.stepper.next();
    this.title = title;
  }

  ngOnInit() {
    /* this.stepper = new Stepper(document.querySelector('#stepper1'), {
       linear: false,
       animation: true
     });*/
  }
}
