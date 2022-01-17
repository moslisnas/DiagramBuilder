import React, { useContext } from "react";
import styled from "styled-components";
import DiagramViewportContext from "context/diagram-viewport-context";
import { BackgroundVariant } from "react-flow-renderer";

const Container = styled.div`
    height: 100%;
    float: right;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
`;
const BackgroundButton = styled.div`
    :hover {
        cursor: pointer;
    }
`;
const ControlsButton = styled.div`
    :hover {
        cursor: pointer;
    }
`;
const MapButton = styled.div`
    :hover {
        cursor: pointer;
    }
`;

const DiagramViewportButtons = () => {
    const { background, setBackground, controls, setControls, map, setMap } = useContext(DiagramViewportContext);
    const changeViewport = (button: string) : void => {
        switch(button){
            case "background":
                let variant = null;
                let enabled = false;
                if(background["variant"]===BackgroundVariant.Lines){
                    variant = BackgroundVariant.Dots;
                    enabled = true;
                }
                else if(background["variant"]===BackgroundVariant.Dots){
                    variant = null;
                    enabled = false;
                }
                else if(!background["enabled"]){
                    variant = BackgroundVariant.Lines;
                    enabled = true;
                }
                setBackground({...background, "enabled": enabled, "variant": variant});
                break;
            case "controls":
                setControls({"enabled": !controls["enabled"]});
                break;
            case "map":
                setMap({"enabled" : !map["enabled"]});
                break;
        }
    }

    return(
        <Container>
            <BackgroundButton onClick={() => changeViewport('background')}>
                <img
                    src={
                        background.variant===BackgroundVariant.Lines ?
                            "icons/menus/background-dots32px.png"
                            : background.variant===BackgroundVariant.Dots ?
                                "icons/menus/background-empty32px.png"
                            : "icons/menus/background-square32px.png"
                    }
                    width="30px"
                    height="30px"
                    style={{verticalAlign: 'middle'}}
                />
            </BackgroundButton>
            <ControlsButton onClick={() => changeViewport('controls')}>
                <img src="icons/menus/buttons32px.png" width="30px" height="30px" style={{verticalAlign: 'middle'}} />
            </ControlsButton>
            <MapButton onClick={() => changeViewport('map')}>
                <img src="icons/menus/map32px.png" width="30px" height="30px" style={{verticalAlign: 'middle'}} />
            </MapButton>
        </Container>
    )
};

export default DiagramViewportButtons;