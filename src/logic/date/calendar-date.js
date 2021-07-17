class CalendarDate {
  firstDay = 0; // default sunday

  constructor(date) {
    this.date = new Date(date);
  }

  getDay() {
    const diff = this.date.getDay() - this.firstDay;
    return diff >= 0 ? diff : 7 + diff;
  }
}

export default CalendarDate;
