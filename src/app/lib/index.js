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
  let mom = moment(date);
  console.log(date);
  return {
    year: parseInt(mom.format('YYYY')),
    month: parseInt(mom.format('MM')),
    day: parseInt(mom.format('DD'), 2)
  }
}

function getDateFromObject(dateObject) {
  if (dateObject) {
    return moment().date(dateObject.day).month(dateObject.month - 1).year(dateObject.year).format('YYYY-MM-DD');
  }
  return dateObject;
}

export {
  getDate,
  containsObject,
  reverseDate,
  getDateFromObject,
}
