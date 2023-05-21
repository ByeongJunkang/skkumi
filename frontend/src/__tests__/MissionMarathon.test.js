import MissionMarathon from "../../screens/MissionMarathon";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

describe("MissionMarathon", () => {
  let mockNavigation;

  beforeEach(() => {
    mockNavigation = {
      navigate: jest.fn(),
    };
  });

  it("renders correctly", () => {
    const { getByText } = render(
      <MissionMarathon navigation={mockNavigation} />
    );

    const missionTextElement = getByText("MARATHON MISSION WIP");
    expect(missionTextElement).toBeTruthy();
  });

  it("navigates to the Home screen when start button is pressed", () => {
    const { getByText } = render(
      <MissionMarathon navigation={mockNavigation} />
    );

    const startButton = getByText("START");
    fireEvent.press(startButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith("Home", {
      startActivated: true,
    });
  });

  it("does not navigate to the Home screen when pause button is pressed", () => {
    const { getByText } = render(
      <MissionMarathon navigation={mockNavigation} />
    );

    const pauseButton = getByText("PAUSE");
    fireEvent.press(pauseButton);

    expect(mockNavigation.navigate).not.toHaveBeenCalled();
  });

  it("does not navigate to the Home screen when stop button is pressed", () => {
    const { getByText } = render(
      <MissionMarathon navigation={mockNavigation} />
    );

    const stopButton = getByText("STOP");
    fireEvent.press(stopButton);

    expect(mockNavigation.navigate).not.toHaveBeenCalled();
  });

  // Add more test cases as needed
});
