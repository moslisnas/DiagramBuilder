import React from "react";
import styled from "styled-components";
import { diagramMenuBarHeight, diagramMenuBarPadding } from "constants/layout-size-constants";
import DiagramNodeButtons from "components/diagram/diagram-node-buttons";
import DiagramViewportButtons from "components/diagram/diagram-viewport-buttons";

const Container = styled.div`
  height: ${diagramMenuBarHeight.desktop};
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: solid 1px #DDDDDD;
  background-color: white;
`;
const LeftContainer = styled.div`
    padding-left: ${diagramMenuBarPadding.desktop};
    text-align: left;
    line-height: ${diagramMenuBarHeight.desktop};
`;
const RightContainer = styled.div`
    padding-right: ${diagramMenuBarPadding.desktop};
    text-align: right;
    line-height: ${diagramMenuBarHeight.desktop};
`;

const DiagramMenuBar = (props: { nodes:any[], nodesHandler:any, edges:any[], edgesHandler:any, elements:any[], elementsHandler:any }) => {
    return(
        <Container>
            <LeftContainer>
                <DiagramNodeButtons nodes={props.nodes} nodesHandler={props.nodesHandler} edges={props.edges} edgesHandler={props.edgesHandler} elements={props.elements} elementsHandler={props.elementsHandler} />
            </LeftContainer>
            <RightContainer>
                <DiagramViewportButtons />
            </RightContainer>
        </Container>
    );
};

export default DiagramMenuBar;