import React, { useState } from "react";
import type { NextPage } from "next";
import ThemeContext from "context/theme-context";
import { defaultGeneralTheme } from "components/diagram/default";
import Header from "components/layout/header";
import DiagramWorkspaceOds from "components/diagram/workspaces/ods/diagram-workspace-ods";

const Home:NextPage = () => {
  const [general, setGeneral] = useState(defaultGeneralTheme);
  const valueThemeProvider:any = { general, setGeneral };

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <ThemeContext.Provider value={valueThemeProvider}>
        <Header />
        <DiagramWorkspaceOds />
      </ThemeContext.Provider>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {}
  }
}

export default Home
