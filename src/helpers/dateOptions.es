const months = [
  { id: 'January', text: 'January' },
  { id: 'Febrauary', text: 'Febrauary' },
  { id: 'March', text: 'March' },
  { id: 'April', text: 'April' },
  { id: 'May', text: 'May' },
  { id: 'June', text: 'June' },
  { id: 'July', text: 'July' },
  { id: 'August', text: 'August' },
  { id: 'September', text: 'September' },
  { id: 'October', text: 'October' },
  { id: 'November', text: 'November' },
  { id: 'December', text: 'December' }
];

let years = [];
const MIN_YEAR = 1910;
const tempDay = new Date();
const CURRENT_YEAR = tempDay.getFullYear();
for (let ii = CURRENT_YEAR; ii >= MIN_YEAR; ii--) {
  years.push({ id: ii, text: ii });
}

let days = [];
const MAX_DAYS = 31;
for (let ii = 1; ii <= MAX_DAYS; ii++) {
  days.push({ id: ii, text: ii });
}
export { days, years, months };
