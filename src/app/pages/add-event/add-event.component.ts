import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import Stepper from 'bs-stepper';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {getDateFromObject} from '../../lib';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {ClientService} from "../../services/client.service";
import {OrganizationService} from "../../services/organization.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  private stepper: Stepper;
  title = 'Add Events';
  tollGate = 'no';
  organizations: any = [];
  clients: any = [];
  products = [
    {
      name: 'Advance Excel',
      id: "1"
    },
    {
      name: 'Operational Excellence',
      id: "2"
    },
  ];
  modules = [
    {
      id: 1,
      name: 'Operational Excellence 101',
    },
    {
      id: 2,
      name: 'Operations Planning',
    },
    {
      id: 3,
      name: 'CPU of Operations',
    },
    {
      id: 4,
      name: 'Talent Management',
    },
    {
      id: 5,
      name: 'Talent Acquisition',
    },
    {
      id: 6,
      name: 'Key Performance Indicators',
    },
    {
      id: 7,
      name: 'Train for Skill',
    },
    {
      id: 8,
      name: 'Operational Excellence 101',
    },
    {
      id: 9,
      name: 'Operations Planning',
    },
    {
      id: 10,
      name: 'CPU of Operations',
    },
    {
      id: 11,
      name: 'Key Performance Indicators',
    },
    {
      id: 12,
      name: 'Talent Acquisition'
    }
  ];
  eventForm: FormGroup;
  eventFormDetails = {};
  sessions = [];
  selectedModules = [];
  addedModules = [];
  editSession = 0;
  session = {};
  sessionTitle = null;
  constructor(private fb: FormBuilder,
              private eventService: EventService,
              private clientService: ClientService,
              private organizationService: OrganizationService,
              public ngxSmartModalService: NgxSmartModalService,
              private router: Router) {
  }

  ngOnInit() {
    this.eventFormDetails = {
      organization: [null, []],
      client: [null, []],
      product: [null, []],
      name: [null, []],
      tollGate: ['no', []],
      noOfParticipants: ['', []],
      startDate: ['', []],
      endDate: ['', []],
      notes: ['', []]
    };
    this.eventForm = this.fb.group(this.eventFormDetails);
    this.organizationService.getAllOrganization({}).subscribe((res: any) => {
      console.log(res);
      this.organizations = res.data;
    })
  }

  get f() {
    return this.eventForm.controls;
  }

  openModal() {
    let modalId = null;
    if (this.tollGate === 'yes'){
      modalId = 'withTollGate'
    }if (this.tollGate === 'no'){
      modalId = 'withoutTollGate'
    }
    this.sessionTitle = 'Session '+ (this.sessions.length + 1);
    this.ngxSmartModalService.open(modalId);
  }
  onDateChange(event){
    console.log(event);
    this.session['date'] = event;
  }
  onChangeOrganization(organization){
    console.log(organization);
    let payload = {
      orgName: organization.organizationName
    };
    this.clientService.getClientByOrganization(payload).subscribe((res: any) => {
      console.log(res);
      this.clients = res.data;
    });

  }
  onTollGateChange(){
    this.sessions = [];
  }

  save() {
    console.log(this.eventForm.value);
    const eventForm = this.eventForm.value;
    eventForm.startDate = getDateFromObject(eventForm.startDate);
    eventForm.endDate = getDateFromObject(eventForm.endDate);
    const eventInfo = {
      ...eventForm,
      sessions: this.sessions
    };
    console.log(JSON.stringify(eventInfo));
  }

  setSelectedModule(module) {
    if (this.selectedModules.indexOf(module) === -1) {
      this.selectedModules.push(module);
    } else {
      this.selectedModules.splice(this.selectedModules.indexOf(module), 1);
    }
    if (this.addedModules.indexOf(module) === -1) {
      this.addedModules.push(module);
    } else {
      this.addedModules.splice(this.addedModules.indexOf(module), 1);
    }

    console.log(this.selectedModules);
  }

  isChecked(module) {
    return this.addedModules.indexOf(module) !== -1;
  }

  removeModule(module) {
    this.selectedModules.splice(this.selectedModules.indexOf(module), 1);
    this.addedModules.splice(this.addedModules.indexOf(module), 1);

  }

  saveSession(modalId) {
    const sessions = this.sessions;
    if (this.editSession) {
      sessions[this.editSession - 1] = {
        sessionName: 'Session ' + this.editSession,
        date: '29-05-2020'
      };
    } else {
      this.session['name'] = this.sessionTitle;
      this.session['moduels'] = this.selectedModules;
      this.sessions.push({...this.session});
      this.session = {};
      this.selectedModules = [];
      console.log(this.sessions);
    }
    this.ngxSmartModalService.close(modalId);
  }
  saveSessionWithoutTollGate(modalId){
    const sessions = this.sessions;
    if (this.editSession) {
      sessions[this.editSession - 1] = {
        sessionName: 'Session ' + this.editSession,
        date: '29-05-2020'
      };
    } else {
      this.session['name'] = this.sessionTitle;
      this.sessions.push({...this.session});
      this.session = {};
      console.log(this.sessions);
    }
    this.ngxSmartModalService.close(modalId);
  }
  parseModules() {

  }
  resetForm(){
    this.eventForm = this.fb.group(this.eventFormDetails);
  }
}
