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
  modules = [
    {
      moduleNumber: 1,
      moduleName: 'Operational Excellence 101',
    },
    {
      moduleNumber: 2,
      moduleName: 'Operations Planning',
    },
    {
      moduleNumber: 3,
      moduleName: 'CPU of Operations',
    },
    {
      moduleNumber: 4,
      moduleName: 'Talent Management',
    },
    {
      moduleNumber: 5,
      moduleName: 'Talent Acquisition',
    },
    {
      moduleNumber: 6,
      moduleName: 'Key Performance Indicators',
    },
    {
      moduleNumber: 7,
      moduleName: 'Train for Skill',
    },
    {
      moduleNumber: 8,
      moduleName: 'Operational Excellence 101',
    },
    {
      moduleNumber: 9,
      moduleName: 'Operations Planning',
    },
    {
      moduleNumber: 10,
      moduleName: 'CPU of Operations',
    },
    {
      moduleNumber: 11,
      moduleName: 'Key Performance Indicators',
    },
    {
      moduleNumber: 12,
      moduleName: 'Talent Acquisition'
    }
  ];
  eventForm: FormGroup;
  sessions = [];
  selectedModules = [];
  addedModules = [];
  editSession = 0;

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
      organizationName: [null, []],
      clientName: [null, []],
      productName: [null, []],
      eventName: [null, []],
      tollGates: ['', []],
      noOfParticipants: ['', []],
      eventStartDate: ['', []],
      eventEndDate: ['', []],
      notes: ['', []]
    });
  }

  openEventCreate() {
    this.ngxSmartModalService.open('addEvent');
  }

  save() {
    console.log(this.eventForm.value);
    const eventForm = this.eventForm.value;
    eventForm.eventStartDate = getDateFromObject(eventForm.eventStartDate);
    eventForm.eventEndDate = getDateFromObject(eventForm.eventEndDate);
    eventForm.productName = 'Operational Excellence';
    const sessions = [{
      sessionName: 'Session 1',
      date: '2020-05-29',
      modules: [{
        moduleNumber: 1,
        moduleName: 'Operational Excellence 101'
      },
        {
          moduleNumber: 2,
          moduleName: 'Operations Planning'
        },
        {
          moduleNumber: 3,
          moduleName: 'CPU of Operations'
        }]
    },
      {
        sessionName: 'Session 2',
        date: '2020-05-30',
        modules: [{
          moduleNumber: 4,
          moduleName: 'Talent Management'
        },
          {
            moduleNumber: 5,
            moduleName: 'Talent Acquisition'
          },
          {
            moduleNumber: 7,
            moduleName: 'Key Performance Indicators'
          }]
      }];
    const eventInfo = {
      ...eventForm,
      sessions
    };
    console.log(JSON.stringify(eventInfo));
  }

  setSelectedModule(module) {
    if (this.selectedModules.indexOf(module) === -1) {
      this.selectedModules.push(module);
    } else {
      const moduleIndex = this.selectedModules.indexOf(module);
      this.selectedModules.splice(moduleIndex, 1);
    }
    console.log(module);
  }

  isChecked(module) {
    return this.selectedModules.indexOf(module) !== -1;
  }

  addModules() {
    this.modules.forEach((module, index) => {
     this.selectedModules.forEach((selModule) => {
       if (selModule.moduleNumber === module.moduleNumber) {
         // @ts-ignore
         module.isSelected = true;
       }
     });
    });
    this.addedModules = this.selectedModules;
    console.log(this.addedModules);
  }

  removeModule(module) {
    const moduleIndex = this.addedModules.indexOf(module);
    this.addedModules.splice(moduleIndex, 1);
    this.modules.forEach((mod, index) => {
      if (mod.moduleNumber === module.moduleNumber) {
        module.isSelected = false;
      }
    });
  }

  saveSession() {
    const sessions = this.sessions;
    if (this.editSession) {
      sessions[this.editSession - 1] = {
        sessionName: 'Session' + this.editSession,
        date: '29-05-2020'
      };
    } else {
      const session =  {
        sessionName: 'Session' + this.editSession,
        date: '29-05-2020'
      };
      this.sessions.push(session);
    }
    this.ngxSmartModalService.close('addEvent');
  }
  parseModules() {

  }
}
