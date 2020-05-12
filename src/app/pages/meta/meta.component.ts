import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onStepNext: EventEmitter<any> = new EventEmitter();
  constructor() { }
  save() {
   this.onStepNext.emit();
  }
  ngOnInit(): void {
  }

}
