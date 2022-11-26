import React, { useState } from "react";
//import { motion } from "framer-motion";
import styled from "styled-components";
import { odsColors } from "utils/ods-colors";
import { Handle, Position } from 'reactflow';

const MilestoneNodeContainer = styled.span<{color:string; fontColor:string}>`
    display: block;
    min-width: 100px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 2px;
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.color};
`;
const MilestoneNodeText = styled.p`
    text-align: center;
    font-size: 18px;
`;

interface MilestoneNodeProps{
    label: string;
    number: number;
    odsNumber: number;
    hasIndicators: boolean;
}

const MilestoneNode = (props: { data:MilestoneNodeProps }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    
    return(
        <MilestoneNodeContainer color={odsColors[props.data.odsNumber]["color"]} fontColor={odsColors[props.data.odsNumber]["fontColor"]} onMouseOver={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <MilestoneNodeText>{props.data.label}</MilestoneNodeText>
            <Handle
                type="target"
                position={Position.Left}
                id="a"
                style={{ top: '50%', borderRadius: "50%" }}
            />
            {props.data.hasIndicators && (
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ top: '50%', borderRadius: "50%" }}
            />
            )}
            {/*showTooltip && ( 
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        position: "absolute",
                        top: "-15px",
                        margin: "0 auto",
                        padding: "5px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        color: odsColors[props.data.odsNumber]["fontColor"],
                        backgroundColor: odsColors[props.data.odsNumber]["color"]
                    }}
                >
                    TO DO
                </motion.div>
            )*/}
        </MilestoneNodeContainer>
    );
}

export default MilestoneNode;