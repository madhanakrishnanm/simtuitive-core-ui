import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  tollGate = '';
  clients: any = ['Microsoft', 'HP', 'IBM', 'InfoSys'];
  products: any = ['Java', 'Python', 'C#'];
  modules: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  options: any = ['yes', 'no'];
  EventFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }
  get f() {
    return this.EventFormGroup.controls;
  }
  save() {
    const Payload = [
      {
        clients: this.f.client.value,
        product: this.f.product.value,
        eventName: this.f.eventName.value,
        tollGates: this.f.tollGates.value,
        eventStartDate: this.f.eventStartDate.value,
        eventEndDate: this.f.eventEndDate.value,
        Modules: this.modules,
        tollPassBefore: this.f.tollPassBefore.value,
        tollPassAfter: this.f.tollPassAfter.value
      }
    ];
    console.log(Payload);
  }
  ngOnInit(): void {
    this.EventFormGroup = this.fb.group({
      client: ['', []],
      product: ['', []],
      eventName: ['', []],
      tollGates: ['', []],
      eventStartDate: ['', []],
      eventEndDate: ['', []],
      tollPassBefore: ['', []],
      tollPassAfter: ['', []],
    });
  }

}
