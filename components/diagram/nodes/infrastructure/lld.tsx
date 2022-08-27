import React from "react";
import styled from "styled-components";
import { Handle, Position } from 'react-flow-renderer';
import { nodeSizes } from "constants/nodes/infrastructure";

const LldNodeContainer = styled.span<{color?:string}>`
    display: block;
    min-width: ${nodeSizes.lld[0]}px;
    max-width: ${nodeSizes.lld[0]}px;
    max-height: ${nodeSizes.lld[1]}px;
    padding-left: 20px;
    padding-right: 20px;
    border: 3px solid #000000;
    border-radius: 2px;
    background-color: ${(props) => props.color ? props.color : "#FFFFFF"};
    font-weight: bold;
    cursor: pointer;
`;
const LldNodeText = styled.p`
    text-align: center;
    font-size: 18px;
`;

interface LldNodeProps{
    label: string;
    number: number;
    hasVersions: boolean;
}

const LldNode = (props: { data:LldNodeProps }) => {    
    return(
        <LldNodeContainer color={"#DDDDDD"}>
            <LldNodeText>{props.data.label}</LldNodeText>
            {props.data.hasVersions && (
                <Handle
                    type="target"
                    position={Position.Left}
                    id="a"
                    style={{ borderRadius: "50%" }}
                />
            )}
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={{ borderRadius: "50%" }}
            />
        </LldNodeContainer>
    );
}

export default LldNode;