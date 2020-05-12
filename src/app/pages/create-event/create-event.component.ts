import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  // for next step functionality
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onStepNext: EventEmitter<any> = new EventEmitter();
  next;
  tollGate = '';
  clients: any = ['Microsoft', 'HP', 'IBM', 'InfoSys'];
  products: any = ['Java', 'Python', 'C#'];
  modules: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  tempModules: any = [ {
    moduleId: 1,
    isTollPassRequired: false,
    beforeModule: 'no',
    afterModule: 'no',
  },
    {
      moduleId: 2,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 3,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 4,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 5,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 6,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 7,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 8,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 9,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 10,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 11,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    },
    {
      moduleId: 12,
      isTollPassRequired: false,
      beforeModule: 'no',
      afterModule: 'no',
    }];
  options: any = ['yes', 'no'];
  EventFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private eventService: EventService, private router: Router) { }

  get f() {
    return this.EventFormGroup.controls;
  }

  changeModuleTollPass(moduleId, isTollPassRequired, when) {
    for (const [index, module] of this.tempModules.entries()) {
      if (module.moduleId === moduleId) {
        if (when === 'before') {
          this.tempModules[index].beforeModule = isTollPassRequired;
        } else  if (when === 'after') {
          this.tempModules[index].afterModule = isTollPassRequired;
        }
      }
      if (this.tempModules[index].beforeModule === 'yes' || this.tempModules[index].afterModule === 'yes') {
        this.tempModules[index].isTollPassRequired = true;
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
        eventStartDate: this.dateToString(this.f.eventStartDate.value.day,
          this.f.eventStartDate.value.month, this.f.eventStartDate.value.year),
        eventEndDate: this.dateToString(this.f.eventStartDate.value.day,
          this.f.eventStartDate.value.month, this.f.eventStartDate.value.year),
        tollPassDetails: this.tempModules,
      }
    ];
    this.eventService.addEvent(Payload);
    this.eventService.getEventsDetails().subscribe((res) => {
            if (res.length > 0) {
              this.onStepNext.emit();
            }
  });
  }
  // function for change Date To String
  dateToString(date, month, year) {
    return date + '-' + month + '-' + year;
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
