import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getDateFromString(date){
    let newDate = new Date(Date.parse(date));
    return moment(newDate).format('DD-MM-YYYY');
  }
  reverseDate(date) {
    if (typeof date === 'string'){
      date = moment(new Date(Date.parse(date)));
    }
    return {
      year: parseInt(date.format('YYYY')),
      month: parseInt(date.format('MM')),
      day: parseInt(date.format('DD'))
    }
  }
}
