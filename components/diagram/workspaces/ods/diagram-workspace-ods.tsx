import React, { useState } from "react";
import { motion } from "framer-motion";
import DiagramViewportContext from "context/diagram-viewport-context";
import { defaultBackground, defaultControls, defaultMap, defaultOdsNodes, defaultOdsEdges } from "components/diagram/default";
import ContentContainer from "components/layout/content-container";
import DiagramViewport from "components/diagram/diagram-viewport";
import DiagramMenuBar from "components/diagram/diagram-menu-bar";
import OdsNode from "components/diagram/nodes/ods/ods";
import MilestoneNode from "components/diagram/nodes/ods/milestone";
import IndicatorNode from "components/diagram/nodes/ods/indicator";
import { getOdsNodesData, getOdsEdgesData, getAllOdsEdgesData, getAllOdsNodesData } from "data/ods/mockup";

interface DiagramWorkspaceOdsProps{
    ods?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17;
}

const DiagramWorkspaceOds = (props: DiagramWorkspaceOdsProps) => {
    const [background, setBackground] = useState(defaultBackground);
    const [controls, setControls] = useState(defaultControls);
    const [map, setMap] = useState(defaultMap);
    const [nodes, setNodes] = useState(props.ods ? getOdsNodesData(props.ods): getAllOdsNodesData);
    const [edges, setEdges] = useState(props.ods ? getOdsEdgesData(props.ods): getAllOdsEdgesData);
    const valueDiagramViewportProvider:any = { background, setBackground, controls, setControls, map, setMap };

    return(
        <DiagramViewportContext.Provider value={valueDiagramViewportProvider}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <DiagramMenuBar nodes={nodes} nodesHandler={setNodes} edges={edges} edgesHandler={setEdges} />
                <ContentContainer>
                    <DiagramViewport
                        nodes={nodes} nodesHandler={setNodes}
                        edges={edges} edgesHandler={setEdges}
                        nodeTypes={{ ods: OdsNode, milestone: MilestoneNode, indicator: IndicatorNode }} />
                </ContentContainer>
            </motion.div>
        </DiagramViewportContext.Provider>
    );
}

export default DiagramWorkspaceOds;