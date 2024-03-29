import React, { useState } from "react";
import type { NextPage } from "next";
import ThemeContext from "context/theme-context";
import { defaultGeneralTheme } from "components/diagram/default";
import Header from "components/layout/header";
import Agenda2030 from "components/navigator/ods/agenda-2030";

const Home:NextPage = () => {
  //Theme.
  const [general, setGeneral] = useState(defaultGeneralTheme);
  const valueThemeProvider:any = { general, setGeneral };
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <ThemeContext.Provider value={valueThemeProvider}>
        <Header />
        <Agenda2030 />
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
