// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import fs from "fs";
import path from "path";

// const wrapper = ({ children }) => {
//   return { children };
// };

const customRender = (ui, options) => {
  const view = render(ui, { ...options });
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = fs.readFileSync(
    path.resolve(__dirname, "./index.css"),
    "utf8"
  );
  document.head.appendChild(style);

  return view;
};

export * from "@testing-library/react";
export { customRender as render };
