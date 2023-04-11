import React from "react";

const Content = [
  {
    id: 0,
    content: "Home  /",
  },
  {
    id: 1,
    content: "Banglore /",
  },
  {
    id: 2,
    content: "Brookfield /",
  },
  { id: 3, content: "Meghna Food " },
];

export default function BreadCrumb() {
  const listItems = Content.map((element) => (
    <li key={element.id} className="link-nav-items-content">
      {" "}
      {element.content}
    </li>
  ));

  return (
    <section className="link-nav">
      <ul className="link-nav-items">{listItems}</ul>
    </section>
  );
}
