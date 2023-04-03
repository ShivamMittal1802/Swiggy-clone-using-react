import React from "react";
import CreateHeaderLeftSection from "./headerLeft";
import CreateHeaderRightSection from "./headerRight";

export default function CreateHeader() {
  return (
    <section className="top-banner">
      <CreateHeaderLeftSection />
      <CreateHeaderRightSection />
    </section>
  );
}
