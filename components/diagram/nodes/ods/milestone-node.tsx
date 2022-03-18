import React, { useState } from "react";
import styled from "styled-components";
import { odsColors } from "utils/ods-colors";
import { Handle, Position } from 'react-flow-renderer';

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
const MilestoneTooltip = styled.div<{color:string; fontColor:string}>`
    position: absolute;
    top: -15px;
    padding: 5px;
    text-align: center;
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.color};
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
                <MilestoneTooltip color={odsColors[props.data.odsNumber]["color"]} fontColor={odsColors[props.data.odsNumber]["fontColor"]}>
                    // TO DO
                </MilestoneTooltip>
            )*/}
        </MilestoneNodeContainer>
    );
}

export default MilestoneNode;