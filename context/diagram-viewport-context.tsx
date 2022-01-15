import React from "react";
import { BackgroundVariant } from "react-flow-renderer";

interface DiagramViewportContextValueProps{
    "background":any;
    "setBackground":any;
    "controls":any;
    "setControls":any;
    "map":any;
    "setMap":any;
}

export const defaultBackground = {
    "enabled": true,
    "variant": BackgroundVariant.Lines,
    "gap": 48,
    "size": 1 
};
export const defaultControls = {
    "enabled": true
};
export const defaultMap = {
    "enabled": true
};

const defaultDiagramViewportValueContext:DiagramViewportContextValueProps = {
    "background": defaultBackground,
    setBackground: ({}) => {},
    "controls": defaultControls,
    setControls: ({}) => {},
    "map": defaultMap,
    setMap: ({}) => {}
};
const DiagramViewportContext = React.createContext(defaultDiagramViewportValueContext);

export default DiagramViewportContext;