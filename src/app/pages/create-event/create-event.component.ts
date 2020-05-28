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
  modules = [{
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
      moduleName: 'Talent Acquisition',
    }];
  eventForm: FormGroup;
  sessions = [];
  selectedModules = [];

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

  openEventCreate() {
    this.ngxSmartModalService.open('addEvent');
  }

  save() {
  }

  saveSession() {

  }
}
