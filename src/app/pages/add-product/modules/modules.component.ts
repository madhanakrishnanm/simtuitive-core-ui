import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  @Output() onStepNext: EventEmitter<any> = new EventEmitter();
  @Output() onStepPrev: EventEmitter<any> = new EventEmitter()
  isDiscoverDataFileRequired = 'no';
  isDecideDataFileRequired = 'no';
  competencies = [
    "Stakeholder Management",
    "Process Management",
    "People Management",
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
  onChangeDiscoverFile(event){
    console.log(this.isDiscoverDataFileRequired);
  }
  onChangeDecideFile(event){
    console.log(event);
    console.log(this.isDecideDataFileRequired);
  }
}
