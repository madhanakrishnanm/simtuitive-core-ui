import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import Stepper from 'bs-stepper';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {getDateFromObject, reverseDate} from '../../lib';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {ClientService} from '../../services/client.service';
import {OrganizationService} from '../../services/organization.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import _ from 'lodash';
import * as moment from 'moment';
import {BookingService} from "../../services/booking.service";
import {UtilService} from "../../services/util.service";
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
      id: '1'
    },
    {
      name: 'Operational Excellence',
      id: '2'
    },
    {
      name: 'productNameNew',
      id: '12312'
    }
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
  editSession: any = {};
  editSessionIndex = 0;
  session: any = {};
  sessionTitle = null;
  sessionDate = null;
  bookingId = null;
  constructor(private fb: FormBuilder,
              private eventService: EventService,
              private clientService: ClientService,
              private organizationService: OrganizationService,
              private ngxUiLoaderService: NgxUiLoaderService,
              public ngxSmartModalService: NgxSmartModalService,
              private toastrService: ToastrService,
              private bookingService: BookingService,
              private utilService: UtilService,
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
    this.organizationService.getOrganizationNameAndId({}).subscribe((res: any) => {
      console.log(res);
      this.organizations = res.data;

    }, error => {}, ()=>{
      this.isRedirectFromBooking();
    });
  }

  get f() {
    return this.eventForm.controls;
  }

  isRedirectFromBooking(){
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('bookingId');
    console.log(bookingId);
    if (bookingId){
      this.bookingId = bookingId;
      this.bookingService.getBookingById({id: bookingId}).subscribe((res: any) => {
        console.log(res);
        let booking = res.data;
        let event = {};
        console.log(this.organizations);
        console.log(this.products);
        console.log(booking.orgName);
        let organization = this.organizations.find(org => org.organizationName === booking.orgName);
        if (organization) {
          event['organization'] = organization;
        }
        event['product'] =  this.products.find(product => product.id === booking.productId);
        event['name'] = booking['eventName'];
        event['noOfParticipants'] = booking['noOfParticipants'];
        event['startDate'] = this.utilService.reverseDate(booking['startDate']);
        event['endDate'] = this.utilService.reverseDate(booking['endDate']);
        event['notes'] = booking['notes'];

        console.log(event);
        this.eventForm.patchValue(event);
      });
    }

  }

  openModal() {
    let modalId = null;
    if (this.tollGate === 'yes') {
      modalId = 'withTollGate';
    }
    if (this.tollGate === 'no') {
      modalId = 'withoutTollGate';
    }
    this.sessionTitle = 'Session ' + (this.sessions.length + 1);
    console.log(moment().toDate());
    this.sessionDate = reverseDate(moment());
    console.log(this.sessionDate);
    this.ngxSmartModalService.open(modalId);
  }
  onDateChange(event) {
    console.log(this.sessionDate);
    this.session.date = event;
  }
  onChangeOrganization(organization) {
    const payload = {
      orgName: organization.organizationName
    };
    this.clientService.getClientByOrganization(payload).subscribe((res: any) => {
      // console.log(res);
      this.clients = res.data;
    });

  }
  onTollGateChange() {
    this.sessions = [];
  }

  save() {
    if (this.eventForm.invalid) {
      return;
    }
    this.ngxUiLoaderService.start();
    const eventForm = {...this.eventForm.value};
    eventForm.startDate = getDateFromObject(eventForm.startDate);
    eventForm.endDate = getDateFromObject(eventForm.endDate);
    eventForm.productName = eventForm.product.name;
    eventForm.productId = eventForm.product.id;
    eventForm.type = 'Event';
    delete eventForm.product;
    const eventInfo = {
      ...eventForm,
      sessions: this.sessions
    };
    console.log(eventInfo);
    this.eventService.addEvent(eventInfo).subscribe((res: any) => {
      console.log(res);
      if (this.bookingId){
        this.updateBookingStatus();
      }else {
        this.ngxUiLoaderService.stop();
        this.router.navigate(['/events']);
      }

    }, error => {
      if (error.error.userMessage) {
        this.toastrService.warning(error.error.userMessage);
      } else {
        this.toastrService.warning('Something went to be wrong!');
      }
      this.ngxUiLoaderService.stop();
    });
  }
  updateBookingStatus(){
    let payload = {
      status : 'Approved',
      id: this.bookingId
    }
    this.bookingService.updateBookingStatus(payload).subscribe((res: any) => {
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

  requestEditSession(sessionIndex) {
    let modalId = null;
    this.editSession = this.sessions[sessionIndex];
    if (this.tollGate === 'yes') {
      modalId = 'withTollGate';
    }
    if (this.tollGate === 'no') {
      modalId = 'withoutTollGate';
    }
    this.sessionTitle = this.editSession.name;
    this.sessionDate = reverseDate(this.editSession.date);
    this.ngxSmartModalService.open(modalId);
  }
  resetSession() {
    this.editSession = {};
    this.editSessionIndex = 0;
  }

  saveSession(modalId) {
    console.log(this.editSession);
    if (!_.isEmpty(this.editSession)) {
      console.log('edit');
      this.session.name = this.sessionTitle;
      this.session.modules = this.selectedModules;
      this.session.date = getDateFromObject(this.sessionDate);
      this.sessions[this.editSessionIndex] = {...this.session};
      this.session = {};
      this.selectedModules = [];
      this.editSession = {};
    } else {
      this.session.name = this.sessionTitle;
      this.session.modules = this.selectedModules;
      this.session.date = getDateFromObject(this.sessionDate);
      this.sessions.push({...this.session});
      this.session = {};
      this.selectedModules = [];
      console.log('sessions');
      console.log(this.sessions);
    }
    this.ngxSmartModalService.close(modalId);
  }
  saveSessionWithoutTollGate(modalId) {

    if (!_.isEmpty(this.editSession)) {
      this.session.name = this.sessionTitle;
      this.session.date = getDateFromObject(this.sessionDate);
      this.session.modules = this.selectedModules;
      this.sessions[this.editSessionIndex] = {...this.session};
      this.session = {};
      this.selectedModules = [];
      this.editSession = {};
      console.log('edit session');
    } else {
      console.log('add session');
      this.session.name = this.sessionTitle;
      this.session.date = getDateFromObject(this.sessionDate);
      this.sessions.push({...this.session});
      this.session = {};
    }
    this.ngxSmartModalService.close(modalId);
  }
  parseModules() {

  }
  resetForm() {
    this.eventForm = this.fb.group(this.eventFormDetails);
  }
}
