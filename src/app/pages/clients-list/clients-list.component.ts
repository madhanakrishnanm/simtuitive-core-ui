import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clients = [];
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private clientService: ClientService) { }

  ngOnInit(): void {
    const payload = {};
    this.clientService.getAllClient(payload).subscribe((res: any) => {
      console.log(res);
      this.clients = res.data;
    });
  }

}
