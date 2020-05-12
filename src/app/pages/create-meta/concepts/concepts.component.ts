import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  modules = [
    "Resource Management",
    "Operations Management",
    "Talent Management",
    "Performance Management",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
