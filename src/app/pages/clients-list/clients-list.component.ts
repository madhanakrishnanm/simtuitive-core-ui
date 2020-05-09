import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';
import {ClientService} from '../../services/client.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  keyword = 'clients';
  organization = [];
  inviteEmailId = '';
  clientNames = [];
  clientId;
  page = 1;
  totalPages = 0;
  clients = [{
    userId: 12,
    organizationName: 'Mark University',
    userName: 'Thornton',
    userEmail: 'Otto@gmail.com',
    GST: '767985',
    PAN: '767985',
  }];
  deleteClientId = null;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private modalService: NgbModal,
              private ngxUiLoaderService: NgxUiLoaderService,
              private clientService: ClientService) { }

  ngOnInit(): void {
    const payload = {
      pageno: this.page - 1
    };
    this.getClients(payload);
  }
  getClients(payload) {
    this.ngxUiLoaderService.start();
    this.clientService.getAllClient(payload).subscribe((res: any) => {
      console.log(res);
      this.clients = res.data;
      for (const[index, client] of this.clients.entries()) {
        this.clientNames.push(client.userName);
      }
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }
  requestDelete(userId, modalReference) {
    this.deleteClientId = userId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});

  }
  requestInvitation(userId, userEmail, modalReference) {
    this.clientId = userId;
    this.inviteEmailId = userEmail;
    this.modalService.open(modalReference, {centered: true, size: 'md', windowClass: 'simtuitive-modal'});
  }
  openModal(modalReference) {
    this.modalService.open(modalReference, {centered: true, size: 'md', windowClass: 'simtuitive-modal'});
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
