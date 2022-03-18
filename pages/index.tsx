import React, { useContext, useState } from "react";
import type { NextPage } from "next";
import ThemeContext from "context/theme-context";
import PopupContext from "context/popup-context";
import { defaultGeneralTheme } from "components/diagram/default";
import Header from "components/layout/header";
import Popup from "components/layout/popup";
import DiagramWorkspace from "components/diagram/workspaces/diagram-workspace";
import DiagramWorkspaceOds from "components/diagram/workspaces/ods/diagram-workspace-ods";

const Home: NextPage = () => {
  //Theme.
  const [general, setGeneral] = useState(defaultGeneralTheme);
  const valueThemeProvider:any = { general, setGeneral };
  //Popup.
  const [show, setShow] = useState(false);
  const [children, setChildren] = useState(<></>);
  const valuePopupProvider:any = { show, setShow, children, setChildren };
  //Diagram workspace.
  const [workspaceType, setWorkspaceType] = useState("default");

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <ThemeContext.Provider value={valueThemeProvider}>
        <Header />
        <PopupContext.Provider value={valuePopupProvider}>
          {workspaceType==="default" && (<DiagramWorkspace />)}
          {workspaceType==="ods" && (<DiagramWorkspaceOds />)}
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

export default Home
