import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import * as moment from "moment";
import {EventService} from "../../../services/event.service";
import {BookingService} from "../../../services/booking.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent implements OnInit {

  isCollapsed = 0;
  activeCollapse = null;
  activeStatus = 'Pending';
  bookingId = null;
  bookingActions = [
    'Pending',
    'Approve Booking',
    'Reject Booking',
    'Cancel Booking'
  ];
  @Input() bookings;
  constructor(private modalService: NgbModal,
              private eventService: EventService,
              private bookingService: BookingService,
              private ngxUiLoaderService: NgxUiLoaderService,
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

  onChangeStatus(status, bookingId, modalReference) {
    this.bookingId = bookingId;
    this.modalService.open(modalReference, {centered: true, windowClass: 'simtuitive-modal'});
  }
  parseDate(date){
    let newDate = new Date(Date.parse(date));
    return moment(newDate).format('DD-MM-YYYY');
  }
  requestUpdateStatus(modalReference){
    console.log(this.activeStatus);
    /*if (this.activeStatus === 'Pending') return;*/

    if (this.activeStatus === 'Approve Booking'){
      this.updateStatus('Approved', modalReference, 'events/add-event?bookingId='+this.bookingId);
    }else if (this.activeStatus === 'Reject Booking'){
      this.updateStatus('Rejected', modalReference);
    }else if (this.activeStatus === 'Cancel Booking'){
      this.updateStatus('Canceled', modalReference);
    }else {
      this.updateStatus('Pending', modalReference);
    }
  }
  updateStatus(status, modalReference, redirect = null){
    this.ngxUiLoaderService.start();
    let payload = {
      status : status,
      id: this.bookingId
    }
    this.bookingService.updateBookingStatus(payload).subscribe((res: any) => {
      console.log(res);
      modalReference.close();
      console.log(redirect);
      if (redirect){
        this.router.navigateByUrl(redirect);
      }else {
        window.location.reload();
      }
      this.ngxUiLoaderService.stop();
    }, error => {
      modalReference.close();
      if (error.error.userMessage) {
        this.toastrService.warning(error.error.userMessage);
      } else {
        this.toastrService.warning('Something went to be wrong!');
      }
      this.ngxUiLoaderService.stop();
    });
  }

}
