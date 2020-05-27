import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import {getDateFromObject} from '../../lib';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  // for next step functionality
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onStepNext: EventEmitter<any> = new EventEmitter();
  nextTitle = 'Event Summary';
  next;
  tollGate = '';
  clients: any = ['Microsoft', 'HP', 'IBM', 'InfoSys'];
  products: any = ['Java', 'Python', 'C#'];
  modules: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  tempModules: any = [{
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
  eventForm: FormGroup;
  selectedBeforeModule = 'yes';
  selectedAfterModule = 'no';
  sessions = [];

  constructor(private fb: FormBuilder,
              private eventService: EventService,
              public ngxSmartModalService: NgxSmartModalService,
              private router: Router) {
  }

  get f() {
    return this.eventForm.controls;
  }

  ngOnInit() {
    this.eventForm = this.fb.group({
      organisation: [null, []],
      client: [null, []],
      product: [null, []],
      eventName: [null, []],
      tollGates: ['', []],
      noParticipants: ['', []],
      eventStartDate: ['', []],
      eventEndDate: ['', []],
      notes: ['', []]
    });
  }

  changeModuleTollPass(moduleId, isTollPassRequired, when) {
    for (const [index, module] of this.tempModules.entries()) {
      if (module.moduleId === moduleId) {
        if (when === 'before') {
          this.tempModules[index].beforeModule = isTollPassRequired;
        } else if (when === 'after') {
          this.tempModules[index].afterModule = isTollPassRequired;
        }
      }
      if (this.tempModules[index].beforeModule === 'yes' || this.tempModules[index].afterModule === 'yes') {
        this.tempModules[index].isTollPassRequired = true;
      }
    }
    console.log(this.tempModules);
  }

  openEventCreate() {
    this.ngxSmartModalService.open('addEvent');
  }

  save() {
    const eventInfo = this.eventForm.value;
    eventInfo.modules = this.tempModules;
    eventInfo.tollGates = eventInfo.tollGates.toString();
    eventInfo.eventStartDate = getDateFromObject(eventInfo.eventStartDate);
    eventInfo.eventEndDate = getDateFromObject(eventInfo.eventEndDate);
    console.log(JSON.stringify(eventInfo));
    this.eventService.addEvent(eventInfo);
    this.onStepNext.emit(this.nextTitle);
  }

  saveSession() {

  }
}
