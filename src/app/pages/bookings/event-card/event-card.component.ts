import {Component, Input, OnInit} from '@angular/core';
import {OrganizationService} from "../../../services/organization.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
  @Input() bookings;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  setActiveCollapse(id){
    console.log(id);
    if (this.activeCollapse === id){
      this.activeCollapse = null;
    }else {
      this.activeCollapse = id;
    }
  }

  onChangeStatus(status, modalReference){
    this.modalService.open(modalReference, {centered: true,windowClass: 'simtuitive-modal'});
  }

}
