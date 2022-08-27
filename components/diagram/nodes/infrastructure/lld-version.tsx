import React from "react";
import styled from "styled-components";
import { Handle, Position } from 'react-flow-renderer';
import { nodeSizes } from "constants/nodes/infrastructure";

const LldVersionNodeContainer = styled.span<{color?:string}>`
    display: block;
    min-width: ${nodeSizes.lld[0]}px;
    max-width: ${nodeSizes.lld[0]}px;
    max-height: ${nodeSizes.lld[1]}px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #000000;
    border-radius: 2px;
    background-color: ${(props) => props.color ? props.color : "#FFFFFF"};
    cursor: default;
`;
const LldVersionNodeText = styled.p`
    text-align: center;
    font-size: 12px;
`;

interface LldNodeProps{
    label: string;
    number: number;
    firstVersion: boolean;
}

const LldVersionNode = (props: { data:LldNodeProps }) => {    
    return(
        <LldVersionNodeContainer>
            <LldVersionNodeText>{props.data.label}</LldVersionNodeText>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ borderRadius: "50%" }}
            />
            {!props.data.firstVersion && (
                <Handle
                    type="target"
                    position={Position.Left}
                    id="a"
                    style={{ borderRadius: "50%" }}
                />
            )}
        </LldVersionNodeContainer>
    );
}

export default LldVersionNode;