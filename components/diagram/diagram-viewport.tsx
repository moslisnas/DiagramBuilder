import React, { useContext, useState } from "react";
import styled from "styled-components";
import ReactFlow, { Controls, MiniMap, Background } from "react-flow-renderer";
import DiagramViewportContext from "context/diagram-viewport-context";
import { defaultNodes, defaultEdges } from "@/components/diagram/default-elements";

const Container = styled.div`
  height: 100%;
  background-color: white;
`;

const combineElements = (nodes:any[], edges:any[]): any[] => {
  let result:any[] = [];

  nodes.map((node) => {
    result.push(node);
  });
  edges.map((edge) => {
    result.push(edge);
  });

  return result;
}

const DiagramViewport = () => {
    const { background, controls, map } = useContext(DiagramViewportContext);
    const [nodes, setNodes] = useState(defaultNodes);
    const [edges, setEdges] = useState(defaultEdges);
    const [elements, setElements] = useState(() => combineElements(defaultNodes, defaultEdges));

    return(
        <Container>
          <ReactFlow elements={elements}>
            {controls["enabled"] && (
              <Controls />
            )}
            {map["enabled"] && (
              <MiniMap nodeColor={(node) => {return '#eee';}} nodeStrokeWidth={3} />
            )}
            {background["enabled"] && (
              <Background variant={background.variant} gap={background.gap} size={background.size}/>
            )}
          </ReactFlow>
        </Container>
    );
};

export default DiagramViewport;