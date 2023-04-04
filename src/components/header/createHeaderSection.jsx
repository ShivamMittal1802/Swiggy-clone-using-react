import React from "react";
import HeaderLeftSection from "./createHeaderLeft";
import HeaderRightSection from "./createHeaderRight";

export default function CreateHeader() {
    return (
            <section className="top-banner"> 
                <HeaderLeftSection />
                <HeaderRightSection />
            </section>
    );
}