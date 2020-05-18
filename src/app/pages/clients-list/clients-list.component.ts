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
  organizationNames = [];
  selectedOrganization = null;
  emailAddress = [];
  searchQuery = null;
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
              private organizationService: OrganizationService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private clientService: ClientService) { }

  ngOnInit(): void {
    const payload = {
      pageNo: this.page - 1,
    };
    this.getClients(payload);
    this.findOrganizationName({});
  }
  findOrganizationName(payload){
    this.organizationService.findOrganizationName(payload).subscribe((res: any) => {
      console.log(res);
      this.organizationNames = res.data;
    })
  }
  onOrganizationChange(event){
    this.selectedOrganization = event;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      orgName: this.selectedOrganization,
    };
    this.getClients(payload);
  }
  applyFilter(){
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      orgName: this.selectedOrganization,
    };
    console.log(payload);
    this.getClients(payload);
  }
  getClients(payload) {
    payload['query'] = this.searchQuery;
    payload['orgName'] = this.selectedOrganization;
    this.ngxUiLoaderService.start();
    this.clientService.getAllClient(payload).subscribe((res: any) => {
      console.log(res);
      this.clients = res.data;
      for (const[index, client] of this.clients.entries()) {
        this.clientNames.push(client.userName);
        this.organizationNames.push(client.organizationName);
        this.emailAddress.push(client.userEmail);
      }
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }
  searchClient(event){
    this.searchQuery = event.target.value;
    const payload = {
      pageno: this.page - 1,
      query: event.target.value
    };
    this.getClients(payload);
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
