import React, { useState, useEffect } from "react";
import ICON_NAMES from "../logic/contants";
import { GetDayList, GetMonthOfYear } from "../logic/date/date-util";
import styles from "./calendar.module.css";
import Icon from "./icon";
import MonthlyView from "./monthly-view";

export default function Calendar({ year, month, events }) {
  const [currentMonth, setCurrentMonth] = useState(month);
  const [days, setDays] = useState(GetDayList(year, month));
  const [currentYear, setCurrentYear] = useState(year);

  useEffect(() => {
    setDays(GetDayList(currentYear, currentMonth));

    return () => {};
  }, [currentYear, currentMonth]);

  const handleNext = () => {
    if (currentMonth + 1 > 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const handlePrev = () => {
    if (currentMonth - 1 < 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <section className={styles.calendar}>
      <h3>Calandar</h3>
      <div className={styles.panel}>
        <span className={styles.panel__title}>
          {GetMonthOfYear(currentYear, currentMonth)}
        </span>
        <span className={styles.panel__navigation}>
          <Icon name={ICON_NAMES.PREV} onClick={handlePrev} />
          <Icon name={ICON_NAMES.NEXT} onClick={handleNext} />
        </span>
      </div>
      <MonthlyView events={events} days={days} month={currentMonth} />
    </section>
  );
}
