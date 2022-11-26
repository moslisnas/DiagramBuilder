import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { Handle, Position } from 'reactflow';
import PopupContext from "context/popup-context";
import { odsColors } from "utils/ods-colors";

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
    cursor: pointer;
`;

interface IndicatorNodeProps{
    label: string;
    id: string;
    odsNumber: number;
}

const IndicatorNode = (props: { data:IndicatorNodeProps }) => {
    const { setShow, setChildren } = useContext(PopupContext);

    const openPopup = () => {
        setShow(true);
        setChildren(
            <>
                <CloseModalButton onClick={() => setShow(false)}>X</CloseModalButton>
                <IndicatorModalTitle>
                    {props.data.label}
                </IndicatorModalTitle>
                <Indicator>
                </Indicator>
            </>
        );
    }

    return(
        <IndicatorNodeContainer borderColor={odsColors[props.data.odsNumber]["color"]} onClick={() => openPopup()}>
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