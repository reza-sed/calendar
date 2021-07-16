import React from "react";
import {
  GetDayOfMonth,
  GetEventsByDate,
  IsInMonth,
  IsToday,
} from "../logic/date/date-util";
import DayInMonth from "./day-in-month";
import styles from "./monthly-view.module.css";

export default function MonthlyView({ events, days, month }) {
  return (
    <section className={styles.grid}>
      <div className={styles.grid__header}>Mon</div>
      <div className={styles.grid__header}>Tue</div>
      <div className={styles.grid__header}>Wed</div>
      <div className={styles.grid__header}>Thu</div>
      <div className={styles.grid__header}>Fri</div>
      <div className={styles.grid__header}>Sat</div>
      <div className={styles.grid__header}>Sun</div>
      {days.map((day) => (
        <DayInMonth
          dayNo={GetDayOfMonth(day)}
          events={GetEventsByDate(events, day)}
          isToday={IsToday(day)}
          inMonth={IsInMonth(day, month)}
        />
      ))}
    </section>
  );
}
