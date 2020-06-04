import * as moment from "moment";

function getDate(add = 0) {
  const date = moment().add(add, 'days');
  return {
    year: date.year(),
    month: date.month() + 1,
    day: date.date()
  };
}


function containsObject(obj, list) {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
}

function reverseDate(date) {
  return {
    year: parseInt(date.format('YYYY')),
    month: parseInt(date.format('MM')),
    day: parseInt(date.format('DD'))
  }
}

function getDateFromObject(dateObject) {
  if (dateObject && typeof dateObject === 'object') {
    return moment().date(dateObject.day).month(dateObject.month - 1).year(dateObject.year).format('DD-MM-YYYY');
  }
  return dateObject;
}

export {
  getDate,
  containsObject,
  reverseDate,
  getDateFromObject,
}
