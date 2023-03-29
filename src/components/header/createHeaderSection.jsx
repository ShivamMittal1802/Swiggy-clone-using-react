import React from "react";
import CreateHeaderLeftSection from "./createHeaderLeft";
import CreateHeaderRightSection from "./createHeaderRight";

export default function CreateHeader() {
    return (
            <section className="top-banner"> 
                <CreateHeaderLeftSection />
                <CreateHeaderRightSection />
            </section>
    );
}