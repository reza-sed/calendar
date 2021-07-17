import { GetDayList, GetEventsByDate, GetMonthOfYear } from "./date-util";

describe("test fn GetDayList", () => {
  const days2020 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days2021 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  it("length should be 42 for 6 row * 7 column calendar", () => {
    // check length (SUT)
    const result = GetDayList(2020, 7);
    expect(result.length).toBe(42);
  });

  it("leap year should match days count equals to days2020", () => {
    const array = [];
    for (let index = 0; index <= 11; index++) {
      array.push(
        GetDayList(2020, index).filter((d) => d.getMonth() === index).length
      );
    }
    expect(array).toEqual(days2020);
  });

  it("non-leap should match days count equals to days2021", () => {
    const array = [];
    for (let index = 0; index <= 11; index++) {
      array.push(
        GetDayList(2021, index).filter((d) => d.getMonth() === index).length
      );
    }
    expect(array).toEqual(days2021);
  });
});

describe("GetMonthOfYear", () => {
  it("should return January 2021 for year = 2021 and month = 0", () => {
    const result = GetMonthOfYear(2021, 0);
    expect(result).toBe("January 2021");
  });
});

describe("GetEventsByDate", () => {
  const events = [{ date: "2021-01-01" }, { date: "2021-01-01" }];
  it("should return correct events", () => {
    const result = GetEventsByDate(events, new Date("2021-01-01"));
    expect(result).toEqual(events);
  });
});
