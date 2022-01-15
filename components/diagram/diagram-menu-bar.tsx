import React from "react";
import styled from "styled-components";
import { diagramMenuBarHeight, diagramMenuBarPadding } from "@/constants/layout-size-constants";
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
`;
const RightContainer = styled.div`
    padding-right: ${diagramMenuBarPadding.desktop};
    text-align: right;
    line-height: ${diagramMenuBarHeight.desktop};
`;

const DiagramMenuBar = () => {
    return(
        <Container>
            <LeftContainer>
            </LeftContainer>
            <RightContainer>
                <DiagramViewportButtons />
            </RightContainer>
        </Container>
    );
};

export default DiagramMenuBar;