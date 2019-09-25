import moment from 'moment';

export function humanize(dateTime) {
  return moment(dateTime).fromNow();
}

export function format(dateTime, newFormat = 'YYYY/MM/DD HH:mm') {
  return moment(dateTime).format(newFormat);
}
