import React from "react";
import styled from "styled-components";
import { odsColors } from "utils/ods-colors";
import { Handle, Position } from 'react-flow-renderer';

const IndicatorNodeContainer = styled.span<{borderColor:string}>`
    display: block;
    height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.borderColor};
    color: black;
`;
const IndicatorNodeText = styled.p`
    margin: 0px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
`;

interface IndicatorNodeProps{
    label: string;
    id: string;
    odsNumber: number;
}

const IndicatorNode = (props: { data:IndicatorNodeProps }) => {
    return(
        <IndicatorNodeContainer borderColor={odsColors[props.data.odsNumber]["color"]}>
            <IndicatorNodeText>{props.data.label}</IndicatorNodeText>
            <Handle
                type="target"
                position={Position.Left}
                id="a"
                style={{ top: '50%', borderRadius: "50%" }}
            />
        </IndicatorNodeContainer>
    );
}

export default IndicatorNode;