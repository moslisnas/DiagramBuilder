import React, { useState } from "react";
import styled from "styled-components";
import { Handle, Position } from 'react-flow-renderer';
import { odsColors } from "utils/ods-colors";
import Popup from "components/diagram/utils/popup";

const IndicatorNodeContainer = styled.span<{borderColor:string}>`
    display: block;
    max-width: 300px;
    height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.borderColor};
    color: black;
    cursor: pointer;
`;
const IndicatorNodeText = styled.p`
    margin: 0px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
`;
const IndicatorModalTitle = styled.div`
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
`;
const Indicator = styled.div`
    display: inline-block;
    width: 75%;
    height: 75%;
    text-align: center;
    border-radius: 3px;
    background-color: #ffffff;
`;
const CloseModalButton = styled.div`
    position: absolute;
    float: right;
    width: 10px;
`;

interface IndicatorNodeProps{
    label: string;
    id: string;
    odsNumber: number;
}

const IndicatorNode = (props: { data:IndicatorNodeProps }) => {
    const [popup, setPopup] = useState(false);

    return(
        <IndicatorNodeContainer borderColor={odsColors[props.data.odsNumber]["color"]} onClick={() => setPopup(true)}>
            <IndicatorNodeText>{props.data.label}</IndicatorNodeText>
            <Handle
                type="target"
                position={Position.Left}
                id="a"
                style={{ top: '50%', borderRadius: "50%" }}
            />
            {popup && (
                <Popup width="50%" height="75%">
                    <CloseModalButton onClick={() => setPopup(false)}>X</CloseModalButton>
                    <IndicatorModalTitle>
                        {props.data.label}
                    </IndicatorModalTitle>
                    <Indicator>
                    </Indicator>
                </Popup>
            )}
        </IndicatorNodeContainer>
    );
}

export default IndicatorNode;