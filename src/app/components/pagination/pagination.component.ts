import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages;
  @Input() page;
  @Output() onRequest: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  onPageChange(){
    if (this.page >= 1 && this.page <= this.totalPages){
      let payload = {
        pageno : this.page - 1
      }
      this.onRequest.emit(payload)
    }
  }
  previousPage() {
    console.log('previous');
    if (this.page > 1) {
      this.page -= 1;
      let payload = {
        pageno : this.page - 1
      }
      this.onRequest.emit(payload)
    }
  }

  nextPage() {
    console.log('next');
    if (this.page < this.totalPages) {
      this.page += 1;
      let payload = {
        pageno : this.page - 1
      }
      this.onRequest.emit(payload)
    }
  }
}
