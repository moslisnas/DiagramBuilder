import React, { useContext, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ThemeContext from "context/theme-context";
import PopupContext from "context/popup-context";
import { defaultGeneralTheme } from "components/diagram/default";
import Header from "components/layout/header";
import Popup from "components/layout/popup";
import DiagramWorkspaceOds from "components/diagram/workspaces/ods/diagram-workspace-ods";

const Home:NextPage = () => {
  const router = useRouter();
  const { ods } = router.query;
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
        <PopupContext.Provider value={valuePopupProvider}>
          <DiagramWorkspaceOds ods={parseInt(ods)} />
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
