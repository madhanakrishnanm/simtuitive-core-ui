import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OrganizationService} from '../../services/organization.service';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  clientForm: FormGroup;
  organizations = [];
  roles = [];
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      organizationName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gst: ['', [Validators.required]],
      pan: ['', [Validators.required]],
      role: ['Client', [Validators.required]],
    });
  }

  get f() {
    return this.clientForm.controls;
  }

  changeStatus(event) {
    console.log(event);
  }

  onSubmit() {
    if (this.clientForm.invalid) {
      return;
    }
    console.log(this.clientForm.value);
    const payload = this.clientForm.value;
    this.clientService.addClient(payload).subscribe((res: any) => {
      console.log(res);
    });
  }

}
