import React from "react";
import { defaultBackground, defaultControls, defaultMap } from "components/diagram/default";

interface DiagramViewportContextValueProps{
    "background":any;
    "setBackground":any;
    "controls":any;
    "setControls":any;
    "map":any;
    "setMap":any;
};


const defaultDiagramViewportContextValue:DiagramViewportContextValueProps = {
    "background": defaultBackground,
    setBackground: ({}) => {},
    "controls": defaultControls,
    setControls: ({}) => {},
    "map": defaultMap,
    setMap: ({}) => {}
};
const DiagramViewportContext = React.createContext(defaultDiagramViewportContextValue);

export default DiagramViewportContext;