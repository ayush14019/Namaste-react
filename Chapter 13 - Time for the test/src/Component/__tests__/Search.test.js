import { act, render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
// import {act} from "react-dom/test-utils"
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for KFC text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const input = screen.getByTestId("searchInput");

    expect(searchBtn).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "KFC" } });
  fireEvent.click(searchBtn);

  // screen should load 1 res card

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedbtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedbtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard")

  expect(cardsAfterFilter.length).toBe(5);


  
});
