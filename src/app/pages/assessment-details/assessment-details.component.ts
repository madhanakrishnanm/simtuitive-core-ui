import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-assessment-details',
  templateUrl: './assessment-details.component.html',
  styleUrls: ['./assessment-details.component.scss']
})
export class AssessmentDetailsComponent implements OnInit {

  @Output() onStepNext: EventEmitter<any> = new EventEmitter();
  @Output() onStepPrev: EventEmitter<any> = new EventEmitter()
  constructor() { }

  save() {
    this.onStepNext.emit();
  }
  next(){
    this.onStepNext.emit();
  }
  previous(){
    this.onStepPrev.emit();
  }
  ngOnInit(): void {
  }

}
