import React from "react";
import ICON_NAMES from "../logic/contants";
import styles from "./day-in-month.module.css";
import Icon from "./icon";

export default function DayInMonth({ dayNo, events, isToday, inMonth }) {
  const cls = inMonth
    ? isToday
      ? styles.today
      : styles.inmonth
    : styles.outmonth;
  return (
    <article className={`${styles.day} ${cls}`}>
      <h4>{dayNo}</h4>
      <p>
        {events.map((event) => (
          <Icon name={ICON_NAMES.EVENT} cls={event.status} />
        ))}
      </p>
    </article>
  );
}
