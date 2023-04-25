import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { CollectionActivity } from "../CollectionActivity";
import React from "react";

describe("CollectionActivity", () => {
  const setup = () => {
    const mockSetItemsFilterType = jest.fn();
    const mockSetItemsFilterValue = jest.fn();
    const mockSetSortDirection = jest.fn();
    const mockSetSortType = jest.fn();

    const { container } = render(
      <CollectionActivity
        setItemsFilterType={mockSetItemsFilterType}
        setItemsFilterValue={mockSetItemsFilterValue}
        setSortDirection={mockSetSortDirection}
        setSortType={mockSetSortType}
        itemsFilterValue=""
      />
    );

    return {
      container,
      mockSetItemsFilterType,
      mockSetItemsFilterValue,
      mockSetSortDirection,
      mockSetSortType,
    };
  };

  it("renders without crashing", async () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  it("calls setItemsFilterValue when input value changes", () => {
    const { mockSetItemsFilterValue } = setup();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(mockSetItemsFilterValue).toHaveBeenCalledWith("test");
  });

  it("calls setSortType when sort type buttons are clicked", () => {
    const { mockSetSortType } = setup();
    fireEvent.click(screen.getByText("Recency"));
    expect(mockSetSortType).toHaveBeenCalledWith("recency");
    fireEvent.click(screen.getByText("Price"));
    expect(mockSetSortType).toHaveBeenCalledWith("price");
  });

  it("calls setItemsFilterType when filter type buttons are clicked", () => {
    const { mockSetItemsFilterType } = setup();
    fireEvent.click(screen.getByText("All items"));
    expect(mockSetItemsFilterType).toHaveBeenCalledWith("all");
    fireEvent.click(screen.getByText("My items"));
    expect(mockSetItemsFilterType).toHaveBeenCalledWith("my");
  });
});
