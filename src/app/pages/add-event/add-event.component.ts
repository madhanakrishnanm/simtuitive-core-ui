import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../services/event.service';
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
  tempModules: any = [{
    moduleId: 1,
    isTollPassRequired: false,
    when: null
  }, {
    moduleId: 2,
    isTollPassRequired: false,
    when: null
  }, {
    moduleId: 3,
    isTollPassRequired: false,
    when: null
  },
    {
      moduleId: 4,
      isTollPassRequired: false,
      when: null
    },
    {
      moduleId: 5,
      isTollPassRequired: false,
      when: null
    },
    {
    moduleId: 6,
    isTollPassRequired: false,
    when: null
  },
    {
      moduleId: 7,
      isTollPassRequired: false,
      when: null
    },
    {
      moduleId: 8,
      isTollPassRequired: false,
      when: null
    },
    {
      moduleId: 9,
      isTollPassRequired: false,
      when: null
    },
    {
      moduleId: 10,
      isTollPassRequired: false,
      when: null
    },
    {
      moduleId: 11,
      isTollPassRequired: false,
      when: null
    },
    {
      moduleId: 12,
      isTollPassRequired: false,
      when: null
    }, ];
  options: any = ['yes', 'no'];
  EventFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private eventService: EventService) { }
  get f() {
    return this.EventFormGroup.controls;
  }

  tollPass(module, event, tollPass) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.tempModules.length; i++) {
      if (this.tempModules[i].moduleId === module) {
           if (tollPass === 'tollPassBefore' && event === 'yes') {
             this.tempModules[i].isTollPassRequired = event;
             this.tempModules[i].when = 'Before';
             // tslint:disable-next-line:triple-equals no-non-null-assertion
           } else if (tollPass === 'tollPassAfter' && event === 'yes') {
             this.tempModules[i].isTollPassRequired = event;
             this.tempModules[i].when = 'After';
           }
      }
    }
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
        tollPassDetails: this.tempModules,
      }
    ];
    console.log('Payload', Payload);
    this.eventService.addEvent(Payload);
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
