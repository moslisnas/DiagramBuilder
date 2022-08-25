import React, { useContext, useState } from "react";
import styled from "styled-components";
import ReactFlow from "react-flow-renderer";
import { combineElements, getLastNodeId } from "utils/diagram-functions";

const Container = styled.div`
    height: 100%;
    display: flex;
`;
const AddNodeButton = styled.div`
    :hover {
        cursor: pointer;
    }
`;
const GlobalDiagramButton = styled.a`
    margin-left: 10px;
`;

const DiagramNodeButtons = (props: { nodes:any[], nodesHandler:any, edges:any[], edgesHandler:any, elements:any[], elementsHandler:any }) => {
    /*const addNode = () => {
        const newNode = {
          id: (1+getLastNodeId(props.nodes)).toString(),
          type: 'input',
          data: { label: 'New Node' },
          position: { x: 0, y: 400 },
        };
        props.nodesHandler([...props.nodes, newNode]);
        props.elementsHandler([...props.elements, newNode]);
    };*/
    return(
        <Container>
            {/*<AddNodeButton onClick={() => addNode()}>
                <img
                    src={"/icons/menus/ods/plus32px.png"}
                    width="30px"
                    height="30px"
                    style={{verticalAlign: 'middle'}}
                />
            </AddNodeButton>*/}
            <GlobalDiagramButton href="/ods">
                <img
                    src={"/icons/menus/ods/2030agenda32px.png"}
                    width="30px"
                    height="30px"
                    style={{verticalAlign: 'middle'}}
                />
            </GlobalDiagramButton>
            <GlobalDiagramButton href="/infrastructure">
                <img
                    src={"/icons/menus/infrastructure/server512px.svg"}
                    width="30px"
                    height="30px"
                    style={{verticalAlign: 'middle'}}
                />
            </GlobalDiagramButton>
        </Container>
    )
};

export default DiagramNodeButtons;