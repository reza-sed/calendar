export function GetDayList(year, month) {
  // returns 42 days 6 * 7
  var date = new Date(year, month, 1);
  var days = [];

  // prefilled with prev month days till first day
  if (date.getDay() !== 1) {
    if (date.getDay() === 0) {
      // if first day is sunday
      date.setDate(date.getDate() - 6);
    } else {
      date.setDate(date.getDate() - date.getDay() + 1);
    }
  }

  // get days of current month
  while (days.length < 42) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
}

export function GetMonthOfYear(year, month) {
  const date = new Date(year, month);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

export function IsInMonth(date, month) {
  return date.getMonth() === month;
}

export function IsToday(date) {
  return new Date().toDateString() === date.toDateString();
}

export function GetDayOfMonth(date) {
  return date.getDate();
}

export function GetEventsByDate(events, date) {
  return events.filter(
    (event) => new Date(event.date).toDateString() === date.toDateString()
  );
}
