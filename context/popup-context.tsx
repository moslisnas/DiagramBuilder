import React from "react";

interface PopupContextValueProps{
    "show":boolean;
    "setShow":any;
    "children":any;
    "setChildren":any;
};

const defaultPopupContextValue:PopupContextValueProps = {
    "show": false,
    setShow: (value:boolean) => value,
    "children": <></>,
    setChildren: ({}) => {},
};
const PopupContext = React.createContext(defaultPopupContextValue);

export default PopupContext;