import React, { useState } from "react";
import { motion } from "framer-motion";
import DiagramViewportContext from "context/diagram-viewport-context";
import { combineElements } from "utils/diagram-functions";
import { defaultBackground, defaultControls, defaultMap } from "components/diagram/default";
import ContentContainer from "components/layout/content-container";
import DiagramViewport from "components/diagram/diagram-viewport";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";
import LldNode from "components/diagram/nodes/infrastructure/lld";
import LldVersionNode from "components/diagram/nodes/infrastructure/lld-version";
import EnvironmentNode from "components/diagram/nodes/infrastructure/environment";
import ServerNode from "components/diagram/nodes/infrastructure/server";
import { getInfrastructureNodesData, getInfrastructureEdgesData } from "data/infrastructure/mockup";
interface DiagramWorkspaceInfrastructureProps{
    id?:number;
}

const DiagramWorkspaceInfrastructure = (props: DiagramWorkspaceInfrastructureProps) => {
    const [background, setBackground] = useState(defaultBackground);
    const [controls, setControls] = useState(defaultControls);
    const [map, setMap] = useState(defaultMap);
    const [nodes, setNodes] = useState(props.id ? getInfrastructureNodesData(props.id): []);
    const [edges, setEdges] = useState(props.id ? getInfrastructureEdgesData(props.id): []);
    const [elements, setElements] = useState(combineElements(nodes, edges));
    const valueDiagramViewportProvider:any = { background, setBackground, controls, setControls, map, setMap };

    return(
        <DiagramViewportContext.Provider value={valueDiagramViewportProvider}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <DiagramMenuBar nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} elements={elements} elementsHandler={setElements} />
                <ContentContainer>
                    <DiagramViewport
                        nodes={nodes} nodesHandler={setNodes}
                        edges={edges} edgesHandler={setEdges}
                        elements={elements} elementsHandler={setElements}
                        nodeTypes={{ lld: LldNode, lldVersion: LldVersionNode, environment: EnvironmentNode, server: ServerNode }} />
                </ContentContainer>
            </motion.div>
        </DiagramViewportContext.Provider>
    );
}

export default DiagramWorkspaceInfrastructure;