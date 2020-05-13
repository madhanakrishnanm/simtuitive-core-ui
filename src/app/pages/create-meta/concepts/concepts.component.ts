import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  @Output() onStepNext: EventEmitter<any> = new EventEmitter();
  @Output() onStepPrev: EventEmitter<any> = new EventEmitter()

  modules = [
    "Resource Management",
    "Operations Management",
    "Talent Management",
    "Performance Management",
  ]

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onStepNext.emit();
  }
  next(){
    this.onStepNext.emit();
  }
  previous(){
    this.onStepPrev.emit();
  }

}
