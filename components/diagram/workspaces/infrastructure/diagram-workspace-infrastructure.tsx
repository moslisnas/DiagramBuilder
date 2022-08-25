import React, { useState } from "react";
import { motion } from "framer-motion";
import DiagramViewportContext from "context/diagram-viewport-context";
import { combineElements } from "utils/diagram-functions";
import { defaultBackground, defaultControls, defaultMap, defaultOdsNodes, defaultOdsEdges } from "components/diagram/default";
import ContentContainer from "components/layout/content-container";
import DiagramViewport from "components/diagram/diagram-viewport";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";
import OdsNode from "components/diagram/nodes/ods/ods-node";
import MilestoneNode from "components/diagram/nodes/ods/milestone-node";
import IndicatorNode from "components/diagram/nodes/ods/indicator-node";
import { getOdsNodesData, getOdsEdgesData, getAllOdsEdgesData, getAllOdsNodesData } from "data/ods/mockup";

interface DiagramWorkspaceInfrastructureProps{
    id?:number|1|2|3|4|5;
}

const DiagramWorkspaceInfrastructure = (props: DiagramWorkspaceInfrastructureProps) => {
    const [background, setBackground] = useState(defaultBackground);
    const [controls, setControls] = useState(defaultControls);
    const [map, setMap] = useState(defaultMap);
    /*const [nodes, setNodes] = useState(props.id ? getInfrastructureNodesData(props.id): getAllInfrastructureNodesData);
    const [edges, setEdges] = useState(props.id ? getInfrastructureEdgesData(props.id): getAllInfrastructureEdgesData);
    const [elements, setElements] = useState(combineElements(nodes, edges));*/
    const valueDiagramViewportProvider:any = { background, setBackground, controls, setControls, map, setMap };

    return(
        <DiagramViewportContext.Provider value={valueDiagramViewportProvider}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/*<DiagramMenuBar nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} elements={elements} elementsHandler={setElements} />
                <ContentContainer>
                    <DiagramViewport nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} elements={elements} elementsHandler={setElements} nodeTypes={{ ods: OdsNode, milestone: MilestoneNode, indicator: IndicatorNode }} />
                </ContentContainer>*/}
            </motion.div>
        </DiagramViewportContext.Provider>
    );
}

export default DiagramWorkspaceInfrastructure;