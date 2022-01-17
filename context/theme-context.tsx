import React from "react";
import { defaultGeneralTheme } from "components/diagram/default";

interface ThemeContextValueProps {
    "general":string;
    "setGeneral":any;
};

const themeContextValue:ThemeContextValueProps = {
    "general": defaultGeneralTheme,
    setGeneral: ({}) => {}
};

const ThemeContext = React.createContext(themeContextValue);

export default ThemeContext;