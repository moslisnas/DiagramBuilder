import React, { useContext, useState } from "react";
import styled from "styled-components";
import ReactFlow from "react-flow-renderer";
import { combineElements, getLastNodeId } from "utils/diagram-functions";

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
`;
const AddNodeButton = styled.div`
    :hover {
        cursor: pointer;
    }
`;

const DiagramNodeButtons = (props: { nodes:any[], nodesHandler:any, edges:any[], edgesHandler:any, elements:any[], elementsHandler:any }) => {
    const addNode = () => {
        const newNode = {
          id: (1+getLastNodeId(props.nodes)).toString(),
          type: 'input',
          data: { label: 'New Node' },
          position: { x: 0, y: 400 },
        };
        props.nodesHandler([...props.nodes, newNode]);
        props.elementsHandler([...props.elements, newNode]);
    };
    return(
        <Container>
            <AddNodeButton onClick={() => addNode()}>
                <img
                    src={"icons/menus/plus32px.png"}
                    width="30px"
                    height="30px"
                    style={{verticalAlign: 'middle'}}
                />
            </AddNodeButton>
        </Container>
    )
};

export default DiagramNodeButtons;