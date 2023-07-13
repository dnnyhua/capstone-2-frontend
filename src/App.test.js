import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", function () {
  <MemoryRouter >
    render(<App />);
  </MemoryRouter>
});

