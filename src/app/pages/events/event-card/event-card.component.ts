import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

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

  constructor(private modalService: NgbModal, public router: Router) {
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
}
