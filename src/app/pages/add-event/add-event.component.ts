import {Component, OnInit} from '@angular/core';
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
  tempModules: any = [ {
    "moduleId": 1,
    "isTollPassRequired": false,
    "beforeModule": "no",
    "afterModule": "no",
  },
    {
      "moduleId": 2,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 3,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 4,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 5,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 6,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 7,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 8,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 9,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 10,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 11,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    },
    {
      "moduleId": 12,
      "isTollPassRequired": false,
      "beforeModule": "no",
      "afterModule": "no",
    }];
  options: any = ['yes', 'no'];
  EventFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) {
  }

  get f() {
    return this.EventFormGroup.controls;
  }

  changeModuleTollPass(moduleId, isTollPassRequired, when) {
    for (const [index,module] of this.tempModules.entries()){
      if (module.moduleId === moduleId){
        if (when === 'before'){
          this.tempModules[index]['beforeModule'] = isTollPassRequired;
        }else  if (when === 'after'){
          this.tempModules[index]['afterModule'] = isTollPassRequired;
        }
      }
      if (this.tempModules[index]['beforeModule'] === 'yes' || this.tempModules[index]['afterModule'] === 'yes'){
        this.tempModules[index]['isTollPassRequired'] = true;
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
    // this.eventService.addEvent(Payload);
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
