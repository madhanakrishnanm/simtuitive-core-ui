import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {EventService} from "../../../services/event.service";
import {BookingService} from "../../../services/booking.service";
import {copyToClipboard} from "../../../lib"
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  isCollapsed = 0;
  activeCollapse = null;
  bookingActions = [
    'Approve Booking',
    'Reject Booking',
    'Cancel Booking'
  ];
  @Input() events;

  constructor(private modalService: NgbModal,
              private eventService: EventService,
              private bookingService: BookingService,
              private toastrService: ToastrService,
              public router: Router) {
  }

  ngOnInit(): void {

  }

  setActiveCollapse(id) {
    console.log(id);
    if (this.activeCollapse === id) {
      this.activeCollapse = null;
    } else {
      this.activeCollapse = id;
    }
  }

  onChangeStatus(status, modalReference) {
    this.modalService.open(modalReference, {centered: true, windowClass: 'simtuitive-modal'});
  }
  copy(text){
    if (copyToClipboard(text)){
      this.toastrService.info('Passcode Copied!');
    }else {
      this.toastrService.info('Unable to copy Passcode!');
    }
  }
}
