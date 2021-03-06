import React, { useContext, useState } from "react";
import type { NextPage } from "next";
import ThemeContext from "context/theme-context";
import PopupContext from "context/popup-context";
import { defaultGeneralTheme } from "components/diagram/default";
import Header from "components/layout/header";
import Popup from "components/layout/popup";
import Agenda2030 from "components/navigator/ods/agenda-2030";

const Home:NextPage = () => {
  //Theme.
  const [general, setGeneral] = useState(defaultGeneralTheme);
  const valueThemeProvider:any = { general, setGeneral };
  //Popup.
  const [show, setShow] = useState(false);
  const [children, setChildren] = useState(<></>);
  const valuePopupProvider:any = { show, setShow, children, setChildren };

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <ThemeContext.Provider value={valueThemeProvider}>
        <Header />
        <Agenda2030 />
        <PopupContext.Provider value={valuePopupProvider}>
          {show && (
            <Popup width="50%" height="75%">
              {children}
            </Popup>
          )}
        </PopupContext.Provider>
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
