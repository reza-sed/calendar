import React from "react";
import ICON_NAMES from "../logic/contants";
import { GetMonthOfYear } from "../logic/date/date-util";
import styles from "./calendar.module.css";
import Icon from "./icon";
import MonthlyView from "./monthly-view";

export default function Calendar({ year, month, events }) {
  const monthOfYear = GetMonthOfYear(year, month);
  return (
    <section className={styles.calendar}>
      <h3>Calandar</h3>
      <div className={styles.panel}>
        <span className={styles.panel__title}>{monthOfYear}</span>
        <span className={styles.panel__navigation}>
          <Icon name={ICON_NAMES.PREV} />
          <Icon name={ICON_NAMES.NEXT} />
        </span>
      </div>
      <MonthlyView />
    </section>
  );
}
