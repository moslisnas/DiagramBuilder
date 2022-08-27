import React, { useContext } from "react";
import styled from "styled-components";
import { Handle, Position } from 'react-flow-renderer';
import { nodeSizes } from "constants/nodes/infrastructure";
import PopupContext from "context/popup-context";

const ServerNodeContainer = styled.span<{color?:string}>`
    display: block;
    padding: 5px;
    min-width: ${nodeSizes.server[0]}px;
    max-width: ${nodeSizes.server[0]}px;
    max-height: ${nodeSizes.server[1]}px;
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
    height: ${nodeSizes.server[1] - 20}px;
    margin-left: 5px;
`;
const ServerSubiconsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const ServerNodeOsIcon = styled.img`
    width: 30px;
    height: 30px;
    grid-column: 1;
`;
const ServerNodeVirtualIcon = styled.img`
    width: 30px;
    height: 30px;
    grid-column: 3;
`;
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
`;
const ServerDataGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
`;
const ServerDataField = styled.div`
    display: flex;
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
    dns: string;
    ntp: string;
    virtualizationTechnology?: string;
    osType: string;
    osTemplate: string;
    backupPolicy: string;
    contingency: boolean;
    prd: boolean;
    prdPower?: string;
}

const ServerNode = (props: { data:ServerNodeProps }) => {
    const { setShow, setChildren } = useContext(PopupContext);

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
                        <ServerDataField>
                            <ServerDataLabel>Functionality:</ServerDataLabel>
                            <ServerDataText>{props.data.functionality}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>DNS:</ServerDataLabel>
                            <ServerDataText>{props.data.dns}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>NTP:</ServerDataLabel>
                            <ServerDataText>{props.data.ntp}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>OS:</ServerDataLabel>
                            <ServerDataText>{props.data.osType}</ServerDataText>
                        </ServerDataField>
                        <ServerDataField>
                            <ServerDataLabel>Template OS:</ServerDataLabel>
                            <ServerDataText>{props.data.osTemplate}</ServerDataText>
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
                    </ServerDataGrid>
                </ServerDataContainer>
            </>
        );
    }

    return(
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
        </ServerNodeContainer>
    );
}

export default ServerNode;