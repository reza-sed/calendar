import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Calendar from "./Calendar";
import { eventStatus } from "../App";

afterEach(cleanup);

const calendarElement = (
  <Calendar
    year={2021}
    month={0}
    events={[{ date: "2021-01-01", status: eventStatus.success }]}
  />
);

describe("Calendar", () => {
  it("change current month after click next and prev", () => {
    const { container } = render(calendarElement);
    // check prev call
    const prevArrow = container.querySelector("#prev");
    fireEvent.click(prevArrow);
    let calendarTitleElement = container.querySelector("#monthTitle");
    expect(calendarTitleElement.textContent).toBe("December 2020");
    // check next call
    const nextArrow = container.querySelector("#next");
    fireEvent.click(nextArrow);
    fireEvent.click(nextArrow);
    calendarTitleElement = container.querySelector("#monthTitle");
    expect(calendarTitleElement.textContent).toBe("February 2021");
  });

  it("check if calendar is rendered", () => {
    const { container } = render(calendarElement);
    const header = container.querySelector("h3");
    expect(header.textContent).toBe("Calandar");
  });

  it("snapshot", () => {
    const component = renderer.create(calendarElement);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
