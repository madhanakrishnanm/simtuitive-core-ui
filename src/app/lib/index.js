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
    return `${dateObject.year}-${dateObject.month}-${dateObject.day}`;
  }
  return dateObject;
}

function mobileValidator(formControl, key) {
  if (!formControl.parent) {
    return null;
  }
  const mobile = formControl.parent.get(key).value &&
    formControl.parent.get(key).value.toString();
  if (mobile) {
    if (mobile.length < 10 || mobile.length > 10) {
      return {
        maxLimit: {
          [key]: formControl.parent.get(key).value
        }
      };
    }
  }
  return null;
}

function telephoneValidator(formControl, key) {
  if (!formControl.parent) {
    return null;
  }
  const telephone = formControl.parent.get(key).value
    && formControl.parent.get(key).value.toString();
  if (telephone) {
    if (telephone.length < 10 || telephone.length > 10) {
      return {
        maxLimit: {
          [key]: formControl.parent.get(key).value
        }
      };
    }
  }
  return null;
}

function emailValidator(formControl, key) {
  if (!formControl.parent) {
    return null;
  }
  const email = formControl.parent.get(key).value;
  if (email) {
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return {
        email: {
          [key]: formControl.parent.get(key).value
        }
      };
    }
  }
  return null;
}

export {
  getDate,
  containsObject,
  reverseDate,
  getDateFromObject,
  mobileValidator,
  telephoneValidator,
  emailValidator
}
