import React from "react";
import styled from "styled-components";
import { odsColors } from "utils/ods-colors";
import { Handle, Position } from 'react-flow-renderer';

const MilestoneNodeContainer = styled.span<{color:string; fontColor:string}>`
    display: block;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 2px;
    background-color: ${(props) => props.color};
    color: ${(props) => props.fontColor};
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
    return(
        <MilestoneNodeContainer color={odsColors[props.data.odsNumber]["color"]} fontColor={odsColors[props.data.odsNumber]["fontColor"]}>
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
        </MilestoneNodeContainer>
    );
}

export default MilestoneNode;