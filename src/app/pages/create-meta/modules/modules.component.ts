import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  competencies = [
    "Stakeholder Management",
    "Process Management",
    "People Management",
    "Performance Management",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
