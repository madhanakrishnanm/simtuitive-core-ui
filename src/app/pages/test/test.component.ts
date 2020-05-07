import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  peoples = [{name: 'Karyn Wright'}, {name: 'ram'}];

  constructor(private modalService: NgbModal) {
    axios.post(
      "http://35.154.201.76/login",
      {},
      {
        headers: {
          "Authorization": " Bearer szdjOpZQVBA6EXLMAib6a+fw2RXFJo02QgdgmHsxNnYcBVN6mX4QLVSGXONBzTnc70XaT1o9ufr49rn2RvWkKkSttoRDdxJEZWalwMJ437k="
        }
      }
    )
      .then((response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error)
        }
      );
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log('modal opened');
  }


  ngOnInit(): void {
  }
}
