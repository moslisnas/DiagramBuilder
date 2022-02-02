import React, { useState } from "react";
import { useRouter } from "next/router";
import DiagramViewportContext from "context/diagram-viewport-context";
import { combineElements } from "utils/diagram-functions";
import { defaultBackground, defaultControls, defaultMap, defaultOdsNodes, defaultOdsEdges } from "components/diagram/default";
import ContentContainer from "components/layout/content-container";
import DiagramViewport from "components/diagram/diagram-viewport";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";
import OdsNode from "components/diagram/nodes/ods-node";
import MilestoneNode from "components/diagram/nodes/milestone-node";
import IndicatorNode from "components/diagram/nodes/indicator-node";

const DiagramWorkspaceOds = () => {
    /*const router = useRouter();
    console.log(router.query);*/
    const [background, setBackground] = useState(defaultBackground);
    const [controls, setControls] = useState(defaultControls);
    const [map, setMap] = useState(defaultMap);
    const [nodes, setNodes] = useState(defaultOdsNodes);
    const [edges, setEdges] = useState(defaultOdsEdges);
    const [elements, setElements] = useState(combineElements(nodes, edges));
    const valueDiagramViewportProvider:any = { background, setBackground, controls, setControls, map, setMap };

    return(
        <DiagramViewportContext.Provider value={valueDiagramViewportProvider}>
            <DiagramMenuBar nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} elements={elements} elementsHandler={setElements} />
            <ContentContainer>
              <DiagramViewport nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} elements={elements} elementsHandler={setElements} nodeTypes={{ ods: OdsNode, milestone: MilestoneNode, indicator: IndicatorNode }} />
            </ContentContainer>
        </DiagramViewportContext.Provider>
    );
}

export default DiagramWorkspaceOds;