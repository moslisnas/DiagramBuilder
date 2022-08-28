import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Handle, Position } from 'react-flow-renderer';
import { nodeSizes } from "constants/nodes/infrastructure";
import PopupContext from "context/popup-context";

const NetworkNodeContainer = styled.span<{show:boolean, color?:string}>`
    display: block;
    visibility: ${(props) => props.show ? "visible" : "hidden"};
    padding: 5px;
    min-width: ${nodeSizes.network[0]}px;
    max-width: ${nodeSizes.network[0]}px;
    max-height: ${nodeSizes.network[1]}px;
    border: 1px solid #000000;
    border-radius: 5px;
    cursor: pointer;
`;
const NetworkNodeText = styled.p`
    margin: 0px;
    text-align: center;
    font-size: 14px;
`;
//Modal.
const NetworkModalTitle = styled.div`
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
`;
const NetworkDataContainer = styled.div`
    display: inline-block;
    width: 75%;
    height: 75%;
    padding: 0px 15px 0px 15px;
    text-align: center;
    border-radius: 3px;
    background-color: #ffffff;
    overflow: auto;
`;
const NetworkDataGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
`;
const NetworkDataField = styled.div<{show?:boolean, fullWidth?: boolean}>`
    display: flex;
    visibility: ${(props) => props.show===false ? "hidden" : "visible"};
    ${(props) => props.fullWidth===true ? "grid-column-start: 1" : ""};
    ${(props) => props.fullWidth===true ? "grid-column-end: 3" : ""};
`;
const NetworkDataLabel = styled.p`
    margin: 10px 0px 10px 0px;
    text-align: left;
    text-decoration: underline;
    font-size: 14px;
`;
const NetworkDataText = styled.p`
    margin: 10px 0px 10px 5px;
    text-align: left;
    font-size: 14px;
`;
const CloseModalButton = styled.div`
    position: absolute;
    float: right;
    width: 10px;
    cursor: pointer;
`;

interface NetworkNodeProps{
    name: string;
    value: string;
    serverRelated: string;
    observations: string;
}

const NetworkNode = (props: { data:NetworkNodeProps }) => {
    const { setShow, setChildren } = useContext(PopupContext);
    const [open, setOpen] = useState(false);

    const openPopup = () => {
        setShow(true);
        setChildren(
            <>
                <CloseModalButton onClick={() => setShow(false)}>X</CloseModalButton>
                <NetworkModalTitle>
                    {`${props.data.name}: ${props.data.value}`}
                </NetworkModalTitle>
                <NetworkDataContainer>
                    <NetworkDataGrid>
                        <NetworkDataField fullWidth={true}>
                            <NetworkDataLabel>Observations:</NetworkDataLabel>
                            <NetworkDataText>{props.data.observations !== "" ? props.data.observations : "There are no observations."}</NetworkDataText>
                        </NetworkDataField>
                    </NetworkDataGrid>
                </NetworkDataContainer>
            </>
        );
    }

    return(
        <NetworkNodeContainer show={true} color={"#FFFFFF"} onClick={() => openPopup()}>
            <NetworkNodeText>{props.data.name}: {props.data.value}</NetworkNodeText>
            <Handle
                type="target"
                position={Position.Top}
                id="a"
                style={{ borderRadius: "50%" }}
            />
        </NetworkNodeContainer>
    );
}

export default NetworkNode;