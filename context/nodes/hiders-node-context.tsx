import React from "react";

interface HidersNodeContextValueProps{
    "hiders":string[];
    "setHiders":any;
};


const defaultHidersNodeContextValueProps:HidersNodeContextValueProps = {
    "hiders": [],
    setHiders: ({}) => {}
};
const HidersNodeContext = React.createContext(defaultHidersNodeContextValueProps);

export default HidersNodeContext;