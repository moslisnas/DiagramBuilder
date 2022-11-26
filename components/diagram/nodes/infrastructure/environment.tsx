import React from "react";
import styled from "styled-components";
import { Handle, Position } from 'reactflow';
import { nodeSizes } from "constants/nodes/infrastructure";

const EnvironmentNodeContainer = styled.span<{color?:string}>`
    display: block;
    min-width: ${nodeSizes.environment[0]}px;
    max-width: ${nodeSizes.environment[0]}px;
    max-height: ${nodeSizes.environment[1]}px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #000000;
    border-radius: 2px;
    background-color: ${(props) => props.color ? props.color : "#FFFFFF"};
    font-weight: bold;
    cursor: pointer;
`;
const EnvironmentNodeText = styled.p`
    text-align: center;
    font-size: 16px;
`;

interface EnvironmentNodeProps{
    label: string;
    hasServers: boolean;
}

const EnvironmentNode = (props: { data:EnvironmentNodeProps }) => {    
    return(
        <EnvironmentNodeContainer color={"#FFFFFF"}>
            <EnvironmentNodeText>{props.data.label}</EnvironmentNodeText>
            <Handle
                type="target"
                position={Position.Top}
                id="a"
                style={{ borderRadius: "50%" }}
            />
            {props.data.hasServers && (
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="a"
                    style={{ borderRadius: "50%" }}
                />
            )}
        </EnvironmentNodeContainer>
    );
}

export default EnvironmentNode;