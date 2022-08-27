import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ThemeContext from "context/theme-context";
import PopupContext from "context/popup-context";
import { defaultGeneralTheme } from "components/diagram/default";
import Popup from "components/layout/popup";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";
import DiagramWorkspaceInfrastructure from "components/diagram/workspaces/infrastructure/diagram-workspace-infrastructure";

const Home:NextPage = () => {
  const router = useRouter();
  const infrastructureId = router.query.id ? router.query.id.toString() : '0';
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
            <DiagramWorkspaceInfrastructure id={parseInt(infrastructureId)} />
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
