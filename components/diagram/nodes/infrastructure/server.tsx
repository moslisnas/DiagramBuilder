import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Handle, Position } from 'reactflow';
import { nodeSizes } from "constants/nodes/infrastructure";
import PopupContext from "context/popup-context";

const ServerNodeContainer = styled.span<{color?:string}>`
    display: block;
    padding: 5px;
    min-width: ${nodeSizes.server[0]}px;
    max-width: ${nodeSizes.server[0]}px;
    max-height: ${nodeSizes.server[1]}px;
    border: 1px solid #000000;
    border-radius: 5px;
    cursor: pointer;
`;
const ServerNodeText = styled.p`
    margin: 0px;
    text-align: center;
    font-size: 16px;
`;
const ServerNodeIcon = styled.img`
    display: inline;
    width: ${nodeSizes.server[0] - 20}px;
    height: 100px;
    margin-left: 5px;
`;
const ServerSubiconsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const ServerNodeOsIcon = styled.img`
    width: 30px;
    height: 30px;
    grid-column: 1;
`;
const ServerNodeVirtualIcon = styled.img`
    width: 30px;
    height: 30px;
    grid-column: 4;
`;
const DisplayButton = styled.div`
    text-align: center;
    cursor: pointer;
`;
//Modal.
const ServerModalTitle = styled.div`
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
`;
const ServerDataContainer = styled.div`
    display: inline-block;
    width: 75%;
    height: 75%;
    padding: 0px 15px 0px 15px;
    text-align: center;
    border-radius: 3px;
    background-color: #ffffff;
    overflow: auto;
`;
const ServerDataGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
`;
const ServerDataField = styled.div<{show?:boolean, fullWidth?: boolean}>`
    display: flex;
    visibility: ${(props) => props.show===false ? "hidden" : "visible"};
    ${(props) => props.fullWidth===true ? "grid-column-start: 1" : ""};
    ${(props) => props.fullWidth===true ? "grid-column-end: 3" : ""};
`;
const ServerDataLabel = styled.p`
    margin: 10px 0px 10px 0px;
    text-align: left;
    text-decoration: underline;
    font-size: 14px;
`;
const ServerDataText = styled.p`
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

interface ServerNodeProps{
    name: string;
    type: string;
    power: string;
    memory: string;
    infrastructure: string;
    functionality: string;
    virtualizationTechnology?: string;
    osType: string;
    osTemplate: string;
    observationsOs: string;
    dns: string;
    ntp: string;
    observationsNetwork: string;
    backupPolicy: string;
    contingency: boolean;
    prd: boolean;
    prdPower?: string;
    observationsBackup: string;
    nodeDisplayHandler: any;
}

const ServerNode = (props: { data:ServerNodeProps }) => {
    const { setShow, setChildren } = useContext(PopupContext);
    const [open, setOpen] = useState(false);

    let serverImgSrc:string = "";
    let serverOsImgSrc:string = `/icons/nodes/infraestructure/os-${props.data.osType}.svg`;
    switch(props.data.type){
        case "virtual":
            serverImgSrc = "/icons/nodes/infraestructure/server-virtual.svg"
            break;
        case "physical":
            serverImgSrc = "/icons/nodes/infraestructure/server-physical.svg"
            break;
        default:
            break;
    }

    const openPopup = () => {
        setShow(true);
        setChildren(
            <>
                <CloseModalButton onClick={() => setShow(false)}>X</CloseModalButton>
                <ServerModalTitle>
                    {`${props.data.name} (${props.data.type})`}
                </ServerModalTitle>
                <ServerDataContainer>
                    <ServerDataGrid>
                        <ServerDataField>
                            <ServerDataLabel>Power:</ServerDataLabel>
                            <ServerDataText>{props.data.power}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>Memory:</ServerDataLabel>
                            <ServerDataText>{props.data.memory}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>Infrastructure:</ServerDataLabel>
                            <ServerDataText>{props.data.infrastructure}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField fullWidth={true}>
                            <ServerDataLabel>Functionality:</ServerDataLabel>
                            <ServerDataText>{props.data.functionality}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>OS:</ServerDataLabel>
                            <ServerDataText>{props.data.osType}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>Template OS:</ServerDataLabel>
                            <ServerDataText>{props.data.osTemplate}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField show={props.data.observationsOs !== ""} fullWidth={true}>
                            <ServerDataLabel>Observations OS:</ServerDataLabel>
                            <ServerDataText>{props.data.observationsOs !== "" ? props.data.observationsOs : "There are no observations."}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>DNS:</ServerDataLabel>
                            <ServerDataText>{props.data.dns}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>NTP:</ServerDataLabel>
                            <ServerDataText>{props.data.ntp}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField fullWidth={true}>
                            <ServerDataLabel>Observations networks:</ServerDataLabel>
                            <ServerDataText>{props.data.observationsNetwork !== "" ? props.data.observationsNetwork : "There are no observations."}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>Backup policy:</ServerDataLabel>
                            <ServerDataText>{props.data.backupPolicy}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>Contingency:</ServerDataLabel>
                            <ServerDataText>{props.data.contingency ? "Yes" : "No"}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>PRD:</ServerDataLabel>
                            <ServerDataText>{props.data.prd ? "Yes" : "No"}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField show={props.data.prd}>
                            <ServerDataLabel>PRD power:</ServerDataLabel>
                            <ServerDataText>{props.data.prdPower}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField fullWidth={true}>
                            <ServerDataLabel>Observations backup:</ServerDataLabel>
                            <ServerDataText>{props.data.observationsBackup !== "" ? props.data.observationsBackup : "There are no observations."}</ServerDataText>
                        </ServerDataField>
                    </ServerDataGrid>
                </ServerDataContainer>
            </>
        );
    }
    const displayElements = () => {
        setOpen(!open);
        props.data.nodeDisplayHandler(props.data.name);
    }

    return(
        <>
            <ServerNodeContainer color={"#FFFFFF"} onClick={() => openPopup()}>
                <ServerNodeText>{props.data.name}({props.data.type})</ServerNodeText>
                <ServerNodeIcon src={serverImgSrc} />
                <ServerSubiconsContainer>
                    <ServerNodeOsIcon src={serverOsImgSrc} />
                    {props.data.type==="virtual" && false && (
                        <ServerNodeVirtualIcon src={serverImgSrc} />
                    )}
                </ServerSubiconsContainer>
                <Handle
                    type="target"
                    position={Position.Top}
                    id="a"
                    style={{ borderRadius: "50%" }}
                />
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="a"
                    style={{ visibility: open ? "visible" : "hidden", borderRadius: "50%" }}
                />
            </ServerNodeContainer>
            {/*<DisplayButton onClick={() => displayElements()}>
                <img width="10px" height="10px" src={open ? "/icons/nodes/arrow-up.svg" : "/icons/nodes/arrow-down.svg"} />
            </DisplayButton>*/}
        </>
    );
}

export default ServerNode;