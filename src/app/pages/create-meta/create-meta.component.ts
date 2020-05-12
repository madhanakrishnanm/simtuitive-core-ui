import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-create-meta',
  templateUrl: './create-meta.component.html',
  styleUrls: ['./create-meta.component.scss']
})
export class CreateMetaComponent implements OnInit {
  private stepper: Stepper;
  constructor() { }
  next()
  {
    this.stepper.next();
  }
  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
  }

}
