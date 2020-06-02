import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import Stepper from 'bs-stepper';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {getDateFromObject} from '../../lib';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {ClientService} from "../../services/client.service";
import {OrganizationService} from "../../services/organization.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ToastrService} from "ngx-toastr";
import _ from 'lodash';
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
  editSession = {};
  editSessionIndex = 0;
  session = {};
  sessionTitle = null;
  sessionDate = null;
  constructor(private fb: FormBuilder,
              private eventService: EventService,
              private clientService: ClientService,
              private organizationService: OrganizationService,
              private ngxUiLoaderService: NgxUiLoaderService,
              public ngxSmartModalService: NgxSmartModalService,
              private toastrService: ToastrService,
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
    this.session['date'] = event;
  }
  onChangeOrganization(organization){
    let payload = {
      orgName: organization.organizationName
    };
    this.clientService.getClientByOrganization(payload).subscribe((res: any) => {
      // console.log(res);
      this.clients = res.data;
    });

  }
  onTollGateChange(){
    this.sessions = [];
  }

  save() {
    if (this.eventForm.invalid) {
      return;
    }
    this.ngxUiLoaderService.start();
    const eventForm = this.eventForm.value;
    eventForm.startDate = getDateFromObject(eventForm.startDate);
    eventForm.endDate = getDateFromObject(eventForm.endDate);
    const eventInfo = {
      ...eventForm,
      sessions: this.sessions
    };
    this.eventService.addEvent(eventInfo).subscribe((res: any) => {
      console.log(res);
      this.ngxUiLoaderService.stop();
      this.router.navigate(['/events']);
    }, error => {
      if (error.error.userMessage) {
        this.toastrService.warning(error.error.userMessage);
      } else {
        this.toastrService.warning('Something went to be wrong!');
      }
      this.ngxUiLoaderService.stop();
    });
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

  requestEditSession(sessionIndex){
    let modalId = null;
    this.editSession = this.sessions[sessionIndex];
    if (this.tollGate === 'yes'){
      modalId = 'withTollGate'
    }if (this.tollGate === 'no'){
      modalId = 'withoutTollGate'
    }
    this.sessionTitle = this.editSession['name'];
    this.da = this.editSession['name'];
    this.ngxSmartModalService.open(modalId);
  }
  resetSession(){
    this.editSession = {};
    this.editSessionIndex = 0;
  }

  saveSession(modalId) {
    console.log(this.editSession);
    if (!_.isEmpty(this.editSession)) {
      console.log('edit');
      this.session['name'] = this.sessionTitle;
      this.session['modules'] = this.selectedModules;
      this.sessions[this.editSessionIndex] = {...this.session};
      this.session = {};
      this.selectedModules = [];
      this.editSession = {};
    } else {
      this.session['name'] = this.sessionTitle;
      this.session['modules'] = this.selectedModules;
      this.sessions.push({...this.session});
      this.session = {};
      this.selectedModules = [];
      console.log('sessions');
      console.log(this.sessions);
    }
    this.ngxSmartModalService.close(modalId);
  }
  saveSessionWithoutTollGate(modalId){

    if (this.editSession) {
      this.session['name'] = this.sessionTitle;
      this.session['modules'] = this.selectedModules;
      this.sessions[this.editSessionIndex] = {...this.session};
      this.session = {};
      this.selectedModules = [];
      this.editSession = {};
    } else {
      this.session['name'] = this.sessionTitle;
      this.sessions.push({...this.session});
      this.session = {};
    }
    this.ngxSmartModalService.close(modalId);
  }
  parseModules() {

  }
  resetForm(){
    this.eventForm = this.fb.group(this.eventFormDetails);
  }
}
