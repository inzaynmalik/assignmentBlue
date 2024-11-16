import React from "react";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import NewSection from "../components/NewSection";
import Cards from "../components/Cards";
function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <PersistentDrawerLeft />
      <NewSection />
      <Cards />
    </div>
  );
}

export default Home;
