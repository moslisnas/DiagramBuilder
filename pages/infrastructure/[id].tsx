import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ThemeContext from "context/theme-context";
import { defaultGeneralTheme } from "components/diagram/default";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";
import DiagramWorkspaceInfrastructure from "components/diagram/workspaces/infrastructure/diagram-workspace-infrastructure";

const Home:NextPage = () => {
  const router = useRouter();
  const idInfrastructure = router.query.id ? router.query.id.toString() : '0';
  //Theme.
  const [general, setGeneral] = useState(defaultGeneralTheme);
  const valueThemeProvider:any = { general, setGeneral };

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <ThemeContext.Provider value={valueThemeProvider}>
        <DiagramMenuBar nodes={[]} nodesHandler={null} edges={[]} edgesHandler={null} elements={[]} elementsHandler={null} />
        <DiagramWorkspaceInfrastructure id={parseInt(idInfrastructure)} />
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
