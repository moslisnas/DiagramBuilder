import React, { useState } from "react";
import type { NextPage } from "next";
import ThemeContext from "context/theme-context";
import { defaultGeneralTheme } from "components/diagram/default";
import Header from "components/layout/header";
import InfrastructureExamples from "components/navigator/infrastructure/infrastructure-examples";

const Home:NextPage = () => {
  //Theme.
  const [general, setGeneral] = useState(defaultGeneralTheme);
  const valueThemeProvider:any = { general, setGeneral };

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <ThemeContext.Provider value={valueThemeProvider}>
        <Header />
        <InfrastructureExamples />
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
