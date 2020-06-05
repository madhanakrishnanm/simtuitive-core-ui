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

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text);

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}


export {
  getDate,
  containsObject,
  reverseDate,
  getDateFromObject,
  copyToClipboard
}
