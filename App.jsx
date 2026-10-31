const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" }[
      (React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h1", {}, "I am h1 tag"))
    ],
  ),
  React.createElement(
    "div",
    { id: "child2" }[
      (React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h1", {}, "I am h1 tag"))
    ],
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("hello"));
root.render(parent);
