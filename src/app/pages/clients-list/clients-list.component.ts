import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';
import {ClientService} from '../../services/client.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clients = [];
  deleteClientId = null;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private modalService: NgbModal,
              private clientService: ClientService) { }

  ngOnInit(): void {
    const payload = {};
    this.clientService.getAllClient(payload).subscribe((res: any) => {
      console.log(res);
      this.clients = res.data;
    });
  }

  requestDelete(userId, modalReference) {
    this.deleteClientId = userId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});

  }

  delete() {
    const payload = {
      userId: this.deleteClientId
    };
    console.log(payload);
    this.clientService.deleteClient(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
