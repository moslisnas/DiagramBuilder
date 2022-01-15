import React, { useState } from "react";
import type { NextPage } from "next";
import DiagramViewportContext, { defaultBackground, defaultControls, defaultMap} from "context/diagram-viewport-context";
import Header from "components/layout/header";
import ContentContainer from "components/layout/content-container";
import DiagramViewport from "components/diagram/diagram-viewport";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";

const Home: NextPage = () => {
  const [background, setBackground] = useState(defaultBackground);
  const [controls, setControls] = useState(defaultControls);
  const [map, setMap] = useState(defaultMap);
  const value:any = { background, setBackground, controls, setControls, map, setMap };

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Header />
      <DiagramViewportContext.Provider value={value}>
        <DiagramMenuBar/>
        <ContentContainer>
          <DiagramViewport/>
        </ContentContainer>
      </DiagramViewportContext.Provider>
    </div>
  )
}

export default Home
