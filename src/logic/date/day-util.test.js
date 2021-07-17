import { GetDayList, GetEventsByDate, GetMonthOfYear } from "./date-util";

describe("test fn GetDayList", () => {
  // Arrange
  let days2020;
  let days2021;

  beforeEach(() => {
    days2020 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    days2021 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  });

  it("length should be 42 for 6 row * 7 column calendar", () => {
    // Act
    const result = GetDayList(2020, 7);
    // Assert
    expect(result.length).toBe(42);
  });

  it("leap year should match days count equals to days2020", () => {
    // Arrange
    const array = [];
    // Act
    for (let index = 0; index <= 11; index++) {
      array.push(
        GetDayList(2020, index).filter((d) => d.getMonth() === index).length
      );
    }
    // Assert
    expect(array).toEqual(days2020);
  });

  it("non-leap should match days count equals to days2021", () => {
    // Arrange
    const array = [];
    // Act
    for (let index = 0; index <= 11; index++) {
      array.push(
        GetDayList(2021, index).filter((d) => d.getMonth() === index).length
      );
    }
    // Assert
    expect(array).toEqual(days2021);
  });
});

describe("GetMonthOfYear", () => {
  it("should return January 2021 for year = 2021 and month = 0", () => {
    // Act
    const result = GetMonthOfYear(2021, 0);
    // Assert
    expect(result).toBe("January 2021");
  });
});

describe("GetEventsByDate", () => {
  // Arrange
  const events = [{ date: "2021-01-01" }, { date: "2021-01-01" }];
  it("should return correct events", () => {
    // Act
    const result = GetEventsByDate(events, new Date("2021-01-01"));
    // Assert
    expect(result).toEqual(events);
  });
});
