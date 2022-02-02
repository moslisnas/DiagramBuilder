import React, { useContext } from "react";
import styled from "styled-components";
import ReactFlow, { Controls, MiniMap, Background, removeElements, addEdge } from "react-flow-renderer";
import ThemeContext from "context/theme-context";
import DiagramViewportContext from "context/diagram-viewport-context";

const Container = styled.div`
  height: 100%;
  background-color: white;
`;

const DiagramViewport = (props: { nodes:any[], nodesHandler:any, edges:any[], edgesHandler:any, elements:any[], elementsHandler:any, nodeTypes?:any }) => {
    /*console.log("Nodes actually: ")
    console.log(props.nodes);
    console.log("Edges actually: ")
    console.log(props.edges);
    console.log("Elements actually: ")
    console.log(props.elements);*/
    const { general } = useContext(ThemeContext);
    const { background, controls, map } = useContext(DiagramViewportContext);
    
    const onConnect = (params:any) => {
      const newEdge = {
        id: "e"+params.source+"-"+params.target,
        source: params.source,
        target: params.target
      }
      props.edgesHandler([...props.edges, newEdge]);
      props.elementsHandler([...props.elements, newEdge]);
    }
    const onElementsRemove = (elementsToRemove:any) => {
      props.nodesHandler(props.nodes.filter((node:any) => node.id!==elementsToRemove[0]["id"]));
      props.edgesHandler(props.edges.filter((edge:any) => edge.source!==elementsToRemove[0]["id"] && edge.target!==elementsToRemove[0]["id"]));
      props.elementsHandler((els:any) => removeElements(elementsToRemove, els));
    };
    
    return(
        <Container>
          <ReactFlow
            elements={props.elements}
            nodeTypes={props.nodeTypes}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            deleteKeyCode={46}
            style={{
              backgroundColor: general==="light" ? "#FFFFFF" : "#222222"
            }}
          >
            {controls["enabled"] && (
              <Controls />
            )}
            {map["enabled"] && (
              <MiniMap nodeColor={(node) => {return '#eee';}} nodeStrokeWidth={3} />
            )}
            {//THERE IS A CONSOLE WARNING WITH THIS ELEMENT
            /*background["enabled"] && (
              <Background variant={background.variant} gap={background.gap} size={background.size}/>
            )*/}
          </ReactFlow>
        </Container>
    );
};

export default DiagramViewport;