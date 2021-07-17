import React from "react";
import renderer from "react-test-renderer";
import ICON_NAMES from "../logic/contants";
import Icon from "./icon";
import { eventStatus } from "../App";

// events status

describe("Icon component", () => {
  it("snapshot testing with custom cls for colorizing", () => {
    const component = renderer.create(
      <Icon name={ICON_NAMES.EVENT} cls={eventStatus.success} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("snapshot testing without custom cls", () => {
    const component = renderer.create(<Icon name={ICON_NAMES.EVENT} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
