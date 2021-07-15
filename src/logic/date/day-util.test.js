const days2020 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days2021 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

describe("getDaysInMonth", function () {
  it("gets day counts for leap years", function () {
    const actual = days2020.map(
      (day, index) => getDaysInMonth(index, 2020).length
    );
    expect(actual).toEqual(days2020);
  });

  it("gets day counts for non-leap years", function () {
    const actual = days2021.map(
      (day, index) => getDaysInMonth(index, 2021).length
    );
    expect(actual).toEqual(days2021);
  });
});
