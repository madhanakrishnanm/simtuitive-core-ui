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
  tempModules:any = [{
    moduleId:1,
    isTollPassRequired:false,
    when:null
  },{
    moduleId:2,
    isTollPassRequired:false,
    when:null
  },{
    moduleId:3,
    isTollPassRequired:false,
    when:null
  },{
    moduleId:4,
    isTollPassRequired:false,
    when:null
  },];
  options: any = ['yes', 'no'];
  EventFormGroup: FormGroup;
  modulesDetails: any = [];
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
        tollPassDetails: this.modulesDetails
      }
    ];
    console.log('Payload', Payload);
  }
  tollPassBefore(module, event, tollPass, index) {
    // tslint:disable-next-line:prefer-const
    if (tollPass === 'tollPassBefore') {
      this.modulesDetails.push(
        {
          module,
          tollPassBefore: event
        }
      );
    }
    let value;
    console.log('len' +this.modulesDetails.length);
    for (let i = 0; i < this.modulesDetails.length; i++) {
      console.log('check' +this.modulesDetails[i].module === module)
      if (this.modulesDetails[i].module === module) {
        value =  i;
      } else {
        value = -1;
      }
    }
  }
  checkModuleExists(module) {

    }
    ngOnInit() {
    this.EventFormGroup = this.fb.group({
      client: ['', []],
      product: ['', []],
      eventName: ['', []],
      tollGates: ['', []],
      eventStartDate: ['', []],
      eventEndDate: ['', []],
    });
    }
}
