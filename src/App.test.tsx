import { render, screen } from "@testing-library/react";

import App from "./App";
import React from "react";

xtest("renders collection page", () => {
  render(<App />);
  const linkElement = screen.getByText(/collection activity/i);
  expect(linkElement).toBeInTheDocument();
});
