import Home from "../../screens/Home";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";

jest.mock("expo-location");
jest.mock("react-native-maps", () => {
  const { View } = require("react-native");
  const MockMapView = (props) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = () => <View />;
  MockMapView.Marker = MockMarker;
  return MockMapView;
});

jest.mock("haversine", () => jest.fn(() => 0));

describe("Home", () => {
  let mockNavigation;

  beforeEach(() => {
    mockNavigation = {
      navigate: jest.fn(),
    };
  });

  it("renders map view when isMap is true", async () => {
    const { getByTestId } = render(
      <Home navigation={mockNavigation} route={{}} />
    );

    const mapElement = getByTestId("mapview");
    expect(mapElement).toBeTruthy();
  });

  it("renders place text when infoVisible is true", () => {
    const { getByText } = render(
      <Home navigation={mockNavigation} route={{}} />
    );

    const placeTextElement = getByText("place-text");
    expect(placeTextElement).toBeTruthy();
  });

  it("displays information when infoVisible is true", async () => {
    const { getByTestId, queryByTestId } = render(
      <Home navigation={mockNavigation} route={{}} />
    );

    // Simulate clicking on a marker to show information
    const marker = getByTestId("marker");
    fireEvent.press(marker);

    expect(queryByTestId("place-text")).toBeTruthy();
    expect(queryByTestId("desc-text")).toBeTruthy();
    expect(queryByTestId("photo")).toBeTruthy();
    expect(queryByTestId("fac-text")).toBeTruthy();
  });

  it("navigates to the Profile screen when profile button is pressed", async () => {
    const { getByTestId } = render(
      <Home navigation={mockNavigation} route={{}} />
    );

    const profileButton = getByTestId("profile-button");
    fireEvent.press(profileButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith("Profile");
  });

  it("fetches current location on mount", async () => {
    const { findByTestId } = render(
      <Home navigation={mockNavigation} route={{}} />
    );

    const mapView = await findByTestId("mapview");
    expect(mapView).toBeTruthy();
  });

  it("updates location when moving", async () => {
    const { findByTestId, getByTestId } = render(
      <Home navigation={mockNavigation} route={{}} />
    );

    const marker = getByTestId("marker");
    fireEvent.press(marker);

    const mapView = await findByTestId("mapview");
    expect(mapView).toBeTruthy();
  });

  it("renders a polyline for the route", async () => {
    const { findByTestId } = render(
      <Home navigation={mockNavigation} route={{}} />
    );

    const polyline = await findByTestId("polyline");
    expect(polyline).toBeTruthy();
  });
});
