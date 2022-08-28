import React, { useState } from "react";
import DiagramViewportContext from "context/diagram-viewport-context";
import { defaultBackground, defaultControls, defaultMap, defaultNodes, defaultEdges } from "components/diagram/default";
import ContentContainer from "components/layout/content-container";
import DiagramViewport from "components/diagram/diagram-viewport";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";

const DiagramWorkspace = () => {
    const [background, setBackground] = useState(defaultBackground);
    const [controls, setControls] = useState(defaultControls);
    const [map, setMap] = useState(defaultMap);
    const [nodes, setNodes] = useState(defaultNodes);
    const [edges, setEdges] = useState(defaultEdges);
    const valueDiagramViewportProvider:any = { background, setBackground, controls, setControls, map, setMap };

    return(
        <DiagramViewportContext.Provider value={valueDiagramViewportProvider}>
            <DiagramMenuBar nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} />
            <ContentContainer>
              <DiagramViewport nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} />
            </ContentContainer>
        </DiagramViewportContext.Provider>
    );
}

export default DiagramWorkspace;