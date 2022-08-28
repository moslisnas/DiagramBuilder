import React, { useContext } from "react";
import styled from "styled-components";
import ReactFlow, { Controls, MiniMap, Background, addEdge } from "react-flow-renderer";
import ThemeContext from "context/theme-context";
import DiagramViewportContext from "context/diagram-viewport-context";

const Container = styled.div`
  height: 100%;
  background-color: white;
`;

interface DiagramViewportProps{
  nodes:any[],
  nodesHandler:any,
  edges:any[],
  edgesHandler:any,
  nodeTypes?:any,
};

const DiagramViewport = (props:DiagramViewportProps) => {
    // console.log("Nodes actually: ");
    // console.log(props.nodes);
    // console.log("Edges actually: ");
    // console.log(props.edges);
    const { general } = useContext(ThemeContext);
    const { background, controls, map } = useContext(DiagramViewportContext);
    
    const onConnect = (params:any) => {
      const newEdge = {
        id: "e"+params.source+"-"+params.target,
        source: params.source,
        target: params.target
      }
      props.edgesHandler([...props.edges, newEdge]);
    }
    
    return(
        <Container>
          <ReactFlow
            nodes={props.nodes}
            edges={props.edges}
            nodeTypes={props.nodeTypes}
            onConnect={onConnect}
            deleteKeyCode={"_DELETE"}
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